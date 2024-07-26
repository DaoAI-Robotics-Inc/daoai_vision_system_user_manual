请求消息
---------

从机器人发送到DaoAI Vision Pilot的指令消息长度为48个字节，由以下字段组成：

.. list-table:: 请求消息结构

   * - **字段**
     - **类型**
     - **长度**
     - **描述**
   * - Position/位置字段
     - int32[3]
     - 12 bytes
     - 机器人法兰位置 (XYZ，以毫米为单位) 用右手机器人底座表示。每个字段都必须乘以MULT系数.
   * - Orientation/旋转字段 
     - int32[4]
     - 16 bytes
     - 机器人法兰方向用右手机器人底座框架表示。方向编码和单位取决于所选的方向约定。每个字段都必须乘以 MULT系数. 
   * - command/指令字段
     - int32[4]
     - 16 bytes
     - 请求指令 
   * - payload/载荷字段
     - int32[2]
     - 8 bytes
     - 可选的有效载荷字段。
   * - meta
     - int32[2]
     - 8 bytes
     - meta_1，即消息的倒数第二个字段，应发送机器人的类型，meta_2，即消息的最后一个字段，应发送机器人协议版本。详细信息请参阅本文Meta消息说明。


所有字段都是必填的，并且必须为每个请求设置合理的值。有效载荷字段只对某写流程和指令有效。无效的字段请赋予零。

指令字段command可以控制DaoAI Vision Pilot执行不同的流程。下面将更详细地解释可能的指令及其对应的回应消息。

|

回应消息
---------

除姿势更新请求外，所有请求指令都使用64字节长的回应消息进行应答，其结构如下：

.. list-table:: 回应消息结构

   * - **字段**
     - **类型**
     - **长度**
     - **描述**
   * - Position/位置字段
     - int32[3]
     - 12 bytes
     - 物体位置或拾取点偏移平移(XYZ，单位为毫米)，具体取决于回应状态。另请参阅更详细的指令说明。每个值都必须除以MULT。
   * - Orientation/旋转字段 
     - int32[4]
     - 16 bytes
     - 物体方向或拾取点偏移旋转，具体取决于回应状态。另请参阅更详细的指令说明。编码和单位取决于所选的定向约定，并且必须用MULT除以。
   * - payload/载荷字段
     - int32[6]
     - 24 bytes
     - 可选的有效载荷字段。编码和单位取决于所选的定向约定，并且必须用MULT除以。
   * - status/状态字段
     - int32
     - 4 bytes
     - 定义的状态值之一。
   * - meta
     - int32[2]
     - 8 bytes
     - meta_1，即消息的倒数第二个字段，应发送机器人的类型，meta_2，即消息的最后一个字段，应发送机器人协议版本。详细信息请参阅本文Meta消息说明。

可用指令(Command)和状态(status)
----------------------------------

以下是 DaoAI Vision Pilot 使用的指令，和该指令所等待的状态回复详情。

.. warning::
    在 DaoAI Vision Pilot 通讯协议中，如果返回的状态并不是协议中该指令期望的回复，系统会默认回复不正确，停止流程。

.. contents::
    :local:

机器人发送指令常量
~~~~~~~~~~~~~~~~~~~~~~

.. code-block:: python

    RC_DAOAI_NO_COMMAND                               = -1

    # Manual Calibration/ Guidance Calibration
    RC_START_MANUAL_CALIBRATION                       = 1
    RC_STOP_MANUAL_CALIBRATION                        = 2 
    RC_MANUAL_ACCUMULATE_POSE                         = 6
    # Auto Calibration
    RC_START_AUTO_CALIBRATION                         = 4
    RC_AUTO_ACCUMULATE_POSE                           = 7
    RC_GUIDANCE_CALIBRATION                           = 10
    RC_START_2D_AUTO_CALIBRATION                      = 11

    RC_AUTO_ACCUMULATE_2D_POSE                        = 12
    # Picking
    RC_DAOAI_CAPTURE_AND_PROCESS_ASYNC                = 19
    RC_DAOAI_CAPTURE_AND_PROCESS                      = 20
    RC_DAOAI_PICK_POSE                                = 21

    #Teach
    RC_SEND_POSE                                      = 30

    #Check empty box
    RC_CHECK_EMPTY_BOX                                = 40

    #Check robot driftting
    RC_PRECISION_CHECK                                = 50

    #Camera Config
    RC_SWITCH_CONFIG                                  = 69


