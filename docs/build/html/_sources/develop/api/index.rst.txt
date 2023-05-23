API 参考
=================

DaoAI Camera Studio 的API参考。

.. contents:: 
   :local:


Namespace
-----------

   .. tabs::

      .. group-tab:: C++

         .. code-block:: C++
            
            namespace DaoAI

      .. group-tab:: C#

         .. code-block:: c#
            
            namespace DaoAI_NET


      .. .. group-tab:: Python

         .. code-block:: python

Classes
---------

*Class* Application
~~~~~~~~~~~~~~~~~~~~~~

   .. tabs::

      .. group-tab:: C++

         .. code-block:: C++
            
            #include "application.h"

      .. group-tab:: C#

         .. code-block:: c#
            
            #include "application.h"


      .. .. group-tab:: Python

         .. code-block:: python


Public Member Functions
`````````````````````````

   Constructor:
      .. tabs::

         .. group-tab:: C++

            .. code-block:: C++
               
               DAOAI_API Application();

         .. group-tab:: C#

            .. code-block:: c#
               
               Application();

         .. .. .. group-tab:: Python

            .. .. code-block:: python

   Destructor:
      .. tabs::

         .. group-tab:: C++

            .. code-block:: C++
               
               DAOAI_API ~Application();

         .. group-tab:: C#

            .. code-block:: c#
               
               ~Application();

         .. .. .. group-tab:: Python

            .. .. code-block:: python


   getCameras:
      获取所有USB相机的列表。

      .. tabs::

         .. group-tab:: C++

            参数: 
               - 【输出】 cameras: 所有连接的DaoAI支持的相机的 map，按序列号键入。
               - 【输入】 【可选】 remote_address: 所有连接的DaoAI支持的相机的 map，按序列号键入。
            返回值:
               - SlcSdkError: 包含状态代码和任何错误信息的 struct。

            .. code-block:: C++

               DAOAI_API SlcSdkError getCameras(std::map<std::string, Camera*>& cameras, std::string remote_address = "");
               
         .. group-tab:: C#

            参数: 
               - 【输出】 cameras: 所有连接的DaoAI支持的相机的 map，按序列号键入。
               - 【输入】 【可选】 remote_address: 所有连接的DaoAI支持的相机的 map，按序列号键入。
            返回值:
               - DaoAINETError^: DaoAINETError 对象，包含状态代码和任何错误信息。

            .. code-block:: c#

               DaoAINETError^ getCameras(Dictionary<System::String^, Camera^>^% cameras, System::String^ remote_address);

               DaoAINETError^ getCameras(Dictionary<System::String^, Camera^>^% cameras);
               
         .. .. .. group-tab:: Python

            .. .. code-block:: python

   connectCamera:
      连接到下一个可用的DaoAI相机。

      .. tabs::

         .. group-tab:: C++
            
            参数: 
               - 【输入】 camera: 要连接的相机。
               - 【输入】 【可选】 settings: 用此设置连接到相机。必须至少包含一帧。
            返回值:
               - SlcSdkError: 包含状态代码和任何错误信息的 struct。

            .. code-block:: C++
               
               DAOAI_API SlcSdkError connectCamera(Camera*& camera, const Settings& settings = {});

         .. group-tab:: C#

            参数: 
               - 【输入】 camera: 要连接的相机。
               - 【输入】 【可选】 settings: 用此设置连接到相机。必须至少包含一帧。

            返回值:
               - DaoAINETError^: DaoAINETError 对象，包含状态代码和任何错误信息。
               
            .. code-block:: c#

               DaoAINETError^ connectCamera(Camera^% camera, Settings^ settings);

               DaoAINETError^ connectCamera(Camera^% camera);

         .. .. .. group-tab:: Python

            .. .. code-block:: python

   connectCamera:
      用序列号连接到DaoAI相机。
      

      .. tabs::

         .. group-tab:: C++
            
            参数: 
               - 【输入】 serial_number: 用此序列号连接到摄像机。
               - 【输出】 camera: 指向所连接的相机的指针。
               - 【输入】 【可选】 settings: 用此设置连接到相机。必须至少包含一帧。
            返回值:
               - SlcSdkError: 包含状态代码和任何错误信息的 struct。

            .. code-block:: C++
                  
               DAOAI_API SlcSdkError connectCamera(const std::string serial_number, Camera*& camera, const Settings &settings = {});

         .. group-tab:: C#

            参数: 
               - 【输入】 serial_number: 用此序列号连接到摄像机。
               - 【输出】 camera: 指向所连接的相机的指针。
               - 【输入】 【可选】 settings: 用此设置连接到相机。必须至少包含一帧。

            返回值:
               - DaoAINETError^: DaoAINETError 对象，包含状态代码和任何错误信息。

            .. code-block:: c#

               DaoAINETError^ connectCamera(System::String^ serial_number, Camera^% camera, Settings^ settings);
               
               DaoAINETError^ connectCamera(System::String^ serial_number, Camera^% camera);

        .. .. .. group-tab:: Python

           .. .. code-block:: python

   disconnectCamera:
      断开指定序列号的DaoAI相机。

      .. tabs::

         .. group-tab:: C++
            
            参数: 
               - 【输入】 serial_number: 要断开连接的相机的序列号。
               
            返回值:
               - SlcSdkError: 包含状态代码和任何错误信息的 struct。

            .. code-block:: C++

               DAOAI_API SlcSdkError disconnectCamera(const std::string serial_number);

         .. group-tab:: C#

            .. code-block:: c#

               DaoAINETError^ disConnect();

         .. .. .. group-tab:: Python

            .. .. code-block:: python

   startLogging:
      启用将相机日志写到文件中

      .. tabs::

         .. group-tab:: C++
            
            参数: 
               - 【输入】 【可选】 log_path: 指定写日志的目录
            返回值:
               - SlcSdkError: 包含状态代码和任何错误信息的 struct。

            .. code-block:: C++

               DAOAI_API SlcSdkError startLogging(std::string log_path = "");

         .. group-tab:: C#

            参数: 
               - 【输入】 【可选】 log_path: 指定写日志的目录
            返回值:
               - DaoAINETError^: DaoAINETError 对象，包含状态代码和任何错误信息。

            .. code-block:: c#

               DaoAINETError^ startLogging(System::String^ log_path);

               DaoAINETError^ startLogging();

         .. .. .. group-tab:: Python

            .. .. code-block:: python

   stopLogging:
      禁用将相机日志写到文件中

      .. tabs::

         .. group-tab:: C++

            返回值:
               - SlcSdkError: 包含状态代码和任何错误信息的 struct。

            .. code-block:: C++

               DAOAI_API SlcSdkError stopLogging();

         .. group-tab:: C#

            返回值:
               - DaoAINETError^: DaoAINETError 对象，包含状态代码和任何错误信息。
            
            .. code-block:: c#

               DaoAINETError^ stopLogging();

         .. .. .. group-tab:: Python

            .. .. code-block:: python

|

*Class* Version
~~~~~~~~~~~~~~~~~~
   
   .. tabs::

      .. group-tab:: C++

         .. code-block:: C++
               
            #include "application.h"
            namespace Version
            
      .. group-tab:: C#

         .. code-block:: c#

            #include "application.h"

      .. .. group-tab:: Python

         .. code-block:: python

Public Member Functions
`````````````````````````

   getSDKVersion:
      获得 DaoAI SDK 的版本。
      
      .. tabs::

         .. group-tab:: C++

            返回值:
               - string: String containing DaoAI SDK version.

            .. code-block:: C++
               
               DAOAI_API std::string getSDKVersion();

         .. group-tab:: C#

            返回值:
               - System::String: String containing DaoAI SDK version.

            .. code-block:: c#

               System::String^ getSDKVersion();

         .. .. .. group-tab:: Python

            .. .. code-block:: python

|

*Class* Camera
~~~~~~~~~~~~~~~~~~~~


   .. tabs::

      .. group-tab:: C++

         .. code-block:: C++
            
            #include "camera.h"

      .. group-tab:: C#

         .. code-block:: c#

            #include "camera.h"

      .. .. group-tab:: Python

         .. code-block:: python


