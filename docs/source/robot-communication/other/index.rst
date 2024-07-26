其他机器人
===========

下文提出了一个应用程序接口，供程序员在集成新机器人时使用。从高层次来看，应用程序接口包括以下功能：


daoai_init(IP, port)
```````````````````````

    **Parameters**:

        - IP: string（字符串） → 连接目标的IP地址

        - port: int （整数）→ 连接目标的端口，通常默认为：“6969”

    **Info**:

        机器人使用此函数建立Socket，设置IP和端口

    **Return type**:

        Boolean（布尔值）：成功打开Socket后返回True。

    **Pseudo-code**:

    .. code-block:: 

        def daoai_init(ip, port):
                if (not socket_open(daoai_ip, daoai_port, daoai_socket_name)):
                    #if open socket failed, return false
                    return False
                end
                
                return True
        end

Networking/收发和通讯
~~~~~~~~~~~~~~~~~~~~~~

send_robot_data()
```````````````````````

    **Parameters**:

        N/A

    **Info**:

        机器人发送数据至视觉

    **Return type**:

        Void

    **Pseudo-code**:

    .. code-block:: 

        def send_robot_data():
            sync()
            #synchronization for multi-threading
            
            pose = actual_pose
            #assign actual robot pose to variable "pose"
            
            acquire_lock
            #lock the block of data, prevent value changes during sending
            
            assign_data_to_msg_block
            #assign all necessary data to the sending block
            
            release_lock
            sync()
        end


recv_robot_data()
```````````````````````

    **Parameters**:

        N/A

    **Info**:

        机器人发送数据至视觉

    **Return type**:

        Void

    **Pseudo-code**:

    .. code-block:: 

        def send_robot_data():
            sync()
            #synchronization for multi-threading
            
            pose = actual_pose
            #assign actual robot pose to variable "pose"
            
            acquire_lock
            #lock the block of data, prevent value changes during sending
            
            assign_data_to_msg_block
            #assign all necessary data to the sending block
            
            release_lock
            sync()
        end

send_robot_data_2d(plane, optional_z = False, z_value = 0)
`````````````````````````````````````````````````````````````

    **Parameters**:

        - plane: 机器人发送时会将当前3D位置 转换到该平面然后发送。

        - optional_z: 默认为False, 发送的坐标z值为当前z值（视觉在读取2D坐标时会无视z值）。如果为True, 则会使用 z_value 作为发送坐标的z值。

        - z_value : 默认为0, 如果optional_z为True, 则会使用 z_value 作为发送坐标的z值。

    **Info**:

        机器人发送2D数据至视觉

    **Return type**:

        Void

    **Pseudo-code**:

    .. code-block:: 

        def send_robot_data_2d(plane, optional_z = False, z_value = 0):
            sync()
            base_in_plane = pose_inv(plane)
            tool_in_plane = pose_trans(base_in_plane,get_actual_tcp_pose())
            p_actual_pose = tool_in_plane
            enter_critical
            socket_send_int(floor(mult*p_actual_pose[0]), daoai_socket_name)
            socket_send_int(floor(mult*p_actual_pose[1]), daoai_socket_name)
            if optional_z:
                socket_send_int(floor(mult*z_value), daoai_socket_name)
            else:
                socket_send_int(floor(mult*p_actual_pose[2]), daoai_socket_name)
            end
            socket_send_int(floor(mult*p_actual_pose[3]), daoai_socket_name)
            socket_send_int(floor(mult*p_actual_pose[4]), daoai_socket_name)
            socket_send_int(floor(mult*p_actual_pose[5]), daoai_socket_name)
            socket_send_int(floor(mult*0.0), daoai_socket_name)
            socket_send_int(daoai_r_command, daoai_socket_name)
            socket_send_int(daoai_payload_1, daoai_socket_name)
            socket_send_int(daoai_payload_2, daoai_socket_name)
            socket_send_int(DAOAI_ROBOT_TYPE, daoai_socket_name)
            socket_send_int(DAOAI_META_VERSION, daoai_socket_name)
            daoai_r_command = RC_DAOAI_NO_COMMAND
            exit_critical
            sync()
        end


