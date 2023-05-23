连接相机
=================================

.. contents:: 
   :local:

简介
---------------------

本教程介绍了如何使用DaoAI SDK来采集点云和二维图像。

前提条件
~~~~~~~~~~~~~~~~~~~

    - 安装DaoAI相机工作室

初始准备
------------------

调用DaoAI相机SDK中的任何API都需要初始化DaoAI应用程序。

.. tabs::

   .. tab:: C++

      .. code-block:: C++
         
         // Setup ==========================================================================================================
         // Declare an error return object to check for errors throughout the application.
         SlcSdkError ret;

         // Create a new DaoAI application instance.
         DaoAI::Application* app = new DaoAI::Application();

         // Specify directory for logging. Logs contain detailed error and process information. 
         std::string logging_directory = "../Logs/";
         ret = app->startLogging(logging_directory);
         if (hasError(ret)) { return -1; } // Check for errors

         // If using remote cameras, specify remote IP address
         std::string remote_ip = "192.168.1.2";

         // Declare camera map that will be used to fetch all connected DaoAI Cameras.
         std::map<std::string, DaoAI::Camera*> cameras;

         // Get cameras from application. This step must be completed before attempting to connect to any camera.
         ret = app->getCameras(cameras, remote_ip);
         if (hasError(ret)) { return -1; } // Check for errors

         if (cameras.size() == 0) {
            return -1; // Must detect at least one camera.
         }
         std::cout << cameras.size() << " cameras detected." << std::endl;
         for (std::pair<std::string, DaoAI::Camera*> pair : cameras) {
            std::cout << "	" << pair.first << std::endl; // Print serial numbers of detected cameras.
         }

         // Declare pointer to DaoAI Camera object.
         DaoAI::Camera* cam;

   .. tab:: C#

      .. code-block:: c#

         var DaoAI = new DaoAI.NET.Application();

   .. tab:: Python

      .. code-block:: python


连接到一个相机
------------------------

.. tabs::

   .. tab:: C++

      .. code-block:: C++

         // Connecting to a camera =========================================================================================
         // A DaoAI Camera must be connected before it can be used for captures. 
         // OPTION 1: Connecting to the first detected DaoAI Camera.
         ret = app->connectCamera(cam);
         if (hasError(ret)) { return -1; } // Check for errors
         ret = cam->disConnect();
         if (hasError(ret)) { return -1; } // Check for errors

         // OPTION 2: Connect to specific camera by serial number.
         std::string serial_num = cameras.begin()->first; // Grab serial number from first camera in map.
         // Method A
         ret = app->connectCamera(serial_num, cam);
         if (hasError(ret)) { return -1; } // Check for errors
         ret = app->disconnectCamera(serial_num); // Can also disconnect cam by serial number.
         if (hasError(ret)) { return -1; } // Check for errors
         // Method B
         cam = cameras[serial_num];
         ret = cam->connect();
         if (hasError(ret)) { return -1; } // Check for errors
         ret = app->disconnectCamera(serial_num);
         if (hasError(ret)) { return -1; } // Check for errors

         // OPTION 3: Connecting any camera found in camera map.
         if (cameras.size() > 0) {
            cam = cameras.begin()->second;
         }
         ret = cam->connect();
         if (hasError(ret)) { return -1; } // Check for errors

   .. tab:: C#

      .. code-block:: c#

         var DaoAI = new DaoAI.NET.Application();

   .. tab:: Python

      .. code-block:: python


采集
------------------

现在我们可以采集3D图像了。

.. tabs::

   .. tab:: C++

      .. code-block:: C++

         // Camera Captures ================================================================================================
         // Declare a DaoAI Frame object to which capture data will be written
         DaoAI::Frame frm;
         // Capture with default settings (assuming no settings has been set to camera).
         ret = cam->capture(frm);
         if (hasError(ret)) { return -1; } // Check for errors

         // Capture with custom settings
         // OPTION 1: Capture with settings. Settings saved by camera for future captures.
         ret = cam->capture(new_settings, frm);
         if (hasError(ret)) { return -1; } // Check for errors

         // OPTION 2: Set settings object to camera to use in capture.
         ret = cam->setSettings(new_settings);
         if (hasError(ret)) { return -1; } // Check for errors
         ret = cam->capture(frm);
         if (hasError(ret)) { return -1; } // Check for errors

         // OPTION 3: Load settings from file to camera to use in capture.
         ret = cam->setSettings("../Examples/sample_settings.cfg");
         if (hasError(ret)) { return -1; } // Check for errors
         ret = cam->capture(frm);
         if (hasError(ret)) { return -1; } // Check for errors

   .. tab:: C#

      .. code-block:: c#

         var DaoAI = new DaoAI.NET.Application();

   .. tab:: Python

      .. code-block:: python


保存
~~~~~~~~~~

.. tabs::

   .. tab:: C++

      .. code-block:: C++

         // Frames =========================================================================================================
         DaoAI::Frame new_frame;
         // Create new empty frame
         new_frame = DaoAI::Frame();
         // Copy constructor
         new_frame = DaoAI::Frame(frm);

         // Check if frame has data
         if (!new_frame.isEmpty()) { std::cout << "Success: Frame contains data from 3D capture!" << std::endl; }

         // Save a frame. File extension .dcf is the preferred DaoAI frame format, but saving also supports .pcd and .ply formats.
         std::string save_frame_path = "../Examples/example_frame_save.dcf";
         ret = new_frame.save(save_frame_path);
         if (hasError(ret)) { return -1; } // Check for errors

   .. tab:: C#

      .. code-block:: c#

         var DaoAI = new DaoAI.NET.Application();

   .. tab:: Python

      .. code-block:: python

加载
~~~~~~~~~~~~~~~~

保存后，可以从.dcf文件中加载3D图像。

.. tabs::

   .. tab:: C++

      .. code-block:: C++

         // Load a frame from file. Supports .dcf files.
         ret = new_frame.load("../Examples/sample_frame.dcf");
         if (hasError(ret)) { return -1; } // Check for errors

   .. tab:: C#

      .. code-block:: c#

         var DaoAI = new DaoAI.NET.Application();

   .. tab:: Python

      .. code-block:: python
