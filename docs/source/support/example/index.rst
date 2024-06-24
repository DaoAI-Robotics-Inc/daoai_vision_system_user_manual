展示实例
===========

DaoAI实例案例：分拣随机堆放的烟感器
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    .. image:: images/demo.png
        :align: center
        :scale: 80%



    - 在本文中，您将学习如何使用DaoAI相机分拣上图中乱序摆放的烟感器。我们将讲述该实例完整的搭建和调试步骤。
    - 结果将是使用ABB1200机器人用真空抓手精准抓取烟感器，其中将反面的烟感器通过翻转台翻转为正面、并有序码垛摆放好。
    - 抓取视频见：

..  raw:: html

    <div style="position: relative; padding-bottom: 1%; height: 0; overflow: hidden; max-width: 70%; height: auto;">
        <video width="50%" height="auto" controls>
            <source src="http://docs.welinkirt.com/static/videos/smoke_detector_pick_demo.mp4" type="video/mp4">
        </video>
    </div>


安装相机、机器人、工控机
------------------------

    - 如果您是Eye To Hand，请将相机安装到机械手臂外的固定位置，如果您是Eye In Hand，请将相机安装到机械手臂上。
    - 将机器人本体与控制柜安装到位后、连接本体与控制柜之间的电缆、接入主电源、检查主电源正常后，通电。
    - 将工控机开箱后连接显示器及鼠标键盘。

创建新项目并连接相机、机器人
--------------------------

    - 如何创建新项目请参考 :ref:`软件应用`
    - 如何 :ref:`连接相机`
    - 如何 :ref:`连接机器人`


烟感器数据采集+标注
------------------------
    - 如何数据采集 `深度学习数据采集 <https://docs.daoai.ca/daoai-inspectra-user-manual/chinese-2.24.3.0/deep-learning-tool/index.html#id2>`_

    - 如何标注烟感器见下视频：
    .. raw:: html

        <div style="position: relative; padding-bottom: 1%; height: 0; overflow: hidden; max-width: 70%; height: auto;">
            <video width="50%" height="auto" controls>
                <source src="http://docs.welinkirt.com/static/videos/smoke_detector_label.mp4" type="video/mp4">
            </video>
        </div>


    - 下图为烟感器标注样例，标注规则：烟感器正面标签为“zheng”,反面标签为“fan”。

    .. image:: images/实例2.png 
        :scale: 80%
        :align: center


手眼标定
--------------

    - 如何 :ref:`机器人手眼标定`

创建一个新任务
----------

    - 如何创建 :ref:`视觉任务`

下载并导入深度学习文件
----------

    - 使用DaoAI World将训练好的“训练集”“导出训练好的模型”，该文件会在浏览器下载。

    .. image:: images/实例3.png
        :align: center 

    - 导入深度学习文件：点击上传，选择深度学习“config_torchscript.json”“best.torchscript”结尾的文件、上传成功之后会显示标注时标签信息。

    .. image:: images/实例4.png
        :align: center 


设置检测区域
----------

    - 依次点击“检测”、"拍照"，显示窗口就会显示相机采集到的点云场景。
    - 点击“设置ROI”。

    .. image:: images/实例5.png
        :align: center 

    - 调整显示窗口的调整框（框选住需要抓取探测的箱体）
    - 点击“保存”，显示窗口就会只保留箱体部分的点云信息

    .. image:: images/实例6.png
        :align: center 

    .. image:: images/实例7.png
        :align: center 


    .. note::
        如何拖动、旋转、放大或缩小调整框请参考 :ref:`显示窗口`

    

定义正反面匹配模型
----------

    - 在“定义和优化模型”界面点击“>”。

    .. image:: images/实例新1.png
        :align: center 

    - 点击“开始”，进入到定义模型界面中。

    .. image:: images/实例13.png
        :align: center 


    - 给正面烟感器定义模型，依次选择“zheng”,依次点击"拍照"、“设置ROI”。

    .. image:: images/实例9.png
        :align: center 

    - 在显示窗口调整框体大小及位置、使虚拟框体正好框选出来烟感器正面的点云，然后点击“定义模型”。

    .. image:: images/实例10.png
        :align: center 


    - 这样我们的烟感器正面模型就定义完成了。
    
    - 反面烟感器定义同上操作。

..    - 点击“>”,显示窗口就会显示我们框选好的正面烟感器的模型，检查是否完整或缺失。

..    .. image:: images/实例14.png
..        :align: center 



示教：定义机器人正反面抓取位置
----------------

    .. note::
        示教时，探测箱体内只需要放置一个抓取物体就可以。
        这里建议示教多个抓取位姿，视觉将会选择最优的抓取示教关系引导机器人抓取。


    - 选择“抓取”、点击“示教抓取位姿”、“开始”。

    .. image:: images/实例16.png
        :align: center 
    
    - 选择“zheng”、“位姿”（如果您没有位置请点击“+新位姿”）、选择“真实示教”、点击“拍照”。
    - 将机器人移动到烟感器上方（抓取该烟感器的真实位姿）、给视觉发送当前机器人抓取位姿。
    - （当机器人给视觉发送抓取位姿后、我们可以检查控制台是否接收到机器人当前位姿，并检查位姿数据是否接收正确，如下图所示）

    .. image:: images/实例新3.png
        :align: center 
    
    .. image:: images/实例新2.png
        :align: center 

    - 点击“获取位姿”，视觉就会将机器人发送过来的位姿进行转换并存储。
    - 此时右边显示窗口就会显示机器人末端夹爪与物体的抓取关系。

设置抓取顺序
--------------

    - 如下图所示，在“抓取顺序”中选择以“Z轴最高”顺序抓取物体（这样视觉会优先抓取最上层的烟感器）。
    - 选择“180度”使物体位姿的XY轴与以下轴对齐。
    - 选择“正”使物体位姿的Z轴与以下轴对齐（使烟感器的object坐标Z轴始终保持向上）。
    - 更多设置参考 :ref:`如何从最上方抓取物体？`

    .. image:: images/实例19.png
        :align: center



设置防碰撞模块
----------------------

    - 如下图所示，在防碰撞中打开倾斜角度并设置角度（这样视觉就会判定当前抓取的烟感器Z轴是否与机器人末端Z轴夹角超过您设置的角度、如果超过，视觉判定该物体抓取时会有碰撞风险）
    - 打开“使用箱体定义操作空间”，并在右边显示窗口调整虚拟框大小及角度，使虚拟框与实际抓取框位置大致重合即可（当机器人末端的夹爪模型与您设置的虚拟框有碰撞时，视觉判定该物体抓取时会有碰撞风险）
    - 最后点击“保存箱体”即可完成防碰撞模块的设置了。
    - 更多设置参考 :ref:`防碰撞功能如何使用？`
    .. image:: images/实例18.png
        :align: center 


查看2D、3D匹配、深度学习识别情况
----------------------------

    - 选择“概要”，点击“快速检测”，显示窗口选择“2D匹配结果”，此时显示窗口会显示2D匹配到的结果及标签信息。

    .. image:: images/实例新4.png
        :align: center

    - 同理，显示窗口选择“3D匹配结果”，此时显示窗口会显示3D模型点云与场景点云匹配的结果。
    
    .. image:: images/实例新5.png
        :align: center
    
    - 同理，显示窗口选择“深度学习结果”，此时显示窗口会显示深度学习识别的结果。

    .. image:: images/实例新6.png
        :align: center


部署该任务
---------

    - 在“部署”中点击“启动”。接着我们运行机器人抓取脚本、就可以进行抓取烟感器了。

    .. image:: images/实例23.png
        :align: center