Public Member Functions
`````````````````````````

   Constructor:
      .. tabs::

         .. group-tab:: C++

            .. code-block:: C++
               
               DAOAI_API Camera();

         .. group-tab:: C#

            .. code-block:: c#

               Camera();

         .. .. .. group-tab:: Python

            .. .. code-block:: python

   Copy Constructor:
      .. tabs::

         .. group-tab:: C++

            .. code-block:: C++
               
               DAOAI_API explicit Camera(const std::shared_ptr<Camera>& other);

         .. group-tab:: C#

            .. code-block:: c#

               Camera(Camera^ other);

         .. .. .. group-tab:: Python

            .. .. code-block:: python
      
   Move Constructor:
      .. tabs::

         .. group-tab:: C++

            .. code-block:: C++
               
               DAOAI_API explicit Camera(class CameraImpl &&other);

         .. .. .. group-tab:: Python

            .. .. code-block:: python

   Destructor:
      .. tabs::

         .. group-tab:: C++

            .. code-block:: C++
               
               DAOAI_API ~Camera();

         .. group-tab:: C#

            .. code-block:: c#
               
               ~Camera();

         .. .. .. group-tab:: Python

            .. .. code-block:: python

   connect:
      连接相机。

      .. tabs::

         .. group-tab:: C++

            返回值:
               - SlcSdkError: 包含状态代码和任何错误信息的 struct。

            .. code-block:: C++

               DAOAI_API SlcSdkError connect();
               
         .. group-tab:: C#

            返回值:
               - DaoAINETError^: DaoAINETError 对象，包含状态代码和任何错误信息。

            .. code-block:: c#

               DaoAINETError^ connect();

         .. .. .. group-tab:: Python

            .. .. code-block:: python

   disConnect:
      断开相机连接。

      .. tabs::

         .. group-tab:: C++

            返回值:
               - SlcSdkError: 包含状态代码和任何错误信息的 struct。

            .. code-block:: C++

               DAOAI_API SlcSdkError disConnect();
               
         .. group-tab:: C#

            返回值:
               - DaoAINETError^: DaoAINETError 对象，包含状态代码和任何错误信息。

            .. code-block:: c#

               DaoAINETError^ disconnectCamera(System::String^ serial_number);

         .. .. .. group-tab:: Python

            .. .. code-block:: python

   isConnected:
      检查相机是否已连接。

      .. tabs::

         .. group-tab:: C++

            返回值:
               - bool: 如果相机已连接，则返回True，否则返回False。

            .. code-block:: C++

               DAOAI_API bool isConnected() const;
               
         .. group-tab:: C#

            返回值:
               - bool: 如果相机已连接，则返回True，否则返回False。

            .. code-block:: c#

               System::Boolean isConnected();

         .. .. .. group-tab:: Python

            .. .. code-block:: python

   capture:
      采集一个帧。

      .. tabs::

         .. group-tab:: C++
            
            参数: 
               - 【输出】 Frame: 采集结果将被写入此 DaoAI Frame 对象中。
            返回值:
               - SlcSdkError: 包含状态代码和任何错误信息的 struct。

            .. code-block:: C++

               DAOAI_API SlcSdkError capture(Frame& frame);
               
         .. group-tab:: C#

            参数: 
               - 【输出】 Frame: 采集结果将被写入此 DaoAI Frame 对象中。
            
            返回值:
               - DaoAINETError^: DaoAINETError 对象，包含状态代码和任何错误信息。

            .. code-block:: c#

               DaoAINETError^ capture(Frame^% frame);

         .. .. .. group-tab:: Python

            .. .. code-block:: python

   capture:
      用设置捕捉单帧。

      .. tabs::

         .. group-tab:: C++
            
            参数: 
               - 【输入】 settings: 采集时要使用的DaoAI设置。必须至少包含一帧。
               - 【输出】 Frame: 采集结果将被写入此 DaoAI Frame 对象中。
            返回值:
               - SlcSdkError: 包含状态代码和任何错误信息的 struct。

            .. code-block:: C++

               DAOAI_API SlcSdkError capture(Settings settings, Frame& frame);
               
         .. group-tab:: C#

            参数: 
               - 【输入】 settings: 采集时要使用的DaoAI设置。必须至少包含一帧。
               - 【输出】 Frame: 采集结果将被写入此 DaoAI Frame 对象中。
            返回值:
               - DaoAINETError^: DaoAINETError 对象，包含状态代码和任何错误信息。

            .. code-block:: c#

               DaoAINETError^ capture(Settings^ settings, Frame^% frame);

         .. .. .. group-tab:: Python

            .. .. code-block:: python

   captureAssistant:
      分析场景并生成采集帧设置，所有采集帧的总时间将小于时间预算。时间预算越高，产生的采集帧就越多。

      .. tabs::

         .. group-tab:: C++
            
            参数: 
               - 【输入】 time_budget: 采集帧的时间预算，范围为（0.0, 5.0] 。
               - 【输入，输出】 mofaf: AcquisitionFrame 设置的 map
            返回值:
               - SlcSdkError: 包含状态代码和任何错误信息的 struct。

            .. code-block:: C++

               DAOAI_API SlcSdkError captureAssistant(double time_budget, std::map<int, AcquisitionFrame> &mofaf);
               
         .. group-tab:: C#

            参数: 
               - 【输入】 time_budget: 采集帧的时间预算，范围为（0.0, 5.0] 。
               - 【输入，输出】 mofaf: AcquisitionFrame 设置的 map
            返回值:
               - DaoAINETError^: DaoAINETError 对象，包含状态代码和任何错误信息。
            
            .. code-block:: c#

               DaoAINETError^ captureAssistant(System::Double time_budget, System::Collections::Generic::Dictionary<System::Int32, AcquisitionFrame^>^% mofaf);

         .. .. .. group-tab:: Python

            .. .. code-block:: python

   setSettings:
      用文件路径设置相机的设置。

      .. tabs::

         .. group-tab:: C++
            
            参数: 
               - 【输入】 file_path: 载入设置文件的路径。
            返回值:
               - SlcSdkError: 包含状态代码和任何错误信息的 struct。

            .. code-block:: C++

               DAOAI_API SlcSdkError setSettings(std::string file_path);
               
         .. group-tab:: C#

            参数: 
               - 【输入】 file_path: 载入设置文件的路径。
            返回值:
               - DaoAINETError^: DaoAINETError 对象，包含状态代码和任何错误信息。

            .. code-block:: c#

               DaoAINETError^ setSettings(System::String^ file_path);

         .. .. .. group-tab:: Python

            .. .. code-block:: python

   setSettings:
      用 Settings 对象对相机进行设置。

      .. tabs::

         .. group-tab:: C++
            
            参数: 
               - 【输入】 settings: 此相机的 Settings 对象。
            返回值:
               - SlcSdkError: 包含状态代码和任何错误信息的 struct。

            .. code-block:: C++
               
               DAOAI_API SlcSdkError setSettings(Settings settings);
               
         .. group-tab:: C#

            参数: 
               - 【输入】 settings: 此相机的 Settings 对象。
            返回值:
               - DaoAINETError^: DaoAINETError 对象，包含状态代码和任何错误信息。

            .. code-block:: c#

               DaoAINETError^ setSettings(Settings^ settings);

         .. .. .. group-tab:: Python

            .. .. code-block:: python

   getSettings:
      Get Settings for camera.

      .. tabs::

         .. group-tab:: C++

            返回值:
               - Settings: 此相机使用的当前设置结构。

            .. code-block:: C++
               
               DAOAI_API Settings getSettings() const;
               
         .. group-tab:: C#

            返回值:
               - Settings: 此相机使用的当前设置结构。

            .. code-block:: c#

               Settings^ getSettings();

         .. .. .. group-tab:: Python

            .. .. code-block:: python

   getSerialNumber:
      获取相机的序列号。

      .. tabs::

         .. group-tab:: C++

            返回值:
               - std::string: 此相机的序列号。

            .. code-block:: C++
               
               DAOAI_API std::string getSerialNumber() const;
               
         .. group-tab:: C#

            返回值:
               - System::String: 此相机的序列号。

            .. code-block:: c#

               System::String^ getSerialNumber();

         .. .. .. group-tab:: Python

            .. .. code-block:: python

   getIntrinsicParam:
      获取相机的IntrinsicParameter。

      .. tabs::

         .. group-tab:: C++
            
            参数:
               - 【输出】 params: 包含相机内参的浮点矢量。
            返回值:
               - SlcSdkError: 包含状态代码和任何错误信息的 struct。

            .. code-block:: C++
               
               DAOAI_API SlcSdkError getIntrinsicParam(std::vector<float>& params) const;
               
         .. group-tab:: C#

            参数:
               - 【输出】 params: 包含相机内参的浮点矢量。
            返回值:
               - DaoAINETError^: DaoAINETError 对象，包含状态代码和任何错误信息。

            .. code-block:: c#

               DaoAINETError^ getIntrinsicParam(array<System::Single>^% params);

         .. .. .. group-tab:: Python

            .. .. code-block:: python


   enableGPU:
      启用或禁用本地PC上的GPU进行计算。

      .. tabs::

         .. group-tab:: C++
            
            参数:
               - toggle【输入】: 启用或禁用。
            返回值:
               - SlcSdkError: 包含状态代码和任何错误信息的 struct。

            .. code-block:: C++
               
               DAOAI_API SlcSdkError enableGPU(bool toggle);
               
         .. group-tab:: C#

            参数:
               - toggle【输入】: 启用或禁用。
            返回值:
               - DaoAINETError^: DaoAINETError 对象，包含状态代码和任何错误信息。

            .. code-block:: c#

               DaoAINETError^ enableGPU(System::Boolean toggle);

         .. .. .. group-tab:: Python

            .. .. code-block:: python

   enableTempRegulation:
      启用或停用温度调节功能。

      .. tabs::

         .. group-tab:: C++
            
            参数:
               - toggle【输入】: 启用或停用。
            返回值:
               - SlcSdkError: 包含状态代码和任何错误信息的 struct。

            .. code-block:: C++
               
               DAOAI_API SlcSdkError enableTempRegulation(bool toggle);
               
         .. group-tab:: C#

            参数:
               - toggle【输入】: 启用或停用。
            返回值:
               - DaoAINETError^: DaoAINETError 对象，包含状态代码和任何错误信息。

            .. code-block:: c#

               DaoAINETError^ enableTempRegulation(System::Boolean toggle);

         .. .. .. group-tab:: Python

            .. .. code-block:: python

|

*Class* Settings
~~~~~~~~~~~~~~~~~~~~

   .. tabs::

      .. group-tab:: C++

         .. code-block:: C++
               
            #include "settings.h"
            
      .. group-tab:: C#

         .. code-block:: c#

            #include "settings.h"

      .. .. .. group-tab:: Python

         .. .. code-block:: python

AcquisitionFrame Class
```````````````````````````

