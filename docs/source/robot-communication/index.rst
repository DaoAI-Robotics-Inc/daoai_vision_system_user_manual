机器人通讯
=================

本章会详细介绍机器人和DaoAI Vision Pilot之间的通讯协议。

机器人和DaoAI Vision Pilot之间以发送指令 |:left_right_arrow:| 接收程序回应 的模式交换信息，其中机器人充当客户端，DaoAI Vision Pilot充当服务器。
机器人向DaoAI Vision Pilot发送请求，例如进行探测流程，DaoAI Vision Pilot在完成一系列操作后用相应的指令进行回复。
所有请求和等待都是同步的（单线程），在收到前一个等待的回应之前，应确保机器人在此期间不发送任何新请求。

.. image:: images/robot_communication_sync.png
    :scale: 100%

|

- DaoAI通讯接口

    DaoAI Vision Pilot 与机器人之间通过 API 进行沟通，提供了所有可能的交互方式，并包含了一些常用函数来完成机器人的操作， :ref:`通用通讯接口` 文章会详细介绍所有的函数，以及常用的应用例子。 :ref:`通讯应用示例` 文章会以应用分类，并详细讲解每个应用中如何设置和使用各个函数等。

.. toctree::
    :maxdepth: 1
    :hidden:

    general_interface/index
    general_examples/index

|

- 机器人品牌

    DaoAI Vision Pilot 与众多不同品牌和型号的机器人之间都能进行沟通，以下会提供各个机器人品牌的示例脚本，帮助你更好的使用不同品牌的机器人。 :ref:`各个品牌机器人示例` 会详细各种机器人如何跟 DaoAI Vision Pilot 进行交互的例子。

.. toctree::
    :maxdepth: 1
    :hidden:

    robot_brands