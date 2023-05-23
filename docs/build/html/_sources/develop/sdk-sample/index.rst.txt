SDK 示例
=================================

.. contents:: 
   :local:

采集教程
---------------------

本教程介绍了如何使用DaoAI SDK来采集点云和二维图像。

前提条件
~~~~~~~~~~~~~~~~~~~

.. tabs::

   .. group-tab:: C++

      - 安装DaoAI相机工作室软件

   .. group-tab:: C#

      - 安装DaoAI相机工作室软件

   .. group-tab:: Python

      - 安装 Python

      - 通过在你的命令行中输入follow命令来检查你的python版本，然后选择一个SDK包：
         
         ..  code-block:: python
            
            python --version

         - Python version 3.8: DaoAI_SDK-xx-cp38-xx-xx.whl
         - Python version 3.9: DaoAI_SDK-xx-cp39-xx-xx.whl
         - Python version 3.10: DaoAI_SDK-xx-cp310-xx-xx.whl
         - Python version 3.11: DaoAI_SDK-xx-cp311-xx-xx.whl

      - 安装 DaoAI_SDK

      ..  code-block:: python

         py -m pip install path/to/DaoAI_SDK-xx-xx.xx.xx.whl 

      - 如果所需的依赖项在发布时没有被捆绑到软件包中：

         - 在你的Python程序的顶部添加以下几行代码，告诉Python在哪里找到所需的依赖（只需要一次）。
      
         ..  code-block:: python

            import os
            daoai_slc_path = os.getenv('DAOAI_SLC_PATH') # System enviornment variable should point to DaoAI Studio Release path.
            os.add_dll_directory(daoai_slc_path + '') # Various dependencies
            os.add_dll_directory(daoai_slc_path + '/bin') # Various dependencies
            os.add_dll_directory(daoai_slc_path + '/SDK/bin') # Directory including slc_dll.dll

      - 要使用API函数，请将SDK导入到python中。

      ..  code-block:: python

         from DaoAI_SDK import *

      - All set to use the Python API! 

帮助函数
-------------------

.. tabs::

   .. group-tab:: C++

      .. code-block:: C++

         // 用于检查返回的SlcSdkError对象的错误信息的辅助工具。
         bool hasError(DaoAI::SlcSdkError error_info) {
             if (error_info.status() == DaoAI::SlcSdkSuccess) { // 状态代码SlcSdkSuccess表示没有发现错误。
                 return false;
             }
             else {
                 // 请查阅文档或头文件error.h了解不同错误状态代码的含义。
                 // 大多数错误会有一个详细的描述，有助于调试。参见SlcSdkError.details()。
                 //     注意：即使状态码是SlcSdkSuccess，细节部分仍然可能包括警告。
                 std::cout << "ERROR " << error_info.status() << ": " << error_info.details() << std::endl;
                 return true;
             }
         }

   .. group-tab:: C#

      .. code-block:: c#

         static bool HasError(DaoAINETError err)
         {
            if (err.status() == DaoAINETStatus.SlcSdkSuccess)
            {
                  return false;  // 状态代码SlcSdkSuccess表示没有发现错误。
            }
            else
            {
                  // 请查阅文档了解不同错误状态代码的含义。
                  // 大多数错误会有详细的描述，对调试有帮助。参见DaoAINETError.details()。
                  // 注意：即使状态码是SlcSdkSuccess，细节部分仍然可能包括警告。
                  Console.WriteLine("ERROR: " + err.status() + ": " + err.details());
                  System.Threading.Thread.Sleep(20000);
                  return true;
            }
         }

   .. group-tab:: Python

      ..  code-block:: python

         # 用于检查返回的SlcSdkError对象的错误信息的辅助工具。
         def hasError(err):
            if (err.status() == SlcSdkSuccess): # A status code of SlcSdkSuccess indicates that no error is detected.
                  return False
            else:
                  # 请查阅文档了解不同错误状态代码的含义。
                  # 大多数错误会有详细的描述，对调试有帮助。参见DaoAINETError.details()。
                  # 注意：即使状态码是SlcSdkSuccess，细节部分仍然可能包括警告。
                  print("ERROR: ", err.status(), ": ", err.details())
                  return True


设置
------------------

.. tabs::

   .. group-tab:: C++

      .. code-block:: C++
         
         // 设置 ==========================================================================================================
         // 声明一个错误返回对象，以检查整个应用程序的错误。
         DaoAI::SlcSdkError ret;

         // 创建一个新的DaoAI应用程序实例。
         DaoAI::Application* app = new DaoAI::Application();

         // 指定用于记录的目录。日志包含详细的错误和进程信息。
         std::string logging_directory = "../../Logs/";
         ret = app->startLogging(logging_directory);
         if (hasError(ret)) { return -1; } // Check for errors

         // 如果使用远程相机，请指定远程IP地址。
         std::string remote_ip = "192.168.1.2";

         // 声明相机地图，该地图将用于获取所有连接的DaoAI相机。
         std::map<std::string, DaoAI::Camera*> cameras;

         //  从应用程序中获取相机。这一步必须在尝试连接任何相机之前完成。
         ret = app->getCameras(cameras, remote_ip);
         if (hasError(ret)) { return -1; } // Check for errors

         if (cameras.size() == 0) {
            return -1; // 必须检测到至少有一台相机。
         }
         std::cout << cameras.size() << " cameras detected." << std::endl;
         for (std::pair<std::string, DaoAI::Camera*> pair : cameras) {
            std::cout << "	" << pair.first << std::endl; // 打印检测到的相机的序列号。
         }

         // 声明指向DaoAI相机对象的指针。
         DaoAI::Camera* cam;

   .. group-tab:: C#

      .. code-block:: c#

         // 设置 ==========================================================================================================
         // 声明一个错误返回对象，以检查整个应用程序的错误。
         DaoAINETError err;

         // 创建一个新的DaoAI应用程序实例。
         Application app = new Application();

         // 指定用于记录的目录。日志包含详细的错误和进程信息。
         string logging_directory = "../../../../../Logs/";

         err = app.startLogging(logging_directory);

         if (HasError(err)) { return; } // Check for errors


         // 如果使用远程相机，请指定远程IP地址。
         string remote_ip = "192.168.1.2";

         // 声明一个相机的字典，它将被用来获取所有连接的DaoAI相机。
         // 字典包含在Systems.Collections.Generic命名空间中。
         Dictionary<string, Camera> cameras = new Dictionary<string, Camera>();

         // 从应用程序中获取相机。这一步必须在尝试连接任何相机之前完成。
         err = app.getCameras(ref cameras, remote_ip);
         if (HasError(err)) { return; } // Check for errors

         if (cameras.Count == 0)
         {
               return; // 必须检测到至少有一台相机。
         }
         Console.WriteLine(cameras.Count + " cameras detected.");

         foreach (KeyValuePair<string, Camera> pair in cameras)
         {
               Console.WriteLine("   " + pair.Key);  // 打印检测到的相机的序列号。
         }
         
   .. group-tab:: Python

      ..  code-block:: python
         
         # 设置 ==========================================================================================================
         # 创建一个新的DaoAI应用程序实例。
         app = Application()

         # 指定用于记录的目录。日志包含详细的错误和进程信息。
         logging_directory = "../../Logs/"
         err = app.startLogging(logging_directory)
         if (hasError(err)): return

         # 如果使用远程相机，请指定远程IP地址。
         remote_ip = "192.168.1.2"

         # 从应用程序中获取相机。这一步必须在尝试连接任何相机之前完成。
         cams, err = app.getCameras(remote_ip) # remote_ip is optional if using a USB camera.
         if (hasError(err)): return

         if (len(cams) == 0):
            return # At least one camera must be detected.
         print(len(cams), " cameras detected: ")
         for serial, cam in cams.items(): # Cams is a dictionary of serial number -> camera object.
            print("    ", serial) # Print all serial numbers of detected cameras.


连接相机
------------------------

连接相机有3个选项。

