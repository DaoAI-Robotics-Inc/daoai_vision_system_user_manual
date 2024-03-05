连接和电源
========================================

连接器
---------------------------------

.. tabs::

   .. group-tab:: BP SAMLL

    .. image:: images/small.png
        :align: center

    A. 电源连接器 24V, 5A DC
    B. 以太网连接器CAT 6或更高

   .. group-tab:: BP MEDIUM

    .. image:: images/medium.png
        :align: center

    A. 电源连接器 24V, 10A DC
    B. 以太网连接器CAT 6或更高

   .. group-tab:: BP LARGE

    .. image:: images/large.png
        :align: center

    A. 以太网连接器CAT 6或更高
    B. 电源连接器 24V, 5A DC
   
   .. group-tab:: BP AMR

    .. image:: images/amr.png
        :align: center

    A. 电源连接器 24V, 5A DC
    B. 以太网连接器CAT 6或更高
      
   .. group-tab:: BP AMR-GPU

    .. image:: images/amr_gpu.png
        :align: center

    A. 电源连接器 24V, 5A DC
    B. 以太网连接器CAT 6或更高

   .. group-tab:: BP LASER

    .. image:: images/laser.png
        :align: center

    A. 电源连接器 24V, 5A DC
    B. 以太网连接器CAT 6或更高
    

Power supply interface
^^^^^^^^^^^^^^^^^^^^^^^

.. |Pinout| replace:: 引脚分布
.. |Pin| replace:: 引脚
.. |Purpose| replace:: 用途
.. |Reserved| replace:: 保留，请勿连接

