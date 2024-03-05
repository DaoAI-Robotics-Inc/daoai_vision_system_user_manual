任务部署
===========

在设置好所有任务之后，就可以来到部署页面进行任务的部署。

部署后，所有任务都会准备好等待机器人调用。

    .. image:: images/deploy.png
        :scale: 60%


部署示例
-----------

以UR 机器人为例

1. 首先来到任务列表，确认您想要在机器人上调用运行的任务的task id。

    .. image:: images/task_list.png
        :scale: 60%

2. 打开机器人抓取脚本，确保您的ip和端口正确。ip 应该和DaoAI机器人视觉认知系统运行

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