.. tabs::

   .. group-tab:: C++

      .. code-block:: C++

         // 连接相机 =========================================================================================
         // 必须先连接一个DaoAI相机，然后才能使用它进行采集。
         // 选项 1：连接到第一个检测到的DaoAI相机。
         ret = app->connectCamera(cam);
         if (hasError(ret)) { return -1; } // Check for errors
         ret = cam->disConnect();
         if (hasError(ret)) { return -1; } // Check for errors

         // 选项 2：通过序列号连接到特定的相机。
         std::string serial_num = cameras.begin()->first; // 从地图上的第一台相机上获取序列号。
         // 方法 A
         ret = app->connectCamera(serial_num, cam);
         if (hasError(ret)) { return -1; } // Check for errors
         ret = app->disconnectCamera(serial_num); //  也可以通过序列号断开摄像头。
         if (hasError(ret)) { return -1; } // Check for errors
         // 方法 B
         cam = cameras[serial_num];
         ret = cam->connect();
         if (hasError(ret)) { return -1; } // Check for errors
         ret = app->disconnectCamera(serial_num);
         if (hasError(ret)) { return -1; } // Check for errors

         // 选项 3：连接在相机地图中发现的任何相机。
         if (cameras.size() > 0) {
            cam = cameras.begin()->second;
         }
         ret = cam->connect();
         if (hasError(ret)) { return -1; } // Check for errors

   .. group-tab:: C#

      .. code-block:: c#

         // 连接相机 =========================================================================================
         // 必须先连接一个DaoAI相机，然后才能使用它进行采集。
         // 选项 1：连接到第一个检测到的DaoAI相机。
         err = app.connectCamera(ref cam);
         if (HasError(err)) { return; } // Check for errors
         err = cam.disConnect();
         if (HasError(err)) { return; } // Check for errors

         // 选项 2：通过序列号连接到特定的相机。
         string serial_num = cameras.Keys.First(); // 从地图上的第一台相机上获取序列号。
               // 方法 A
         err = app.connectCamera(serial_num, ref cam);
         if (HasError(err)) { return; } // Check for errors
         err = cam.disConnect();
         if (HasError(err)) { return; } // Check for errors
               // 方法 B
         cam = cameras[serial_num];
         err = cam.connect();
         if (HasError(err)) { return; } // Check for errors
         err = cam.disConnect();
         if (HasError(err)) { return; } // Check for errors

         // 选项 3：连接在相机地图中发现的任何相机。
         if (cameras.Count > 0)
         {
               cam = cameras.Values.First();
         }
         err = cam.connect();
         if (HasError(err)) { return; } // Check for errors

   .. group-tab:: Python

      ..  code-block:: python

         # 连接相机 =========================================================================================
         # 必须先连接一个DaoAI相机，然后才能使用它进行采集。
         # 选项 1：连接到第一个检测到的DaoAI相机。
         cam, err = app.connectCamera()
         if (hasError(err)): return
         cam.disConnect()
         if (hasError(err)): return

         # 选项 2：通过序列号连接到特定的相机。
         serial_number = list(cams.keys())[0] # Grab serial number from first camera in dictionary.
         # 方法 A
         cam, err = app.connectCamera(serial_number)
         if (hasError(err)): return
         cam.disConnect()
         if (hasError(err)): return
         # 方法 B
         cam = cams[serial_number]
         err = cam.connect()
         if (hasError(err)): return
         cam.disConnect()
         if (hasError(err)): return

         # 选项 3：连接在相机地图中发现的任何相机。
         cam = list(cams.values())[0] # Grab first camera object in dictionary.
         err = cam.connect()
         if (hasError(err)): return


相机动作
-----------------

获取序列号、相机固有参数和相机设置信息。

.. tabs::

   .. group-tab:: C++

      .. code-block:: C++

         // 相机动作 =================================================================================================
         // 有些相机操作需要相机，请务必查看文档和错误信息。
         // 检查相机是否已连接。
         if (!cam->isConnected()) {
            return -1;
         }

         // 获取此相机的序列号。
         serial_num = cam->getSerialNumber();
         std::cout << "Serial number of connected camera is " << serial_num << std::endl;

         // 获取相机内参。
         std::vector<float> intrinsic_params;
         ret = cam->getIntrinsicParam(intrinsic_params);
         if (hasError(ret)) { return -1; } // Check for errors

         // 获取此相机当前的使用设置。
         DaoAI::Settings settings = cam->getSettings();

   .. group-tab:: C#

      .. code-block:: c#

         // 相机动作 =================================================================================================
         // 有些相机操作需要相机已连接，请务必查看文档和错误信息。
         // 检查相机是否已连接。
         if (!cam.isConnected())
         {
               return;
         }

         // 获取此相机的序列号。
         serial_num = cam.getSerialNumber();
         Console.WriteLine("Serial number of connected camera is " + serial_num);

         // 获取相机内参。
         float[] intrinsic_params = new float[] { };
         err = cam.getIntrinsicParam(ref intrinsic_params);
         if (HasError(err)) { return; } // Check for errors

         // 获取此相机当前的使用设置。
         Settings settings = cam.getSettings();

   .. group-tab:: Python

      ..  code-block:: python

         # 相机动作 =================================================================================================
         # 有些相机操作需要相机已连接，请务必查看文档和错误信息。
         # 检查相机是否已连接。
         if not cam.isConnected():
            return

         # 获取此相机的序列号。
         serial_num = cam.getSerialNumber()
         print("Serial number of connected camera is ", serial_num)

         # 获取相机内参。
         params, err = cam.getIntrinsicParam()
         if (hasError(err)): return

         # 获取此相机当前的使用设置。
         settings = cam.getSettings()

相机设置
-------------------

创建相机设置并从相机设置文件中加载。

.. tabs::

   .. group-tab:: C++

      .. code-block:: C++

         // 相机设置 ================================================================================================
         // DaoAI Settings 可以与相机一起使用，在拍摄和重建过程中调整参数。
         DaoAI::Settings new_settings;
         int icurr, imin, imax; // 用这些来查询整数设置。
         double dcurr, dmin, dmax; // 用这些来查询双精度浮点型设置。
         bool bcurr; // 用这个来查询布尔值设置。
         std::string scurr; // 用这个来查询字符串的设置。
         bool is_enabled; // 用这个来检查一个设置是否被启用。
         int inewval; // 用这个来为一个设置设置一个新的整数值。
         double dnewval; // 用这个来为一个设置设置一个新的双精度浮点型值。
         bool bnewval; // 用这个来为一个设置设置一个新的布尔值。
         // 创建新的空相机设置。
         new_settings = DaoAI::Settings();
         // 从文件中加载现有的相机设置。
         std::string path_to_settings = "../../Examples/sample_settings.cfg";
         new_settings = DaoAI::Settings(path_to_settings);
         // Clone 设置
         new_settings = DaoAI::Settings(settings);

   .. group-tab:: C#

      .. code-block:: c#

         // 相机设置 ================================================================================================
         // DaoAI Settings 可以与相机一起使用，在拍摄和重建过程中调整参数。
         Settings new_settings;
         int icurr = -1, imin = -1, imax = -1; // 用这些来查询整数设置。
         double dcurr = -1.0, dmin = -1.0, dmax = -1.0; // 用这些来查询双精度浮点型设置。
         bool bcurr = false; // 用这个来查询布尔值设置。
         string scurr = ""; // 用这个来查询字符串的设置。
         bool is_enabled = false; // 用这个来检查一个设置是否被启用。
         int inewval = 0; // 用这个来为一个设置设置一个新的整数值。
         double dnewval = 0.0; // 用这个来为一个设置设置一个新的双精度浮点型值。
         bool bnewval = true ; // 用这个来为一个设置设置一个新的布尔值。
         
         // 创建新的空相机设置。
         new_settings = new Settings();
         // 从文件中加载现有的相机设置。
         string path_to_settings = "../../../../../Examples/sample_settings.cfg";
         new_settings = new Settings(path_to_settings);
         // Clone 设置
         new_settings = new Settings(settings);

   .. group-tab:: Python

      ..  code-block:: python

         # 相机设置 ================================================================================================
         # DaoAI Settings 可以与相机一起使用，在拍摄和重建过程中调整参数。 Create a new empty settings object.
         # 创建新的空相机设置。
         new_settings = Settings()
         # 从文件中加载现有的相机设置。
         path_to_settings = "../../Examples/sample_settings.cfg"
         new_settings = Settings(path_to_settings)
         # Clone 设置
         new_settings = Settings(settings)


采集帧
~~~~~~~~~~~~~~~~~~~~~~~

配置采集帧参数。

