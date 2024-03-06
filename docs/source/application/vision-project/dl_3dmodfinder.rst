Deep Learning 3D Object Finder 检测流程
==========================================

本章会详细介绍如何设置 Deep Learning 3D Object Finder 检测流程。
    .. image:: images/dl_3d_modfinder_overview.png
        :scale: 100%

|

Deep Learning 3D Object Finder 检测流程使用了图形深度学习技术，3D点云与3D模型匹配，实现了对物体的3D定位。

1. 手眼标定
----------------

在创建任务时，需要有已经连接的相机和机器人，然后选择手眼标定文件。如果您还没有完成手眼标定，请参考 :ref:`机器人手眼标定` 来完成手眼标定。

2. 上传深度学习模型
-------------------

    .. image:: images/dl_3dmodfinder_dl.png
        :scale: 65%

|

点击上传来浏览深度学习的 ``配置`` 和 ``权重`` 文件。等上传完成后，点击保存模型。

看到下面的标签栏中出现您的深度学习标签名称，确认正确后，便可点击下一步。

3. 配置检测流程
------------------

1. 首先，点击拍照按钮给场景拍照，确认相机正常工作，以及确认物体位置，相机视野是否合适。

    .. image:: images/dl_3dmodfinder_detect.png
        :scale: 65%

|
2. 点击设置ROI, 使用窗口中的框截选出检测区域，这一步是为了移除背景，等干扰点云，只保留物体点云会出现的区域，这样可以使检测更快更准。这一步同时设置了参考系，ROI的坐标就是参考系。

    .. image:: images/3dmodfinder_roi.png
        :scale: 65%

|

    .. tip::
        您也可以框选使得物体所在的平面也被移除，这样只保留物体的点云会最大程度的提高检测速度以及准确度。

    .. note::
        ROI的箱体需要和抓取平面保持平行，因为ROI同时设置了参考系，ROI的坐标就是参考系。当之后设置夹爪从上方抓取时，就会以这里定义的参考系的 z 轴为上方。Pick sort的对齐x,y 旋转 也是以参考系为基准。

3. 检查显示窗口的ROI截取的点云是否合适，如果需要修改ROI，请重复1，2，重新设置ROI.

4. 然后就需要定义检测模型。在3D Object Finder中支持两种定义检测模型的方法：上传检测物体的CAD模型文件，或与Object Finder中相似，使用相机拍摄单一被检测物体以生成点云用于物体的识别。

    .. image:: images/3dmodfinder_define_model_1.png
        :scale: 65%

|

5. （可选）点击调整模型可以对CAD模型文件生成的点云模型进行调整，更多详情请阅读 :ref:`DL 3D Object Finder 检测流程高级配置`。

    .. image:: images/3dmodfinder_define_model_2.png
        :scale: 100%

|

6. 完成对检测模型的定义后，即可点调整模型中的生成模型以进行下一步。

7. (可选) 调试常规高级设置，更多高级设置详情，请阅读 :ref:`DL 3D Object Finder 检测流程高级配置`。

8. 检测模型配置完毕后，即可点击快速检测来测试检测模型的效果是否如同预期。同时可以使用右上角的查看检测结果来切换3D点云匹配结果或相机拍摄实际点云结果。


    .. image:: images/3dmodfinder_quick_detect.png
        :scale: 65%

|

    .. image:: images/3dmodfinder_quick_detect_2.png
        :scale: 85%

|
切换图片上方的标签可以切换查看深度学习结果。

    .. image:: images/3dmodfinder_dl_result.png
        :scale: 65%

|

如果您的检测效果不佳，请检查1-7的步骤是否正确，更多请阅读 :ref:`视觉项目优化`

这样检测部分就设置好了，可以进行下一步： :ref:`设置抓取策略` 。