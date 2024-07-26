.. contents::
    :local:

System Functions/系统函数
~~~~~~~~~~~~~~~~~~~~~~~~~~

|

Socket相关函数
***************

daoai_socket_open()
``````````````````````

建立连接Socket，根据 **全局变量** 中的IP地址、端口连接到 DaoAI Vision Pilot 系统。

**无返回值(Void)：** 

- 成功建立连接后，无任何返回结果；

- 连接创建失败时，程序会中止并在机器人操作平台弹出警告；

|

daoai_socket_close()
``````````````````````

关闭Socket连接，根据 **全局变量** 中的IP地址、端口关闭 DaoAI Vision Pilot 系统和机器人的连接。

**无返回值(Void)：** 

- 无任何返回结果；

|

Calibration Functions/校准函数
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

|

手动校准函数
*************

daoai_start_manual_calibration()
````````````````````````````````````````````

此函数用于机器人请求 DaoAI Vision Pilot 启动手动校准流程，在手动校准流程开启时必须先调用此函数。

**返回值：布尔值(Boolean)** 

- 返回 ``True``， DaoAI Vision Pilot 开启手动校准流程；

- 返回 ``False``， DaoAI Vision Pilot 不处于手动校准流程，机器人将停止程序；

|

daoai_manual_accumulate_calibration() 
````````````````````````````````````````````

此函数用于机器人请求 DaoAI Vision Pilot 确认收集手动校准流程中的位姿信息，在机器人手动校准流程中移动到每个校准位姿时需调用此函数发送位姿。

**返回值：布尔值(Boolean)** 

- 返回 ``True``， DaoAI Vision Pilot 确认收到校准位姿；

- 返回 ``False``， DaoAI Vision Pilot 不处于手动校准流程，机器人将停止程序；

|

daoai_stop_manual_calibration()
````````````````````````````````````````````

此函数用于机器人运行完所有手动校准位姿后，发送手动校准结束指令给 DaoAI Vision Pilot ，此函数不需要 DaoAI Vision Pilot 回复，并且函数永远回复 ``True`` (真实值)。

**返回值：布尔值(Boolean)** 

- 总会返回 ``True``， 机器人结束手动校准流程；

|

引导校准函数
*************

daoai_guidance_accumulate_calibration()
````````````````````````````````````````````

此函数用于机器人发送当前位姿给 DaoAI Vision Pilot 进行引导校准，此函数不需要 DaoAI Vision Pilot 回复，并且函数永远回复 ``True`` (真实值)。

**返回值：布尔值(Boolean)** 

- 总会返回 ``True``， 机器人发送当前位姿给 DaoAI Vision Pilot 进行引导校准流程；

|

自动校准函数
*************

daoai_start_auto_calibration()
````````````````````````````````````````````

此函数用于机器人请求 DaoAI Vision Pilot 启动自动校准流程，在自动校准流程开启时必须先调用此函数。

**返回值：布尔值(Boolean)** 

- 返回 ``True``， DaoAI Vision Pilot 开启自动校准流程；

- 返回 ``False``， DaoAI Vision Pilot 不处于自动校准流程，机器人将停止程序；

|

daoai_auto_accumulate()
````````````````````````````````````````````

此函数用于机器人请求 DaoAI Vision Pilot 自动校准流程中的位姿信息，机器人将会根据获得的位姿信息移动到下一个校准位姿点位。

**返回值：布尔值(Boolean)** 

- 返回 ``True``， DaoAI Vision Pilot 发送自动校准位姿，机器人执行并移动到该位姿点位；

- 返回 ``False``， 自动校准流程已结束， DaoAI Vision Pilot 发送校准结束指令，机器人将停止程序；

|

daoai_start_auto_calibration_2d()
````````````````````````````````````````````

此函数用于机器人请求 DaoAI Vision Pilot 启动2D自动校准流程，在2D自动校准流程开启时必须先调用此函数。

**返回值：布尔值(Boolean)** 

- 返回 ``True``， DaoAI Vision Pilot 开启2D自动校准流程；

- 返回 ``False``， DaoAI Vision Pilot 不处于2D自动校准流程，机器人将停止程序；