.. tabs::

   .. group-tab:: BP SAMLL

    +-----------------------+--------+------------------------------+
    | |Pinout|              |  |Pin| |  |Purpose|                   | 
    +=======================+========+==============================+
    |                       |   1    |  DC24V                       |
    |                       +--------+------------------------------+
    |.. image:: images/1.png|   2    |  RGND                        | 
    |  :align: center       +--------+------------------------------+
    |                       |   3    |  TRGE                        | 
    |                       +--------+------------------------------+
    |                       |   4    |  TGND                        | 
    |                       +--------+------------------------------+
    |                       |   5    |  SGND                        | 
    |                       +--------+------------------------------+
    |                       |   6    |  |Reserved|                  | 
    +-----------------------+--------+------------------------------+


    .. tip::
        - PGND是指电源地/机壳地，POWER GND 
        - AGND是指模拟地，ANALOGUE GND 
        - DGND是指数字地，DIGITAL GND 
        - TGND是指特殊芯片参考地 


   .. group-tab:: BP MEDIUM

    +-----------------------+--------+------------------------------+
    | |Pinout|              |  |Pin| |  |Purpose|                   | 
    +=======================+========+==============================+
    |                       |   1    |  DC24V                       |
    |                       +--------+------------------------------+
    |.. image:: images/1.png|   2    |  RGND                        | 
    |  :align: center       +--------+------------------------------+
    |                       |   3    |  TRGE                        | 
    |                       +--------+------------------------------+
    |                       |   4    |  TGND                        | 
    |                       +--------+------------------------------+
    |                       |   5    |  SGND                        | 
    |                       +--------+------------------------------+
    |                       |   6    |  |Reserved|                  | 
    +-----------------------+--------+------------------------------+

    .. tip::
        - PGND是指电源地/机壳地，POWER GND 
        - AGND是指模拟地，ANALOGUE GND 
        - DGND是指数字地，DIGITAL GND 
        - TGND是指特殊芯片参考地 

   .. group-tab:: BP LARGE

    +-----------------------+--------+------------------------------+
    | |Pinout|              |  |Pin| |  |Purpose|                   | 
    +=======================+========+==============================+
    |                       |   1    |  DC24V                       |
    |                       +--------+------------------------------+
    |.. image:: images/1.png|   2    |  RGND                        | 
    |  :align: center       +--------+------------------------------+
    |                       |   3    |  TRGE                        | 
    |                       +--------+------------------------------+
    |                       |   4    |  TGND                        | 
    |                       +--------+------------------------------+
    |                       |   5    |  SGND                        | 
    |                       +--------+------------------------------+
    |                       |   6    |  |Reserved|                  | 
    +-----------------------+--------+------------------------------+

    .. tip::
        - PGND是指电源地/机壳地，POWER GND 
        - AGND是指模拟地，ANALOGUE GND 
        - DGND是指数字地，DIGITAL GND 
        - TGND是指特殊芯片参考地 

   .. group-tab:: BP AMR

    +-----------------------+--------+------------------------------+
    | |Pinout|              |  |Pin| |  |Purpose|                   | 
    +=======================+========+==============================+
    |                       |   1    |  DC24V                       |
    |                       +--------+------------------------------+
    |.. image:: images/2.png|   2    |  RGND                        | 
    |  :align: center       +--------+------------------------------+
    |                       |   3    |  SGND                        | 
    +-----------------------+--------+------------------------------+

    .. tip::
        - PGND是指电源地/机壳地，POWER GND 
        - AGND是指模拟地，ANALOGUE GND 
        - DGND是指数字地，DIGITAL GND 
        - TGND是指特殊芯片参考地 

   
   .. group-tab:: BP AMR-GPU

    +-----------------------+--------+------------------------------+
    | |Pinout|              |  |Pin| |  |Purpose|                   | 
    +=======================+========+==============================+
    |                       |   1    |  DC24V                       |
    |                       +--------+------------------------------+
    |.. image:: images/2.png|   2    |  RGND                        | 
    |  :align: center       +--------+------------------------------+
    |                       |   3    |  SGND                        | 
    +-----------------------+--------+------------------------------+

    .. tip::
        - PGND是指电源地/机壳地，POWER GND 
        - AGND是指模拟地，ANALOGUE GND 
        - DGND是指数字地，DIGITAL GND 
        - TGND是指特殊芯片参考地 

   .. group-tab:: BP AMR-GPU

    +-----------------------+--------+------------------------------+
    | |Pinout|              |  |Pin| |  |Purpose|                   | 
    +=======================+========+==============================+
    |                       |   1    |  DC24V                       |
    |                       +--------+------------------------------+
    |.. image:: images/2.png|   2    |  RGND                        | 
    |  :align: center       +--------+------------------------------+
    |                       |   3    |  SGND                        | 
    +-----------------------+--------+------------------------------+

    .. tip::
        - PGND是指电源地/机壳地，POWER GND 
        - AGND是指模拟地，ANALOGUE GND 
        - DGND是指数字地，DIGITAL GND 
        - TGND是指特殊芯片参考地 



数据线
^^^^^^^^^^^^^^^^^^^^^^^

.. tabs::

   .. group-tab:: BP SAMLL

    BP Small 使用以太网电缆进行数据传输。

    下表提供了以太网电缆的引脚分布。


    .. image:: images/ethernet.png
        :align: center

   .. group-tab:: BP MEDIUM

    BP Medium 使用以太网电缆进行数据传输。

    下表提供了以太网电缆的引脚分布。


    .. image:: images/ethernet.png
        :align: center

   .. group-tab:: BP LARGE

    BP Large 使用以太网电缆进行数据传输。

    下表提供了以太网电缆的引脚分布。


    .. image:: images/ethernet.png
        :align: center

   .. group-tab:: BP AMR

    BP Amr 使用以太网电缆进行数据传输。

    下表提供了以太网电缆的引脚分布。


    .. image:: images/ethernet.png
        :align: center

   .. group-tab:: BP AMR-GPU

    BP Amr-gpu 使用以太网电缆进行数据传输。

    下表提供了以太网电缆的引脚分布。


    .. image:: images/ethernet.png
        :align: center

   .. group-tab:: BP LASER

    BP LASER 使用以太网电缆进行数据传输。

    下表提供了以太网电缆的引脚分布。


    .. image:: images/ethernet.png
        :align: center


