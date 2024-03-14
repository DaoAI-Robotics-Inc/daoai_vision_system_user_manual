机器人通讯
=================


本章会详细介绍各类机器人与视觉认知系统交互的通讯接口。

.. notes::

    Orientation字段四位整数顺序说明：

    目前视觉认知系统对支持机器人所用的 Orientation/定位字段 收发顺序为

    0   ABB 四元数
    1   Fanuc   XYZ
    2   Hanwha  ZYX
    3   Kuka    ZYX
    6   Staubli ZYX
    7   UR  轴角顺序
    8   Yaskawa ZYX
    9   Efort   ZYZ
    10  Aubo    ZYX
    11  Dobot   ZYX
    12  Mitsubishi  ZYX
    13  Elite   ZYX
    14  Jaka    ZYX
    15  Hans    ZYX
    16  Zhibolin    ZYX
    17  CGX     ZYX
    18  Tulin   ZYX
    99  other   自定义顺序


各类机器人的使用和通讯协议

.. toctree::
    :maxdepth: 1

    ur