配置检测流程
================

检测流程有以下几种可供您选择


    .. toctree::
        :maxdepth: 1

        dl_modfinder
        dl_kp
        small_obj
        large_obj 
        dl_3dobjfinder
        dl_2dkp
        in-hand-adjust
        place
        driftcheck


.. list-table:: 检测流程时间组成表
    :header-rows: 1

    * - **检测模式**
      - **相机拍照时间（秒）**
      - **识别时间 - 1个物体（秒）**
      - **识别时间 - 10个物体（秒）**
    * - 半有序标准（Semi-Ordered Standard）
      - 1
      - 1.6
      - 2.3
    * - 半有序快速关键点（Semi-Ordered Fast Keypoint）
      - 1
      - 1.6
      - 2.2
    * - 半有序快速3D关键点 （Semi-Ordered Fast 3D Keypoint）
      - 1
      - 1.2
      - 1.6
    * - 大物体（Large Object）
      - 1
      - 1.2
      - N/A
    * - 随机箱拾取 （Random Bin Picking）
      - 1
      - 2.5
      - 3.3
    * - 2D 关键点 （2D Keypoint）
      - 0.15
      - 0.78
      - 1.04