连接到计算机
-----------------------------------

.. tabs::

   .. group-tab:: BP SAMLL

    1. 先将电源插头插入 "24V"
    2. 将以太网线插入摄像机，并将其与电脑连接起来
    3. 将电源插头插入电源插座。

    .. note::
        在断开连接时，按照相反的程序进行，先断开主电源。
        |br| 确保所有的连接都拧紧了。M12螺纹接头的连接螺母在某些情况下可能很难拧入。如果安装正确，它们会提供一个坚固和可靠的连接。      
        |br| 检查 :ref:`系统要求` 以了解性能方面的考虑。

    使用随设备提供的AC/DC适配器，以确保符合排放和抗扰度标准。

    DaoAI BP Small通过一个热敏电阻来防止极性反转和过热，该热敏电阻可以物理性地切断电源。

    DaoAI BP Small使用以太网通信，需要1 Gbps的性能。
    
    网络拓扑结构
        DaoAI BP Small支持以下网络拓扑结构。


    .. list-table::
        :widths: 25 25 
        :header-rows: 1

        * - 直接连接
          - 通过交换机连接
        * - .. image:: images/amrc.png
                :scale: 38%
          - .. image:: images/amrswitch.png
                :scale: 34% 

    继续阅读 :ref:`软件安装`，在那里你还可以找到网络配置。
   
   .. group-tab:: BP MEDIUM

    1. 先将电源插头插入 "24V"
    2. 将以太网线插入摄像机，并将其与电脑连接起来
    3. 将电源插头插入电源插座。

    .. note::
        在断开连接时，按照相反的程序进行，先断开主电源。
        |br| 确保所有的连接都拧紧了。M12螺纹接头的连接螺母在某些情况下可能很难拧入。如果安装正确，它们会提供一个坚固和可靠的连接。      
        |br| 检查 :ref:`系统要求` 以了解性能方面的考虑。

    使用随设备提供的AC/DC适配器，以确保符合排放和抗扰度标准。

    DaoAI BP Medium通过一个热敏电阻来防止极性反转和过热，该热敏电阻可以物理性地切断电源。

    DaoAI BP Medium使用以太网通信，需要1 Gbps的性能。
    
    网络拓扑结构
        DaoAI BP Medium支持以下网络拓扑结构。
        
    .. list-table::
        :widths: 25 25 
        :header-rows: 1

        * - 直接连接
          - 通过交换机连接
        * - .. image:: images/mediumc.png
                :scale: 38%
          - .. image:: images/mediumswitch.png
                :scale: 34% 

    继续阅读 :ref:`软件安装`，在那里你还可以找到网络配置。


   .. group-tab:: BP LARGE

    1. 先将电源插头插入 "24V"
    2. 将以太网线插入摄像机，并将其与电脑连接起来
    3. 将电源插头插入电源插座。

    .. note::
        在断开连接时，按照相反的程序进行，先断开主电源。
        |br| 确保所有的连接都拧紧了。M12螺纹接头的连接螺母在某些情况下可能很难拧入。如果安装正确，它们会提供一个坚固和可靠的连接。      
        |br| 检查 :ref:`系统要求` 以了解性能方面的考虑。

    使用随设备提供的AC/DC适配器，以确保符合排放和抗扰度标准。

    DaoAI BP LARGE通过一个热敏电阻来防止极性反转和过热，该热敏电阻可以物理性地切断电源。

    DaoAI BP LARGE使用以太网通信，需要1 Gbps的性能。
    
    网络拓扑结构
        DaoAI BP LARGE支持以下网络拓扑结构。

    .. list-table::
        :widths: 25 25 
        :header-rows: 1

        * - 直接连接
          - 通过交换机连接
        * - .. image:: images/largec.png
                :scale: 38%
          - .. image:: images/largeswitch.png
                :scale: 34% 

    继续阅读 :ref:`软件安装`，在那里你还可以找到网络配置。

   
   .. group-tab:: BP AMR

    1. 先将电源插头插入 "24V"
    2. 将以太网线插入摄像机，并将其与电脑连接起来
    3. 将电源插头插入电源插座。

    .. note::
        在断开连接时，按照相反的程序进行，先断开主电源。
        |br| 确保所有的连接都拧紧了。M12螺纹接头的连接螺母在某些情况下可能很难拧入。如果安装正确，它们会提供一个坚固和可靠的连接。      
        |br| 检查 :ref:`系统要求` 以了解性能方面的考虑。

    使用随设备提供的AC/DC适配器，以确保符合排放和抗扰度标准。

    DaoAI BP AMR通过一个热敏电阻来防止极性反转和过热，该热敏电阻可以物理性地切断电源。

    DaoAI BP AMR使用以太网通信，需要1 Gbps的性能。
    
    网络拓扑结构
        DaoAI BP AMR支持以下网络拓扑结构。

    .. list-table::
        :widths: 25 25 
        :header-rows: 1

        * - 直接连接
          - 通过交换机连接
        * - .. image:: images/amrc.png
                :scale: 38%
          - .. image:: images/amrswitch.png
                :scale: 34% 
    
    继续阅读 :ref:`软件安装`，在那里你还可以找到网络配置。

      
   .. group-tab:: BP AMR-GPU

    1. 先将电源插头插入 "24V"
    2. 将以太网线插入摄像机，并将其与电脑连接起来
    3. 将电源插头插入电源插座。

    .. note::
        在断开连接时，按照相反的程序进行，先断开主电源。
        |br| 确保所有的连接都拧紧了。M12螺纹接头的连接螺母在某些情况下可能很难拧入。如果安装正确，它们会提供一个坚固和可靠的连接。      
        |br| 检查 :ref:`系统要求` 以了解性能方面的考虑。

    使用随设备提供的AC/DC适配器，以确保符合排放和抗扰度标准。

    DaoAI BP AMR-GPU通过一个热敏电阻来防止极性反转和过热，该热敏电阻可以物理性地切断电源。

    DaoAI BP AMR-GPU使用以太网通信，需要1 Gbps的性能。
    
    网络拓扑结构
        DaoAI BP AMR-GPU支持以下网络拓扑结构。

    .. list-table::
        :widths: 25 25 
        :header-rows: 1

        * - 直接连接
          - 通过交换机连接
        * - .. image:: images/amrc.png
                :scale: 38%
          - .. image:: images/amrswitch.png
                :scale: 34% 

    继续阅读 :ref:`软件安装`，在那里你还可以找到网络配置。


   .. group-tab:: BP LASER

    1. 先将电源插头插入 "24V"
    2. 将以太网线插入摄像机，并将其与电脑连接起来
    3. 将电源插头插入电源插座。

    .. note::
        在断开连接时，按照相反的程序进行，先断开主电源。
        |br| 确保所有的连接都拧紧了。M12螺纹接头的连接螺母在某些情况下可能很难拧入。如果安装正确，它们会提供一个坚固和可靠的连接。      
        |br| 检查 :ref:`系统要求` 以了解性能方面的考虑。

    使用随设备提供的AC/DC适配器，以确保符合排放和抗扰度标准。

    DaoAI BP LASER通过一个热敏电阻来防止极性反转和过热，该热敏电阻可以物理性地切断电源。

    DaoAI BP LASER使用以太网通信，需要1 Gbps的性能。
    
    网络拓扑结构
        DaoAI BP LASER支持以下网络拓扑结构。

    .. list-table::
        :widths: 25 25 
        :header-rows: 1

        * - 直接连接
          - 通过交换机连接
        * - .. image:: images/largec.png
                :scale: 38%
          - .. image:: images/largeswitch.png
                :scale: 34% 

    继续阅读 :ref:`软件安装`，在那里你还可以找到网络配置。
     
.. |br| raw:: html

      <br>