Public Members & Functions
*****************************

   AcquisitionFrameSetting:
      采集帧设置数据结构。

      .. tabs::

         .. group-tab:: C++

            .. code-block:: C++
               
               enum AcquisitionFrameSetting {
                        Brightness, // Int {0, 3}.
                        Gain, // Double {0, 3}.
                        ExposureStop // Int {-1, 4}.
                     };
               
         .. group-tab:: C#

            .. code-block:: c#

               enum AcquisitionFrameSetting {
                        Brightness, // Int {0, 3}.
                        Gain, // Double {0, 3}.
                        ExposureStop // Int {-1, 4}.
                     };

         .. .. .. group-tab:: Python

            .. .. code-block:: python

   Constructor:
      具有初始输入的构造函数，用于采集帧架设置。

      .. tabs::

         .. group-tab:: C++

            参数:
               - brightness【输入】: 亮度设置。
               - gain【输入】: 增益设置。
               - exposure_stop【输入】: 曝光停止设置。

            .. code-block:: C++
               
               DAOAI_API AcquisitionFrame(int brightness, double gain, int exposure_stop);
               
         .. group-tab:: C#

            参数:
               - brightness【输入】: 亮度设置。
               - gain【输入】: 增益设置。
               - exposure_stop【输入】: 曝光设置。

            .. code-block:: c#

               AcquisitionFrame(System::Int32 brightness, System::Double gain, System::Int32 exposure_stop);
         
         .. .. .. group-tab:: Python

            .. .. code-block:: python

   Constructor:
      构造函数，具有采集帧设置的默认值。

      .. tabs::

         .. group-tab:: C++

            .. code-block:: C++
               
               DAOAI_API AcquisitionFrame();
               
         .. group-tab:: C#

            .. code-block:: c#
               
               AcquisitionFrame();

         .. .. .. group-tab:: Python

            .. .. code-block:: python

   inquireSetting:
      获取当前的采集设置值和范围。

      .. tabs::

         .. group-tab:: C++

            参数:
               - AcquisitionFrameSetting【输入】: 采集框设置查询 [brightness, gain, exposure_stop].
               - curr【输出】: 该字段的当前值。
               - min【输出】: 该字段的最小值。
               - max【输出】: 该字段的最大值。

            返回值:
               - SlcSdkError: 包含状态代码和任何错误信息的 struct。

            .. code-block:: C++
               
               DAOAI_API SlcSdkError inquireSetting(AcquisitionFrameSetting setting, int& curr, int& min, int& max);
               
         .. group-tab:: C#

            参数:
               - AcquisitionFrameSetting【输入】: 采集框设置查询 [brightness, gain, exposure_stop].
               - curr【输出】: 该字段的当前值。
               - min【输出】: 该字段的最小值。
               - max【输出】: 该字段的最大值。

            返回值:
               - DaoAINETError^: DaoAINETError 对象，包含状态代码和任何错误信息。

            .. code-block:: c#

               DaoAINETError^ inquireSetting(AcquisitionFrameSetting setting, System::Int32% curr, System::Int32% min, System::Int32% max);

         .. .. .. group-tab:: Python

            .. .. code-block:: python

   inquireSetting:
      获取当前的采集设置值。

      .. tabs::

         .. group-tab:: C++

            参数:
               - AcquisitionFrameSetting【输入】: 采集框设置查询 [brightness, gain, exposure_stop].
               - curr【输出】: 该字段的当前值。

            返回值:
               - SlcSdkError: 包含状态代码和任何错误信息的 struct。

            .. code-block:: C++
               
               DAOAI_API SlcSdkError inquireSetting(AcquisitionFrameSetting setting, int& curr);

         .. group-tab:: C#

            参数:
               - AcquisitionFrameSetting【输入】: 采集框设置查询 [brightness, gain, exposure_stop].
               - curr【输出】: 该字段的当前值。

            返回值:
               - DaoAINETError^: DaoAINETError 对象，包含状态代码和任何错误信息。

            .. code-block:: c#

               DaoAINETError^ inquireSetting(AcquisitionFrameSetting setting, System::Int32% curr);

         .. .. .. group-tab:: Python

            .. .. code-block:: python

   inquireSetting:
      获取当前的采集设置值和范围，单位为双精度浮点型（增益）。

      .. tabs::

         .. group-tab:: C++

            参数:
               - AcquisitionFrameSetting【输入】: 采集框设置查询 [brightness, gain, exposure_stop].
               - curr【输出】: 该字段的当前值，双精度浮点型（用于字段增益）。
               - min【输出】: 该字段的最小值。
               - max【输出】: 该字段的最大值。

            返回值:
               - SlcSdkError: 包含状态代码和任何错误信息的 struct。

            .. code-block:: C++
               
               DAOAI_API SlcSdkError inquireSetting(AcquisitionFrameSetting setting, double& curr, double& min, double& max);
               
         .. group-tab:: C#

            参数:
               - AcquisitionFrameSetting【输入】: 采集框设置查询 [brightness, gain, exposure_stop].
               - curr【输出】: 该字段的当前值，双精度浮点型（用于字段增益）。
               - min【输出】: 该字段的最小值。
               - max【输出】: 该字段的最大值。

            返回值:
               - DaoAINETError^: DaoAINETError 对象，包含状态代码和任何错误信息。

            .. code-block:: c#

               DaoAINETError^ inquireSetting(AcquisitionFrameSetting setting, System::Double% curr, System::Double% min, System::Double% max);

         .. .. .. group-tab:: Python

            .. .. code-block:: python

   inquireSetting:
      获取当前的采集设置值，单位为双精度浮点型（增益）。

      .. tabs::

         .. group-tab:: C++

            参数:
               - AcquisitionFrameSetting【输入】: 采集框设置查询 [brightness, gain, exposure_stop].
               - curr【输出】: 该字段的当前值，双精度浮点型（用于字段增益）。

            返回值:
               - SlcSdkError: 包含状态代码和任何错误信息的 struct。

            .. code-block:: C++
               
                  DAOAI_API SlcSdkError inquireSetting(AcquisitionFrameSetting setting, double& curr);
               
         .. group-tab:: C#

            参数:
               - AcquisitionFrameSetting【输入】: 采集框设置查询 [brightness, gain, exposure_stop].
               - curr【输出】: 该字段的当前值，双精度浮点型（用于字段增益）。

            返回值:
               - DaoAINETError^: DaoAINETError 对象，包含状态代码和任何错误信息。

            .. code-block:: c#

               DaoAINETError^ inquireSetting(AcquisitionFrameSetting setting, System::Double% curr);

         .. .. .. group-tab:: Python

            .. .. code-block:: python

   configureSetting:
      设置采集设置值。
      
      .. tabs::

         .. group-tab:: C++

            参数:
               - AcquisitionFrameSetting【输入】: 采集框设置查询 [brightness, gain, exposure_stop].
               - new_val【输入】: 要分配的新数值。

            返回值:
               - SlcSdkError: 包含状态代码和任何错误信息的 struct。

            .. code-block:: C++
               
               DAOAI_API SlcSdkError configureSetting(AcquisitionFrameSetting setting, int new_val);

               
         .. group-tab:: C#

            参数:
               - AcquisitionFrameSetting【输入】: 采集框设置查询 [brightness, gain, exposure_stop].
               - new_val【输入】: 要分配的新数值。

            返回值:
               - DaoAINETError^: DaoAINETError 对象，包含状态代码和任何错误信息。

            .. code-block:: c#

               DaoAINETError^ configureSetting(AcquisitionFrameSetting setting, System::Int32 new_val);

         .. .. .. group-tab:: Python

            .. .. code-block:: python

   configureSetting:
      设置双精度浮点型采集设定值（增益）。

      .. tabs::

         .. group-tab:: C++

            参数:
               - AcquisitionFrameSetting【输入】: 采集框设置查询 [brightness, gain, exposure_stop].
               - new_val【输入】: 要分配给的新值（增益为双精度浮点型）。

            返回值:
               - SlcSdkError: 包含状态代码和任何错误信息的 struct。

            .. code-block:: C++
               
               DAOAI_API SlcSdkError configureSetting(AcquisitionFrameSetting setting, double new_val);
               
         .. group-tab:: C#

            参数:
               - AcquisitionFrameSetting【输入】: 采集框设置查询 [brightness, gain, exposure_stop].
               - new_val【输入】: 要分配给的新值（增益为双精度浮点型）。

            返回值:
               - DaoAINETError^: DaoAINETError 对象，包含状态代码和任何错误信息。

            .. code-block:: c#

               DaoAINETError^ configureSetting(AcquisitionFrameSetting setting, System::Double new_val);

         .. .. .. group-tab:: Python

            .. .. code-block:: python

Settings Class
``````````````````

