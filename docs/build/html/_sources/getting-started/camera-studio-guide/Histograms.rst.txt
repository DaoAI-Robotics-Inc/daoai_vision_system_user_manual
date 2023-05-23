直方图
--------

直方图窗口提供图像中所有可视化像素的 RGB 值统计 (0-255)。

|

**目的:** 将对数直方图中的最高列设置为 128 左右，以避免 255 次过度曝光。 这可以通过添加帧和调整曝光级别来实现。

单击左上角的“直方图”以切换直方图窗口。 直方图将自动在屏幕上弹出。 在此窗口内，有两个不同的选项卡用于在线性分布图和对数分布图之间切换。 曝光过度的像素被标记为红色，因此您可以轻松看到它们。 如果 255 范围内有大量像素，则图像曝光过度。 应选择较短的曝光时间或较低的亮度来限制过度曝光。

.. figure:: images/histogram_linear.png
    :align: center
    
    线性分布

.. figure:: images/histogram_logarithmic.png
    :align: center
    
    对数分布

**对数分布可以辅助我们调整亮度到预期的范围。**

**例**: 如下图, 我们想要将峰值亮度从"16-32"的区间调整到"128-256"的区间。

.. figure:: images/histogram_logarithmic_example.png
    :align: center
    
|

由于亮度参数每加1, 亮度会乘以2。 且直方图中的一个区间到下一个区间的乘数为2。

.. figure:: images/histogram_logarithmic_example_2.png
    :align: center

|

那么根据这个特性, 我们只需观察"16-32"到"128-256"增加了3个区间。那么帧值参数增加3便可以将峰值亮度移到想要的区间。

.. figure:: images/histogram_logarithmic_example_3.png
    :align: center

|