|

daoai_auto_accumulate_2d()
````````````````````````````````````````````

此函数用于机器人请求 DaoAI Vision Pilot 2D自动校准流程中的位姿信息，机器人将会根据获得的位姿信息移动到下一个校准位姿点位。

.. note ::
    此函数收发的位姿信息数值都是基于设定好的平面。如果需要修改平面信息，可以在机器人中修改、建立新的平面，或者调用 daoai_use_plane(plane) 改变程序中使用的平面信息。

**返回值：布尔值(Boolean)** 

- 返回 ``True``， DaoAI Vision Pilot 发送2D自动校准位姿，机器人执行并移动到该位姿点位；

- 返回 ``False``， 2D自动校准流程已结束， DaoAI Vision Pilot 发送校准结束指令，机器人将停止程序；

|

Pick & Place Functions/抓取和放置函数
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

示教函数
*************

daoai_teach_pose()
````````````````````````````````````````````

此函数用于机器人发送当前位姿给 DaoAI Vision Pilot 进行位姿示教，此函数不需要 DaoAI Vision Pilot 回复，并且函数永远回复 ``True`` (真实值)。

**返回值：布尔值(Boolean)** 

- 总会返回 ``True``， 机器人发送当前位姿给 DaoAI Vision Pilot 进行位姿示教；

|

daoai_teach_pose_2d()
````````````````````````````````````````````

此函数用于机器人发送当前位姿给 DaoAI Vision Pilot 进行2D位姿示教，此函数不需要 DaoAI Vision Pilot 回复，并且函数永远回复 ``True`` (真实值)。

.. note ::
    此函数收发的位姿信息数值都是基于设定好的平面。如果需要修改平面信息，可以在机器人中修改、建立新的平面，或者调用 daoai_use_plane(plane) 改变程序中使用的平面信息。

**返回值：布尔值(Boolean)** 

- 总会返回 ``True``， 机器人发送当前位姿给 DaoAI Vision Pilot 进行2D位姿示教；

|

抓取函数
*************

daoai_capture_and_process()
````````````````````````````````````````````

此函数用于机器人请求 DaoAI Vision Pilot 进行拍照和识别处理，机器人将会根据回复判断拍照是否成功。

.. note ::
    此函数应用全局变量中的 daoai_playload_1 作为 DaoAI Vision Pilot 中的任务ID， DaoAI Vision Pilot 会根据这个变量的信息选择执行的任务。如果需要修改执行的任务，可以调用 daoai_switch_task(id) 改变程序中执行的任务ID。


**返回值：布尔值(Boolean)** 

- 返回 ``True``， DaoAI Vision Pilot 处于拍照流程，拍照成功后并返回成功值；

- 返回 ``False``， DaoAI Vision Pilot 回复拍照失败指令；

|

daoai_capture_and_process_async()
````````````````````````````````````````````

此函数用于机器人请求 DaoAI Vision Pilot 进行拍照和识别处理，机器人将会根据回复判断拍照是否成功。 DaoAI Vision Pilot 不会等待拍照的结果，只要处于准备拍摄的流程

.. note ::
    此函数应用全局变量中的 daoai_playload_1 作为 DaoAI Vision Pilot 中的任务ID， DaoAI Vision Pilot 会根据这个变量的信息选择执行的任务。如果需要修改执行的任务，可以调用 daoai_switch_task(id) 改变程序中执行的任务ID。


**返回值：布尔值(Boolean)** 

- 返回 ``True``， DaoAI Vision Pilot 处于拍照流程，拍照成功后并返回成功值；

- 返回 ``False``， DaoAI Vision Pilot 回复拍照失败指令；

|

daoai_get_picking_pose()
````````````````````````````````````````````

此函数用于机器人请求 DaoAI Vision Pilot 发送识别成功的抓取或者放置位姿。 DaoAI Vision Pilot 会根据处理的结果，回复不同的状态到机器人。

.. note ::
    此函数应用全局变量中的 daoai_playload_1 作为 DaoAI Vision Pilot 中的任务ID， DaoAI Vision Pilot 会根据这个变量的信息选择执行的任务。如果需要修改执行的任务，可以调用 daoai_switch_task(id) 改变程序中执行的任务ID。