.. tabs::

   .. group-tab:: C++

      .. code-block:: C++

         // 采集帧
         // 采集帧指定在图像采集过程中使用的参数。一个设置对象最多可以支持10个。
         // 每个采集框都有三个可修改的参数： 亮度、增益和曝光档。
         // 详情请参见文档。
         DaoAI::AcquisitionFrame af;

         // 创建默认的 AcquisitionFrame
         af = DaoAI::AcquisitionFrame();

         // 用初始值创建 AcquisitionFrame 
         int brightness = 3;
         double gain = 2.0;
         int exposure_stop = -1;
         af = DaoAI::AcquisitionFrame(brightness, gain, exposure_stop);

         // 查看任何 AcquisitionFrame 参数的当前值和可接受范围。
         ret = af.inquireSetting(DaoAI::AcquisitionFrame::ExposureStop, icurr, imin, imax);
         if (hasError(ret)) { return -1; } // Check for errors
         std::cout << "Current exposure stop: " << icurr << ". Exposure stop can be configured to any value between " << imin << " - " << imax << std::endl;
         ret = af.inquireSetting(DaoAI::AcquisitionFrame::ExposureStop, icurr); // Inquire only current value.
         if (hasError(ret)) { return -1; } // Check for errors

         // 将任何AcquisitionFrame参数配置为一个自定义值。
         ret = af.configureSetting(DaoAI::AcquisitionFrame::ExposureStop, 2);
         if (hasError(ret)) { return -1; } // Check for errors

         // 双精度浮点参数也可以用双精度浮点值进行检索和修改。
         ret = af.inquireSetting(DaoAI::AcquisitionFrame::Gain, dcurr, dmin, dmax);
         if (hasError(ret)) { return -1; } // Check for errors
         std::cout << "Current gain: " << dcurr << ". Gain can be configured to any value between " << dmin << " - " << dmax << std::endl;
         ret = af.inquireSetting(DaoAI::AcquisitionFrame::Gain, dcurr); // Inquire only current value.
         if (hasError(ret)) { return -1; } // Check for errors

         ret = af.configureSetting(DaoAI::AcquisitionFrame::Gain, 2);
         if (hasError(ret)) { return -1; } // Check for errors

         // 使用不正确的类型来配置或查询一个参数会成功，但会返回一个警告。
         ret = af.inquireSetting(DaoAI::AcquisitionFrame::Gain, icurr, imin, imax);
         if (hasError(ret)) { return -1; } // Check for errors
         std::cout << ret.details() << std::endl; // Warning about possible data loss, attempting to read double as int.
         dnewval = 1.5;
         ret = af.configureSetting(DaoAI::AcquisitionFrame::ExposureStop, dnewval);
         if (hasError(ret)) { return -1; } // Check for errors
         std::cout << ret.details() << std::endl; // Warning about possible data loss, attempting to set int with double.

         // 在设置中添加采集帧。
         int index; // Index of added acquisition frame.
         ret = new_settings.addAcquisitionFrame(af, index);
         if (hasError(ret)) { return -1; } // Check for errors

         // 获取采集帧。
         DaoAI::AcquisitionFrame returned_af;
         ret = new_settings.getAcquisitionFrame(returned_af, 1);
         if (hasError(ret)) { return -1; } // Check for errors

         // 删除索引值的采集帧。
         ret = new_settings.deleteAcquisitionFrame(index);
         if (hasError(ret)) { return -1; } // Check for errors

         // 不获取索引添加采集帧。
         ret = new_settings.addAcquisitionFrame(af);
         if (hasError(ret)) { return -1; } // Check for errors

         // 修改并替换索引1处的采集帧。
         ret = af.configureSetting(DaoAI::AcquisitionFrame::Brightness, 2);
         if (hasError(ret)) { return -1; } // Check for errors
         ret = new_settings.modifyAcquisitionFrame(af, 1);
         if (hasError(ret)) { return -1; } // Check for errors

         std::map<int, DaoAI::AcquisitionFrame> mofaf;
         // 获取整个采集帧地图的副本。
         ret = new_settings.getAcquisitionFrames(mofaf);
         if (hasError(ret)) { return -1; } // Check for errors

         // 将采集帧的地图设置为设置。
         mofaf[1] = DaoAI::AcquisitionFrame(1, 0, 1);
         mofaf[2] = DaoAI::AcquisitionFrame(2, 2, 2);
         ret = new_settings.setAcquisitionFrames(mofaf);
         if (hasError(ret)) { return -1; } // Check for errors

   .. group-tab:: C#

      .. code-block:: c#

         // 采集帧
         // 采集帧指定在图像采集过程中使用的参数。一个设置对象最多可以支持10个。
         // 每个采集框都有三个可修改的参数： 亮度、增益和曝光档。
         // 详情请参见文档。
         AcquisitionFrame af;

         // 创建默认的 AcquisitionFrame
         af = new AcquisitionFrame();

         // 用初始值创建 AcquisitionFrame 
         int brightness = 3;
         double gain = 2.0;
         int exposure_stop = -1;
         af = new AcquisitionFrame(brightness, gain, exposure_stop);

         // 查看任何 AcquisitionFrame 参数的当前值和可接受范围。
         err = af.inquireSetting(AcquisitionFrame.AcquisitionFrameSetting.ExposureStop, ref icurr, ref imin, ref imax);
         if (HasError(err)) { return; } // Check for errors
         Console.WriteLine("Current exposure stop: " + icurr + ". Exposure stop can be configured to any value between " + imin + " - " + imax);
         err = af.inquireSetting(AcquisitionFrame.AcquisitionFrameSetting.ExposureStop, ref icurr); // Inquire only current value.
         if (HasError(err)) { return; } // Check for errors

         // 将任何AcquisitionFrame参数配置为一个自定义值。
         err = af.configureSetting(AcquisitionFrame.AcquisitionFrameSetting.ExposureStop, 2);
         if (HasError(err)) { return; } // Check for errors

         // 双精度浮点参数也可以用双精度浮点值进行检索和修改。
         err = af.inquireSetting(AcquisitionFrame.AcquisitionFrameSetting.Gain, ref dcurr, ref dmin, ref dmax);
         if (HasError(err)) { return; } // Check for errors
         Console.WriteLine("Current gain: " + dcurr + ". Gain can be configured to any value between " + dmin + " - " + dmax);
         err = af.inquireSetting(AcquisitionFrame.AcquisitionFrameSetting.Gain, ref dcurr); // Inquire only current value.
         if (HasError(err)) { return; } // Check for errors

         err = af.configureSetting(AcquisitionFrame.AcquisitionFrameSetting.Gain, 2.1);
         if (HasError(err)) { return; } // Check for errors

         // 使用不正确的类型来配置或查询一个参数会成功，但会返回一个警告。
         err = af.inquireSetting(AcquisitionFrame.AcquisitionFrameSetting.Gain, ref icurr, ref imin, ref imax);
         if (HasError(err)) { return; } // Check for errors
         Console.WriteLine(err.details()); // Warning about possible data loss, attempting to read double as int.
         dnewval = 1.5;
         err = af.configureSetting(AcquisitionFrame.AcquisitionFrameSetting.ExposureStop, dnewval);
         if (HasError(err)) { return; } // Check for errors
         Console.WriteLine(err.details()); // Warning about possible data loss, attempting to set int with double.

         // 在设置中添加采集帧。
         int index = -1; // Index of added acquisition frame.
         err = new_settings.addAcquisitionFrame(af, ref index);
         if (HasError(err)) { return; } // Check for errors

         // 获取采集帧。
         AcquisitionFrame returned_af = new AcquisitionFrame();
         err = new_settings.getAcquisitionFrame(ref returned_af, 1);
         if (HasError(err)) { return; } // Check for errors

         // 删除索引值的采集帧。
         err = new_settings.deleteAcquisitionFrame(index);
         if (HasError(err)) { return; } // Check for errors

         // 不获取索引添加采集帧。
         err = new_settings.addAcquisitionFrame(af);
         if (HasError(err)) { return; } // Check for errors

         // 修改并替换索引1处的采集帧。
         err = af.configureSetting(AcquisitionFrame.AcquisitionFrameSetting.Brightness, 2);
         if (HasError(err)) { return; } // Check for errors
         err = new_settings.modifyAcquisitionFrame(af, 1);
         if (HasError(err)) { return; } // Check for errors

         Dictionary<int, AcquisitionFrame> mofaf = new Dictionary<int, AcquisitionFrame>();
         // Get copy of entire dictionary of acquisition frames currently saved in settings.
         err = new_settings.getAcquisitionFrames(ref mofaf);
         if (HasError(err)) { return; } // Check for errors

         // 将采集帧的地图设置为设置。请记住，采集帧的字典是单索引的。
         mofaf[1] = new AcquisitionFrame(1, 0, 1);
         mofaf[2] = new AcquisitionFrame(2, 2, 2);
         err = new_settings.setAcquisitionFrames(mofaf);
         if (HasError(err)) { return; } // Check for errors

   .. group-tab:: Python

      ..  code-block:: python

         # 采集帧
         # 采集帧指定在图像采集过程中使用的参数。一个设置对象最多可以支持10个。
         # 每个采集框都有三个可修改的参数： 亮度、增益和曝光档。
         # 创建默认的 AcquisitionFrame
         af = AcquisitionFrame()

         # 用初始值创建 AcquisitionFrame 
         brightness = 3
         gain = 2.0
         exposure_stop = -1
         af = AcquisitionFrame(brightness, gain, exposure_stop)

         # 查看任何 AcquisitionFrame 参数的当前值和可接受范围。
         curr, min, max, err = af.inquireSetting(ExposureStop)
         if (hasError(err)): return
         print("Current exposure stop: ", curr, ". Exposure stop can be configured to any value between ", min, " - ", max)

         # 将任何AcquisitionFrame参数配置为一个自定义值。
         err = af.configureSetting(ExposureStop, 2)
         if (hasError(err)): return

         # 浮点参数也可以用浮点值进行检索和修改。
         curr, min, max, err = af.inquireSetting(Gain)
         if (hasError(err)): return
         print("Current gain: ", curr, ". Gain can be configured to any value between ", min, " - ", max)

         err = af.configureSetting(Gain, 2.1)
         if (hasError(err)): return

         # 使用不正确的类型来配置或查询一个参数会成功，但会返回一个警告。
         err = af.configureSetting(ExposureStop, 1.5) # ExposureStop does not support decimal values, and will configure to 1.0
         if (hasError(err)): return
         print(err.details()) # No error is returned, but details will include a warning.

         # 在设置中添加采集帧。
         idx, err = new_settings.addAcquisitionFrame(af) # Returns the index of the newly added acquisition frame.
         if (hasError(err)): return

         # 获取采集帧。
         returned_af, err = new_settings.getAcquisitionFrame(1) # Get frame at index 1
         if (hasError(err)): return

         # 删除索引值的采集帧。
         err = new_settings.deleteAcquisitionFrame(idx)
         if (hasError(err)): return
         
         # 修改并替换索引1处的采集帧。
         err = af.configureSetting(Brightness, 2)
         if (hasError(err)): return
         err = new_settings.modifyAcquisitionFrame(af, 1)
         if (hasError(err)): return

         # 获取当前保存在设置中的整个采集帧字典的副本。
         mofaf, err = new_settings.getAcquisitionFrames()
         if (hasError(err)): return

         # 将采集帧的地图设置为设置。请记住，采集帧的字典是单索引的。
         mofaf[1] = AcquisitionFrame(1, 0, 1)
         mofaf[2] = AcquisitionFrame(2, 2, 2)
         err = new_settings.setAcquisitionFrames(mofaf)
         if (hasError(err)): return

