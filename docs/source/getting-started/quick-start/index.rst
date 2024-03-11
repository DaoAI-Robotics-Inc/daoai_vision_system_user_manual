快速入门指南
=====================================

这是一份完整用户手册的快速入门指南，我们建议您按照完整的用户指南进行详细的设置和学习。

.. tabs::

   .. tab:: 连接

      .. image:: images/connect.png
         :scale: 40%
         :align: right
      
      工控机的连接
         - 工控机通过24V的电源线供电，网线或者WiFi联网。 
         - 下载并安装后，使用桌面上的启动器程序DaoAI Vision Cognition System，管理并启动服务器
         - 如果服务器已经打开，那么可以使用网页访问 服务器并运行DaoAI Vision Cognition System。

      相机的连接
         - 相机通过24V的电源线供电，使用cat-6类网线与DaoAI Vision Cognition System连接。
         - 详细请参考 :ref:`连接相机`

      机器人的连接
         - 机器人通过以太网与DaoAI Vision Cognition System连接
         - 详细请参考 :ref:`连接机器人`
      
      |br|
      |br|

   .. tab:: 安装
      
      在安装DaoAI Vision Cognition System软件之前。

      - 检查GPU要求 (GTX 1050 Ti)
      - 检查GPU驱动是否为最新版本
      - 详细请参考 :ref:`如何安装或更新GPU驱动`

      请下载 `DaoAI Vision Cognition System <https://daoairoboticsinc-my.sharepoint.com/:f:/g/personal/nrd_daoai_com/EmqOEuH6rsVFhFvGRkLffHsBo2CmgBMww6IrSIEuxNoybA?e=YhIEva>`_

      然后运行完整安装包进行安装： DaoAIVision_2.24.2.0_<版本号>_full_Key.exe，同时也要确保其余的bin文件也在相同路径。
      
         .. image:: images/full_installer.png
            :scale: 100%

      .. note::
         完整安装包同时会安装一个DaoAI Camera Studio软件，请点击安装以确保软件可以正常运行。

      **补丁包的安装** 需要首先安装完整包，然后再安装补丁包进行升级：DaoAIVision_2.24.2.0_<版本号>_patch_Key.exe 。
      

         
      |br|

      安装的过程只需要点击Install, 然后继续点击下一步就可以完成。

         .. image:: images/installer.png
            :scale: 100%

      **DaoAI Vision Cognition System** 的安装路径为：`C:\\Program Files\\WeRobotics` |br|
      **DaoAI Camera Studio** 的安装路径为：`C:\\Program Files (x86)\\DaoAI Studio`

      在安装DaoAI Vision Cognition System软件之后，软件无法打开。请查阅 :ref:`安装软件后无法启动，是否安装过其他版本的Vision软件、或者Python、或者Chocolatey?`

   .. tab:: 软件

      桌面上的DaoAI Vision Cognition System是服务器的管理器。打开后可以添加，删除，管理您的服务器实例。
         - 您可以使用务器的管理器，创建并运行多个服务器，服务于多个项目运行。

      .. image:: images/instance_manager.png
         :scale: 60%

      **运行方式** :
         1. 双击桌面上的图标，打开服务器管理器。
            
            .. image:: images/logo.png
               :scale: 60%

         2. 点击Add Instance来添加一个服务器实例, 然后点击Select, 选择项目文件的读写路径, 并点击Add Instance。
            
            .. image:: images/add_ins.png
               :scale: 60%
         
         3. 点击绿色的运行按钮，看到服务器状态变为运行，那么这时候服务器就启动了。
            
            .. image:: images/launch.png
               :scale: 60%
         
         4. 点击Launch按钮，会弹出Chrome页面并访问服务器页面。

         5. 您也可以手动在网页浏览器地址栏输入服务器的 <ip:port> 来访问服务器。

            .. image:: images/software.png
               :scale: 40%

         6. 下一步请参考 :ref:`软件应用`


       :ref:`如何用其他电脑访问DaoAI Vision Cognition System`

.. |br| raw:: html

      <br>