recv_daoai_data_2d(plane)
``````````````````````````````````

    **Parameters**:

        - plane: 机器人接受时会将收到的2D位置 从该平面转换到3D坐标然后接收。

    **Info**:

        机器人从视觉接受2D数据

    **Return type**:

        Void

    **Pseudo-code**:

    .. code-block:: 

        def recv_daoai_data_2d(plane):
            wait_for_data = True
            while wait_for_data == True:
                daoai_data = socket_read_binary_integer(16, daoai_socket_name)
                if daoai_data[0] == 16:
                    wait_for_data = False
                end
                sync()
            end
            if daoai_data[15] != DAOAI_ROBOT_TYPE:
                popup("Pick-it is not configured to communicate with a UR robot.")
            end
            if daoai_data[16] != DAOAI_META_VERSION:
                popup("The DaoAI interface version does not match the version of this program.")
            end
            
            tool_in_plane=p[daoai_data[1]/mult,daoai_data[2]/mult,daoai_data[3]/mult,daoai_data[4]/mult,daoai_data[5]/mult,daoai_data[6]/mult]
            bp = pose_trans(plane, tool_in_plane)
            cur_pose = get_actual_tcp_pose()
            #bp=tool_in_plane
            daoai_data[1]=bp[0]
            daoai_data[2]=bp[1]
            daoai_data[3]=bp[2]
            daoai_data[4]=bp[3]
            daoai_data[5]=bp[4]
            daoai_data[6]=bp[5]
            enter_critical
            # daoai_data[14] contains the status of the response
            daoai_tcp_pose = bp
            daoai_payload_1=daoai_data[8]/mult
            daoai_payload_2=daoai_data[9]/mult
            daoai_payload_3=daoai_data[10]/mult
            daoai_payload_4=daoai_data[11]/mult
            daoai_payload_5=daoai_data[12]/mult
            daoai_payload_6 = daoai_data[13]/mult
            daoai_status = daoai_data[14]
            daoai_tcp_pose[2] = cur_pose[2]
            exit_critical
            sync()
        end


Calibration/校准函数
~~~~~~~~~~~~~~~~~~~~~~


Manual Calibration:
`````````````````````````

daoai_start_manual_calibration()
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

    **Parameters**:

        N/A

    **Info**:

        机器人使用此函数引导视觉系统开始手动校准流程。

    **Return type**:

        Boolean（布尔值）：成功启动校准程序后返回True。

    **Pseudo-code**:

    .. code-block:: 

        def daoai_start_manual_calibration():
            #Set command as "Start Manual Calibration"
            daoai_r_command = RC_START_MANUAL_CALIBRATION
            
            send_robot_data()
            recv_daoai_data()
            
            if (daoai_status != DAOAI_MODE_CALIBRATION):
                #check rsponse from Vision, if incorrect, terminate the process
                return False
            end

            return True
        end

daoai_manual_accumulate_calibration()
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

    **Parameters**:

        N/A

    **Info**:

        机器人使用此函数累计校准位姿。

    **Return type**:

        Boolean（布尔值）：成功累计校准数据后返回True。当校准流程结束时、累计失败时返回False。

    **Pseudo-code**:

    .. code-block:: 

        def daoai_manual_accumulate_calibration():
            #Set command as "Accumulate Calibration poses"
            daoai_r_command = RC_MANUAL_ACCUMULATE_POSE
            
            send_robot_data()
            recv_daoai_data()
            
            if (daoai_status != DAOAI_MODE_CALIBRATION):
                #check response from Vision, if incorrect, terminate the process
                return False
            end
            
            if (daoai_status == DAOAI_DONE_CALIBRATION):
                #check rsponse from Vision, Vision sends "end" command, terminate the process
                return False
            end
            
            return True
        end

daoai_stop_manual_calibration()
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

    **Parameters**:

        N/A

    **Info**:

        机器人使用此函数示意视觉系统停止校准。

    **Return type**:

        Boolean（布尔值）：成功发送停止信息给视觉系统后返回True。

    **Pseudo-code**:

    .. code-block:: 

        def daoai_stop_manual_calibration():
            daoai_r_command = RC_STOP_MANUAL_CALIBRATION
            
            send_robot_data()
            popup("DaoAI Done Calibration.", title = "WARNING", warning = True, blocking = False)
            return True
        end

Guidance Calibration:
`````````````````````````

daoai_guidance_accumulate_calibration()
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

    **Parameters**:

        N/A

    **Info**:

        机器人使用此函数与视觉系统进行引导校准流程。每次收集位姿需要运行一次。

    **Return type**:

        Boolean（布尔值）：返回True。不需要视觉回应任何消息。

    **Pseudo-code**:

    .. code-block:: 

        def daoai_guidance_accumulate_calibration():
            daoai_r_command = RC_GUIDANCE_CALIBRATION
            
            send_robot_data()
            
            return True
        end