采集助手
~~~~~~~~~~~~~~~~~~~~

通过分析给定时间段的场景，自动计算采集帧设置。

.. tabs::

   .. group-tab:: C++

      .. code-block:: C++

         // 采集助手
         // 分析场景并生成采集帧设置，所有采集帧的总时间将小于时间预算。
         // 时间预算越高，生成的采集帧就越多。
         std::map<int, DaoAI::AcquisitionFrame> ca_mofaf;
         ret = cam->captureAssistant(1.0, ca_mofaf);  // Generate a map of acquisition frames with time budget of 1 sec.
         if (hasError(ret)) { return -1; }
         ret = new_settings.setAcquisitionFrames(ca_mofaf);  // Set the generated acquisition frames to camera settings
         if (hasError(ret)) { return -1; }
         ret = cam->setSettings(new_settings);  // Apply the camera settings to camera
         if (hasError(ret)) { return -1; }
         DaoAI::Frame ca_frm;
         ret = cam->capture(ca_frm);  // Capture point cloud
         if (hasError(ret)) { return -1; }

   .. group-tab:: C#

      .. code-block:: c#

         // 采集助手
         // 分析场景并生成采集帧设置，所有采集帧的总时间将小于时间预算。
         // 时间预算越高，生成的采集帧就越多。
         Dictionary<int, AcquisitionFrame> ca_mofaf = new Dictionary<int, AcquisitionFrame>();
         err = cam.captureAssistant(1.0, ref ca_mofaf);  // Generate a map of acquisition frames with time budget of 1 sec.
         if (HasError(err)) { return; }
         err = new_settings.setAcquisitionFrames(ca_mofaf);  // Set the generated acquisition frames to camera settings
         if (HasError(err)) { return; }
         err = cam.setSettings(new_settings);  // Apply the camera settings to camera
         if (HasError(err)) { return; }
         Frame ca_frm = new Frame();
         err = cam.capture(ref ca_frm);  // Capture point cloud
         if (HasError(err)) { return; }

   .. group-tab:: Python

      ..  code-block:: python

         # 采集助手
         # 分析场景并生成采集帧设置，所有采集帧的总时间将小于时间预算。
         # 时间预算越高，生成的采集帧就越多。
         ca_mofaf, err = cam.captureAssistant(1.0) # Generate a set of acquisition frames with time budget of 1 sec.
         if (hasError(err)): return
         err = new_settings.setAcquisitionFrames(ca_mofaf)  # Set the generated acquisition frames to camera settings
         if (hasError(err)): return  
         err = cam.setSettings(new_settings)  # Apply the camera settings to camera
         if (hasError(err)): return
         ca_frame, err = cam.capture()  # Capture point cloud using generated settings
         if (hasError(err)): return


过滤器设置
~~~~~~~~~~~~~~~~~~~~

创建、读取和修改过滤器设置。

