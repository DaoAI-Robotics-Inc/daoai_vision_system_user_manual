常见问题 
===========

.. contents::
    :local:


软件结构
~~~~~~~~~~~~~~~~

    DaoAI Vision Pilot 软件的组成是有两个部分：用户界面和后台处理，又称前端和后端。用户界面（前端）负责收集用户的输入信息，点击、拖拽和上传等；后台处理（后端）负责数据处理、算法处理和逻辑处理等。

    打开浏览器，操作的是属于用户界面（前端）；后台处理（后端）实际上是看不见的，他们是通过网络协议进行交流的。

    .. image:: Images/ui.png
        :align: center

    我们使用桌面图标打开的是“实例管理”，是一个一站式、同时管理前后端的工具。

    .. note::
        用户可以分别启动前端和后端，通常情况下是不需要了解和分别启动前后端的。此部分内容主要用于查错和连接检测。


    打开软件安装的根目录(C:\\Program Files\\WeRobotics 或者自定义安装目录下)，右键使用Admin权限打开 “webui_server.exe”
    
    .. image:: Images/webuiexe.png
        :align: center
    
    然后会出现一个command prompt窗口，内容如下图显示：

    .. image:: Images/backend_started.png
        :align: center

    该窗口显示的是后端已经正常启动，正在端口9001，聆听着前端。

    前端是在软件安装的根目录下，打开 “webui_server” 文件夹。
    
    .. image:: Images/webserver.png
        :align: center
    
    在路径上输入 “cmd” ，打开command prompt窗口；或者打开command prompt窗口，再进入该路径下。

    .. image:: Images/frontend_start.png
        :align: center

    输入指令 “serve -s”，启动前端。如下图显示，前端已经启动，并在端口3000聆听着用户的输入。

    .. image:: Images/frontend_connected.png
        :align: center
    
    你可以打开浏览器，输入窗口上显示的本地地址：Local: **http://localhost:3000**

    也可以通过外部、其他电脑，使用IP地址接入：Network: **http://xxx.xxx.xxx.xxx:3000**
    
旧版软件(仅后端模式)
~~~~~~~~~~~~~~~~~~~

    DaoAI Vision Pilot 也支持仅后端模式，但这模式下设置和操作难度极高，没法支持远程操控等，请谨慎使用。

    .. warning::
        此模式需要学习大量的模块知识和流程控制，请谨慎使用。

    双击打开 “WeRobotics EN.exe”(英文版)，或者 “WeRobotics CN.exe”(中文版)，你会看到旧版软件启动，如下图：

    .. image:: Images/old_bp.png
        :align: center

    此模式下，每个节点均需要详细设置的参数，如果想要使用该模式，请联系你的客服或者工程师。

软件显示License Check Fail
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    如果在尝试使用软件时，弹窗提醒 **License Check Failed. Contact Administrator** 的提醒，这说明了软件在该电脑没有有效的license，无法使用软件。

    .. image:: Images/failed.png
        :align: center


    这个时候你需要联系你的支持工程师、或者客服，获取权限。

    你的支持工程师和客服都会需要你电脑上的一个信息：机器码。该码是每台电脑上都不同的，并且唯一的，系统就是通过机器码来获取该电脑是否拥有使用权限。

    那么，如何查询你的机器码呢？

    首先，你需要输入以下代码至你的command prompt窗口（使用 **“WIN”** + **R**按键，输入 **cmd**，打开command prompt窗口）。

    .. code-block:: python
        
        python.exe -m pip install py-machineid

    |

    然后command prompt会自动运行并下载所需的文件。

    .. image:: Images/cmd_install_machine_id.png
        :align: center


    然后，打开Python App，输入下方的指令，就可以查看到自己的机器码：

    .. code-block:: python
        
        import machineid
        print(machineid.id())

    |


    .. image:: Images/checkmachineid.png
        :align: center
    
    请把上方的机器码提供给你的支持工程师或者客服，他们会帮助你获取权限。

    |

你也可以使用以下方法检查你的license
------------------------------------
    
    打开软件的安装目录，通常在 **C:\Program Files\WeRobotics**，找到 **licensemanager_gui.exe**，双击运行打开 **DaoAI License Manager**。

    .. image:: Images/gui.png
        :align: center

    |

    打开 DaoAI License Manager 后，像下图显示：空白，无有效license。

    .. image:: Images/no_license.png
        :align: center

    如果显示的如下图，有详细的license信息，证明此电脑已经存在有效权限，并显示有效期。

    .. image:: Images/valid_license.png
        :align: center


获取到license后如何激活
------------------------------------    

    .. image:: Images/import_license.png
        :align: center

    你的支持工程师或者客服会在服务器上激活后，获取到一个激活文件，激活文件是 **.lic**的后缀文件。你只需要打开你的 **DaoAI License Manager**，选择 **import**，选择激活文件即可。





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



如何用其他电脑访问DaoAI Vision Pilot
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

    查看被访问端DaoAI Vision Pilot的IP及端口号，可以看到IP及端口是：192.168.1.35:3001

    .. image:: Images/8.png
        :align: center 
        :scale: 65%
    
    在访问端电脑浏览器输入被访问端DaoAI Vision Pilot的IP及端口号，这样就可以正常访问了

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

手眼标定失败或结果误差大?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    - 首先我们需要先检查相机自身的精度是否小与0.2%。
        -使用“DaoAI InspaceTRA”连接上相机之后、拍一个标定板、点击“Evaluate accuracy”，下方会显示相机精度分析结果。
    .. image:: Images/如何检查相机精度.png
        :align: center 
        :scale: 100%


    - 检查相机支架是否晃动或机器人运行时相机是否摇晃。
    - 检查机器人到位之后发给视觉机器人当前pose与机器人的X Y Z 数值是否一致。
    - 检查标定板行列数及圆心距是否正确。
    - 可以尝试将相机cfg参数曝光降低或者增亮。