DaoAI Vision Pilot回应常量
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. code-block:: python

    DAOAI_UNKNOWN_COMMAND                              = -1  

    #DaoAI Vision Pilot抓取校准流程
    DAOAI_OBJECTS_FOUND                                = 2
    DAOAI_NO_OBJECT_FOUND                              = 3
    DAOAI_NO_COLLISION_FREE_POSE                       = 4
    DAOAI_CAPTURE_SUCCESS                              = 5
    DAOAI_DROP_OFF_POSE                                = 6
    DAOAI_CAPTURE_FAIL                                 = 9

    #DaoAI Vision Pilot处于手动校准流程
    DAOAI_MODE_CALIBRATION                             = 10 
    #DaoAI Vision Pilot处于自动校准流程
    DAOAI_MODE_AUTO_CALIBRATION                        = 11
    DAOAI_MODE_2D_AUTO_CALIBRATION                     = 14

    #终止指令
    DAOAI_DONE_CALIBRATION                             = 33
    DAOAI_DONE_2D_AUTO_CALIBRATION                     = 34

    #check empty box
    DAOAI_BOX_EMPTY                                    = 41
    DAOAI_BOX_NOT_EMPTY                                = 42

    #Robot drift check
    DAOAI_PRECISION_CHECK_SUCCESS                      = 51
    DAOAI_PRECISION_CHECK_FAIL                         = 52

    #相机配置更换
    DAOAI_SWITCH_CONFIG_SUCCESS                        = 66
    DAOAI_SWITCH_CONFIG_FAIL                           = 67


RC_NO_COMMAND = -1 (机器人姿势更新)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    将当前的机器人法兰姿势发送给DaoAI Vision Pilot。DaoAI Vision Pilot使用此信息来确定机器人是否仍处于连接状态，以及更新DaoAI Vision Pilot网络界面中的3D视图。


RC_START_MANUAL_CALIBRATION = 1
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    发送校准模式开始指令到视觉，此指令属于机器人和DaoAI Vision Pilot的握手。DaoAI Vision Pilot可以处于CALIBRATION 模式

    当视觉发送的指令并非以下的指令时，视觉所在的流程与机器人不符，机器人需重新发送 RC_START_MANUAL_CALIBRATION = 1 ，并重新进行此握手。

    **回应**

    .. list-table:: 

      * - **字段**
        - **模式**
        - **描述**
      * - 状态
        - DAOAI_MODE_CALIBRATION= 10
        - DaoAI Vision Pilot处于手动、引导校准流程

RC_STOP_MANUAL_CALIBRATION = 2
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    触发DaoAI Vision Pilot停止校准板图像采集和累积流程。请注意，发送此指令时，DaoAI Vision Pilot必须处于校准模式。

    **回应**

    .. list-table:: 

        * - **字段**
          - **模式**
          - **描述**
        * - 状态
          - DAOAI_DONE_CALIBRATION = 33
          - DaoAI Vision Pilot终止校准模式



RC_START_AUTO_CALIBRATION = 4
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    发送校准模式开始指令到视觉，此指令属于机器人和DaoAI Vision Pilot的握手。DaoAI Vision Pilot可以处于自动校准模式。

    当视觉发送的指令并非以下的指令时，视觉所在的流程与机器人不符，机器人需重新发送  此指令进行握手。

    **回应**

    .. list-table:: 

        * - **字段**
          - **模式**
          - **描述**
        * - 状态
          - DAOAI_MODE_AUTO_CALIBRATION = 11
          - DaoAI Vision Pilot处于自动校准图像采集和累计流程。