Auto Calibration:
`````````````````````````

daoai_start_auto_calibration()
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

    **Parameters**:

        N/A

    **Info**:

        机器人使用此函数请求视觉系统进行拍照和计算。

    **Return type**:

        Boolean（布尔值）：成功启动自动校准程序后返回True。

    **Pseudo-code**:

    .. code-block:: 

        def daoai_start_auto_calibration():
            daoai_r_command = RC_START_AUTO_CALIBRATION
            
            send_robot_data()
            recv_daoai_data() 
            
            if (daoai_status != DAOAI_MODE_AUTO_CALIBRATION):
                #Not in Auto calibration process, terminate
                return False
            end
            
            return True
        end


daoai_auto_accumulate()
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

    **Parameters**:

        N/A

    **Info**:

        机器人使用此函数与视觉系统进行引导校准流程。每次收集位姿需要运行一次。

    **Return type**:

        Boolean（布尔值）：返回True。不需要视觉回应任何消息。

    **Pseudo-code**:

    .. code-block:: 

        def daoai_auto_accumulate():
            daoai_r_command = RC_AUTO_ACCUMULATE_POSE

            send_robot_data()
            recv_daoai_data()
            
            if (daoai_status == DAOAI_DONE_CALIBRATION): 
                #auto calibration done
                return False
            
            end
            return True
        end

2D Auto Calibration:
~~~~~~~~~~~~~~~~~~~~~


daoai_start_auto_calibration_2d()
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

    **Parameters**:

        N/A

    **Info**:

        机器人使用此函数请求视觉系统开始2D自动校准。

    **Return type**:

       Boolean（布尔值）：成功启动自动校准程序后返回True。

    **Pseudo-code**:

    .. code-block:: 

        def daoai_start_auto_calibration_2d():
            daoai_r_command = RC_START_2D_AUTO_CALIBRATION
            send_robot_data_2d(daoai_plane)
            recv_daoai_data_2d(daoai_plane) #wait the response that the vision started
            if (daoai_status != DAOAI_MODE_2D_AUTO_CALIBRATION):
                popup("DaoAI Cannot Start Auto 2d Calibration.", title="WARNING", warning=True, blocking=True)
                return False
            end
            return True
        end

daoai_auto_accumulate_2d()
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

    **Parameters**:

        N/A

    **Info**:

        机器人使用此函数请求视觉系统进行2D自动校准的位姿累积。每次收集位姿需要运行一次。

    **Return type**:

       Boolean（布尔值）：返回True。不需要视觉回应任何消息。

    **Pseudo-code**:

    .. code-block:: 

        def daoai_auto_accumulate_2d():
            daoai_r_command = RC_AUTO_ACCUMULATE_2D_POSE
            send_robot_data_2d(daoai_plane)
            recv_daoai_data_2d(daoai_plane)
            if (daoai_status == DAOAI_DONE_2D_AUTO_CALIBRATION):  #finish auto calibration
                popup("DaoAI Done Calibration.", title= "WARNING", warning= True,blocking=True)
                return False
            end
            return True
        end


Teach Pose
~~~~~~~~~~~~~~~~~~~~~


daoai_teach_pose()
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

    **Parameters**:

        N/A

    **Info**:

        机器人使用此函数发送当前位姿进行物体抓取示教。

    **Return type**:

       Void

    **Pseudo-code**:

    .. code-block:: 

        def daoai_teach_pose():
            daoai_r_command = RC_SEND_POSE
            send_robot_data()
        end

daoai_teach_pose_2d()
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

    **Parameters**:

        N/A

    **Info**:

        机器人使用此函数发送当前位姿进行2D流程的物体抓取示教。

    **Return type**:

       Void

    **Pseudo-code**:

    .. code-block:: 

        def daoai_teach_pose_2d():
            daoai_r_command = RC_DAOAI_CAPTURE_AND_PROCESS
            send_robot_data_2d(daoai_plane)
        end

3D Camera Capture
~~~~~~~~~~~~~~~~~~~~~


daoai_capture_and_process_async()
````````````````````````````````````

    **Parameters**:

        N/A

    **Info**:

        机器人使用此函数请求视觉拍照并检测, 该函数不会阻塞机器人脚本，视觉会立即回复并执行拍照和检测。

    **Return type**:

        Boolean（布尔值）：请求拍照和物体检测后，DaoAI Vision Pilot成功开始后返回true。

    .. code-block:: 

        def daoai_capture_and_process_async():
            daoai_r_command = RC_DAOAI_CAPTURE_AND_PROCESS_ASYNC
            daoai_payload_1 = task_id #specify the vision task id 
            send_robot_data()
            recv_daoai_data() #wait the response that the vision started 
            if (daoai_status == DAOAI_CAPTURE_SUCCESS):
                return True
            end
            popup("DaoAI Image Capture Failed.", title="WARNING", warning=True, blocking=True)
            return False
        end

daoai_capture_and_process()
``````````````````````````````````

    **Parameters**:

        N/A

    **Info**:

        机器人使用此函数请求视觉拍照并检测。在拍照期间脚本运行会被阻塞，拍照后继续。

    **Return type**:

        Boolean（布尔值）：请求拍照和物体检测后，DaoAI Vision Pilot成功开始后返回true。

    **Pseudo-code**:

    .. code-block:: 

        def daoai_capture_and_process():
            daoai_r_command = RC_DAOAI_CAPTURE_AND_PROCESS
            daoai_payload_1 = daoai_task_id #specify the vision task id 
            send_robot_data()
            recv_daoai_data() #wait the response that the vision started 
            if (daoai_status == DAOAI_CAPTURE_SUCCESS):
                return True
            end
            popup("DaoAI Image Capture Failed.", title="WARNING", warning=True, blocking=True)
            return False
        end


2D Camera Capture
~~~~~~~~~~~~~~~~~~~~~


daoai_capture_and_process_2d_async()
````````````````````````````````````````

    **Parameters**:

        N/A

    **Info**:

        机器人使用此函数请求视觉进行2D流程的拍照并检测, 该函数不会阻塞机器人脚本，视觉会立即回复并执行拍照和检测。

    **Return type**:

        Boolean（布尔值）：请求拍照和物体检测后，DaoAI Vision Pilot成功开始后返回true。

    .. code-block:: 

        def daoai_capture_and_process_2d_async():
            daoai_r_command = RC_DAOAI_CAPTURE_AND_PROCESS_ASYNC
            daoai_payload_1 = daoai_task_id #specify the task id for which task to perform
            send_robot_data_2d(daoai_plane)
            recv_daoai_data_2d(daoai_plane) #wait the response that the vision started 
            if (daoai_status == DAOAI_CAPTURE_SUCCESS):
                return True
            end
            popup("DaoAI Image Capture Failed.", title="WARNING", warning=True, blocking=True)
            return False
        end

daoai_capture_and_process_2d()
``````````````````````````````````

    **Parameters**:

        N/A

    **Info**:

        机器人使用此函数请求视觉进行2D流程的拍照并检测。在拍照期间脚本运行会被阻塞，拍照后继续。

    **Return type**:

        Boolean（布尔值）：请求拍照和物体检测后，DaoAI Vision Pilot成功开始后返回true。

    **Pseudo-code**:

    .. code-block:: 

        def daoai_capture_and_process_2d():
            daoai_r_command = RC_DAOAI_CAPTURE_AND_PROCESS
            daoai_payload_1 = daoai_task_id
            send_robot_data_2d(daoai_plane)
            recv_daoai_data_2d(daoai_plane) #wait the response that the vision started 
            if (daoai_status == DAOAI_CAPTURE_SUCCESS):
                return True
            end
            popup("DaoAI Image Capture Failed.", title="WARNING", warning=True, blocking=True)
            return False
        end


3D Pick
~~~~~~~~~~~~~


daoai_get_picking_pose()
``````````````````````````````````

    **Parameters**:

        N/A

    **Info**:

        机器人使用此函数请求视觉发送抓取位姿。机器人会等待直到DaoAI Vision Pilot完成物体检测。该函数通常是运行daoai_capture_and_process() 之后使用。每次运行会返回一个抓取位姿。

        调用该函数后收到的视觉回复，payload_1 为物体剩余数量（包括当前）；payload_2 为物体标签码，用于区分物体种类。

    **Return type**:

        Boolean（布尔值）：成功检测到至少一个物体 并获取抓取位姿后返回True。

    **Pseudo-code**:

    .. code-block:: 

        def daoai_get_picking_pose():
            daoai_r_command = RC_DAOAI_PICK_POSE
            daoai_payload_1 = daoai_task_id #specify the task id for which vision will perform
            send_robot_data()
            recv_daoai_data()
            daoai_num_remaining_objects = daoai_payload_1

            if (daoai_status == DAOAI_NO_OBJECT_FOUND): 
                #No objects found, Failed to find pick position, terminate
                popup("NO OBJECTS FOUND.", title="WARNING", warning=True, blocking=True)
                return False
            end
            
            if (daoai_status == DAOAI_NO_COLLISION_FREE_POSE): 
                #No collision free path of pick pose, terminate
                popup("NO Collision-free PICK pose.", title="WARNING", warning=True, blocking=True)
                return False
            end
            
            if(daoai_payload_1 <= 0):
                #Not enough occurence of objects in scene
                popup("NO OBJECTS FOUND.", title="WARNING", warning=True, blocking=True)
                return False
            end

            #setup pick pose
            pick_pose = daoai_tcp_pose
            
            return True
        end


2D Pick
~~~~~~~~~~~~~


daoai_get_picking_pose_2d()
``````````````````````````````````

    **Parameters**:

        N/A

    **Info**:

        机器人使用此函数请求视觉发送抓取位姿。脚本会阻塞直到DaoAI Vision Pilot完成物体检测。该函数通常是运行daoai_capture_and_process_2d() 之后使用。每次运行会返回一个抓取位姿。

        调用该函数后收到的视觉回复，payload_1 为物体剩余数量（包括当前）；payload_2 为 物体标签码，用于区分物体种类。

    **Return type**:

        Boolean（布尔值）：成功检测到至少一个物体 并获取抓取位姿后返回True。

    **Pseudo-code**:

    .. code-block:: 

        def daoai_get_picking_pose_2d():
            daoai_r_command = RC_DAOAI_PICK_POSE
            daoai_payload_1 = daoai_task_id
            send_robot_data_2d(daoai_plane)
            recv_daoai_data_2d(daoai_plane) #wait the response that the vision started 
            daoai_num_remaining_objects = daoai_payload_1
            daoai_object_type_id = daoai_payload_2
            if (daoai_status == DAOAI_NO_OBJECT_FOUND): #Failed to find pick position
                popup("No object found or detected.", title="WARNING", warning=True, blocking=True)
                return False
            end
            if (daoai_status == DAOAI_NO_COLLISION_FREE_POSE): #No collision free path of pick pose
                popup("NO Collision-free PICK pose.", title="WARNING", warning=True, blocking=True)
                return False
            end
            if(daoai_payload_1 <= 0):
                return False
            end

            pick_pose = daoai_tcp_pose 

            return True
        end

switch camera config
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


daoai_cam_config(id)
``````````````````````````````````

    **Parameters**:

        int: id 代表了在DaoAI Vision Pilot的任务检测的高级参数中，设置的相机配置id

    **Info**:

        机器人使用此函数请求视觉切换相机配置。使用该函数前，需要首先在DaoAI Vision Pilot对应的任务中启用自适应相机配置，选择并配置 根据机器人命令加载配置，配置了相应的相机配置后，才可以调用并进行切换。

    **Return type**:

        Boolean（布尔值）：成功检测到至少一个物体 并获取放置位姿后返回True。

    **Pseudo-code**:

        def daoai_cam_config(id):
            payload_1 = id
            daoai_r_command = RC_SWITCH_CONFIG
            send_robot_data()
            recv_daoai_data() #wait the response that the vision started 
            if (daoai_status == DAOAI_SWITCH_CONFIG_SUCCESS):
            return True
            end
            if (daoai_status == DAOAI_SWITCH_CONFIG_FAIL): #Failed to switch config 
            popup("DaoAI switch camera config failed, please check your configs.", title="WARNING", warning=True, blocking=True)
            end
            return False
        end

Helper
~~~~~~~~~~~~~


daoai_check_box_empty()
``````````````````````````````````

    **Parameters**:

        N/A

    **Info**:

        机器人使用此函数查看箱体是否为空，需要先运行daoai_switch_task()来选择检查的task。

        当 ROI区域内的点云 < 2000  和 检测流程没有检测到物体 则判断箱体为空。

    **Return type**:

        Bool（布尔值）：返回箱体是否为空。

    **Pseudo-code**:

    .. code-block:: 

        def daoai_check_box_empty():
            daoai_r_command = RC_CHEKC_EMPTY_BOX
            daoai_payload_1 = daoai_task_id #specify the task id for which vision will perform
            send_robot_data()
            recv_daoai_data()

            if (daoai_status == DAOAI_BOX_NOT_EMPTY): 
                #ROI not empty
                return False
            end
            
            if (daoai_status == DAOAI_BOX_EMPTY): 
                #ROI empty
                popup("Box Empty.", title="WARNING", warning=True, blocking=True)
                return True
            end
            
            return False
        end

daoai_remaining_objects()
``````````````````````````````````

    **Parameters**:

        N/A

    **Info**:

        机器人使用此函数查看剩余的可抓取物体数量，需要先运行daoai_capture_and_process() 和 daoai_get_picking_pose()。

    **Return type**:

        Int（整数值）：返回剩余的抓取点位的数量。

    **Pseudo-code**:

    .. code-block:: 

        def daoai_remaining_objects():
            return daoai_num_remaining_objects
        end


daoai_switch_task(id)
``````````````````````````````````

    **Parameters**:

        Int（整数值）：需要切换到的task id

    **Info**:

        机器人使用此函数切换task id，之后的capture_and_process()和daoai_get_picking_pose() 都会对应vision的task id。程序开始时，默认的task_id 为0。

    **Return type**:

        Void：无返回值

    **Pseudo-code**:

    .. code-block:: 

        def daoai_switch_job(id):
            daoai_task_id = id
        end


daoai_object_type()
``````````````````````````````````

    **Parameters**:

        N/A

    **Info**:

        机器人使用此函数查看当前物体的类型，也就是该物体在深度学习模型里的标签号，需要先运行daoai_capture_and_process() 和 daoai_get_picking_pose()。

    **Return type**:

        Int（整数值）：返回当前物体的类型。

    **Pseudo-code**:

    .. code-block:: 

        def daoai_object_type():
            return daoai_object_type_id
        end

daoai_precision_check()
``````````````````````````````````

    **Parameters**:

        N/A

    **Info**:

        需要首先在项目中设置一个precision quick check的任务。

        机器人使用此函数请求视觉执行快速精度验证，需要先运行daoai_switch_task()来指定运行的task id。

    **Return type**:

        Boolean（布尔值）：成功检测到快速精度验证图形码并计算出误差后返回True

    **Pseudo-code**:

    .. code-block:: 

        def daoai_precision_check():
            daoai_r_command = RC_PRECISION_CHECK
            daoai_payload_1 = daoai_task_id
            send_robot_data()
            recv_daoai_data()
            if (daoai_status == DAOAI_PRECISION_CHECK_FAIL):
                popup("DaoAI drift check failed, please make sure the sticker is visible and has not moved since initial define.")
                return False
            end

            if (daoai_status == DAOAI_PRECISION_CHECK_SUCCESS):
                #3d_error = daoai_payload_1
                msg = str_cat("3D error is : ", daoai_payload_1)
                msg = str_cat(msg, "mm")
                popup(msg, title ="Precision Check Success", warning = True, blocking = False)
                return True
            end

            return False
        end


.. code-block:: 

    Robot Program
        Popup("Start Manual Calibration")
        If daoai_start_manual_calibration()
            MoveJ
                # Waypoints should be setup before running the script
                Waypoint_1
                
                #Wait 2 seconds in order to minimize the vabration of the 
                # calibration board after each movements
                Wait: 2.0
        #Accumulate the pose
        daoai_manual_accumulate_calibration()
        
        #Repeats
        ...... 
        
        MoveJ
            Waypoint_9
            Wait: 2.0
        daoai_manual_accumulate_calibration()
        Wait: 2.0
        daoai_stop_manual_calibration()
        daoai_socket_close()




.. image:: images/manual_cali_protocol.png
    :scale: 60%


引导校准通信示例
~~~~~~~~~~~~~~~~~~


1. 设置好第一个校准位姿。

2. 机器人使用 RC_GUIDANCE_CALIBRATION 发送开始引导校准指令到DaoAI Vision Pilot。

3. 视觉会进行拍摄并计算出下一个位姿，而且会对当前位姿作出提议，用户需根据视觉的提示移动机器人到更理想的位姿：

4. 视觉判定当前校准位姿的成相是优良的，视觉会回复 DAOAI_GUIDANCE_CALIBRATION_GOOD 给机器人，并显示下一个推荐的位姿，用户需移动到推荐位姿；

5. 视觉判定当前校准位姿的成相是较差的，视觉会回复 DAOAI_GUIDANCE_CALIBRATION_BAD 给机器人，并显示该如何改进当前位姿，重新移动并采集和计算；

6. 重复步骤2-3直到视觉收集到足够的校准位姿。

7. 在累计流程结束时视觉向机器人发送 DAOAI_DONE_GUIDANCE_CALIBRATION 使机器人结束校准流程。

.. code-block:: 

   Robot Program
        MoveJ
            Waypoint_1
        daoai_guidance_accumulate_calibration()
        daoai_socket_close()


.. image:: images/guidance_cali_protocol.png
    :scale: 50%


自动校准通信示例
~~~~~~~~~~~~~~~~~~~~~~


1. 设置好第一个校准位姿。

2. 机器人使用 RC_START_AUTO_CALIBRATION 发送开始自动校准指令到DaoAI Vision Pilot，并发送当前机器人位姿。

3. 在确认DaoAI Vision Pilot处于正确的流程后，回复机器人 DAOAI_MODE_AUTO_CALIBRATION 进入采集图像和累计流程。

4. 机器人使用 RC_ACCUMULATE_POSE 指令让DaoAI Vision Pilot进入累计流程。视觉进行储存计算出下一个校准位姿，并回复 DAOAI_MODE_AUTO_CALIBRATION 移动机器人到下一个位姿。

5. 在累计流程结束时视觉向机器人发送 DAOAI_DONE_AUTO_CALIBRATION 使机器人结束校准流程。

.. code-block:: 

    Robot Program
        Popup("Start Auto Calibration"")
        MoveJ
            center_pose
        If daoai_start_auto_calibration()
            Loop daoai_auto_accumulate_calibration()
                calibra_pose≔daoai_tcp_pose
                MoveL
                    calibra_pose
                    Wait: 1.0
                Wait: 2.0
        daoai_socket_close()


.. image:: images/auto_cali_protocol.png
    :scale: 50%


抓取通信示例
~~~~~~~~~~~~~~~~~~~~~~

1. 设置好探测位姿，此位姿是抓取结束后机器人移动到的位姿，该位姿不能阻挡摄像头。

2. 机器人使用 RC_DAOAI_CAPTURE_AND_PROCESS = 20 请求拍照并识别物体。

3. DaoAI Vision Pilot拍照成功后回复DAOAI_CAPTURE_SUCCESS = 5，表示视觉处于拍摄探测阶段；

4. 机器人发送 RC_DAOAI_PICK_POSE = 21 请求视觉发送抓取位姿；

5. DaoAI Vision Pilot回复三种以下的可能性：DAOAI_OBJECTS_FOUND = 2 ；DAOAI_NO_OBJECT_FOUND = 3 ； DAOAI_NO_COLLISION_FREE_POSE = 4 。 

    a. 相机拍摄成功并且视觉成功探测到一个或多个物体时，视觉发送 DAOAI_OBJECTS_FOUND = 2 和抓取位姿。payload_1数值为剩余的需抓取物体数量，此payload会根据每次抓取结束后更新；

    b. 相机拍摄成功，视觉探测不成功或者场景中没有物体时，视觉发送 DAOAI_NO_OBJECT_FOUND = 3；

    c. 没有安全抓取位姿时，视觉发送 DAOAI_NO_COLLISION_FREE_POSE = 4；

6. DaoAI Vision Pilot回复的payload_1 代表物体剩余数量（包括当前发送的物体）； payload_2 代表物体在深度学习中的标签码，用于区分物体种类。

7. 场景内的物体抓取完成时，视觉会在最后一个需要抓取的物体信息中，payload_1 = 1，以此告知机器人剩余一个物体抓取，结束后将需要重新拍照。这时如果再调用daoai_get_picking_pose()则返回的payload_1 就会为0，代表没有可抓取的物体。

.. code-block:: 

    Robot Program
        Loop
            If daoai_capture_and_process()
                Loop daoai_get_picking_pose()
                    MoveL
                        detection_pose
                    MoveL
                        pick_pose
                        Wait: 5.0
                    MoveL
                        detection_pose
        daoai_socket_close()


.. image:: images/pick_protocol.png
    :scale: 85%

抓取 - 物体姿态修正 - 放置
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

该流程是完整的 抓取物体，然后检测修正物体姿态，然后放置到指定区域的流程。

**第一步抓取** ：机器人请求 RC_DAOAI_CAPTURE_AND_PROCESS = 20 拍照并识别抓取点位。

1. DaoAI Vision Pilot回复DAOAI_CAPTURE_SUCCESS = 5，表示视觉处于拍摄探测阶段；

2. 机器人发送 RC_DAOAI_PICK_POSE = 21 请求视觉发送放置位姿；

3. DaoAI Vision Pilot回复三种以下的可能性：DAOAI_OBJECTS_FOUND = 2；DAOAI_NO_OBJECT_FOUND = 3 ； DAOAI_NO_COLLISION_FREE_POSE = 4。 

    a. 相机拍摄成功并且视觉成功探测放置点位时，视觉发送 DAOAI_OBJECTS_FOUND = 2 和抓取位姿。payload_1数值为剩余的需抓取物体数量，此payload会根据每次抓取结束后更新；

    b. 相机拍摄成功，视觉探测不成功或者场景中无物体时，视觉发送 DAOAI_NO_OBJECT_FOUND = 3.

    c. 没有安全抓取位姿时，视觉发送 DAOAI_NO_COLLISION_FREE_POSE = 4；

**第二步物体姿态修正** ：机器人请求 RC_DAOAI_CAPTURE_AND_PROCESS = 20 拍照并识别物体。该步骤只是检测物体姿态，并不做移动。

1. DaoAI Vision Pilot回复DAOAI_CAPTURE_SUCCESS = 5，表示视觉处于拍摄探测阶段；

2. 机器人发送 RC_DAOAI_PICK_POSE = 21 请求视觉发送结果，这里视觉发回的是 当前物体于夹爪中的姿态，并在机器人端记录;

3. DaoAI Vision Pilot回复三种以下的可能性：DAOAI_OBJECTS_FOUND = 2；DAOAI_NO_OBJECT_FOUND = 3；

    a. 相机拍摄成功并且视觉成功探测物体姿态时，视觉发送 DAOAI_OBJECTS_FOUND = 2 和当前物体于夹爪中的姿态。

    b. 相机拍摄成功，视觉探测不成功或者场景中无物体时，视觉发送 DAOAI_NO_OBJECT_FOUND = 3.

**第三步放置** ：机器人请求 RC_DAOAI_CAPTURE_AND_PROCESS = 20 拍照并识别放置区域。

1. DaoAI Vision Pilot回复DAOAI_CAPTURE_SUCCESS = 5，表示视觉处于拍摄探测阶段；

2. 机器人发送 RC_DAOAI_PICK_POSE = 21 请求视觉发送结果，这里视觉发回的是 当前放置区域相对于示教时的初始位置的偏移量，并在机器人端记录;

3. DaoAI Vision Pilot回复三种以下的可能性：DAOAI_OBJECTS_FOUND = 2；DAOAI_NO_OBJECT_FOUND = 3；

    a. 相机拍摄成功并且视觉成功探测放置区域时，视觉发送 DAOAI_OBJECTS_FOUND = 2 和当前放置区域相对于示教时的初始位置的偏移量。

    b. 相机拍摄成功，视觉探测不成功或者场景中无目标时，视觉发送 DAOAI_NO_OBJECT_FOUND = 3.

4. 机器人端计算出放置位置，然后移动至放置区域


.. code-block:: 

    Robot Program
        Loop
            stage≔0
            If stage ≟ 0
                daoai_switch_task(0)
                MoveJ
                    detection_pose
                If daoai_capture_and_process()
                    If daoai_get_picking_pose()
                        stage≔1
                        MoveJ
                            pick_pose
                            Wait: 5.0
            If stage ≟1
                daoai_switch_task(1)
                MoveJ
                    adjust_det_pose
                If daoai_capture_and_process()
                    If daoai_get_picking_pose()
                        stage≔2
                        obj_in_tool≔pick_pose
            If stage ≟2
                daoai_switch_task(3)
                MoveJ
                    place_det_pose
                If daoai_capture_and_process()
                    If daoai_get_picking_pose()
                        stage≔3
                        place_in_base≔pick_pose
            If stage ≟3
                obj_in_base≔pose_trans(place_in_base,obj_in_Place)
                t_in_obj≔pose_inv(obj_in_tool)
                tool_in_base≔pose_trans(obj_in_base,t_in_obj)
                MoveJ
                    pre_drop_pose
                MoveJ
                    tool_in_base
                MoveJ
                    pre_drop_pose
                stage≔0
            daoai_socket_close()



.. image:: images/pick_place_protocol.png
    :scale: 80%

.. |br| raw:: html

      <br>


.. admonition:: 拓展
    :class: note

    .. centered:: 浅析旋转表示和计算方法

    :strong:`轴角：` |br|
        轴角表示法是描述三维旋转的一种方法。它使用一个轴向量和一个旋转角度来唯一地确定一次旋转。 |br|
        轴角和旋转向量本质上是一个东西，轴角用四个元素表达旋转，其中的三个元素用来描述旋转轴，另外一个元素描述旋转的角度,如下所示：
            .. math::
                r = [x,y,z,\theta]\\
        其中单位向量 :math:`\mathop{n}\limits^{\rightarrow} = [x,y,z]` 对应的是旋转轴， :math:`\theta` 对应的是旋转角度。 |br|
        旋转向量与轴角相同，只是旋转向量用三个元素来描述旋转，它把 :math:`\theta` 角乘到了旋转轴上，如下：
            .. math::
                r_{v} = [x∗\theta,y∗\theta,z∗\theta]\\
        :emphasis:`优点：` 简单明了,易于理解；可以很容易地复合多次旋转；避免了万向节死锁(gimbal lock)的问题。 |br|
        :emphasis:`缺点：` 不同的轴角之间不能进行简单的插值，插值不平滑，可能会有跳跃；当旋转角度接近180度时,轴向量会变得不确定和不稳定，在这种情况下,四元数表示法更加稳定可靠。 |br|

    :strong:`欧拉角：` |br|
        欧拉角是由Leonhard Euler 提出的概念，用来描述刚体/移动坐标系在一个固定坐标系中的姿态。简单的说是使用XYZ三个轴的旋转分量，来描述一个6自由度的旋转。 |br|
        欧拉角一般具有两大类表示方式，每类按照旋转次序的不同分为6小类：
            .. math::
                Proper Euler angles (z-x-z, x-y-x, y-z-y, z-y-z, x-z-x, y-x-y)\\
                Tait–Bryan angles (x-y-z, y-z-x, z-x-y, x-z-y, z-y-x, y-x-z)
        每个大类都使用了3个变量描述三次旋转过程中的旋转角度，差别在于Proper Euler angles只涉及两个转轴。而Tait–Bryan angles涉及三个转轴。 |br|
        Tait–Bryan angles 也被称为Cardan angles, nautical angles, (heading, elevation, and bank),(yaw, pitch, and roll)。我们接触的比较多的是yaw(偏航), pitch(俯仰), roll(横滚)。三个变量一般对应(车体,飞行器)z,y,x三个坐标轴。 |br|
        :emphasis:`优点：` 易于直观的理解。 |br|
        :emphasis:`缺点：` 不易在任意方向的旋转轴插值，插值不平滑，可能会有跳跃；存在万向节死锁(gimbal lock)的问题。 |br|
        :strong:`内旋和外旋` |br|
        按照旋转的坐标系分为两种旋转方式： |br|
        :strong:`内旋-intrinsic rotation（动态）:相对变换后的（当前的，自身的）坐标系做变换，以z-y′-z′′表示。′上标表达的是该旋转是以上一次旋转为参考。参考坐标系为物体坐标系。`
            .. math::
                左乘(premultiplication)=内旋(intrinsic rotations) = 旋转轴(rotated axis)\\
        :strong:`外旋-extrinsic rotation（静态）:相对初始的（固定的）坐标系做变换，以z-x-z表示。参考坐标系为世界坐标系。`
            .. math::
                右乘(postmultiplication)=外旋(extrinsic rotations) = 固定轴(static/fixed axis)\\
        不考虑内旋与外旋时，Proper Euler angles 和 Tait–Bryan angles 各有六种绕轴旋转方式;如果考虑内旋与外旋，则各有12种绕轴旋转方式。 |br|
        :strong:`如果外旋和内旋的的第一次旋转和第三次旋转互换位置，则二者是等价的，可以从矩阵计算方法证明。左乘与右乘最后的结果差一个转置。` |br|

    :strong:`四元数：` |br|
        四元数（Quaternions）是由爱尔兰数学家哈密顿(William Rowan Hamilton,1805-1865）在1843年发明的数学概念。四元数的乘法不符合交换律（commutative law）。 |br|
        四元素与轴角的表示很接近，因为四元数描述的也是一个三维向量表示旋转轴与一个标量表示绕着该旋转轴旋转的角度(或弧度)。但四元数与轴角不等价。
            .. math::
                r = [nx,ny,nz,\theta]\\
                q = [w,x,y,z]\\
        :strong:`转换关系如下：`
            .. math::
                q = [w,x,y,z] = [cos(\theta / 2),nx * sin(\theta / 2),ny * sin(\theta / 2),nz * sin(\theta / 2)]\\
        :emphasis:`优点：` 四元数的插值过度平滑，最常用的是线性插值。解决欧拉角万向节死锁(gimbal lock)的问题和轴角插值不平滑存在跳跃问题。

|