**返回值：布尔值(Boolean)** 

- 返回 ``True``， DaoAI Vision Pilot 成功识别到了物体，存在有效抓取位姿，可抓取的物体数量大于等于1，并且会更新可抓取物体的数量和物体类别，机器人会移动到抓取位姿进行抓取；用于放置时存在有效放置位姿，机器人会移动到放置位姿进行物体放置；

- 返回 ``False``， DaoAI Vision Pilot 回复识别处理过程失败，会根据失败的原因发送不同的状态，机器人会提示报错原因；

|

daoai_capture_and_process_2d()
````````````````````````````````````````````

此函数用于机器人请求 DaoAI Vision Pilot 进行拍照和识别处理，机器人将会根据回复判断拍照是否成功。

.. note ::
    此函数应用全局变量中的 daoai_playload_1 作为 DaoAI Vision Pilot 中的任务ID， DaoAI Vision Pilot 会根据这个变量的信息选择执行的任务。如果需要修改执行的任务，可以调用 daoai_switch_task(id) 改变程序中执行的任务ID。
    此函数收发的位姿信息数值都是基于设定好的平面。如果需要修改平面信息，可以在机器人中修改、建立新的平面，或者调用 daoai_use_plane(plane) 改变程序中使用的平面信息。


**返回值：布尔值(Boolean)** 

- 返回 ``True``， DaoAI Vision Pilot 处于拍照流程，拍照成功后并返回成功值；

- 返回 ``False``， DaoAI Vision Pilot 回复拍照失败指令；

|

daoai_get_picking_pose_2d()
````````````````````````````````````````````

此函数用于机器人请求 DaoAI Vision Pilot 发送识别成功的2D取或者2D放置位姿。 DaoAI Vision Pilot 会根据处理的结果，回复不同的状态到机器人。

.. note ::
    此函数应用全局变量中的 daoai_playload_1 作为 DaoAI Vision Pilot 中的任务ID， DaoAI Vision Pilot 会根据这个变量的信息选择执行的任务。如果需要修改执行的任务，可以调用 daoai_switch_task(id) 改变程序中执行的任务ID。
    此函数收发的位姿信息数值都是基于设定好的平面。如果需要修改平面信息，可以在机器人中修改、建立新的平面，或者调用 daoai_use_plane(plane) 改变程序中使用的平面信息。


**返回值：布尔值(Boolean)** 

- 返回 ``True``， DaoAI Vision Pilot 成功识别到了物体，存在有效抓取位姿，可抓取的物体数量大于等于1，并且会更新可抓取物体的数量和物体类别，机器人会移动到抓取位姿进行抓取；用于放置时存在有效放置位姿，机器人会移动到放置位姿进行物体放置；

- 返回 ``False``， DaoAI Vision Pilot 回复识别处理过程失败，会根据失败的原因发送不同的状态，机器人会提示报错原因；

|

.. 放置函数
.. *************

.. daoai_get_placing_pose()
.. ````````````````````````````````````````````

.. 此函数用于机器人请求 DaoAI Vision Pilot 发送识别成功的放置位姿。 DaoAI Vision Pilot 会根据处理的结果，回复不同的状态到机器人。

.. .. note :
..     此函数应用全局变量中的 daoai_playload_1 作为 DaoAI Vision Pilot 中的任务ID， DaoAI Vision Pilot 会根据这个变量的信息选择执行的任务。如果需要修改执行的任务，可以调用 daoai_switch_task(id) 改变程序中执行的任务ID。


.. **返回值：布尔值(Boolean)** 

.. - 返回 ``True``， DaoAI Vision Pilot 成功识别到了物体，存在有效放置位姿，并且会更新放置的点位类别，机器人会移动到放置位姿进行物体放置；

.. - 返回 ``False``， DaoAI Vision Pilot 回复识别处理过程失败，会根据失败的原因发送不同的状态，机器人会提示报错原因；

.. |

.. daoai_get_placing_pose_2d()
.. ````````````````````````````````````````````

