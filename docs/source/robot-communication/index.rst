机器人通讯
=================


本章会详细介绍各类机器人与DaoAI Vision Pilot交互的通讯接口。

.. note::
    
    Orientation字段四位整数顺序说明：

    目前DaoAI Vision Pilot对支持机器人所用的 Orientation/定位字段 收发顺序为 |br|

    0   ABB, 四元数, 字节串 48字节 |br|
    1   Fanuc,   XYZ, 字符串 |br|
    2   Hanwha,  ZYX, 字节串 48字节 |br|
    3   Kuka,    ZYX, 字节串 48字节 |br|
    6   Staubli, ZYX, 字节串 48字节 |br|
    7   UR,  轴角顺序, 字节串 48字节 |br|
    8   Yaskawa, ZYX, 字节串 48字节 |br|
    9   Efort,   ZYZ, 字节串 48字节 |br|
    10  Aubo,    ZYX, 字节串 48字节 |br|
    11  Dobot,   ZYX, 字符串 |br|
    12  Mitsubishi,  ZYX, 字符串 |br|
    13  Elite,   ZYX, 字符串 |br|
    14  Jaka,    ZYX, 字符串 |br|
    15  Hans,    ZYX, 字符串 |br|
    16  Zhibolin,    ZYX, 字节串 48字节 |br| 
    17  CGX,     ZYX, 字节串 48字节 |br|
    18  Tulin,   ZYX, 字节串 48字节 |br|
    99  other,   自定义顺序, 自定义收发格式 |br|


    机器人通讯分为 ``字符串`` 收发，和 ``字节串`` 收发，交互时请注意收发格式


字符串
--------

字符串的收发是以 ',' 为分隔符，以 ';' 为终止符. 结构详情请查阅 :ref:`协议/Protocol`

.. note::

    请求消息的组成为 “x,y,z,rx,ry,rz,w,command,payload_1,payload_2,meta_1,meta_2;”. (其中w是四元数的实部，其它顺序填0即可) |br|

    例：请求消息 “8666960,297000,12610000,6989,1772190,1796940,0,21,2,0,99,1;” |br|

    回复消息的组成为 “x,y,z,rx,ry,rz,w,payload_1,payload_2,payload_3,payload_4,payload_5,payload_6,status,meta_1,meta_2;”. |br|
    
    例：回复消息 “8666960,297000,12610000,6989,1772190,1796940,0,1,0,0,0,0,0,3,99,1;” |br|


字节串
--------

字节串的收发消息长度固定为 发48个字节（byte）, 收64个字节（byte）, 结构详情请查阅 :ref:`协议/Protocol`


各类机器人的使用和通讯协议
------------------------------

.. toctree::
    :maxdepth: 1

    ur
    ur_modbustcp

.. |br| raw:: html

      <br>