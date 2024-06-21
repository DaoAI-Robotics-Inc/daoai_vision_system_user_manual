任务部署
===========

在设置好所有任务之后，就可以来到部署页面进行任务的部署。

部署后，所有任务都会准备好等待机器人调用。

    .. image:: images/deploy.png
        :scale: 60%


抓取部署示例
--------------

以UR 机器人为例

1. 首先确认您想要在机器人上调用运行的任务的task id。

    .. image:: images/task_list.png
        :scale: 60%

2. 打开机器人抓取脚本，确保您的ip和端口正确。ip 应该和DaoAI Vision Pilot运行

3. 使用帮助函数daoai_task_id(id) 来设置您要运行的task id, 这样接下来调用的capture_and_process()函数，和get_picking_pose()函数，都会调用并请求运行对应的任务。

    .. image:: images/ur_task_id.png
        :scale: 80%

|

    .. note::
        如果您想要运行多个任务，您可以这样添加您的脚本。想要运行其它任务时，需要再次调用daoai_task_id(id)来切换到接下来想要请求的任务task id
            .. image:: images/ur_multitask.png
                :scale: 80%

3. 在网页界面来到部署界面，点击部署。并运行您的UR程序。

    .. image:: images/launch_button.png
        :scale: 100%

4. 机器人运行并抓取物体，同时检测的结果也会在显示窗口中显示出来。

- 2D显示：会显示出2D检测的结果
    .. image:: images/deploy_display_2d.png
        :scale: 70%

- 3D显示：显示点云对齐后的结果
    .. image:: images/deploy_display_3d.png
        :scale: 70%

- 抓取策略显示：显示物体的坐标，以及物体的抓取顺序。
    .. image:: images/deploy_display_pick.png
        :scale: 70%



物体姿态修正和放置部署示例
------------------------------

以UR 机器人为例

示教步骤
~~~~~~~~~~~~~~~

1. 首先打开示教的脚本。
    .. image:: images/load_adjpick_teach_pose.png
        :scale: 80%

.. note::
    如果您看到有黄色的部分，如下图，则说明您的机器人Installation File有错误。
        .. image:: images/load_adjpick_teach_pose_installation_error.png
            :scale: 70%

    请读取UR_common_function下的 VisionCognex.Installation
        .. image:: images/load_adjpick_teach_pose_installation_error_load_1.png
            :scale: 70%

        
        .. image:: images/load_adjpick_teach_pose_installation_error_load_2.png
            :scale: 70%
    
    然后点击Update Program
        .. image:: images/load_adjpick_teach_pose_installation_error_load_3.png
            :scale: 70%

    然后您就会看到您的脚本没有标识黄色的部分了，并且在您的Installation/Varirable里，应该可以看到下图中的两个变量（这两个变量是用于计算物体放置姿态用的中间计算变量）
        .. image:: images/load_adjpick_teach_pose_installation_var.png
            :scale: 70%

2. 设置标准放置位置：将物体以标准抓取姿态，固定在夹爪上，然后以标准放置姿态，放置于 **放置区域** 的上方。 并在机器人脚本中定义 tool_in_base_wp 位置为该位置。
    .. image:: images/load_adjpick_teach_pose_example1.png
        :scale: 70%

    .. image:: images/load_adjpick_teach_pose_example1_ur.png
        :scale: 70%

.. warning::
    **放置区域的位置** ，和 **物体在夹爪上的位置** 在示教过程中 **不能移动** ，如果在中途产生了移动，则需要重新开始

 
3. 设置安全旋转位置：在当前位置，设置lift_obj_pose的From point, 然后向上方移动机器人到一个安全的旋转位置（旋转物体至面向相机），并设置lift_obj_pose的To point.
    .. image:: images/load_adjpick_teach_pose_example1.png
        :scale: 70%

    .. image:: images/load_adjpick_teach_pose_example2_ur.png
        :scale: 70%

  |br|
    .. image:: images/load_adjpick_teach_pose_example2b.png
        :scale: 70%

    .. image:: images/load_adjpick_teach_pose_example2_urb.png
        :scale: 70%


4. 设置物体检测位置：将物体移动至面向相机的检测位置，并定义 adjust_det_pose。
    .. image:: images/load_adjpick_teach_pose_example3.png
        :scale: 70%

    .. image:: images/load_adjpick_teach_pose_example3_ur.png
        :scale: 70%

5. 设置放置区域检测位置：将机器人移动到不会遮挡放置区域的任意位置，然后设置 place_det_pose。
    .. image:: images/load_adjpick_teach_pose_example4.png
        :scale: 70%

    .. image:: images/load_adjpick_teach_pose_example5_ur.png
        :scale: 70%


6. 设置对应的task id， 第一个task id 对应  :ref:`物体姿态修正（In-Hand Adjustment）` 任务 第二个对应 :ref:`物体放置（Placement）` 任务
    .. image:: images/load_adjpick_teach_pose_example6_ur.png
        :scale: 70%

7. 在Vision Pilot 网页界面中点击部署，然后运行机器人脚本，完成放置示教。


部署
~~~~~~~~~~

1. 打开Picking and Place脚本，确保读取的是和示教步骤相同的Installation File。
    .. image:: images/load_adjpick.png
        :scale: 80%

2. 设置抓取步骤 stage == 0：设置检测task id，定义detection_pose 为物体检测位置。该步骤会执行抓取，并进入stage 1 - 物体姿态修正 (如果需要跳过某个步骤，则可以更改stage 变量来跳过)
    .. image:: images/load_adjpick_stage0.png
        :scale: 80%

3. 设置物体姿态修正步骤 stage == 1：设置对应的task id，定义 adjust_det_pose 为物体姿态检测位置。该步骤会检测并记录当前物体于夹爪中的姿态，并进入stage 2 - 物体放置
    .. image:: images/load_adjpick_stage1.png
        :scale: 80%

4. 设置放置区域检测步骤 stage == 2：设置对应的task id，定义 place_det_pose 为放置区域检测位置。该步骤会检测并记录放置区域的偏移量，并进入stage 3 - 物体放置
    .. image:: images/load_adjpick_stage2.png
        :scale: 80%

5. 设置放置区域检测步骤 stage == 3：设置预放置位置pre_drop_pose为放置区域的上方。该步骤会计算放置位置，并移动机器人至放置位置然后循环至起始。
    .. image:: images/load_adjpick_stage3.png
        :scale: 80%

6. 在Vision Pilot 网页界面中点击部署，然后运行机器人脚本执行 :ref:`抓取 - 物体姿态修正 - 放置` 任务流程。



.. |br| raw:: html

      <br>