当机器人末端坐标Z轴朝向不是垂直向下时需要怎样调整才可以配合视觉使用防碰撞模块?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    - 首先我们需要新建一个机器人Tcp、使新建的Tcp Z轴朝下
    
      - 原因：因为视觉防碰撞模块检测的是object坐标Z轴与机器人Tool坐标Z轴的夹角、比如：两个Z轴夹角超过30度、防碰撞模块判定该物体不可抓取、有碰撞风险

安装软件后无法启动，是否安装过其他版本的Vision软件、或者Python、或者Chocolatey?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    - 是否在此工作机/电脑曾经安装过其他版本的Vision Studio或者Vision Cognition System? 如果你的答案是“是”或者“不确定”，请你打开“控制面板”，检查是否存在其他版本的软件，或者存在其他版本的Python程序。
    .. image:: Images/是否存在旧版本软件.png
        :align: center
        :scale: 100%

    - 如果你的控制面板显示了过去任意版本的Vision  Cognition System或者WeRobotic软件，请将他们删除。右键点击程序，选择“卸载”。
    .. image:: Images/卸载它们.png
        :align: center 
        :scale: 100%

    - Python程序可同时兼容多版本，如下图显示：该电脑上安装了 Python 3.6.0 和 Python 3.8.3 。这样是可以的，除了另一种情况：电脑上安装了 Python 3.8.9 。Vision Cognition System安装包会自动安装 Python 3.8.3 ，当该电脑出现相同的大版本（3.8为大版本）时，可能会导致 Python 3.8.3 无法安装。需手动卸载其余的 Python 3.8 版本，或者重新安装 Python 3.8.3 版本。
    - 不清楚该电脑是否存在Python 3.8 版本？没关系，继续往后阅读，后面会有方法辨识电脑上是否存在 Python 3.8 版本程序。
    .. image:: Images/是否存在旧版本软件.png
        :align: center 
        :scale: 100%

    - 使用 Python 3.8.3 安装包安装时，需注意电脑是否是 **64-bit操作系统**。如果该电脑为x64操作系统，需要运行 **x64**的Python安装包，通常为 **amd64**结尾的安装包。
    .. image:: Images/64bit.png
        :align: center 
        :scale: 100%

    - 如何查看自己的电脑是什么操作系统？打开菜单，点击 **“设置”**，进入 **“系统”**，点击 **“关于”**，显示 **64-bit 操作系统**。
    .. image:: Images/about.png
        :align: center 
        :scale: 100%

    - 运行 Python 3.8.3 安装包安装时，安装包会自动识别该电脑上是否存在 Python 3.8 版本软件。如果有，运行安装包后显示如下选项：选择 **“卸载”**，把原有的 Python 3.8 卸载掉。如果卸载失败，请选择 **“修复”**，使python程序修复完成后重新运行安装包，即可卸载。
    .. image:: Images/python_exist.png
        :align: center 
        :scale: 100%

    - 安装 Python 3.8.3 时，需要勾选 **“添加Python到PATH”**，然后选择 **“自定义安装”** 。
    .. image:: Images/addtopath.png
        :align: center 
        :scale: 100%

    - 选择 **“下一步”**。
    .. image:: Images/next.png
        :align: center 
        :scale: 100%

    - 勾选 **“为所有用户安装”**，你会看到安装路径为 **C:\Program Files\Python38**，在此路径上安装才能为所有用户安装。
    .. image:: Images/allusers.png
        :align: center 
        :scale: 100%

    - Python 3.8.3 安装完成。
    .. image:: Images/done.png
        :align: center 
        :scale: 100%

    - Chocolatey程序则无法在控制面版中卸载。打开路径 C:\ProgramData，删除文件夹 “chocolatey”。
    .. image:: Images/uninstallchoco.png
        :align: center 
        :scale: 100%

    - 成功卸载Python和Chocolatey后，重新安装软件即可正常开启。注意：Python程序并非只能安装一个版本。



怎么更新校准文件
~~~~~~~~~~~~~~~~~~~~~~

    更新校准文件可以通过编辑任务来完成。

    首先，您需要有一个更新后的标定文件，您可以现场做一个手眼标定，或者上传一个标定文件。

    .. image:: Images/change_cali_1.png
        :align: center 
        :scale: 100%

    在需要更换手眼标定文件的任务栏里，点击更新任务设置（update task settings）, 然后更换您需要的标定文件，点击更新任务即可。

    .. image:: Images/change_cali_2.png
        :align: center 
        :scale: 100%
    - 成功安装好 Python 3.8.3 和卸载Chocolatey后，重新安装软件即可正常开启。


安装软件后无法启动，显示 webio_server.exe - System Error/Syntax Error
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    - 开启软件时无法运行，显示无法找到 **tingmxl2.dll** 或者其他dll。此问题多数由于Chocolatey没有正确安装，或者没有安装上Chocolatey的所需包裹。需要卸载Chocolatey或者重新运行安装包，重装软件。
    .. image:: Images/tinyxml2.dll.png
        :align: center 
        :scale: 100%

    - Chocolatey程序则无法在控制面版中卸载。打开路径 C:\ProgramData，删除文件夹 “chocolatey”。
    .. image:: Images/uninstallchoco.png
        :align: center 
        :scale: 100%

    - 成功安装好 Chocolatey后，重新安装软件即可正常开启。

软件显示窗口无法显示
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    - 相机拍照后、显示窗口无法显示点云数据，此情况下我们需要安装或更新工控机的显卡驱动 :ref:`如何安装或更新GPU驱动`