Public Members & Functions
*****************************

   FilterSetting:
      过滤器设置数据结构。

      .. tabs::

         .. group-tab:: C++

            .. code-block:: C++
               
               enum FilterSetting {
                  IntensityThreshold, // Double {0, 3}. Enable/Disable. Get/Set.
                  OutlierThreshold, // Double {0, inf}. Enable/Disable. Get/Set.
                  SaturationFilter, // Bool. Enable/Disable. Get/Set.
                  ContrastDistortionMode, // Int {0, 2}.	 0: Off, 1: Remove Distortion, 2: Correct Distortion. Get/Set.
                  ContrastDistortionStrength, // Int {0, 15000}. Get/Set.
                  GaussianFilter, // Int {0, 5}. Enable/Disable. Get/Set.
                  MedianFilter, // Int {0, 1}. Enable/Disable. Get/Set.
                  FaceNormalFilter, // Double {0, 40}. Enable/Disable. Get/Set.
                  SmoothFilter, // Int {0, 6}. Enable/Disable. Get/Set.
                  FillGaps, // Bool. Enable/Disable. Get/Set.
                  WidthThreshold, // Double {0, 500}. Get/Set.
                  SlopeThreshold, // Double {0, inf}. Get/Set.
                  DepthThreshold, // Double {0, 500}. Get/Set.
                  FillXFirst, // Bool. Get/Set.
                  FillBidirectional, // Bool. Get/Set.
                  PhaseQualityThreshold, // Double {0, 50}. Enable/Disable. Get/Set.
                  ConnectedAreaFilter, // Double {0, 10}. Enable/Disable. Get/Set.
                  ShowHDR // Bool. Enable/Disable. Get/Set.
               };
               
         .. group-tab:: C#

            .. code-block:: c#

               enum class FilterSetting {
                        IntensityThreshold, // Double {0, 3}. Enable/Disable. Get/Set.
                        OutlierThreshold, // Double {0, inf}. Enable/Disable. Get/Set.
                        SaturationFilter, // Bool. Enable/Disable. Get/Set.
                        ContrastDistortionMode, // Int {0, 2}.	 0: Off, 1: Remove Distortion, 2: Correct Distortion. Get/Set.
                        ContrastDistortionStrength, // Int {0, 15000}. Get/Set.
                        GaussianFilter, // Int {0, 5}. Enable/Disable. Get/Set.
                        MedianFilter, // Int {0, 1}. Enable/Disable. Get/Set.
                        FaceNormalFilter, // Double {0, 40}. Enable/Disable. Get/Set.
                        SmoothFilter, // Int {0, 6}. Enable/Disable. Get/Set.
                        FillGaps, // Bool. Enable/Disable. Get/Set.
                        WidthThreshold, // Double {0, 500}. Get/Set.
                        SlopeThreshold, // Double {0, inf}. Get/Set.
                        DepthThreshold, // Double {0, 500}. Get/Set.
                        FillXFirst, // Bool. Get/Set.
                        FillBidirectional, // Bool. Get/Set.
                        PhaseQualityThreshold, // Double {0, 50}. Enable/Disable. Get/Set.
                        ConnectedAreaFilter, // Double {0, 10}. Enable/Disable. Get/Set.
                        ShowHDR // Bool. Enable/Disable. Get/Set.
                     };

         .. .. .. group-tab:: Python

            .. .. code-block:: python

   SystemSetting:
      系统设置数据结构。

      .. tabs::

         .. group-tab:: C++

            .. code-block:: C++
               
               enum SystemSetting {
                  CameraModel, // String. Get only.
                  TemperatureSensorAvailable, // Bool. Get only.
                  TemperatureRegulationEnable, // Bool. Get only.
                  GPUAvailable, // Bool. Get only.
                  GPUEnable, // Bool. Get only.
                  Version, // String. Get only.
                  ExtraWhitePatternEnable // Bool. Enable/Disable. Get/Set.
               };

         .. group-tab:: C#

            .. code-block:: c#

               enum class SystemSetting {
                  CameraModel, // String. Get only.
                  TemperatureSensorAvailable, // Bool. Get only.
                  TemperatureRegulationEnable, // Bool. Get only.
                  GPUAvailable, // Bool. Get only.
                  GPUEnable, // Bool. Get only.
                  Version, // String. Get only.
                  ExtraWhitePatternEnable // Bool. Enable/Disable. Get/Set.
               };

         .. .. .. group-tab:: Python

            .. .. code-block:: python

   Constructor:
      .. tabs::

         .. group-tab:: C++

            .. code-block:: C++
               
               DAOAI_API Settings();
               
         .. group-tab:: C#

            .. code-block:: c#
               
               Settings();

         .. .. .. group-tab:: Python

            .. .. code-block:: python

   Copy Constructor:
      .. tabs::

         .. group-tab:: C++

            参数:
               - other【输出】: 另一个要复制到的 setting 对象。

            .. code-block:: C++
               
               DAOAI_API explicit Settings(const std::shared_ptr<Settings>& other);
               
         .. group-tab:: C#

            参数:
               - other【输出】: 另一个要复制到的 setting 对象。

            .. code-block:: c#

               Settings(Settings^ other);

         .. .. .. group-tab:: Python

            .. .. code-block:: python

   Destructor:
      .. tabs::

         .. group-tab:: C++

            .. code-block:: C++
               
               DAOAI_API ~Settings();
               
         .. group-tab:: C#

            .. code-block:: c#

               ~Settings();

         .. .. .. group-tab:: Python

            .. .. code-block:: python


   Constructor:
      Constructor 从设置工作区加载设置。
      
      .. tabs::

         .. group-tab:: C++

            参数:
               - file_path【输入】: The path to the workspace

            .. code-block:: C++

               DAOAI_API Settings(const std::string& file_path);
               
         .. group-tab:: C#

            参数:
               - file_path【输入】: The path to the workspace

            .. code-block:: c#

               Settings(System::String^ file_path);

         .. .. .. group-tab:: Python

            .. .. code-block:: python

   exportSettings:
      输出当前的相机设置。

      .. tabs::

         .. group-tab:: C++
            
            参数: 
               - file_name【输入】: The path to save the camera settings.
               
            返回值:
               - SlcSdkError: 包含状态代码和任何错误信息的 struct。

            .. code-block:: C++

               DAOAI_API SlcSdkError exportSettings(const std::string& file_path);

         .. group-tab:: C#
            
            参数: 
               - file_name【输入】: The path to save the camera settings.
               
            返回值:
               - DaoAINETError^: DaoAINETError 对象，包含状态代码和任何错误信息。

            .. code-block:: c#

               DaoAINETError^ exportSettings(System::String^ file_path);

         .. .. .. group-tab:: Python

            .. .. code-block:: python

   addAcquisitionFrame:
      在设置中添加一个采集帧，以便在3D采集中使用索引。

      .. tabs::

         .. group-tab:: C++
            
            参数: 
               - af【输入】: 要写入的 AcquisitionFrame 对象。
               - index【输出】: 写入该框架的索引。

            返回值:
               - SlcSdkError: 包含状态代码和任何错误信息的 struct。

            .. code-block:: C++

               DAOAI_API SlcSdkError addAcquisitionFrame(AcquisitionFrame af, int& index);

         .. group-tab:: C#
            
            参数: 
               - af【输入】: 要写入的 AcquisitionFrame 对象。
               - index【输出】: 写入该框架的索引。

            返回值:
               - DaoAINETError^: DaoAINETError 对象，包含状态代码和任何错误信息。

            .. code-block:: c#

               DaoAINETError^ addAcquisitionFrame(AcquisitionFrame^ af, System::Int32% index);

         .. .. .. group-tab:: Python

            .. .. code-block:: python

   addAcquisitionFrame:
      在设置中添加一个采集帧，用于3D采集。

      .. tabs::

         .. group-tab:: C++
            
            参数: 
               - af【输入】: 要写入的 AcquisitionFrame 对象。

            返回值:
               - SlcSdkError: 包含状态代码和任何错误信息的 struct。

            .. code-block:: C++

               DAOAI_API SlcSdkError addAcquisitionFrame(AcquisitionFrame af);

         .. group-tab:: C#
            
            参数: 
               - af【输入】: 要写入的 AcquisitionFrame 对象。

            返回值:
               - DaoAINETError^: DaoAINETError 对象，包含状态代码和任何错误信息。

            .. code-block:: c#

               DaoAINETError^ addAcquisitionFrame(AcquisitionFrame^ af);

         .. .. .. group-tab:: Python

            .. .. code-block:: python

   getAcquisitionFrame:
      从给定的索引中获取采集帧对象。

      .. tabs::

         .. group-tab:: C++

            参数: 
               - af【输出】: 将被写入数据的 AcquisitionFrame 对象。
               - index【输入】: 检索帧的索引。

            返回值:
               - SlcSdkError: 包含状态代码和任何错误信息的 struct。

            .. code-block:: C++

               DAOAI_API SlcSdkError getAcquisitionFrame(AcquisitionFrame& af, int index);

         .. group-tab:: C#

            参数: 
               - af【输出】: 将被写入数据的 AcquisitionFrame 对象。
               - index【输入】: 检索帧的索引。

            返回值:
               - DaoAINETError^: DaoAINETError 对象，包含状态代码和任何错误信息。

            .. code-block:: c#

               DaoAINETError^ getAcquisitionFrame(AcquisitionFrame^% af, System::Int32 index);

         .. .. .. group-tab:: Python

            .. .. code-block:: python

   modifyAcquisitionFrame:
      修改一个采集帧架，使其在一个给定的索引处进行设置。

      .. tabs::

         .. group-tab:: C++

            参数: 
               - af【输入】: 要写入的 AcquisitionFrame 对象。
               - index【输入】: AcquisitionFrame的索引，用于修改数据。

            返回值:
               - SlcSdkError: 包含状态代码和任何错误信息的 struct。

            .. code-block:: C++

               DAOAI_API SlcSdkError modifyAcquisitionFrame(AcquisitionFrame af, int index);

         .. group-tab:: C#

            参数: 
               - af【输入】: 要写入的 AcquisitionFrame 对象。
               - index【输入】: AcquisitionFrame的索引，用于修改数据。

            返回值:
               - DaoAINETError^: DaoAINETError 对象，包含状态代码和任何错误信息。

            .. code-block:: c#

               DaoAINETError^ modifyAcquisitionFrame(AcquisitionFrame^ af, System::Int32 index);

         .. .. .. group-tab:: Python

            .. .. code-block:: python

   deleteAcquisitionFrame:
      在给定的索引处删除一个采集帧。

      .. tabs::

         .. group-tab:: C++
            
            参数: 
               - index【输入】: 要删除的 AcquisitionFrame 的索引。

            返回值:
               - SlcSdkError: 包含状态代码和任何错误信息的 struct。

            .. code-block:: C++

               DAOAI_API SlcSdkError deleteAcquisitionFrame(int index);

         .. group-tab:: C#
            
            参数: 
               - index【输入】: 要删除的 AcquisitionFrame 的索引。

            返回值:
               - DaoAINETError^: DaoAINETError 对象，包含状态代码和任何错误信息。

            .. code-block:: c#

               DaoAINETError^ deleteAcquisitionFrame(System::Int32 index);

         .. .. .. group-tab:: Python

            .. .. code-block:: python

   setAcquisitionFrames:
      将AcquisitionFrames的Map写入设置，以便在3D采集中使用。

      .. tabs::

         .. group-tab:: C++

            参数: 
               - mofaf【输入】: 要写的int到AcquisitionFrame对象的Map。

            返回值:
               - SlcSdkError: 包含状态代码和任何错误信息的 struct。

            .. code-block:: C++

               DAOAI_API SlcSdkError setAcquisitionFrames(std::map<int, AcquisitionFrame> mofaf);

         .. group-tab:: C#

            参数: 
               - mofaf【输入】: 要写的int到AcquisitionFrame对象的Map。

            返回值:
               - DaoAINETError^: DaoAINETError 对象，包含状态代码和任何错误信息。

            .. code-block:: c#
               
               DaoAINETError^ setAcquisitionFrames(System::Collections::Generic::Dictionary<System::Int32, AcquisitionFrame^>^ mofaf);

         .. .. .. group-tab:: Python

            .. .. code-block:: python

   getAcquisitionFrames:
      从设置中获取当前的AcquisitionFrames的Map。

      .. tabs::

         .. group-tab:: C++
            
            参数: 
               - mofaf【输出】: 当前的采集帧map被写入该map中。

            返回值:
               - SlcSdkError: 包含状态代码和任何错误信息的 struct。

            .. code-block:: C++

               DAOAI_API SlcSdkError getAcquisitionFrames(std::map<int, AcquisitionFrame>& mofaf);

         .. group-tab:: C#
            
            参数: 
               - mofaf【输出】: 当前的采集帧map被写入该map中。

            返回值:
               - DaoAINETError^: DaoAINETError 对象，包含状态代码和任何错误信息。

            .. code-block:: c#

               DaoAINETError^ getAcquisitionFrames(System::Collections::Generic::Dictionary<System::Int32, AcquisitionFrame^>^% mofaf);

         .. .. .. group-tab:: Python

            .. .. code-block:: python

   enableFilterSetting:
      启用或禁用一个过滤器设置。

      .. tabs::

         .. group-tab:: C++
            
            参数: 
               - setting【输入】: 要切换的过滤器。
               - toggle【输入】: 启用或禁用。

            返回值:
               - SlcSdkError: 包含状态代码和任何错误信息的 struct。

            .. code-block:: C++

               DAOAI_API SlcSdkError enableFilterSetting(FilterSetting setting, bool toggle);

         .. group-tab:: C#
            
            参数: 
               - setting【输入】: 要切换的过滤器。
               - toggle【输入】: 启用或禁用。

            返回值:
               - DaoAINETError^: DaoAINETError 对象，包含状态代码和任何错误信息。

            .. code-block:: c#

               DaoAINETError^ enableFilterSetting(FilterSetting setting, System::Boolean toggle);

         .. .. .. group-tab:: Python

            .. .. code-block:: python

   checkEnableFilterSetting:
      检查是否启用了过滤器设置。

      .. tabs::

         .. group-tab:: C++
            
            参数: 
               - setting【输入】: 要检查的过滤器。
               - is_enabled【输出】: 启用状态写入此。

            返回值:
               - SlcSdkError: 包含状态代码和任何错误信息的 struct。

            .. code-block:: C++

               DAOAI_API SlcSdkError checkEnableFilterSetting(FilterSetting setting, bool& is_enabled);

         .. group-tab:: C#
            
            参数: 
               - setting【输入】: 要检查的过滤器。
               - is_enabled【输出】: 启用状态写入此。

            返回值:
               - DaoAINETError^: DaoAINETError 对象，包含状态代码和任何错误信息。

            .. code-block:: c#

               DaoAINETError^ checkEnableFilterSetting(FilterSetting setting, System::Boolean% is_enabled);

         .. .. .. group-tab:: Python

            .. .. code-block:: python

   inquireFilterSetting:
      获取一个过滤器设置的当前值和有效范围。

      .. tabs::

         .. group-tab:: C++
            
            参数: 
               - setting【输入】: 要检查的过滤器。
               - curr【输出】: 该设置的当前值。
               - min【输出】: 此设置可配置的最小有效值。
               - max【输出】: 此设置可配置的最大有效值。

            返回值:
               - SlcSdkError: 包含状态代码和任何错误信息的 struct。

            .. code-block:: C++

               DAOAI_API SlcSdkError inquireFilterSetting(FilterSetting setting, int& curr, int& min, int& max);

         .. group-tab:: C#
            
            参数: 
               - setting【输入】: 要检查的过滤器。
               - curr【输出】: 该设置的当前值。
               - min【输出】: 此设置可配置的最小有效值。
               - max【输出】: 此设置可配置的最大有效值。

            返回值:
               - DaoAINETError^: DaoAINETError 对象，包含状态代码和任何错误信息。

            .. code-block:: c#

               DaoAINETError^ inquireFilterSetting(FilterSetting setting, System::Int32% curr, System::Int32% min, System::Int32% max);

         .. .. .. group-tab:: Python

            .. .. code-block:: python

   inquireFilterSetting:
      获取一个过滤器设置的当前值和有效范围（双精度浮点型）。

      .. tabs::

         .. group-tab:: C++
            
            参数: 
               - setting【输入】: 要检查的过滤器。
               - curr【输出】: 该设置的当前值。
               - min【输出】: 此设置可配置的最小有效值。
               - max【输出】: 此设置可配置的最大有效值。

            返回值:
               - SlcSdkError: 包含状态代码和任何错误信息的 struct。

            .. code-block:: C++

               DAOAI_API SlcSdkError inquireFilterSetting(FilterSetting setting, double& curr, double& min, double& max);

         .. group-tab:: C#
            
            参数: 
               - setting【输入】: 要检查的过滤器。
               - curr【输出】: 该设置的当前值。
               - min【输出】: 此设置可配置的最小有效值。
               - max【输出】: 此设置可配置的最大有效值。

            返回值:
               - DaoAINETError^: DaoAINETError 对象，包含状态代码和任何错误信息。

            .. code-block:: c#

               DaoAINETError^ inquireFilterSetting(FilterSetting setting, System::Double% curr, System::Double% min, System::Double% max);

         .. .. .. group-tab:: Python

            .. .. code-block:: python

   inquireFilterSetting:
      获取一个过滤器设置的当前值。

      .. tabs::

         .. group-tab:: C++
            
            参数: 
               - setting【输入】: 要检查的过滤器。
               - curr【输出】: 该设置的当前值。

            返回值:
               - SlcSdkError: 包含状态代码和任何错误信息的 struct。

            .. code-block:: C++

               DAOAI_API SlcSdkError inquireFilterSetting(FilterSetting setting, int& curr);

         .. group-tab:: C#
            
            参数: 
               - setting【输入】: 要检查的过滤器。
               - curr【输出】: 该设置的当前值。

            返回值:
               - DaoAINETError^: DaoAINETError 对象，包含状态代码和任何错误信息。
               
            .. code-block:: c#

               DaoAINETError^ inquireFilterSetting(FilterSetting setting, System::Int32% curr);

         .. .. .. group-tab:: Python

            .. .. code-block:: python

   inquireFilterSetting:
      获取一个过滤器设置的当前值（双精度浮点型）。

      .. tabs::

         .. group-tab:: C++
            
            参数: 
               - setting【输入】: 要检查的过滤器。
               - curr【输出】: 该设置的当前值。

            返回值:
               - SlcSdkError: 包含状态代码和任何错误信息的 struct。

            .. code-block:: C++

               DAOAI_API SlcSdkError inquireFilterSetting(FilterSetting setting, double& curr);

         .. group-tab:: C#
            
            参数: 
               - setting【输入】: 要检查的过滤器。
               - curr【输出】: 该设置的当前值。

            返回值:
               - DaoAINETError^: DaoAINETError 对象，包含状态代码和任何错误信息。

            .. code-block:: c#

               DaoAINETError^ inquireFilterSetting(FilterSetting setting, System::Double% curr);

         .. .. .. group-tab:: Python

            .. .. code-block:: python

   inquireFilterSetting:
      获取一个过滤器设置的当前值（布尔类型）。

      .. tabs::

         .. group-tab:: C++
            
            参数: 
               - setting【输入】: 要检查的过滤器。
               - curr【输出】: 该设置的当前值。

            返回值:
               - SlcSdkError: 包含状态代码和任何错误信息的 struct。

            .. code-block:: C++

               DAOAI_API SlcSdkError inquireFilterSetting(FilterSetting setting, bool& curr);

         .. group-tab:: C#
            
            参数: 
               - setting【输入】: 要检查的过滤器。
               - curr【输出】: 该设置的当前值。

            返回值:
               - DaoAINETError^: DaoAINETError 对象，包含状态代码和任何错误信息。

            .. code-block:: c#

               DaoAINETError^ inquireFilterSetting(FilterSetting setting, System::Boolean% curr);

         .. .. .. group-tab:: Python

            .. .. code-block:: python


   configureFilterSetting:
      用给定的值配置一个过滤器设置。

      .. tabs::

         .. group-tab:: C++
            
            参数: 
               - setting【输入】: 要配置的过滤器。
               - new_val【输入】: 要写入该设置的值。

            返回值:
               - SlcSdkError: 包含状态代码和任何错误信息的 struct。

            .. code-block:: C++

               DAOAI_API SlcSdkError configureFilterSetting(FilterSetting setting, int new_val);

         .. group-tab:: C#
            
            参数: 
               - setting【输入】: 要配置的过滤器。
               - new_val【输入】: 要写入该设置的值。

            返回值:
               - DaoAINETError^: DaoAINETError 对象，包含状态代码和任何错误信息。

            .. code-block:: c#

               DaoAINETError^ configureFilterSetting(FilterSetting setting, System::Int32 new_val);

         .. .. .. group-tab:: Python

            .. .. code-block:: python

   configureFilterSetting:
      配置一个具有给定值（双精度浮点型）的过滤器设置。

      .. tabs::

         .. group-tab:: C++
            
            参数: 
               - setting【输入】: 要配置的过滤器。
               - new_val【输入】: 要写入该设置的值。

            返回值:
               - SlcSdkError: 包含状态代码和任何错误信息的 struct。

            .. code-block:: C++

               DAOAI_API SlcSdkError configureFilterSetting(FilterSetting setting, double new_val);

         .. group-tab:: C#
            
            参数: 
               - setting【输入】: 要配置的过滤器。
               - new_val【输入】: 要写入该设置的值。

            返回值:
               - DaoAINETError^: DaoAINETError 对象，包含状态代码和任何错误信息。

            .. code-block:: c#

               DaoAINETError^ configureFilterSetting(FilterSetting setting, System::Double new_val);

         .. .. .. group-tab:: Python

            .. .. code-block:: python

   configureFilterSetting:
      配置一个具有给定值（布尔类型）的过滤器设置。

      .. tabs::

         .. group-tab:: C++
            
            参数: 
               - setting【输入】: 要配置的过滤器。
               - new_val【输入】: 要写入该设置的值。

            返回值:
               - SlcSdkError: 包含状态代码和任何错误信息的 struct。

            .. code-block:: C++

               DAOAI_API SlcSdkError configureFilterSetting(FilterSetting setting, bool new_val);

         .. group-tab:: C#
            
            参数: 
               - setting【输入】: 要配置的过滤器。
               - new_val【输入】: 要写入该设置的值。

            返回值:
               - DaoAINETError^: DaoAINETError 对象，包含状态代码和任何错误信息。

            .. code-block:: c#

               DaoAINETError^ configureFilterSetting(FilterSetting setting, System::Boolean new_val);

         .. .. .. group-tab:: Python

            .. .. code-block:: python

   configureFilterSetting:
      启用或禁用一个系统设置。

      .. tabs::

         .. group-tab:: C++
            
            参数: 
               - setting【输入】: 要切换的系统设置。
               - toggle【输入】: 启用或禁用。

            返回值:
               - SlcSdkError: 包含状态代码和任何错误信息的 struct。

            .. code-block:: C++

               DAOAI_API SlcSdkError enableSystemSetting(SystemSetting setting, bool toggle);

         .. group-tab:: C#
            
            参数: 
               - setting【输入】: 要切换的系统设置。
               - toggle【输入】: 启用或禁用。

            返回值:
               - DaoAINETError^: DaoAINETError 对象，包含状态代码和任何错误信息。

            .. code-block:: c#

               DaoAINETError^ enableSystemSetting(SystemSetting setting, System::Boolean toggle);

         .. .. .. group-tab:: Python

            .. .. code-block:: python

   checkEnableSystemSetting:
      Check if a system setting is enabled or disabled.

      .. tabs::

         .. group-tab:: C++
            
            参数: 
               - setting【输入】: 要检查的系统设置。
               - is_enabled【输出】: 启用状态写入此。

            返回值:
               - SlcSdkError: 包含状态代码和任何错误信息的 struct。

            .. code-block:: C++

               DAOAI_API SlcSdkError checkEnableSystemSetting(SystemSetting setting, bool& is_enabled);

         .. group-tab:: C#
            
            参数: 
               - setting【输入】: 要检查的系统设置。
               - is_enabled【输出】: 启用状态写入此。

            返回值:
               - DaoAINETError^: DaoAINETError 对象，包含状态代码和任何错误信息。

            .. code-block:: c#

               DaoAINETError^ checkEnableSystemSetting(SystemSetting setting, System::Boolean% is_enabled);

         .. .. .. group-tab:: Python

            .. .. code-block:: python

   inquireSystemSetting:
      Check the current value and valid range of a system setting.

      .. tabs::

         .. group-tab:: C++
            
            参数: 
               - setting【输入】: 要检查的系统设置。
               - curr【输出】: 系统设置的当前值。
               - min【输出】: 系统设置的最小可配置值。
               - max【输出】: 系统设置的最大可配置值。

            返回值:
               - SlcSdkError: 包含状态代码和任何错误信息的 struct。

            .. code-block:: C++

               DAOAI_API SlcSdkError inquireSystemSetting(SystemSetting setting, int& curr, int& min, int& max);

         .. group-tab:: C#
            
            参数: 
               - setting【输入】: 要检查的系统设置。
               - curr【输出】: 系统设置的当前值。
               - min【输出】: 系统设置的最小可配置值。
               - max【输出】: 系统设置的最大可配置值。

            返回值:
               - DaoAINETError^: DaoAINETError 对象，包含状态代码和任何错误信息。

            .. code-block:: c#

               DaoAINETError^ inquireSystemSetting(SystemSetting setting, System::Int32% curr, System::Int32% min, System::Int32% max);

         .. .. .. group-tab:: Python

            .. .. code-block:: python

   inquireSystemSetting:
      检查一个系统设置的当前值。

      .. tabs::

         .. group-tab:: C++
            
            参数: 
               - setting【输入】: 要检查的系统设置。
               - curr【输出】: 系统设置的当前值。

            返回值:
               - SlcSdkError: 包含状态代码和任何错误信息的 struct。

            .. code-block:: C++

               DAOAI_API SlcSdkError inquireSystemSetting(SystemSetting setting, int& curr);

         .. group-tab:: C#
            
            参数: 
               - setting【输入】: 要检查的系统设置。
               - curr【输出】: 系统设置的当前值。

            返回值:
               - DaoAINETError^: DaoAINETError 对象，包含状态代码和任何错误信息。

            .. code-block:: c#

               DaoAINETError^ inquireSystemSetting(SystemSetting setting, System::Int32% curr);

         .. .. .. group-tab:: Python

            .. .. code-block:: python

   inquireSystemSetting:
      检查一个系统设置的当前值（布尔类型）。

      .. tabs::

         .. group-tab:: C++
            
            参数: 
               - setting【输入】: 要检查的系统设置。
               - curr【输出】: 系统设置的当前值。

            返回值:
               - SlcSdkError: 包含状态代码和任何错误信息的 struct。

            .. code-block:: C++

               DAOAI_API SlcSdkError inquireSystemSetting(SystemSetting setting, bool& curr);

         .. group-tab:: C#
            
            参数: 
               - setting【输入】: 要检查的系统设置。
               - curr【输出】: 系统设置的当前值。

            返回值:
               - DaoAINETError^: DaoAINETError 对象，包含状态代码和任何错误信息。

            .. code-block:: c#

               DaoAINETError^ inquireSystemSetting(SystemSetting setting, System::Boolean% curr);

         .. .. .. group-tab:: Python

            .. .. code-block:: python


   inquireSystemSetting:
      检查一个系统设置的当前值（字符串）。

      .. tabs::

         .. group-tab:: C++
            
            参数: 
               - setting【输入】: 要检查的系统设置。
               - curr【输出】: 系统设置的当前值。

            返回值:
               - SlcSdkError: 包含状态代码和任何错误信息的 struct。

            .. code-block:: C++

               DAOAI_API SlcSdkError inquireSystemSetting(SystemSetting setting, std::string& curr);

         .. group-tab:: C#
            
            参数: 
               - setting【输入】: 要检查的系统设置。
               - curr【输出】: 系统设置的当前值。

            返回值:
               - DaoAINETError^: DaoAINETError 对象，包含状态代码和任何错误信息。

            .. code-block:: c#

               DaoAINETError^ inquireSystemSetting(SystemSetting setting, System::String^% val);

         .. .. .. group-tab:: Python

            .. .. code-block:: python

   configureSystemSetting:
      用给定的值配置一个系统设置。

      .. tabs::

         .. group-tab:: C++
            
            参数: 
               - setting【输入】: 要配置的系统设置。
               - new_val【输入】: 写入系统设置的值。

            返回值:
               - SlcSdkError: 包含状态代码和任何错误信息的 struct。

            .. code-block:: C++

               DAOAI_API SlcSdkError configureSystemSetting(SystemSetting setting, int new_val);

         .. group-tab:: C#
            
            参数: 
               - setting【输入】: 要配置的系统设置。
               - new_val【输入】: 写入系统设置的值。

            返回值:
               - DaoAINETError^: DaoAINETError 对象，包含状态代码和任何错误信息。

            .. code-block:: c#

               DaoAINETError^ configureSystemSetting(SystemSetting setting, System::Int32 new_val);

         .. .. .. group-tab:: Python

            .. .. code-block:: python

   configureSystemSetting:
      配置一个具有给定值（布尔类型）的系统设置。

      .. tabs::

         .. group-tab:: C++
            
            参数: 
               - setting【输入】: 要配置的系统设置。
               - new_val【输入】: 写入系统设置的值。

            返回值:
               - SlcSdkError: 包含状态代码和任何错误信息的 struct。

            .. code-block:: C++

               DAOAI_API SlcSdkError configureSystemSetting(SystemSetting setting, bool new_val);

         .. group-tab:: C#
                        
            参数: 
               - setting【输入】: 要配置的系统设置。
               - new_val【输入】: 写入系统设置的值。

            返回值:
               - DaoAINETError^: DaoAINETError 对象，包含状态代码和任何错误信息。

            .. code-block:: c#

               DaoAINETError^ configureSystemSetting(SystemSetting setting, System::Boolean new_val);

         .. .. .. group-tab:: Python

            .. .. code-block:: python

