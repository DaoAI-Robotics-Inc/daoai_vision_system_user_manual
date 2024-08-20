通讯设置并建立连接、测试
==============================

使用 Hans 机器人需完成4个步骤：

   :ref:`程序下载`

   :ref:`设置网络连接`

   :ref:`加载程序文件`

   :ref:`测试机器人与 DaoAI Vision pilot 的连接`


程序下载
--------------

下载 `Hans机器人脚本 <https://daoairoboticsinc-my.sharepoint.com/:u:/g/personal/zhangxinxin_welinkirt_com/Eb-K3WEVr-9AnC9mUPmt-TkBGrWKLrVrpgPkwHvuO229Vg?e=xN5Zgw>`_  




设置网络连接
--------------
- 关于机器人与DaoAI Vision pilot软件之间的通讯IP设置如下：
- 机器人控制柜IP需与机器人脚本中IP和工控机网口IP设置在同一网端内。
- 工控机网口需与机器人脚本中所写入的IP一样。
- 误区：莫认为能ping上就是正常通讯（工控机需关闭防火墙设置）


硬件连接
^^^^^^^^^^^

DaoAI Vision pilot和机器人控制器通过以太网连接。 以太网电缆应连接到机器人控制器的 WAN 端口，并连接到工控机、将网口地址更改为："192.168.220.10"


机器人控制柜IP配置
^^^^^^^^^^^^^^^^^^^^^

打开大族示教器并按照以下步骤操作：将IP更改为："192.168.1.XX"网段内。

   .. image:: images/IP1.png
        :scale: 100%

   .. image:: images/IP2.png
        :scale: 100%

完成上述步骤后，从示教器重新启动系统并检查IP是否修改成功。

   .. image:: images/重启系统.png
        :scale: 100%


加载程序文件
--------------

 - 将下载下来的机器人脚本文件保存到U盘中，并将U盘插入到机器人控制柜USB口。
 - 使用Hans示教器并按照以下步骤操作将下载下来的机器人脚本文件上传。

   .. image:: images/加载程序1.png
        :scale: 80%



   .. image:: images/加载程序2.png
        :scale: 80%



测试机器人与 DaoAI Vision pilot 的连接
-------------------------------------

 - 打开DaoAI Vision Pilot :ref:`创建项目`  
 
 - 连接机器人


   .. image:: images/机器人连接.png
        :scale: 80%


 - 机器人运行“send_pose”脚本:ref:`脚本如何运行`

    .. image:: images/teach_pose脚本运行.png
        :scale: 80%
 
 - 观察DaoAI Vision Pilot控制栏是否接受到机器人坐标，如下图所示，控制栏会打印出结构到的信息，到此，我们通讯就建立完成了。

   .. image:: images/控制栏信息.png
        :scale: 80%