.. tabs::

   .. group-tab:: C++

      .. code-block:: C++

         // 滤镜设置
         // 滤镜设置指定在三维重建过程中使用的参数。关于过滤器设置的完整列表 
         // 和它们的描述，请查阅settings.h和文档。
         // 启用或禁用过滤器设置。
         ret = new_settings.enableFilterSetting(DaoAI::Settings::OutlierThreshold, true); // Enable outlier filter
         if (hasError(ret)) { return -1; } // Check for errors
         ret = new_settings.enableFilterSetting(DaoAI::Settings::GaussianFilter, false); // Disable gaussian filter
         if (hasError(ret)) { return -1; } // Check for errors
         ret = new_settings.enableFilterSetting(DaoAI::Settings::FillGaps, true); // Enable Fill Gaps
         if (hasError(ret)) { return -1; } // Check for errors

         // 检查是否启用了过滤器设置。
         ret = new_settings.checkEnableFilterSetting(DaoAI::Settings::OutlierThreshold, is_enabled); // Check if outlier filter is enabled.
         if (hasError(ret)) { return -1; } // Check for errors
         if (is_enabled) { std::cout << "Outlier filter is enabled!" << std::endl; }
         ret = new_settings.checkEnableFilterSetting(DaoAI::Settings::GaussianFilter, is_enabled); // Check if gaussian filter is enabled.
         if (hasError(ret)) { return -1; } // Check for errors
         if (is_enabled) { std::cout << "Gaussian filter is enabled!" << std::endl; }
         ret = new_settings.checkEnableFilterSetting(DaoAI::Settings::FillGaps, is_enabled); // Enable Fill Gaps
         if (hasError(ret)) { return -1; } // Check for errors
         if (is_enabled) { std::cout << "Fill gaps is enabled!" << std::endl; }

         // 获取一个过滤器设置的当前值和有效范围。
         ret = new_settings.inquireFilterSetting(DaoAI::Settings::OutlierThreshold, dcurr, dmin, dmax);
         if (hasError(ret)) { return -1; } // Check for errors
         std::cout << "Outlier threshold filter has a current value of " << dcurr << ", with a valid range of " << dmin << " - " << dmax << std::endl;
         ret = new_settings.inquireFilterSetting(DaoAI::Settings::OutlierThreshold, dcurr); // Can also get current value without checking range.
         if (hasError(ret)) { return -1; } // Check for errors
         ret = new_settings.inquireFilterSetting(DaoAI::Settings::GaussianFilter, icurr, imin, imax);
         if (hasError(ret)) { return -1; } // Check for errors
         std::cout << "Gaussian filter has a current value of " << icurr << ", with a valid range of " << imin << " - " << imax << std::endl;
         ret = new_settings.inquireFilterSetting(DaoAI::Settings::GaussianFilter, icurr); // Can also get current value without checking range.
         if (hasError(ret)) { return -1; } // Check for errors
         ret = new_settings.inquireFilterSetting(DaoAI::Settings::FillGaps, bcurr);
         if (hasError(ret)) { return -1; } // Check for errors

         // 配置一个过滤器设置。
         inewval = 2;
         dnewval = 3.4;
         bnewval = true;
         ret = new_settings.configureFilterSetting(DaoAI::Settings::OutlierThreshold, dnewval);
         if (hasError(ret)) { return -1; } // Check for errors
         ret = new_settings.configureFilterSetting(DaoAI::Settings::GaussianFilter, inewval);
         if (hasError(ret)) { return -1; } // Check for errors
         ret = new_settings.configureFilterSetting(DaoAI::Settings::FillXFirst, bnewval);
         if (hasError(ret)) { return -1; } // Check for errors

         // 对于数字过滤器的设置，使用类型不匹配的getter或setter会成功，但会发出警告。
         ret = new_settings.inquireFilterSetting(DaoAI::Settings::OutlierThreshold, icurr);
         if (hasError(ret)) { return -1; } // Expect no error (status = DaoAI::SlcSdkSuccess)
         std::cout << ret.details() << std::endl; // Print warning message for using int value to retrieve a double parameter.
         dnewval = 1.5;
         ret = new_settings.inquireFilterSetting(DaoAI::Settings::GaussianFilter, dnewval);
         if (hasError(ret)) { return -1; } // Expect no error (status = DaoAI::SlcSdkSuccess)
         std::cout << ret.details() << std::endl; // Print warning message for using double value to set an integer parameter.


   .. group-tab:: C#

      .. code-block:: c#

         // 滤镜设置
         // 滤镜设置指定在三维重建过程中使用的参数。关于过滤器设置的完整列表 
         // 和它们的描述，请查阅settings.h和文档。
         // 启用或禁用过滤器设置。
         err = new_settings.enableFilterSetting(Settings.FilterSetting.OutlierThreshold, true); // Enable outlier filter
         if (HasError(err)) { return; } // Check for errors
         err = new_settings.enableFilterSetting(Settings.FilterSetting.GaussianFilter, false); // Disable gaussian filter
         if (HasError(err)) { return; } // Check for errors
         err = new_settings.enableFilterSetting(Settings.FilterSetting.FillGaps, true); // Enable Fill Gaps
         if (HasError(err)) { return; } // Check for errors

         // 检查是否启用了过滤器设置。
         err = new_settings.checkEnableFilterSetting(Settings.FilterSetting.OutlierThreshold, ref is_enabled); // Check if outlier filter is enabled.
         if (HasError(err)) { return; } // Check for errors
         if (is_enabled) { Console.WriteLine("Outlier filter is enabled!"); }
         err = new_settings.checkEnableFilterSetting(Settings.FilterSetting.GaussianFilter, ref is_enabled); // Check if gaussian filter is enabled.
         if (HasError(err)) { return; } // Check for errors
         if (is_enabled) { Console.WriteLine("Gaussian filter is enabled!" ); }
         err = new_settings.checkEnableFilterSetting(Settings.FilterSetting.FillGaps, ref is_enabled); // Enable Fill Gaps
         if (HasError(err)) { return; } // Check for errors
         if (is_enabled) { Console.WriteLine("Fill gaps is enabled!"); }

         // 获取一个过滤器设置的当前值和有效范围。
         err = new_settings.inquireFilterSetting(Settings.FilterSetting.OutlierThreshold, ref dcurr, ref dmin, ref dmax);
         if (HasError(err)) { return; } // Check for errors
         Console.WriteLine("Outlier threshold filter has a current value of " + dcurr + ", with a valid range of " + dmin + " - " + dmax);
         err = new_settings.inquireFilterSetting(Settings.FilterSetting.OutlierThreshold, ref dcurr); // Can also get current value without checking range.
         if (HasError(err)) { return; } // Check for errors
         err = new_settings.inquireFilterSetting(Settings.FilterSetting.GaussianFilter, ref icurr, ref imin, ref imax);
         if (HasError(err)) { return; } // Check for errors
         Console.WriteLine("Gaussian filter has a current value of " + icurr + ", with a valid range of " + imin + " - " + imax);
         err = new_settings.inquireFilterSetting(Settings.FilterSetting.GaussianFilter, ref icurr); // Can also get current value without checking range.
         if (HasError(err)) { return; } // Check for errors
         err = new_settings.inquireFilterSetting(Settings.FilterSetting.FillGaps, ref bcurr);
         if (HasError(err)) { return; } // Check for errors

         // 配置一个过滤器设置。
         inewval = 2;
         dnewval = 3.4;
         bnewval = true;
         err = new_settings.configureFilterSetting(Settings.FilterSetting.OutlierThreshold, dnewval);
         if (HasError(err)) { return; } // Check for errors
         err = new_settings.configureFilterSetting(Settings.FilterSetting.GaussianFilter, inewval);
         if (HasError(err)) { return; } // Check for errors
         err = new_settings.configureFilterSetting(Settings.FilterSetting.FillXFirst, bnewval);
         if (HasError(err)) { return; } // Check for errors

         // 对于数字过滤器的设置，使用类型不匹配的getter或setter会成功，但会发出警告。
         err = new_settings.inquireFilterSetting(Settings.FilterSetting.OutlierThreshold, ref icurr);
         if (HasError(err)) { return; } // Expect no error (status = SlcSdkSuccess)
         Console.WriteLine(err.details()); // Print warning message for using int value to retrieve a double parameter.
         dnewval = 1.5;
         err = new_settings.configureFilterSetting(Settings.FilterSetting.GaussianFilter, dnewval);
         if (HasError(err)) { return; } // Expect no error (status = SlcSdkSuccess)
         Console.WriteLine(err.details()); // Print warning message for using double value to set an integer parameter.

   .. group-tab:: Python

      ..  code-block:: python
            
         # 滤镜设置
         # 滤镜设置指定在三维重建过程中使用的参数。关于过滤器设置的完整列表 
         # 和它们的描述，请查阅settings.h和文档。
         # 启用或禁用过滤器设置。
         err = new_settings.enableFilterSetting(OutlierThreshold, True) # Enable outlier filter
         if (hasError(err)): return
         err = new_settings.enableFilterSetting(GaussianFilter, False) # Disable gaussian filter
         if (hasError(err)): return
         err = new_settings.enableFilterSetting(FillGaps, True) # Enable Fill Gaps
         if (hasError(err)): return

         # 检查是否启用了过滤器设置。
         is_enabled, err = new_settings.checkEnableFilterSetting(OutlierThreshold) # Check if outlier filter is enabled.
         if (hasError(err)): return
         if is_enabled : print("Outlier filter is enabled!")
         is_enabled, err = new_settings.checkEnableFilterSetting(GaussianFilter) # Check if gaussian filter is enabled.
         if (hasError(err)): return
         if is_enabled : print("Gaussian filter is enabled!")
         is_enabled, err = new_settings.checkEnableFilterSetting(FillGaps) # Enable Fill Gaps
         if (hasError(err)): return
         if is_enabled : print("Fill gaps is enabled!")

         # 获取一个过滤器设置的当前值和有效范围。
         curr, min, max, err = new_settings.inquireFilterSetting(OutlierThreshold)
         if (hasError(err)): return
         print("Outlier threshold filter has a current value of ", curr, ", with a valid range of ", min, " - ", max)
         curr, min, max, err = new_settings.inquireFilterSetting(GaussianFilter)
         if (hasError(err)): return
         print("Gaussian filter has a current value of ", curr, ", with a valid range of ", min, " - ", max)
         fillgaps, err = new_settings.inquireFilterSetting(FillGaps)
         if (hasError(err)): return
         if(fillgaps): print("Fill Gaps is turned on!")

         # 配置一个过滤器设置。
         err = new_settings.configureFilterSetting(OutlierThreshold, 3.4)
         if (hasError(err)): return
         err = new_settings.configureFilterSetting(GaussianFilter, 2)
         if (hasError(err)): return
         err = new_settings.configureFilterSetting(FillXFirst, True)
         if (hasError(err)): return

         # 对于数字过滤器的设置，使用类型不匹配的getter或setter会成功，但会发出警告。
         err = new_settings.configureFilterSetting(GaussianFilter, 1.6)
         if (hasError(err)): return # Expect no error (status = SlcSdkSuccess)
         print(err.details()) # Print warning message for using double value to set an integer parameter.


系统设置
~~~~~~~~~~~~~~~~~~~~

创建、读取和导出系统设置。

