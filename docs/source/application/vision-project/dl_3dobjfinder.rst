随机箱拾取 （Random Bin Picking） 检测流程
================================================

本章会详细介绍如何设置 随机箱拾取 （Random Bin Picking） 检测流程。
    .. image:: images/dl_3d_modfinder_overview.png
        :scale: 100%

|

随机箱拾取 （Random Bin Picking） 检测流程使用了图形深度学习技术，3D点云与3D模型匹配，实现了对物体的3D定位。

1. 手眼标定
----------------

在创建任务时，需要有已经连接的相机和机器人，然后选择手眼标定文件。如果您还没有完成手眼标定，请参考 :ref:`机器人手眼标定` 来完成手眼标定。

2. 上传深度学习模型
-------------------

    .. image:: images/dl_3dmodfinder_dl.png
        :scale: 65%

|

点击上传来浏览深度学习的 ``配置`` 和 ``权重`` 文件。等上传完成后，点击保存模型。

.. note::

    ``配置`` 文件通常有.txt 文件格式和 .json 文件格式，都可以直接上传。|br|
    ``权重`` 文件通常有 .pt 文件格式，.onnx 文件格式，以及 .torchscript 文件格式， 都可以直接上传。

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

4. 然后就需要定义检测模型。在3D Object Finder中支持两种定义检测模型的方法：

    a. 上传检测物体的CAD模型文件
        .. image:: images/3dmodfinder_define_model_1.png
            :scale: 65%

    b. 使用相机拍摄物体并截取点云作为物体模型。
        .. image:: images/3dmodfinder_define_model_b.png
            :scale: 65%

|

5. （可选）调整模型的匹配范围：顶部（+x 30°）， 顶部和底部（+x 30°，-x 30°），360°。
    .. image:: images/3dobjfinder_scanrange.png
        :scale: 80%

    或者选择自定义范围。
        .. image:: images/3dobjfinder_scanrange_custom.png
            :scale: 80%

    或者从窗口设置匹配视角。
        .. image:: images/3dobjfinder_scanrange_window.png
            :scale: 80%

    .. note::
        例：如果选择了顶部(+z 30°)， 则匹配时，物体的z轴朝向将不会超出相对于参考系的z轴倾斜30°以上的姿态。而会在30°范围内进行匹配。
            .. image:: images/3dobjfinder_scanrange_eg1.png
                :scale: 80%

        例：如果选择了自定义右 （+x 10°)，则匹配时，物体的x轴将不会超出相对于参考系的z轴倾斜10°以上的姿态。 如下图，使用 右（+x 10°) 检测范围，无法很好的匹配正面朝上的物体，但是匹配右侧朝上的物体则会更好。
            .. image:: images/3dobjfinder_scanrange_eg2.png
                :scale: 80%

        例：如果选择了窗口自定义视点，则只会从视点中的角度进行匹配。

6. 点击 **生成模型** 保存模型设置。

    .. image:: images/3dmodfinder_define_model_2.png
        :scale: 100%

.. warning::
    这一步一定要 **点击生成模型** 才可以让模型检测生效。

|

7. 完成对检测模型的定义后，即可点调整模型中的生成模型以进行下一步。

8. (可选) 调试常规高级设置，更多高级设置详情，请阅读 :ref:`随机箱拾取 （Random Bin Picking） 检测流程高级配置`。

9. 检测模型配置完毕后，即可点击快速检测来测试检测模型的效果是否如同预期。同时可以使用右上角的查看检测结果来切换3D点云匹配结果或相机拍摄实际点云结果。


    .. image:: images/3dmodfinder_quick_detect.png
        :scale: 65%

|

切换图片上方的标签可以切换查看深度学习结果。

    .. image:: images/3dmodfinder_dl_result.png
        :scale: 65%

|

如果您的检测效果不佳，请检查1-7的步骤是否正确，更多请阅读 :ref:`视觉项目优化`

这样检测部分就设置好了，可以进行下一步： :ref:`设置抓取策略` 。


.. |br| raw:: html

      <br>