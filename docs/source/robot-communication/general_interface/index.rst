通用通讯接口
==============

DaoAI Vision Pilot 通讯接口能够使机器人通讯更容易操作。更统一的沟通接口，帮助用户能更快的连接机器人并用于抓取、放置等各种应用。

协议/Protocol
---------------

DaoAI Vision Pilot 和机器人之间的指令和回应消息都是固定长度的。因为消息协议的长度是固定的，即使机器人短的编程功能有限，也会比较容易实现。

.. note::
    请求和回应消息具有固定长度，并且没有开始和/或结束字符。虽然TCP/IP协议可防止数据丢失，但机器人客户端实现负责通过计算发送/接收的字节数并与预期的消息大小进行比较来跟踪消息之间的边界。

请求和回应消息由多个字段组成，每个字段为一个 int32 (4 bytes)。 浮点数据（如距离和角度）将乘以一个恒定系数 MULT = 10000 , 再作为int32发送。 然后，接收端通过将接收的值除以该系数来解码此字段。 负数使用二进制补码进行编码。关于信息中的每个字段，可参考下方连接的详细注解：

.. toctree::
    :maxdepth: 1
    
    sub_index

|

连接详细信息
---------------

.. list-table:: 

   * - **类型/Type**
     - TCP/IP socket
   * - **端口/Port**
     - 6969 (默认TCP连接端口)
   * - **字节顺序/Byte order**
     - Network order (big endian)


一旦DaoAI Vision Pilot启动，它就会侦听TCP端口 ``6969`` 并等待，直到机器人发起连接。这是在机器人端通过打开对DaoAI Vision Pilot的IP地址和给定端口的TCP套接字来完成的。

可以在DaoAI Vision Pilot的网络设置中找到并更改DaoAI Vision Pilot系统的IP地址。

|

Global Variables/全局变量
------------------------------

所有的接口函数都会使用以下所以的全局变量：

.. code-block:: python

    mult=10000
    DAOAI_ROBOT_TYPE = X #based on robot brand 
    DAOAI_META_VERSION = 1

    #Pose Object
    daoai_tcp_pose = p[0,0,0,0,0,0]
    daoai_payload_1 = 0
    daoai_payload_2 = 0
    daoai_payload_3 = 0
    daoai_payload_4 = 0
    daoai_payload_5 = 0
    daoai_payload_6 = 0
    daoai_plane = Base

    #meta info
    daoai_socket_name = "daoai"
    daoai_socket
    daoai_status = 0
    daoai_r_command = 0
    daoai_task_id = 0
    daoai_num_remaining_objects = 0

.. note::
    变量机器人品牌类型代码 DAOAI_ROBOT_TYPE 是用于告知 DaoAI Vision Pilot 系统当前通讯的机器人品牌，您可以查询 :ref:`机器人品牌以及对应的类型代码` 表格中列出了所有当前的机器人品牌和类型代码。

Functions/函数
---------------

所有在 DaoAI Vision Pilot 需要使用的功能，都可以通过使用下方的函数进行应用，包括抓取、放置和校准等等。

.. toctree::
    :maxdepth: 3
    
    functions

|