RC_MANUAL_ACCUMULATE_POSE = 6
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    请求DaoAI Vision Pilot进入图像采集和累计流程，进行校准。若视觉发送的指令非以下指令，则机器人与视觉处于不同的模式/流程，机器人将发送 RC_START_MANUAL_CALIBRATION = 1（手动校准），并重新回到校准流程的握手状态。

    **回应**

    .. list-table:: 

        * - **字段**
          - **模式**
          - **描述**
        * - 状态
          - DAOAI_MODE_CALIBRATION = 10
          - DaoAI Vision Pilot处于手动校准模式

	
RC_AUTO_ACCUMULATE_POSE = 7
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    请求DaoAI Vision Pilot进入图像采集和累计流程，进行校准。若视觉发送的指令非以下指令，则机器人与视觉处于不同的模式/流程，机器人将发送 RC_START_AUTO_CALIBRATION = 4（自动校准），并重新回到校准流程的握手状态。

    **回应**

    .. list-table:: 

        * - **字段**
          - **模式**
          - **描述**
        * - 状态
          - DAOAI_MODE_AUTO_CALIBRATION = 11
          - DaoAI Vision Pilot处于自动校准图像采集和累计流程。
        * - 状态
          - DAOAI_DONE_AUTO_CALIBRATION = 33
          - DaoAI Vision Pilot以获得足够多的校准点位，回馈机器人停止校准

RC_GUIDANCE_CALIBRATION = 10
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    
    机器人发送此指令到视觉用以发送引导校准的位姿，视觉会接收位姿信息，不会给予回应。


RC_START_2D_AUTO_CALIBRATION = 11
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


    发送2D校准模式开始指令到视觉，此指令属于机器人和DaoAI Vision Pilot的握手。DaoAI Vision Pilot可以处于自动校准模式。

    当视觉发送的指令并非以下的指令时，视觉所在的流程与机器人不符，机器人需重新发送  此指令进行握手。

    **回应**

    .. list-table:: 

        * - **字段**
          - **模式**
          - **描述**
        * - 状态
          - DAOAI_MODE_2D_AUTO_CALIBRATION  = 14
          - DaoAI Vision Pilot处于2D自动校准模式，并发送下一个校准点位至机器人，使机器人移动到该点位
        * - 状态
          - DAOAI_DONE_2D_AUTO_CALIBRATION  = 34
          - DaoAI Vision Pilot以获得足够多的校准点位，回馈机器人停止校准


RC_AUTO_ACCUMULATE_2D_POSE = 12
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


    请求DaoAI Vision Pilot进入图像采集和累计流程，进行校准。若视觉发送的指令非以下指令，则机器人与视觉处于不同的模式/流程，机器人将发送 RC_START_2D_AUTO_CALIBRATION = 11（2D自动校准），并重新回到校准流程的握手状态。

    **回应**

    .. list-table:: 

        * - **字段**
          - **模式**
          - **描述**
        * - 状态
          - DAOAI_MODE_2D_AUTO_CALIBRATION  = 14
          - DaoAI Vision Pilot处于2D自动校准模式，并发送下一个校准点位至机器人，使机器人移动到该点位
        * - 状态
          - DAOAI_DONE_2D_AUTO_CALIBRATION  = 34
          - DaoAI Vision Pilot以获得足够多的校准点位，回馈机器人停止校准

RC_DAOAI_CAPTURE_AND_PROCESS_ASYNC = 19
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    请求DaoAI Vision Pilot进行探测流程，让视觉拍照并识别流程，不会阻塞机器人。此消息必须含有机器人目前的位姿信息。

    **回应**

    .. list-table:: 

        * - **字段**
          - **模式**
          - **描述**
        * - 状态
          - DAOAI_DETECTION_MODE = 5
          - DaoAI Vision Pilot回馈握手信息，认知目前处于拍照并识别流程。


