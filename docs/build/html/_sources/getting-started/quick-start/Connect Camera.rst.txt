

连接相机
===============

如果您还没有安装DaoAI Camera Studio，请查看 :ref:`软件安装` 页面。

使用DaoAI相机工作室的第一步是连接你的相机。

在连接三维感知视觉软件时首先应该可看到 **相机管理** 界面。

.. image:: images/manage_cameras.png
    :align: center

|

刷新按钮会更新相机列表。

.. image:: images/manage_cameras_refresh.png
    :align: center

|

如果需要连接网口相机，需要使用相机软件远程功能。勾选 **使用远程相机**，输入相机IP，然后刷新相机列表。

**网口相机的默认IP**
 - **192.168.1.2** : BPL相机，BPM相机，BPS相机，BP-AMR-GPU相机，IN的所有相机;
 - **192.168.1.12**: BP-AMR相机

.. image:: images/manage_cameras_remote.png
    :align: center

|

当探测到了想要连接的相机后，点击 **连接** 按钮。
如果有多个可连接相机的话，可以从列表里选择特定一个相机来连接。 


.. image:: images/manage_cameras_connect.png
    :align: center

|

连接后，可以看到主窗口。

|

.. Note::
    通常情况下，如果物理上连接了多台摄像机，它们都会出现在摄像机选择列表中。
    然而，DaoAI Camera Studio一次只支持与一台摄像机建立连接。
    要使用DaoAI Camera Studio拍摄多个摄像机，请启动另一个DaoAI Camera Studio实例并连接其他摄像机。