|

*Class* SlcSdkError
~~~~~~~~~~~~~~~~~~~~~~

   .. tabs::

      .. group-tab:: C++

         .. code-block:: C++
               
            #include "error.h"
            
      .. group-tab:: C#

         .. code-block:: c#

            #include "error.h"

      .. .. group-tab:: Python

         .. code-block:: python


Public Members & Functions
`````````````````````````````

   SlcSdkStatus:
      DaoAI SDK的状态数据结构。

   .. tabs::

      .. group-tab:: C++

         .. code-block:: C++
               
            enum DAOAI_API SlcSdkStatus : int
               {
                  SlcSdkSuccess,
                  SlcSdkErrorInvalidValue,
                  SlcSdkErrorGPUMemoryAllocation,
                  SlcSdkErrorVirtualFunctionCalled,
                  SlcSdkErrorImageAcquisition,
                  SlcSdkErrorFileOperation,
                  SlcSdkErrorDeviceConnection,
                  SlcSdkErrorDeviceOperation,
                  SlcSdkErrorTemperatureRegulation,
                  SlcSdkErrorWorkspaceVersion,
                  SlcSdkErrorRemoteConnection,
                  SlcSdkErrorRemoteVersion
               };
            
      .. group-tab:: C#

         .. code-block:: c#

            public enum class DaoAINETStatus : int {
               SlcSdkSuccess,
               SlcSdkErrorInvalidValue,
               SlcSdkErrorGPUMemoryAllocation,
               SlcSdkErrorVirtualFunctionCalled,
               SlcSdkErrorImageAcquisition,
               SlcSdkErrorFileOperation,
               SlcSdkErrorDeviceConnection,
               SlcSdkErrorDeviceOperation,
               SlcSdkErrorTemperatureRegulation,
               SlcSdkErrorWorkspaceVersion,
               SlcSdkErrorRemoteConnection,
               SlcSdkErrorRemoteVersion
            };


      .. .. group-tab:: Python

         .. code-block:: python

   Constructor:
      构建具有初始值的错误类。

   .. tabs::

      .. group-tab:: C++

         .. code-block:: C++
               
               DAOAI_API SlcSdkError(SlcSdkStatus status, std::string detail_text);
            
      .. group-tab:: C#

         .. code-block:: c#

            DaoAINETError(DaoAINETStatus status, System::String^ detail_text);

      .. .. group-tab:: Python

         .. code-block:: python

   Constructor:
      构建具有默认值（无效错误）的错误类。

   .. tabs::

      .. group-tab:: C++

         .. code-block:: C++
               
            DAOAI_API SlcSdkError();
            
      .. group-tab:: C#

         .. code-block:: c#

            DaoAINETError();

      .. .. group-tab:: Python

         .. code-block:: python


   status:
      获取错误的状态代码。

   .. tabs::

      .. group-tab:: C++

         返回值:
            - SlcSdkStatus: 错误的状态代码。

         .. code-block:: C++
               
            DAOAI_API SlcSdkStatus status();
            
      .. group-tab:: C#

         返回值:
            - DaoAINETStatus: 错误的状态代码。

         .. code-block:: c#

            DaoAINETStatus status();

      .. .. group-tab:: Python

         .. code-block:: python


   details:
      获取错误的详细描述。

   .. tabs::

      .. group-tab:: C++

         返回值:
            - std::string: 错误的详细描述。

         .. code-block:: C++
               
            DAOAI_API std::string details();
            
      .. group-tab:: C#

         返回值:
            - System::String: 错误的详细描述。

         .. code-block:: c#

            System::String^ details();

      .. .. group-tab:: Python

         .. code-block:: python



*Class* Frame
~~~~~~~~~~~~~~~~~~~~

   .. tabs::

      .. group-tab:: C++

         .. code-block:: C++
               
            #include "frame.h"
            
      .. group-tab:: C#

         .. code-block:: c#

            #include "frame.h"

      .. .. group-tab:: Python

         .. code-block:: python

Public Members & Functions
`````````````````````````````

   Constructor:
      构建具有初始值的错误类。

   .. tabs::

      .. group-tab:: C++

         .. code-block:: C++
               
            DAOAI_API Frame();
            
      .. group-tab:: C#

         .. code-block:: c#

            Frame();

      .. .. group-tab:: Python

         .. code-block:: python


   **Copy Constructor**:

   .. tabs::

      .. group-tab:: C++

         .. code-block:: C++
               
            DAOAI_API explicit Frame(const std::shared_ptr<Frame>& other);
            
      .. group-tab:: C#

         .. code-block:: c#

            Frame(Frame^ a);

      .. .. group-tab:: Python

         .. code-block:: python


   getPointCloud:
      从Frame中获取点云。

   .. tabs::

      .. group-tab:: C++

            参数: 
               - 【输入】 pc: PointCloud对象，用于写入包含的点云数据。

            返回值:
               - SlcSdkError: 包含状态代码和任何错误信息的 struct。

         .. code-block:: C++
               
            DAOAI_API SlcSdkError getPointCloud(PointCloud& pc);
            
      .. group-tab:: C#

            参数: 
               - 【输入】 pc: PointCloud对象，用于写入包含的点云数据。

            返回值:
               - DaoAINETError^: DaoAINETError ，包含状态代码和任何错误信息。

         .. code-block:: c#

            DaoAINETError^ getPointCloud(PointCloud^% pc);

      .. .. group-tab:: Python

         .. code-block:: python

   save:
      保存帧。

   .. tabs::

      .. group-tab:: C++

            参数: 
               - file_name【输入】: 保存帧的路径。支持后缀为.dcf（DaoAI数据格式）、.ply、.pcd和.daf的文件。

            返回值:
               - SlcSdkError: 包含状态代码和任何错误信息的 struct。

         .. code-block:: C++
               
            DAOAI_API SlcSdkError save(const std::string &file_name);
            
      .. group-tab:: C#

            参数: 
               - file_name【输入】: 保存帧的路径。支持后缀为.dcf（DaoAI数据格式）、.ply、.pcd和.daf的文件。

            返回值:
               - DaoAINETError^: DaoAINETError ，包含状态代码和任何错误信息。

         .. code-block:: c#

            DaoAINETError^ save(System::String^ file_name);

      .. .. group-tab:: Python

         .. code-block:: python

   load:
      保存帧。

   .. tabs::

      .. group-tab:: C++

            参数: 
               - file_name【输入】: 加载帧的路径。

            返回值:
               - SlcSdkError: 包含状态代码和任何错误信息的 struct。

         .. code-block:: C++
               
            DAOAI_API SlcSdkError load(const std::string &file_name);
            
      .. group-tab:: C#

            参数: 
               - file_name【输入】: 加载帧的路径。

            返回值:
               - DaoAINETError^: DaoAINETError ，包含状态代码和任何错误信息。

         .. code-block:: c#

            DaoAINETError^ load(System::String^ file_name);

      .. .. group-tab:: Python

         .. code-block:: python

   isEmpty:
      检查帧是否为空。

   .. tabs::

      .. group-tab:: C++

            返回值:
               - bool: 如果帧是空的，则为真，否则为假。

         .. code-block:: C++
               
            DAOAI_API bool isEmpty();
            
      .. group-tab:: C#

            返回值:
               - System::Boolean: 如果帧是空的，则为真，否则为假。

         .. code-block:: c#

            System::Boolean isEmpty();

      .. .. group-tab:: Python

         .. code-block:: python