RC_DAOAI_CAPTURE_AND_PROCESS = 20
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


    请求DaoAI Vision Pilot进行探测流程，让视觉拍照并识别流程，会阻塞机器人至拍照结束。此消息必须含有机器人目前的位姿信息。

    **回应**

    .. list-table:: 

        * - **字段**
          - **模式**
          - **描述**
        * - 状态
          - DAOAI_DETECTION_MODE = 5
          - DaoAI Vision Pilot回馈握手信息，认知目前处于拍照并识别流程。


RC_DAOAI_PICK_POSE = 21
~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    请求DaoAI Vision Pilot发送物体位姿；此指令只出现在 DAOAI_DETECTION = 5 之后。当视觉探测并发送了位姿给机器人后，机器人进行抓取，然后重复回复视觉 RC_DAOAI_PICK_POSE = 21 请求下一个物体的位姿。

    **回应**

    .. list-table:: 

        * - **字段**
          - **模式**
          - **描述**
        * - 状态
          - DAOAI_OBJECTS_FOUND = 2
          - DaoAI Vision Pilot探测到物体并把物体抓取位姿回复到机器人，机器人将根据位姿进行抓取。
        * - 状态
          - DAOAI_NO_OBJECT_FOUND = 3
          - DaoAI Vision Pilot探测不到物体回复到机器人，机器人将根据当前脚本进入下一阶段。
        * - 状态
          - DAOAI_NO_COLLISION_FREE_POSE= 4
          - DaoAI Vision Pilot回馈错误信息，避碰模块无法找到任何安全位姿，机器人将根据脚本进入不同的阶段。
        * - 状态
          - DAOAI_CAPTURE_FAIL = 9
          - DaoAI Vision Pilot回馈拍照失败信息，机器人将根据脚本进入不同的阶段。

RC_DAOAI_DROP_POSE = 22
~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    请求视觉认知系统发送物体位姿；此指令只出现在 DAOAI_DETECTION = 5 之后。当视觉探测并发送了位姿给机器人后，机器人进行抓取，然后回复视觉 RC_DAOAI_GET_NEXT_OBJECT = 21 请求下一个物体的位姿。

    **回应**

    .. list-table:: 

        * - **字段**
          - **模式**
          - **描述**
        * - 状态
          - DAOAI_OBJECTS_FOUND = 2
          - DaoAI Vision Pilot探测到物体并把物体抓取位姿回复到机器人，机器人将根据位姿进行抓取。
        * - 状态
          - DAOAI_NO_OBJECT_FOUND = 3
          - DaoAI Vision Pilot探测不到物体回复到机器人，机器人将根据当前脚本进入下一阶段。
        * - 状态
          - DAOAI_NO_COLLISION_FREE_POSE= 4
          - DaoAI Vision Pilot回馈错误信息，避碰模块无法找到任何安全位姿，机器人将根据脚本进入不同的阶段。
        * - 状态
          - DAOAI_CAPTURE_FAIL = 9
          - DaoAI Vision Pilot回馈拍照失败信息，机器人将根据脚本进入不同的阶段。

RC_SEND_POSE = 30
~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    机器人发送此指令到视觉用以发送示教位姿，视觉会接收位姿信息，不会给予回应。


RC_CHECK_EMPTY_BOX = 40
~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    请求DaoAI Vision Pilot检查箱体（ROI）区域是否为空，通常在收到 DAOAI_NO_OBJECT_FOUND = 3 之后使用。使用时 要使用payload_1 指定要进行检测的task id， 或者使用daoai_switch_task(id)函数来指定。

    如果箱体不为空，但是无法检测到物体，那么就可以考虑使用机器人去晃动箱体再尝试检测。

    **回应**

    .. list-table:: 

        * - **字段**
          - **模式**
          - **描述**
        * - 状态
          - DAOAI_BOX_EMPTY = 41
          - 视觉检测ROI区域为空，判断条件为 ROI区域<2000个点 和 检测流程没有检测到物体.
        * - 状态
          - DAOAI_BOX_NOT_EMPTY= 42
          - 视觉检测ROI区域仍有存在物体，判断条件为 ROI区域>2000个点 或 检测流程有检测到至少一个物体.