.. tabs::

   .. group-tab:: C++

      .. code-block:: C++

         // 系统设置
         // 系统设置是描述和影响DaoAI系统的各种参数。关于系统设置的完整列表，
         // 请参考settings.h和文档中的描述。
         // 注意：这些系统设置中有许多是只读的，对于当前的摄像机系统来说可能并不准确。
         // 除非直接从摄像机中获取更新的设置对象[DaoAI::Camera.getSettings()]。
         // 启用或停用系统设置
         ret = new_settings.configureSystemSetting(DaoAI::Settings::ExtraWhitePatternEnable, false);
         if (hasError(ret)) { return -1; } // Check for errors
         ret = new_settings.configureSystemSetting(DaoAI::Settings::TemperatureRegulationEnable, true);
         if (hasError(ret)) { return -1; } // Check for errors

         // 检查一个系统设置是否被启用。
         ret = new_settings.checkEnableSystemSetting(DaoAI::Settings::ExtraWhitePatternEnable, is_enabled);
         if (hasError(ret)) { return -1; } // Check for errors
         if (is_enabled) { std::cout << "Extra white pattern is enabled!" << std::endl; }
         ret = new_settings.checkEnableSystemSetting(DaoAI::Settings::TemperatureRegulationEnable, is_enabled);
         if (hasError(ret)) { return -1; } // Check for errors
         if (is_enabled) { std::cout << "Temperature regulation is enabled!" << std::endl; }

         // 获取一个系统设置的当前值。
         ret = new_settings.inquireSystemSetting(DaoAI::Settings::GPUAvailable, bcurr);
         if (hasError(ret)) { return -1; } // Check for errors
         if (bcurr) { std::cout << "GPU is Available on your system!" << std::endl; }
         ret = new_settings.inquireSystemSetting(DaoAI::Settings::CameraModel, scurr);
         if (hasError(ret)) { return -1; } // Check for errors
         std::cout << "This camera has model " << scurr << std::endl;

         // 保存和导出设置。
         std::string save_settings_path = "../../Examples/example_setting_save.cfg";
         ret = new_settings.exportSettings(save_settings_path);
         if (hasError(ret)) { return -1; } // Check for errors

   .. group-tab:: C#

      .. code-block:: c#

         // 系统设置
         // 系统设置是描述和影响DaoAI系统的各种参数。关于系统设置的完整列表，
         // 请参考settings.h和文档中的描述。
         // 注意：这些系统设置中有许多是只读的，对于当前的摄像机系统来说可能并不准确。
         // 除非直接从摄像机中获取更新的设置对象[DaoAI::Camera.getSettings()]。
         // 启用或停用系统设置
         err = new_settings.configureSystemSetting(Settings.SystemSetting.ExtraWhitePatternEnable, false);
         if (HasError(err)) { return; } // Check for errors

         // 检查一个系统设置是否被启用。
         err = new_settings.checkEnableSystemSetting(Settings.SystemSetting.ExtraWhitePatternEnable, ref is_enabled);
         if (HasError(err)) { return; } // Check for errors
         if (is_enabled) { Console.WriteLine("Extra white pattern is enabled!"); }
         err = new_settings.checkEnableSystemSetting(Settings.SystemSetting.TemperatureRegulationEnable, ref is_enabled);
         if (HasError(err)) { return; } // Check for errors
         if (is_enabled) { Console.WriteLine("Temperature regulation is enabled!"); }

         // 获取一个系统设置的当前值。
         err = new_settings.inquireSystemSetting(Settings.SystemSetting.GPUAvailable, ref bcurr);
         if (HasError(err)) { return; } // Check for errors
         if (bcurr) { Console.WriteLine("GPU is Available on your system!"); }
         err = new_settings.inquireSystemSetting(Settings.SystemSetting.CameraModel, ref scurr);
         if (HasError(err)) { return; } // Check for errors
         Console.WriteLine("This camera has model " + scurr);

         // 保存和导出设置。
         string save_settings_path = "../../../../../Examples/example_setting_save.cfg";
         err = new_settings.exportSettings(save_settings_path);
         if (HasError(err)) { return; } // Check for errors

   .. group-tab:: Python

      ..  code-block:: python

         # 系统设置
         # 系统设置是描述和影响DaoAI系统的各种参数。关于系统设置的完整列表，
         # 请参考settings.h和文档中的描述。
         # 注意：这些系统设置中有许多是只读的，对于当前的摄像机系统来说可能并不准确。
         # 除非直接从摄像机中获取更新的设置对象[DaoAI::Camera.getSettings()]。
         # 启用或停用系统设置
         err = new_settings.configureSystemSetting(ExtraWhitePatternEnable, False)
         if (hasError(err)): return # Expect no error (status = SlcSdkSuccess)


         # 检查一个系统设置是否被启用。
         is_enabled, err = new_settings.checkEnableSystemSetting(ExtraWhitePatternEnable)
         if (hasError(err)): return
         if (is_enabled) : print("Extra white pattern is enabled!")
         is_enabled, err = new_settings.checkEnableSystemSetting(TemperatureRegulationEnable)
         if (hasError(err)): return
         if (is_enabled) : print("Temperature regulation is enabled!")

         # 获取一个系统设置的当前值。
         available, err = new_settings.inquireSystemSetting(GPUAvailable)
         if (hasError(err)): return
         if (available): print("GPU is Available on your system!")
         model, err = new_settings.inquireSystemSetting(CameraModel)
         if (hasError(err)): return
         print("This camera has model " + model)

         # 保存和导出设置。
         save_settings_path = "../../Examples/example_setting_save.cfg"
         err = new_settings.exportSettings(save_settings_path)
         if (hasError(err)): return

采集
------------------

采集图像.

.. tabs::

   .. group-tab:: C++

      .. code-block:: C++

         // 相机采集  ================================================================================================
         // 声明一个DaoAI帧对象，采集的数据将被写入其中
         DaoAI::Frame frm;
         // 用默认设置进行拍摄（假设没有对相机进行设置）。
         ret = cam->capture(frm);
         if (hasError(ret)) { return -1; } // Check for errors

         // 使用自定义设置进行采集
         // 方案1：使用设置进行拍摄。相机保存的设置用于今后的采集。
         ret = cam->capture(new_settings, frm);
         if (hasError(ret)) { return -1; } // Check for errors
         // 方案2：将设置对象设定为相机，以便在采集时使用。
         ret = cam->setSettings(new_settings);
         if (hasError(ret)) { return -1; } // Check for errors
         ret = cam->capture(frm);
         if (hasError(ret)) { return -1; } // Check for errors
         // 方案3：将设置从文件加载到相机，以便在采集中使用。
         ret = cam->setSettings("../../Examples/sample_settings.cfg");
         if (hasError(ret)) { return -1; } // Check for errors
         ret = cam->capture(frm);
         if (hasError(ret)) { return -1; } // Check for errors

         // 使用HDR图像作为拍摄画面的颜色
         ret = new_settings.enableFilterSetting(DaoAI::Settings::ShowHDR, true);
         if (hasError(ret)) { return -1; }
         ret = cam->setSettings(new_settings);
         if (hasError(ret)) { return -1; }
         ret = cam->capture(frm);
         if (hasError(ret)) { return -1; }
         // 使用第一个采集帧的图像作为采集帧的颜色
         ret = new_settings.enableFilterSetting(DaoAI::Settings::ShowHDR, false);
         if (hasError(ret)) { return -1; }
         ret = cam->setSettings(new_settings);
         if (hasError(ret)) { return -1; }
         ret = cam->capture(frm);
         if (hasError(ret)) { return -1; }

         // 启用使用本地GPU进行计算（仅适用于BP-AMR和USB接口的3D相机）。
         ret = cam->enableGPU(true);
         if (hasError(ret)) { return -1; }
         ret = cam->capture(frm);
         if (hasError(ret)) { return -1; }
         // 禁止使用本地GPU进行计算，使用CPU代替（仅适用于BP-AMR和USB接口的3D相机）。
         ret = cam->enableGPU(false);
         if (hasError(ret)) { return -1; }
         ret = cam->capture(frm);
         if (hasError(ret)) { return -1; }

         // 启用温度调节功能
         ret = cam->enableTempRegulation(true);
         if (hasError(ret)) { return -1; }
         // 禁用温度调节功能
         ret = cam->enableTempRegulation(false);
         if (hasError(ret)) { return -1; }

   .. group-tab:: C#

      .. code-block:: c#

         // 相机采集  ================================================================================================
         // 声明一个DaoAI帧对象，采集的数据将被写入其中
         Frame frm = new Frame();
         // 用默认设置进行拍摄（假设没有对相机进行设置）。
         err = cam.capture(ref frm);
         if (HasError(err)) { return; } // Check for errors

         // 使用自定义设置进行采集
         // 方案1：使用设置进行拍摄。相机保存的设置用于今后的采集。
         err = cam.capture(new_settings, ref frm);
         if (HasError(err)) { return; } // Check for errors
         // 方案2：将设置对象设定为相机，以便在采集时使用。
         err = cam.setSettings(new_settings);
         if (HasError(err)) { return; } // Check for errors
         err = cam.capture(ref frm);
         if (HasError(err)) { return; } // Check for errors
         // 方案3：将设置从文件加载到相机，以便在采集中使用。
         err = cam.setSettings("../../../../../Examples/sample_settings.cfg");
         if (HasError(err)) { return; } // Check for errors
         err = cam.capture(ref frm);
         if (HasError(err)) { return; } // Check for errors

         // 使用HDR图像作为拍摄画面的颜色
         err = new_settings.enableFilterSetting(Settings.FilterSetting.ShowHDR, true);
         if (HasError(err)) { return; }
         err = cam.setSettings(new_settings);
         if (HasError(err)) { return; }
         err = cam.capture(ref frm);
         if (HasError(err)) { return; }
         // 使用第一个采集帧的图像作为采集帧的颜色
         err = new_settings.enableFilterSetting(Settings.FilterSetting.ShowHDR, false);
         if (HasError(err)) { return; }
         err = cam.setSettings(new_settings);
         if (HasError(err)) { return; }
         err = cam.capture(ref frm);
         if (HasError(err)) { return; }
         // 检查本地GPU是否可用
         Settings temp_settings = cam.getSettings();
         bool is_available = false;
         err = temp_settings.inquireSystemSetting(Settings.SystemSetting.GPUAvailable, ref is_available);
         if (HasError(err)) { return; }
         // 启用使用本地GPU进行计算（仅适用于BP-AMR和USB接口的3D相机）。
         if (is_available)
         {
            err = cam.enableGPU(true);
            if (HasError(err)) { return; }
            err = cam.capture(ref frm);
            if (HasError(err)) { return; }
         }
         // 禁止使用本地GPU进行计算，使用CPU代替（仅适用于BP-AMR和USB接口的3D相机）。
         if (is_available)
         {
            err = cam.enableGPU(false);
            if (HasError(err)) { return; }
            err = cam.capture(ref frm);
            if (HasError(err)) { return; }
         }
         // 启用温度调节功能
         err = cam.enableTempRegulation(true);
         if (HasError(err)) { return; }
         // 禁用温度调节功能
         err = cam.enableTempRegulation(false);
         if (HasError(err)) { return; }

   .. group-tab:: Python

      ..  code-block:: python

         # 相机采集  ================================================================================================
         # 声明一个DaoAI帧对象，采集的数据将被写入其中
         # 用默认设置进行拍摄（假设没有对相机进行设置）。
         frame, err = cam.capture()
         if (hasError(err)): return

         # 使用自定义设置进行采集
         # 方案1：使用设置进行拍摄。相机保存的设置用于今后的采集。
         frame, err = cam.capture(new_settings)
         if (hasError(err)): return
         # 方案2：将设置对象设定为相机，以便在采集时使用。
         err = cam.setSettings(new_settings)
         if (hasError(err)): return
         frame, err = cam.capture()
         if (hasError(err)): return
         # 方案3：将设置从文件加载到相机，以便在采集中使用。
         err = cam.setSettings("../../Examples/sample_settings.cfg")
         if (hasError(err)): return
         frame, err = cam.capture()
         if (hasError(err)): return

         # 使用HDR图像作为拍摄画面的颜色
         err = new_settings.enableFilterSetting(ShowHDR, True)
         if (hasError(err)): return
         err = cam.setSettings(new_settings)
         if (hasError(err)): return
         frame, err = cam.capture()
         if (hasError(err)): return
         # 使用第一个采集帧的图像作为采集帧的颜色
         err = new_settings.enableFilterSetting(ShowHDR, False)
         if (hasError(err)): return
         err = cam.setSettings(new_settings)
         if (hasError(err)): return
         frame, err = cam.capture()
         if (hasError(err)): return
         # 检查本地GPU是否可用
         temp_settings = cam.getSettings()
         is_available, err = temp_settings.inquireSystemSetting(GPUAvailable)
         if (hasError(err)): return
         # 启用使用本地GPU进行计算（仅适用于BP-AMR和USB接口的3D相机）。
         if (is_available):
            err = cam.enableGPU(True)
            if (hasError(err)): return
            frame, err = cam.capture()
            if (hasError(err)): return
         # 禁止使用本地GPU进行计算，使用CPU代替（仅适用于BP-AMR和USB接口的3D相机）。
         if (is_available):
            err = cam.enableGPU(False)
            if (hasError(err)): return
            frame, err = cam.capture()
            if (hasError(err)): return
         # 启用温度调节功能
         err = cam.enableTempRegulation(True)
         if (hasError(err)): return
         # 禁用温度调节功能
         err = cam.enableTempRegulation(False)
         if (hasError(err)): return