|

*Class* Point Cloud
~~~~~~~~~~~~~~~~~~~~~~

   .. tabs::

      .. group-tab:: C++

         .. code-block:: C++
               
            #include "point_cloud.h"
            
      .. group-tab:: C#

         .. code-block:: c#

            #include "point_cloud.h"

      .. .. group-tab:: Python

         .. code-block:: python

Public Members & Functions
`````````````````````````````

   **Constructor**:

   .. tabs::

      .. group-tab:: C++

         .. code-block:: C++
               
            DAOAI_API PointCloud();
            
      .. group-tab:: C#

         .. code-block:: c#

            PointCloud();

      .. .. group-tab:: Python

         .. code-block:: python

   **Copy Constructor**:

   .. tabs::

      .. group-tab:: C++

         .. code-block:: C++
               
            DAOAI_API explicit PointCloud(const std::shared_ptr<PointCloud>& other);
            
      .. group-tab:: C#

         .. code-block:: c#

            PointCloud(PointCloud^ other);

      .. .. group-tab:: Python

         .. code-block:: python

   Destructor:

   .. tabs::

      .. group-tab:: C++

         .. code-block:: C++
               
            DAOAI_API ~PointCloud();
            
      .. group-tab:: C#

         .. code-block:: c#

            ~PointCloud();

      .. .. group-tab:: Python

         .. code-block:: python

   PointCloud:
      以给定的行数和列数分配一个有组织的点云。

   .. tabs::

      .. group-tab:: C++

            参数:
               - rows【输入】: 点云的高度。
               - cols【输入】: 点云的宽度。

         .. code-block:: C++
               
            DAOAI_API PointCloud(size_t rows, size_t cols);
            
      .. group-tab:: C#

         参数:
            - rows【输入】: 点云的高度。
            - cols【输入】: 点云的宽度。

         .. code-block:: c#

            PointCloud(System::UInt64 rows, System::UInt64 cols);
            
      .. .. group-tab:: Python

         .. code-block:: python

   isEmpty:
      返回点云是否为空。

   .. tabs::

      .. group-tab:: C++

            返回值:
               - bool:  点云是否为空。

         .. code-block:: C++
               
            DAOAI_API bool isEmpty() const;
            
      .. group-tab:: C#

            返回值:
               - System::Boolean: 点云是否为空。

         .. code-block:: c#

            System::Boolean isEmpty();

      .. .. group-tab:: Python

         .. code-block:: python

   getWidth:
      返回点云的宽度（列数）。

   .. tabs::

      .. group-tab:: C++

            返回值:
               - int: 点云的宽度（列数）。

         .. code-block:: C++
               
            DAOAI_API int getWidth() const;
            
      .. group-tab:: C#

            返回值:
               - System::UInt64: 点云的宽度（列数）。

         .. code-block:: c#

            System::UInt64 getWidth();

      .. .. group-tab:: Python

         .. code-block:: python

   getHeight:
      返回点云的高度（行数）。

   .. tabs::

      .. group-tab:: C++

            返回值:
               - int: 点云的高度（行数）。

         .. code-block:: C++
               
            DAOAI_API int getHeight() const;
            
      .. group-tab:: C#

            返回值:
               - System::UInt64: 点云的高度（行数）。

         .. code-block:: c#

            System::UInt64 getHeight();


      .. .. group-tab:: Python

         .. code-block:: python

   getSize:
      返回点云中的点的数量。

   .. tabs::

      .. group-tab:: C++

         返回值:
            - int: 点云的大小（点的数量）。

         .. code-block:: C++
               
            DAOAI_API int getSize() const;
            
      .. group-tab:: C#

         返回值:
            - int: 点云的大小（点的数量）。
               
         .. code-block:: c#

            System::UInt64 getSize();

      .. .. group-tab:: Python

         .. code-block:: python

   getPoint:
      获得一个由一维线性指数（从0到点的数量）给出的点的参考。

   .. tabs::

      .. group-tab:: C++

         参数:
            - idx【输入】: 索引值
         返回值:
            - Point: 指向一个 point

         .. code-block:: C++
               
            DAOAI_API Point &operator()(size_t idx);
            
      .. group-tab:: C#

         参数:
            - idx【输入】: index value
         返回值:
            - Point: 指向一个 point

         .. code-block:: c#

            Point^ getPoint(System::UInt64 idx);

      .. .. group-tab:: Python

         .. code-block:: python

   getPoint:
      Obtain a constant reference to a point given by a 1D linear index (from 0 to number of points).

   .. tabs::

      .. group-tab:: C++

         参数:
            - idx【输入】: index value
            
         返回值:
            - Point: 指向一个 point

         .. code-block:: C++
               
            DAOAI_API const Point &operator()(size_t idx) const;
            
      .. .. group-tab:: Python

         .. code-block:: python

   getPoint:
      获得一个由行和列给出的点的参考，i是行，j是列。

   .. tabs::

      .. group-tab:: C++

            参数:
               - i: row
               - j: col

            返回值:
               - Point: 指向一个 point

         .. code-block:: C++
               
            DAOAI_API Point operator()(size_t i, size_t j);
            
      .. group-tab:: C#

            参数:
               - i: row
               - j: col

            返回值:
               - Point: 指向一个 point

         .. code-block:: c#

            Point^ getPoint(System::UInt64 i, System::UInt64 j);

      .. .. group-tab:: Python

         .. code-block:: python

   getPoint:
      获得一个由行和列给出的点的恒定参考，i是行，j是列。

   .. tabs::

      .. group-tab:: C++

            参数:
               - i: row
               - j: col

            返回值:
               - Point: 指向一个 point

         .. code-block:: C++

            DAOAI_API const Point &operator()(size_t i, size_t j) const;
            
      .. .. group-tab:: Python

         .. code-block:: python

   resize:
      调整点云的大小到给定的行数和列数。

   .. tabs::

      .. group-tab:: C++

            参数:
               - rows: 新的行数
               - cols: 新的列数

            返回值:
               - SlcSdkError: 包含状态代码和任何错误信息的 struct。

         .. code-block:: C++

            DAOAI_API SlcSdkError resize(size_t rows, size_t cols);
            
      .. group-tab:: C#

            参数:
               - rows: 新的行数
               - cols: 新的列数

            返回值:
               - DaoAINETError^: DaoAINETError ，包含状态代码和任何错误信息。

         .. code-block:: c#

            DaoAINETError^ resize(System::UInt64 rows, System::UInt64 cols);

      .. .. group-tab:: Python

         .. code-block:: python

   getDataPtr:
      获得指向点云中第一个点的指针

   .. tabs::

      .. group-tab:: C++

         返回值:
            - Point*: 指向点云中第一个点的指针。

         .. code-block:: C++

            DAOAI_API Point* getDataPtr() const;
            
      .. .. group-tab:: C#
         
         返回值:
            - Point*: 指向点云中第一个点的指针。

         .. code-block:: c#

      .. .. group-tab:: Python

         .. code-block:: python

   getVecX:
      返回一个所有X坐标数据的向量

   .. tabs::

      .. group-tab:: C++

         返回值:
            - std::vector<float>: 所有X坐标数据的向量

         .. code-block:: C++

            DAOAI_API std::vector<float> getVecX() const;
            
      .. group-tab:: C#

         返回值:
            - List<System::Single>: 所有X坐标数据的向量

         .. code-block:: c#

            List<System::Single>^ getVecX();

      .. .. group-tab:: Python

         .. code-block:: python

   getVecY:
      返回一个所有y坐标数据的向量

   .. tabs::

      .. group-tab:: C++

            返回值:
               - std::vector<float>: 所有Y坐标数据的向量

         .. code-block:: C++

            DAOAI_API std::vector<float> getVecY() const;
            
      .. group-tab:: C#

         返回值:
            - List<System::Single>: 所有Y坐标数据的向量

         .. code-block:: c#

            List<System::Single>^ getVecY();

      .. .. group-tab:: Python

         .. code-block:: python

   getVecZ:
      返回一个所有z坐标数据的向量

   .. tabs::

      .. group-tab:: C++

            返回值:
               - std::vector<float>: 所有Z坐标数据的向量

         .. code-block:: C++

            DAOAI_API std::vector<float> getVecZ() const;
            
      .. group-tab:: C#

         返回值:
            - List<System::Single>: 所有Z坐标数据的向量

         .. code-block:: c#

            List<System::Single>^ getVecZ();

      .. .. group-tab:: Python

         .. code-block:: python

   getVecRgba:
      返回一个所有rgba数据的向量

   .. tabs::

      .. group-tab:: C++

         返回值:
            - std::vector<uint32_t>: 所有rgba数据的向量

         .. code-block:: C++

            DAOAI_API std::vector<uint32_t> getVecRgba() const;
            
      .. group-tab:: C#

         返回值:
            - List<System::UInt32>: 所有rgba数据的向量

         .. code-block:: c#

            List<System::UInt32>^ getVecRgba();

      .. .. group-tab:: Python

         .. code-block:: python

   getVecConfident:
      返回一个包含所有可信度数据的向量

   .. tabs::

      .. group-tab:: C++

         返回值:
            - std::vector<float>: 一个包含所有可信度数据的向量

         .. code-block:: C++

            DAOAI_API std::vector<float> getVecConfident() const;
            
      .. group-tab:: C#

         返回值:
            - List<System::Single>: 一个包含所有可信度数据的向量

         .. code-block:: c#

            List<System::Single>^ getVecConfident();

      .. .. group-tab:: Python

         .. code-block:: python

   getVecR:
      返回一个所有红色通道数据的向量

   .. tabs::

      .. group-tab:: C++

         返回值:
            - std::vector<uint8_t>: 所有红色通道数据的向量

         .. code-block:: C++

            DAOAI_API std::vector<uint8_t> getVecR() const;
            
      .. group-tab:: C#

         返回值:
            - List<System::Byte>: 所有红色通道数据的向量

         .. code-block:: c#

            List<System::Byte>^ getVecR();

      .. .. group-tab:: Python

         .. code-block:: python

   getVecG:
      返回一个所有绿色通道数据的向量

   .. tabs::

      .. group-tab:: C++

            返回值:
               - std::vector<uint8_t>: 所有绿色通道数据的向量

         .. code-block:: C++

            DAOAI_API std::vector<uint8_t> getVecG() const;
            
      .. group-tab:: C#

         返回值:
            - List<System::Byte>: 所有绿色通道数据的向量

         .. code-block:: c#

            List<System::Byte>^ getVecG();

      .. .. group-tab:: Python

         .. code-block:: python

   getVecB:
      返回一个所有蓝色通道数据的向量

   .. tabs::

      .. group-tab:: C++

            返回值:
               - std::vector<uint8_t>: 所有蓝色通道数据的向量

         .. code-block:: C++

            DAOAI_API std::vector<uint8_t> getVecB() const;
            
      .. group-tab:: C#

         返回值:
            - List<System::Byte>: 所有蓝色通道数据的向量

         .. code-block:: c#

            List<System::Byte>^ getVecB();

      .. .. group-tab:: Python

         .. code-block:: python

   getVecA:
      返回一个所有Alpha通道数据的向量

   .. tabs::

      .. group-tab:: C++

            返回值:
               - std::vector<uint8_t>: 所有Alpha通道数据的向量

         .. code-block:: C++

            DAOAI_API std::vector<uint8_t> getVecA() const;
            
      .. group-tab:: C#

         返回值:
            - List<System::Byte>: 所有Alpha通道数据的向量

         .. code-block:: c#

            List<System::Byte>^ getVecA();

      .. .. group-tab:: Python

         .. code-block:: python

   clone:
      对点云进行深度拷贝

   .. tabs::

      .. group-tab:: C++

         返回值:
            - PointCloud: 复制的点云。

         .. code-block:: C++

            DAOAI_API PointCloud clone();
            
      .. group-tab:: C#

         返回值:
            - PointCloud: 复制的点云。

         .. code-block:: c#

            PointCloud^ clone();

      .. .. group-tab:: Python

         .. code-block:: python

|

*Class* Point
~~~~~~~~~~~~~~~~

   .. tabs::

      .. group-tab:: C++

         .. code-block:: C++
            
            #include "point.h"

      .. group-tab:: C#

         .. code-block:: c#

            #include "point.h"

      .. .. group-tab:: Python

         .. code-block:: python


Public Member Functions
`````````````````````````

   **Constructor**:

   .. tabs::

      .. group-tab:: C++

         .. code-block:: C++
            
            DAOAI_API Point();

      .. group-tab:: C#

         .. code-block:: c#

            DAOAI_API Point();

      .. .. group-tab:: Python

         .. code-block:: python


   **Destructor**:

   .. tabs::

      .. group-tab:: C++

         .. code-block:: C++
            
            DAOAI_API ~Point() {}

      .. group-tab:: C#

         .. code-block:: c#

            DAOAI_API ~Point();

      .. .. group-tab:: Python

         .. code-block:: python

   isNaN:
      返回该点是否是NaN的布尔值

   .. tabs::

      .. group-tab:: C++

         返回值:
            - bool: 该点是否是NaN的布尔值

         .. code-block:: C++

            DAOAI_API bool isNaN();
            
      .. group-tab:: C#

         返回值:
            - System::Boolean: 该点是否是NaN的布尔值

         .. code-block:: c#

            System::Boolean isNaN();

      .. .. group-tab:: Python

         .. code-block:: python

   getX:
      从该点获取X值。

   .. tabs::

      .. group-tab:: C++

         返回值:
            - float: 该点的X值。

         .. code-block:: C++

            DAOAI_API inline float getX() const {
               return this->x_;
            }
            
      .. group-tab:: C#

         返回值:
            - System::Single: 该点的X值。

         .. code-block:: c#

            System::Single getX();

      .. .. group-tab:: Python

         .. code-block:: python

   getY:
      返回该点的y值。

   .. tabs::

      .. group-tab:: C++

         返回值:
            - float: 该点的y值。

         .. code-block:: C++

            DAOAI_API inline float getY() const {
               return this->y_;
            }
            
      .. group-tab:: C#

         返回值:
            - System::Single: 该点的y值。

         .. code-block:: c#

            System::Single getY();

      .. .. group-tab:: Python

         .. code-block:: python

   getZ:
      返回该点的z值。

   .. tabs::

      .. group-tab:: C++

            返回值:
               - float: 该点的z值。

         .. code-block:: C++

            DAOAI_API inline float getZ() const {
               return this->z_;
            }
            
      .. group-tab:: C#

         返回值:
            - System::Single: 该点的z值。

         .. code-block:: c#

            System::Single getZ();

      .. .. group-tab:: Python

         .. code-block:: python

   getR:
      返回该点的r值。

   .. tabs::

      .. group-tab:: C++

            返回值:
               - uint8_t: 该点的r值。

         .. code-block:: C++

            DAOAI_API inline uint8_t getR() const {
               return ((rgba_ >> 16) & 0xff);
            }
            
      .. group-tab:: C#

         返回值:
            - System::Byte: 该点的r值。

         .. code-block:: c#

            System::Byte getR();

      .. .. group-tab:: Python

         .. code-block:: python

   getG:
      返回该点的g值。

   .. tabs::

      .. group-tab:: C++

            返回值:
               - uint8_t: 该点的g值。

         .. code-block:: C++

            DAOAI_API inline uint8_t getG() const {
               return ((rgba_ >> 8) & 0xff);
            }
            
      .. group-tab:: C#

         返回值:
            - System::Byte: 该点的g值。

         .. code-block:: c#

            System::Byte getG();

      .. .. group-tab:: Python

         .. code-block:: python

   getB:
      返回该点的b值。

   .. tabs::

      .. group-tab:: C++

            返回值:
               - uint8_t: 该点的b值。

         .. code-block:: C++

            DAOAI_API inline uint8_t getB() const {
               return ((rgba_) & 0xff);
            }
            
      .. group-tab:: C#

         返回值:
            - System::Byte: 该点的b值。

         .. code-block:: c#

            System::Byte getB();

      .. .. group-tab:: Python

         .. code-block:: python

   getA:
      返回该点的a值。

   .. tabs::

      .. group-tab:: C++

            返回值:
               - uint8_t:  该点的a值。

         .. code-block:: C++

            DAOAI_API inline uint8_t getA() const {
               return ((rgba_ >> 24) & 0xff);
            }
            
      .. group-tab:: C#

         返回值:
            - System::Byte: 该点的a值。

         .. code-block:: c#

            System::Byte getA();

      .. .. group-tab:: Python

         .. code-block:: python

   getRgba:
      返回该点的rgba值。
       意：RGBA值以0xAARRGGBB（ARGB格式）的形式存储。

   .. tabs::

      .. group-tab:: C++

            返回值:
               - uint32_t: 该点的rgba值。

         .. code-block:: C++

            DAOAI_API inline uint32_t getRgba() const {
               return this->rgba_;
            }
            
      .. group-tab:: C#
         
            返回值:
               - System::UInt32: 该点的rgba值。

         .. code-block:: c#

            System::UInt32 getRgba();

      .. .. group-tab:: Python

         .. code-block:: python

   getConfident:
      返回该点的可信度值

   .. tabs::

      .. group-tab:: C++

            返回值:
               - float: 该点的可信度值

         .. code-block:: C++

            DAOAI_API inline float getConfident() const {
               return this->confident_;
            }
            
      .. group-tab:: C#

            返回值:
               - System::Single: 该点的可信度值

         .. code-block:: c#

            System::Single getConfident();

      .. .. group-tab:: Python

         .. code-block:: python

   setX:
      设置该点的x值

   .. tabs::

      .. group-tab:: C++

            参数:
               - x【输入】: 设置的值
            返回值:
               - SlcSdkError: 包含状态代码和任何错误信息的 struct。

         .. code-block:: C++

            DAOAI_API inline SlcSdkError setX(const float x) {
               x_ = x;
               return SlcSdkError(SlcSdkSuccess, "Successfully modified point data.");
            }
            
      .. group-tab:: C#

            参数:
               - x【输入】: 设置的值
            返回值:
               - DaoAINETError^: DaoAINETError ，包含状态代码和任何错误信息。

         .. code-block:: c#

            DaoAINETError^ setX(System::Single x)

      .. .. group-tab:: Python

         .. code-block:: python

   setY:
      设置该点的y值

   .. tabs::

      .. group-tab:: C++

            参数:
               - y【输入】: 设置的值
            返回值:
               - SlcSdkError: 包含状态代码和任何错误信息的 struct。

         .. code-block:: C++

            DAOAI_API inline SlcSdkError setY(const float y) {
               y_ = y;
               return SlcSdkError(SlcSdkSuccess, "Successfully modified point data.");
            }
            
      .. group-tab:: C#

            参数:
               - y【输入】: 设置的值
            返回值:
               - DaoAINETError^: DaoAINETError ，包含状态代码和任何错误信息。

         .. code-block:: c#

            DaoAINETError^ setY(System::Single y)

      .. .. group-tab:: Python

         .. code-block:: python

   setZ:
      设置该点的z值

   .. tabs::

      .. group-tab:: C++

            参数:
               - z【输入】: 设置的值
            返回值:
               - SlcSdkError: 包含状态代码和任何错误信息的 struct。

         .. code-block:: C++

            DAOAI_API inline SlcSdkError setZ(const float z) {
               z_ = z;
               return SlcSdkError(SlcSdkSuccess, "Successfully modified point data.");
            }
            
      .. group-tab:: C#

            参数:
               - z【输入】: 设置的值
            返回值:
               - DaoAINETError^: DaoAINETError ，包含状态代码和任何错误信息。

         .. code-block:: c#

            DaoAINETError^ setZ(System::Single z)

      .. .. group-tab:: Python

         .. code-block:: python

   setRgba:
      设置该点的rgba值

   .. tabs::

      .. group-tab:: C++

            参数:
               - r【输入】:  设置的red值
               - g【输入】:  设置的green值
               - b【输入】:  设置的blue值
               - a【输入】:  设置的alpha值
            返回值:
               - SlcSdkError: 包含状态代码和任何错误信息的 struct。

         .. code-block:: C++

            DAOAI_API inline SlcSdkError setRgba(const uint8_t r, const uint8_t g, const uint8_t b, const uint8_t a)
            {
               rgba_ = static_cast<uint32_t>((a << 24) | (r << 16) | (g << 8) | b);
               return SlcSdkError(SlcSdkSuccess, "Successfully modified point data.");
            }
            
      .. group-tab:: C#

            参数:
               - r【输入】:  设置的red值
               - g【输入】:  设置的green值
               - b【输入】:  设置的blue值
               - a【输入】:  设置的alpha值
            返回值:
               - DaoAINETError^: DaoAINETError ，包含状态代码和任何错误信息。

         .. code-block:: c#

            DaoAINETError^ setRgba(System::Byte r, System::Byte g, System::Byte b, System::Byte a);

      .. .. group-tab:: Python

         .. code-block:: python

   setRgba:
      设置该点的rgba值

   .. tabs::

      .. group-tab:: C++

            参数:
               - rgba【输入】:设置的值

            返回值:
               - SlcSdkError: 包含状态代码和任何错误信息的 struct。

         .. code-block:: C++

            DAOAI_API inline SlcSdkError setRgba(const uint32_t rgba)
            {
               rgba_ = rgba;
               return SlcSdkError(SlcSdkSuccess, "Successfully modified point data.");
            }
            
      .. group-tab:: C#

            参数:
               - rgba【输入】:设置的值
            返回值:
               - DaoAINETError^: DaoAINETError ，包含状态代码和任何错误信息。

         .. code-block:: c#

            DaoAINETError^ (System::UInt32 rgba);


      .. .. group-tab:: Python

         .. code-block:: python

   setRgb:
      为该点指定rgb值，alpha通道将被设置为255。

   .. tabs::

      .. group-tab:: C++

            参数:
               - r【输入】:  设置的red值
               - g【输入】:  设置的green值
               - b【输入】:  设置的blue值

            返回值:
               - SlcSdkError: 包含状态代码和任何错误信息的 struct。

         .. code-block:: C++

            DAOAI_API inline SlcSdkError setRgb(const uint8_t r, const uint8_t g, const uint8_t b) {
               this->setRgba(r, g, b, 255);
               return SlcSdkError(SlcSdkSuccess, "Successfully modified point data.");
            }
            
      .. group-tab:: C#

            参数:
               - r【输入】:  设置的red值
               - g【输入】:  设置的green值
               - b【输入】:  设置的blue值

            返回值:
               - DaoAINETError^: DaoAINETError ，包含状态代码和任何错误信息。

         .. code-block:: c#

            DaoAINETError^ setRgb(System::Byte r, System::Byte g, System::Byte b);

      .. .. group-tab:: Python

         .. code-block:: python

   setConfident:
      为该点分配可信度值。

   .. tabs::

      .. group-tab:: C++

            参数:
               - confident【输入】:  设置confident的值

            返回值:
               - SlcSdkError: 包含状态代码和任何错误信息的 struct。

         .. code-block:: C++

            DAOAI_API inline SlcSdkError setConfident(const float confident) {
               confident_ = confident;
               return SlcSdkError(SlcSdkSuccess, "Successfully modified point data.");
            }
            
      .. group-tab:: C#

            参数:
               - confident【输入】:  设置confident的值

            返回值:
               - DaoAINETError^: DaoAINETError ，包含状态代码和任何错误信息。

         .. code-block:: c#

            DaoAINETError^ setConfident(System::Single confident);

      .. .. group-tab:: Python

         .. code-block:: python

   **operator =**:

   .. tabs::

      .. group-tab:: C++

            参数:
               - point【输入】: 其它 Point.

            返回值:
               - Point &: 返回一个Point的reference。

         .. code-block:: C++

            DAOAI_API Point &operator=(const Point& point);
            
      .. .. group-tab:: Python

         .. code-block:: python


