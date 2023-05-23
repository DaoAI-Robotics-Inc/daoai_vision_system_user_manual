相机设置
=================

下表显示了不同型号DaoAI摄像机的默认设置。


默认设置
---------------------

.. list-table:: 
   :header-rows: 1

   * - Models
     - BP AMR
     - BP AMR-GPU
     - BP-S
     - BP-M
     - BP-L
   * - Exposure Time (us)
     - 7500
     - 7500
     - 7500
     - 10000
     - 10000
   * - Gain
     - 0
     - 0
     - 0
     - 0
     - 0
   * - Projector Brightness
     - 3
     - 3
     - 3
     - 3
     - 3
   * - Intensity Filter
     - Yes
     - Yes
     - Yes
     - Yes
     - Yes
   * - Intensity Filter Threshold 
     - 20
     - 20 
     - 20
     - 20
     - 20
   * - Outlier Filter 
     - Yes
     - Yes
     - Yes
     - Yes
     - Yes
   * - Outlier Threshold (mm) 
     - 3
     - 3
     - 3
     - 3
     - 3
   * - Phase Quality Filter
     - Yes
     - Yes
     - Yes
     - Yes
     - Yes
   * - Phase Quality Filter Threshold 
     - 0.1 
     - 0.1 
     - 0.1 
     - 0.1 
     - 0.1 
   * - Gaussian Filter
     - No
     - No
     - No
     - No
     - No
   * - Median Filter
     - Yes
     - Yes
     - Yes
     - Yes
     - Yes
   * - Median Filter Size 
     - 5 
     - 5 
     - 5 
     - 5 
     - 5 
   * - Face Normal Filter 
     - Yes 
     - Yes 
     - Yes 
     - Yes 
     - Yes 
   * - Face Normal Filter Threshold 
     - 20 
     - 20 
     - 20 
     - 20 
     - 20 
   * - Remove Small Area 
     - Yes
     - Yes
     - Yes
     - Yes
     - Yes
   * - Remove Small Area Threshold 
     - 2 
     - 2 
     - 2 
     - 2 
     - 2 
   * - Smooth Filter 
     - No
     - No
     - No
     - No
     - No
   * - Fill Gaps 
     - No
     - No
     - No
     - No
     - No
   * - Saturation Filter 
     - No
     - No
     - No
     - No
     - No
   * - Contrast Distortion Filter 
     - No
     - No
     - No
     - No
     - No
   * - Red Balance 
     - 1
     - 1
     - 1
     - 1
     - 1
   * - Green Balance  
     - 1
     - 1
     - 1
     - 1
     - 1
   * - Blue Balance  
     - 1
     - 1
     - 1
     - 1
     - 1

|

可以从SDK中读取各种设置信息。

默认的相机设置。

.. tabs::

    .. tab:: C++
        .. code-block::
            abc 