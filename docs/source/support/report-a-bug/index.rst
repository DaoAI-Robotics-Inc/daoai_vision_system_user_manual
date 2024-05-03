提交一个bug
============

Bug报告的原则是让任何人都能够理解问题并轻松地重现它。

收集数据
------------

首先，完整提供以下信息：

#. 软件版本。
    * DaoAI Vision Pilot
        .. image:: images/faq-version.png
            :scale: 60%
    
    * DaoAI 3D相机工作室
        .. image:: images/faq-camera-version.png
            :scale: 80%

#. 现象描述。

#. 详细的重现步骤，要包括文字描述和屏幕截图或者屏幕录制。

    .. tip:: 如果无法重现错误，请列出在出现错误之前的所有操作。

#. 压缩特定的工作空间文件夹。包含重现错误所需的所有文件（dcf数据、深度学习模型和配置文件）。
    .. image:: images/faq-data-folder.png

#. 如果错误导致软件崩溃，请在 **"C:\\ProgramData\\DaoAI\\Vision\\Crashpad\\db\\reports"** 路径下查找由崩溃生成的DMP文件。
    .. image:: images/faq-crashpad-path.png

    .. important:: ProgramData是Windows中的一个隐藏文件夹，请选中此框以显示隐藏项目。
        
        .. image:: images/faq-crashpad-view-hidden.png

    .. attention:: 在崩溃发生时，可能在短时间内生成多个DMP文件。请将它们全部上传。

联系我们
--------------

如果您找不到解决问题的方法，请随时联系我们：

    #. 前往 `帮助中心 <https://daoai.atlassian.net/servicedesk/customer/portals>`_ 查看是否有类似的问题，并查看是否有适用于您的解决方案。
    #. 前往 `帮助中心 <https://daoai.atlassian.net/servicedesk/customer/portals>`_ 提交您的问题。一旦我们收到工单，我们将尽快与您联系！
    #. 直接联系您的现场支持工程师。

当您报告问题时，为了帮助我们解决问题，以下信息将非常有用：

    * 写下您的问题描述。
    * 重现问题的步骤。
    * 软件版本和工作空间，以及.dcf数据。
    * 附加的屏幕截图将有助于我们定位问题。
    * 您的姓名、联系电子邮件地址和电话号码（如果需要）。
