常见问题 
===========

.. contents::
    :local:


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