RC_PRECISION_CHECK= 50
~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    请求视觉运行precision check。使用时 要使用payload_1 指定已创建的precision check task id, 或者使用daoai_switch_task(id)函数来指定。

    **回应**

    .. list-table:: 

        * - **字段**
          - **模式**
          - **描述**
        * - 状态
          - DAOAI_PRECISION_CHECK_SUCCESS= 51
          - 检测成功，返回值的payload_1为计算出的误差。
        * - 状态
          - DAOAI_PRECISION_CHECK_FAIL= 52
          - 检测失败，通常是因为无法检测到精度验证图形码


RC_SWITCH_CONFIG = 69
~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    请求DaoAI Vision Pilot切换相机配置；此指令发送到视觉端时，视觉会根据消息中的载荷字段1（payload_1）的整数，切换相机配置。此相机配置会在视觉端上设置好，根据整数切换用户预设的配置。如：payload_1 = 1， 切换 config_1；payload_1 = 3， 切换 config_3等。

    **回应**

    .. list-table:: 

        * - **字段**
          - **模式**
          - **描述**
        * - 状态
          - DAOAI_SWITCH_CONFIG_SUCCESS = 66
          - 切换相机配置成功
        * - 状态
          - DAOAI_SWITCH_CONFIG_FAIL = 67
          - 切换相机配置失败


|

载荷字段 Payload
---------------------

载荷字段在抓和放时，所表示的意思并不相同：payload_1会被用作基本的抓放信息交换，抓的时候payload_1 代表的是剩余物体数量：如在场景中探测到了5个物体，第一个位姿发送时payload_1 = 5；放的时候payload_1 代表的是物体的种类（在没有分类时此payload可被忽略或者用于其他用途）：如在场景中会出现5类物体，此次抓取到的是第四类物体 payload_1 = 4。

.. Warning::
    在抓取时：
        
        DaoAI Vision Pilot 给机器人发送的payload_1：代表 **物体的剩余数量**。

        机器人给 DaoAI Vision Pilot 发送的payload_1：代表 **执行task的id**。

    例：DaoAI Vision Pilot 有2个task; task_1 的id 为0，task_2的id为1。想要执行task_1时，机器人的payload_1就应该为0。 想要执行task_2时，机器人的payload_1就应该为1。

其他的payload可根据用户具体案例自由使用。


|

消息元数据/Message metadata
---------------------------


为保证机器人和DaoAI Vision Pilot之间对数据的正确解读，以下元数据始终与请求和回应消息一起发送：

.. list-table:: Metadata message

   * - **字段**
     - **值/描述**
   * - meta_1
     - |meta_info|
   * - meta_2
     - meta_2，即最后一个字段，代表机器人的版本和DaoAI Vision Pilot之间的协议版本号. **目前的版本号** = 2

     
.. |meta_info| raw:: html
    
    <ul>
    <li>ABB = 0 </li>
    <li> Fanuc = 1 </li>
    <li> Hanwha = 2 </li>
    <li> Kuka = 3 </li>
    <li> Omron_TM = 4 </li>
    <li> Siemens_PLC = 5 </li>
    <li> Staubli = 6 </li>
    <li> UR = 7 </li>
    <li> Yaskawa = 8 </li>
    <li> Efort = 9 </li>
    <li> Aubo = 10 </li>
    <li> Dobot = 11 </li>
    <li> Mitsubishi = 12 </li>
    <li> Other = 99 </li>
    </ul>


|