帧
--------------

保存和加载图像。

.. tabs::

   .. group-tab:: C++

      .. code-block:: C++

         // 帧 =========================================================================================================
         DaoAI::Frame new_frame;
         // Create new empty frame
         new_frame = DaoAI::Frame();
         // Copy constructor
         new_frame = DaoAI::Frame(frm);

         // 检查帧是否有数据
         if (!new_frame.isEmpty()) { std::cout << "Success: Frame contains data from 3D capture!" << std::endl; }

         // 保存一个框架。文件扩展名.dcf是首选的DaoAI框架格式，但保存也支持.pcd和.ply格式。
         std::string save_frame_path = "../../Examples/example_frame_save.dcf";
         ret = new_frame.save(save_frame_path);
         if (hasError(ret)) { return -1; } // Check for errors

         // 从文件中加载一个框架。支持.dcf文件。
         ret = new_frame.load("../../Examples/sample_frame.dcf");
         if (hasError(ret)) { return -1; } // Check for errors

         // 获取点云数据。
         DaoAI::PointCloud pcl;
         ret = frm.getPointCloud(pcl);
         if (hasError(ret)) { return -1; } // Check for errors

   .. group-tab:: C#

      .. code-block:: c#

         // 帧 =========================================================================================================
         Frame new_frame;
         // Create new empty frame
         new_frame = new Frame();
         // Copy constructor
         new_frame = new Frame(frm);

         // 检查帧是否有数据
         if (!new_frame.isEmpty()) { Console.WriteLine("Success: Frame contains data from 3D capture!"); }

         // 保存一个框架。文件扩展名.dcf是首选的DaoAI框架格式，但保存也支持.pcd和.ply格式。
         string save_frame_path = "../../../../../Examples/example_frame_save.dcf";
         err = new_frame.save(save_frame_path);
         if (HasError(err)) { return; } // Check for errors

         // 从文件中加载一个框架。支持.dcf文件。
         err = new_frame.load("../../../../../Examples/sample_frame.dcf");
         if (HasError(err)) { return; } // Check for errors

         // 获取点云数据。
         PointCloud pcl = new PointCloud();
         err = frm.getPointCloud(ref pcl);
         if (HasError(err)) { return; } // Check for errors

   .. group-tab:: Python

      ..  code-block:: python

         # Frames ======================================================================================
         # Create new empty frame
         new_frame = Frame()
         # Copy constructor
         new_frame = Frame(frame)

         # 检查帧是否有数据
         if (not new_frame.isEmpty()) : print("Success: Frame contains data from 3D capture!")

         # 保存一个框架。文件扩展名.dcf是首选的DaoAI框架格式，但保存也支持.pcd和.ply格式。
         save_frame_path = "../../Examples/example_frame_save.dcf"
         err = new_frame.save(save_frame_path)
         if (hasError(err)): return

         # 从文件中加载一个框架。支持.dcf文件。
         err = new_frame.load("../../Examples/sample_frame.dcf")
         if (hasError(err)): return

         # 获取点云数据。
         pcl, err = frame.getPointCloud()
         if (hasError(err)): return


点云
------------------

创建、获取和读取点云数据。

