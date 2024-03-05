常见问题 
===========

如何安装或更新GPU驱动
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    在工控机桌面找到此电脑，右键选择管理

    .. image:: Images/1.png
        :align: center


    选择系统工具里边的设备管理器，并找到显示适配器

    .. image:: Images/2.png
        :align: center


    右键需要更新的显卡，并选择更新驱动程序

    .. image:: Images/3.png
        :align: center 


    选择自动搜索驱动程序，系统将自动搜索适合电脑的驱动程序

    .. image:: Images/4.png
        :align: center 
        :scale: 100%


    系统会自动搜索驱动程序并进行安装，安装完成后出现以下界面

    .. image:: Images/5.png
        :align: center 
        :scale: 100%



如何用其他电脑访问DaoAI Vision Cognition System
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    .. note::
        被访问端与访问端两个电脑的网络必须在同一网段内

    检查被访问端与访问端两个电脑IP是否在同一网段内，可以看到被访问端与访问端都在“1”网段内

    .. image:: Images/6.png
        :align: center 
        :scale: 60%

    .. image:: Images/7.png
        :align: center 
        :scale: 60%

    查看被访问端DaoAI Vision Cognition System的IP及端口号，可以看到IP及端口是：192.168.1.137:3000

    .. image:: Images/8.png
        :align: center 
        :scale: 65%
    
    在访问端电脑浏览器输入被访问端DaoAI Vision Cognition System的IP及端口号，这样就可以正常访问了

    .. image:: Images/9.png
        :align: center 
        :scale: 65%



无法连接相机怎么办?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

     - 先检查相机是否正常上电
     - 再检查网线是否插到工控机的网口上
     - 检查该网口IP是否在192.168.1的网端内
     - 看看是否能ping通。使用win+R调出运行命令框，输入cmd，点击确定，会弹出DOS窗口，输入： ``ping 192.168.1.10``
     - 与视觉厂家确认该相机的IP地址
.. note::
    DaoAI相机的默认ip通常为:
        - 192.168.1.2
        - 192.168.1.3


如何寻找自己创建项目的工作空间?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    - 在我们创建服务器实例时“Base Folder”会让我们选择该服务器实例中创建的项目地址
    .. image:: Images/如何寻找创建的项目1.png
        :align: center
        :scale: 100%

    - 在“Base Folder”选择的地址下找到我们创建项目时所写的项目名称。这样就可以找到我们创建的项目工作空间了
    .. image:: Images/如何寻找创建的项目2.png
        :align: center 
        :scale: 100%


安装软件后无法启动，是否安装过其他版本的Vision软件、或者Python、或者Chocolatey?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    - 是否在此工作机/电脑曾经安装过其他版本的Vision Studio或者Vision Cognition System? 如果你的答案是“是”或者“不确定”，请你打开“控制面板”，检查是否存在其他版本的软件，或者存在其他版本的Python程序。
    .. image:: Images/是否存在旧版本软件.png
        :align: center
        :scale: 100%

    - 如果你的控制面板显示了上述的任意软件，请将他们删除。右键点击程序，选择“卸载”。
    .. image:: Images/卸载它们.png
        :align: center 
        :scale: 100%

    - 某些Python程序安装后不会在控制面板上显示。需要打开路径 C:\ ，删除文件夹 “PythonXX”（XX为版本号）。
    .. image:: Images/python_hidden.png
        :align: center 
        :scale: 100%

    - Chocolatey程序则无法在控制面版中卸载。打开路径 C:\ProgramData，删除文件夹 “chocolatey”。
    .. image:: Images/uninstallchoco.png
        :align: center 
        :scale: 100%

    - 成功卸载Python和Chocolatey后，重新安装软件即可正常开启。注意：Python程序并非只能安装一个版本。