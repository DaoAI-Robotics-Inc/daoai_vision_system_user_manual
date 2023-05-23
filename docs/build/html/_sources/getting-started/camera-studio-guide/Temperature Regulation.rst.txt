温度控制
-----------

如果您的 3D 系统中有温度传感器，系统将在主菜单的右上角显示相应的温度。 默认情况下，如果温度传感器可用，则会启用温度控制系统。


**模式**

温度控制有两种模式：正常和调节

**一般**: 这是常规模式，所有软件功能都启用，包括捕捉、2D 预览等。当温度控制状态正常时，主窗口中的温度图标将显示为绿色。

.. figure:: images/temperature_normal.png
    :align: center

    温度图标为绿色

**待调节**: 默认情况下，如果系统温度超过70摄氏度，温度调节将被触发。温度高于70摄氏度时，将触发温度调节。在此模式下，系统温度异常，主要捕获功能（自动、实时、捕获、预览）被禁用，以便系统调节温度。 在此模式下，将运行温度控制算法以再次使系统正常化。 在调节温度控制状态时，主窗口中的温度图标将显示为红色。

.. figure:: images/temperature_notification.png
    :align: center
    
    通知：温度调节开始通知

|

.. figure:: images/temperature_regulating.png
    :align: center

    温度图标为红色
    
|

 在 Camera Studio 软件调节温度时，会禁用某些功能以使温度调节功能有效工作。 您必须等待温度调节到合适的水平，或禁用温度调节功能，然后才能重新启用这些功能。

禁用温度控制
~~~~~~~~~~~~~~~~~~~~

当温度传感器故障时, 您也可以禁用温度控制功能来继续使用软件。

您可以在弹出温度警告时, 点击"Disable Temerature Regulation"来禁用温度控制。

.. figure:: images/temperature_notification.png
   :align: center
    
|

您也可以在上方菜单的 文件 -> temperature control 取消勾选以禁用温度控制功能。

.. figure:: images/temperature_disable.png
   :align: center
    
|