.. tabs::

   .. group-tab:: C++

      .. code-block:: C++

         // 点云 ====================================================================================================
         // 点云包含来自3D采集帧的坐标和颜色信息。
         DaoAI::PointCloud new_pcl;
         // Create new point cloud.
         new_pcl = DaoAI::PointCloud(); // Empty point cloud.
         new_pcl = DaoAI::PointCloud(100, 100); // Specify dimensions of created point cloud.
         new_pcl = DaoAI::PointCloud(pcl); // Copy point cloud.
         // Clone a point cloud.
         new_pcl = pcl.clone();
         // 获取点云结构信息。
         int size = new_pcl.getSize();
         int height = new_pcl.getHeight(); // Number of rows.
         int width = new_pcl.getWidth(); // Number of columns.
         if (!new_pcl.isEmpty()) { std::cout << "Point cloud contains capture data!" << std::endl; }
         // 获取点云数据信息。
         std::vector<float> x_values = new_pcl.getVecX(); // 2D vector of all the x-coordinates in the point cloud.
         std::vector<float> y_values = new_pcl.getVecX(); // 2D vector of all the y-coordinates in the point cloud.
         std::vector<float> z_values = new_pcl.getVecX(); // 2D vector of all the z-coordinates in the point cloud.
         std::vector<float> confident_values = new_pcl.getVecConfident(); // 2D vector of point cloud confidence values.
         std::vector<uint32_t> rgba_values = new_pcl.getVecRgba(); // 2D vector of all the RGBA values in the point cloud. 0xAARRGGBB format.
         std::vector<uint8_t> r_values = new_pcl.getVecR(); // 2D vector of all the r-values in the point cloud.
         std::vector<uint8_t> g_values = new_pcl.getVecG(); // 2D vector of all the g-values in the point cloud.
         std::vector<uint8_t> b_values = new_pcl.getVecB(); // 2D vector of all the b-values in the point cloud.
         std::vector<uint8_t> a_values = new_pcl.getVecA(); // 2D vector of all the a-values in the point cloud.
         // Get individual point from point cloud. 
         DaoAI::Point pt;
         int idx = rand() % size;
         pt = new_pcl(idx); // Get any point using a 1D index between [0, size).
         int row = rand() % height; int col = rand() % width;
         pt = new_pcl(row, col); // Get any point using a 2D index pair (row, column).
         // Get pointer to first point in the point cloud.
         DaoAI::Point* first_pt = new_pcl.getDataPtr();

   .. group-tab:: C#

      .. code-block:: c#

         // 点云 ====================================================================================================
         // 点云包含来自3D采集帧的坐标和颜色信息。
         PointCloud new_pcl;
         // Create new point cloud.
         new_pcl = new PointCloud(); // Empty point cloud.
         new_pcl = new PointCloud(100, 100); // Specify dimensions of created point cloud.

         // Clone a point cloud.
         new_pcl = pcl.clone();

         // 获取点云结构信息。
         int size = (int) new_pcl.getSize();
         int height = (int) new_pcl.getHeight(); // Number of rows.
         int width = (int) new_pcl.getWidth(); // Number of columns.
         if (!new_pcl.isEmpty()) { Console.WriteLine("Point cloud contains capture data!"); }
         // 获取点云数据信息。
         List<float> x_values = new_pcl.getVecX(); // 2D vector of all the x-coordinates in the point cloud.
         List<float> y_values = new_pcl.getVecX(); // 2D vector of all the y-coordinates in the point cloud.
         List<float> z_values = new_pcl.getVecX(); // 2D vector of all the z-coordinates in the point cloud.
         List<float> confident_values = new_pcl.getVecConfident(); // 2D vector of point cloud confidence values.
         List<uint> rgba_values = new_pcl.getVecRgba(); // 2D vector of all the RGBA values in the point cloud. 0xAARRGGBB format.
         List<byte> r_values = new_pcl.getVecR(); // 2D vector of all the r-values in the point cloud.
         List<byte> g_values = new_pcl.getVecG(); // 2D vector of all the g-values in the point cloud.
         List<byte> b_values = new_pcl.getVecB(); // 2D vector of all the b-values in the point cloud.
         List<byte> a_values = new_pcl.getVecA(); // 2D vector of all the a-values in the point cloud.
                                                            // Get individual point from point cloud. 
         Random rnd = new Random();
         int idx = rnd.Next(0, size);

         Point pt;
         pt = new_pcl.getPoint((uint) idx); // Get any point using a 1D index between [0, size).
         int row = rnd.Next(0, height); int col = rnd.Next(0, width);
         pt = new_pcl.getPoint((uint) row, (uint) col); // Get any point using a 2D index pair (row, column).

   .. group-tab:: Python

      ..  code-block:: python

         # 点云 ====================================================================================================
         # 点云包含来自3D采集帧的坐标和颜色信息。
         # Create new point cloud.
         new_pcl = PointCloud() # Empty point cloud.
         # Create point cloud with specific dimensions
         new_pcl = PointCloud(100, 100) # Specify dimensions of created point cloud.

         # Clone a point cloud.
         new_pcl = pcl.clone()

         # 获取点云结构信息。
         size = new_pcl.getSize()
         height = new_pcl.getHeight() # Number of rows.
         width = new_pcl.getWidth() # Number of columns.
         if (not new_pcl.isEmpty()): print("Point cloud contains capture data!")
         # Get point cloud data information.
         x_values = new_pcl.getVecX() # 2D vector of all the x-coordinates in the point cloud.
         y_values = new_pcl.getVecX() # 2D vector of all the y-coordinates in the point cloud.
         z_values = new_pcl.getVecX() # 2D vector of all the z-coordinates in the point cloud.
         confident_values = new_pcl.getVecConfident() # 2D vector of point cloud confidence values.
         rgba_values = new_pcl.getVecRgba() # 2D vector of all the RGBA values in the point cloud. 0xAARRGGBB format.
         r_values = new_pcl.getVecR() # 2D vector of all the r-values in the point cloud.
         g_values = new_pcl.getVecG() # 2D vector of all the g-values in the point cloud.
         b_values = new_pcl.getVecB() # 2D vector of all the b-values in the point cloud.
         a_values = new_pcl.getVecA() # 2D vector of all the a-values in the point cloud.
         
         # Get individual point from point cloud. 
         idx = random.randint(0, size)
         pt = new_pcl(idx) # Get any point using a 1D index between [0, size).
         row = random.randint(0, height)
         col = random.randint(0, width)
         pt = new_pcl(row, col) # Get any point using a 2D index pair (row, column).


点
------------------

获取和读取点的数据。

.. tabs::

   .. group-tab:: C++

      .. code-block:: C++

         // 点 ==========================================================================================================
         // 点包含单个点的坐标和颜色信息。
         // 获取点的数据。
         float x = pt.getX();
         float y = pt.getY();
         float z = pt.getZ();
         float confident = pt.getConfident();
         uint8_t r = pt.getR();
         uint8_t g = pt.getG();
         uint8_t b = pt.getB();
         uint8_t a = pt.getA();
         uint32_t rgba = pt.getRgba(); // 0xAARRGGBB format (ARGB)
         // 设定点数据。
         DaoAI::Point new_point;
         new_point.setX(1);
         new_point.setY(2);
         new_point.setZ(3);
         new_point.setConfident(0.4);
         new_point.setRgba(0x00FF0000); // Set to red.
         new_point.setRgb(0x00, 0xFF, 0x00); // Set to green.
         new_point.setRgba(0x00, 0x00, 0xFF, 0x00); // Set to blue.

   .. group-tab:: C#

      .. code-block:: c#

         // 点 ==========================================================================================================
         // 点包含单个点的坐标和颜色信息。
         // 获取点的数据。
         float x = pt.getX();
         float y = pt.getY();
         float z = pt.getZ();
         float confident = pt.getConfident();
         byte r = pt.getR();
         byte g = pt.getG();
         byte b = pt.getB();
         byte a = pt.getA();
         uint rgba = pt.getRgba(); // 0xAARRGGBB format (ARGB)
                                       // 设定点数据。
         Point new_point = new Point();
         new_point.setX(1);
         new_point.setY(2);
         new_point.setZ(3);
         new_point.setConfident(0.4f);
         new_point.setRgba(0x00FF0000); // Set to red.
         new_point.setRgb(0x00, 0xFF, 0x00); // Set to green.
         new_point.setRgba(0x00, 0x00, 0xFF, 0x00); // Set to blue.

   .. group-tab:: Python

      ..  code-block:: python
 
         # 点 ==========================================================================================================
         # 点包含单个点的坐标和颜色信息。
         # 获取点的数据。
         x = pt.getX()
         y = pt.getY()
         z = pt.getZ()
         confident = pt.getConfident()
         r = pt.getR()
         g = pt.getG()
         b = pt.getB()
         a = pt.getA()
         rgba = pt.getRgba() # rgba is in 0xAARRGGBB format (ARGB)
         # 设定点数据。
         new_point = Point()
         err = new_point.setX(1)
         err = new_point.setY(2)
         err = new_point.setZ(3)
         err = new_point.setConfident(0.4)
         err = new_point.setRgba(0x00FF0000)  # Set to red.
         err = new_point.setRgb(0x00, 0xFF, 0x00) # Set to green.
         err = new_point.setRgba(0x00, 0x00, 0xFF, 0x00) # Set to blue.


清理
-----------

.. tabs::

   .. group-tab:: C++

      .. code-block:: C++

         // 清理 =======================================================================================================
         ret = cam->disConnect();
         if (hasError(ret)) { return -1; } // Check for errors
         delete cam;

         ret = app->stopLogging();
         if (hasError(ret)) { return -1; } // Check for errors

         std::cout << "End of sample program!" << std::endl;
         return 1;

   .. group-tab:: C#

      .. code-block:: c#

         // 清理 =======================================================================================================
         err = cam.disConnect();
         if (HasError(err)) { return; } // Check for errors

         err = app.stopLogging();
         if (HasError(err)) { return; } // Check for errors

         Console.WriteLine("End of sample program!");
         
         System.Threading.Thread.Sleep(20000);

   .. group-tab:: Python

      ..  code-block:: python

         # 清理 =======================================================================================================
         err = cam.disConnect()
         if (hasError(err)): return

         err = app.stopLogging()
         if (hasError(err)): return

         print("End of sample program!")