.. 此函数用于机器人请求 DaoAI Vision Pilot 发送识别成功的2D放置位姿。 DaoAI Vision Pilot 会根据处理的结果，回复不同的状态到机器人。

.. .. note :
..     此函数应用全局变量中的 daoai_playload_1 作为 DaoAI Vision Pilot 中的任务ID， DaoAI Vision Pilot 会根据这个变量的信息选择执行的任务。如果需要修改执行的任务，可以调用 daoai_switch_task(id) 改变程序中执行的任务ID。
..     此函数收发的位姿信息数值都是基于设定好的平面。如果需要修改平面信息，可以在机器人中修改、建立新的平面，或者调用 daoai_use_plane(plane) 改变程序中使用的平面信息。


.. **返回值：布尔值(Boolean)** 

.. - 返回 ``True``， DaoAI Vision Pilot 成功识别到了物体，存在有效放置位姿，并且会更新放置的点位类别，机器人会移动到放置位姿进行物体放置；

.. - 返回 ``False``， DaoAI Vision Pilot 回复识别处理过程失败，会根据失败的原因发送不同的状态，机器人会提示报错原因；

.. |

Helper Functions/辅助函数
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

视觉处理类函数
************************

daoai_check_box_empty()
````````````````````````````````````````````

此函数用于机器人请求 DaoAI Vision Pilot 进行 :ref:`空箱检测功能` 。

.. note ::
    此函数应用全局变量中的 daoai_playload_1 作为 DaoAI Vision Pilot 中的任务ID， DaoAI Vision Pilot 会根据这个变量的信息选择执行的任务。如果需要修改执行的任务，可以调用 daoai_switch_task(id) 改变程序中执行的任务ID。

**返回值：布尔值(Boolean)** 

- 返回 ``True``， DaoAI Vision Pilot 回复空箱检测结果为 ``真实`` (空箱)；

- 返回 ``False``， DaoAI Vision Pilot 回复空箱检测结果为 ``错误`` (不空箱)；

|

daoai_precision_check()
````````````````````````````````````````````

此函数用于机器人请求 DaoAI Vision Pilot 执行 :ref:`快速精度检测流程` 。

**返回值：布尔值(Boolean)** 

- 返回 ``True``， DaoAI Vision Pilot 执行精度检测流程成功，并且会在机器人控制面板显示精度；

- 返回 ``False``， DaoAI Vision Pilot 回复精度检测失败，机器人会提示报错原因；

|

其他辅助函数
************************

daoai_remaining_objects()
````````````````````````````````````````````

此函数用于机器人请求 DaoAI Vision Pilot 回复剩余的可抓取物体数量。

**返回值：整数(int)** 

- 返回剩余的可抓取物体数量；

|

daoai_switch_task(id)
````````````````````````````````````````````

此函数用于机器人程序中切换需要执行的任务ID。

**入参(Parameter)：** 

- ``整数`` ID：需要切换的任务ID。

**无返回值(Void)：** 

- 无任何返回结果；

|

daoai_use_plane(plane)
````````````````````````````````````````````

此函数用于机器人程序中使用的2D平面。如果想切换回3D模式，需要切换至机器人的 Base(基座)或者该机器人的默认3D坐标。

**入参(Parameter)：** 

- ``对象`` plane：需要切换的平面3D坐标，或者是对象。

**无返回值(Void)：** 

- 无任何返回结果；

|

daoai_object_type()
````````````````````````````````````````````

此函数用于机器人获取当前物体的类别ID。

**返回值：整数(int)** 

- 返回当前物体的类别ID；

|

daoai_cam_config(payload)
````````````````````````````````````````````

此函数用于机器人请求 DaoAI Vision Pilot 按照入参的载荷切换相机参数。

**入参(Parameter)：** 

- ``整数`` payload：需要切换的相机参数ID。

**返回值：布尔值(Boolean)** 

- 返回 ``True``， DaoAI Vision Pilot 成功切换相机参数；

- 返回 ``False``， DaoAI Vision Pilot 回复切换相机参数失败，机器人会提示报错原因；

|