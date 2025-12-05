package com.margelo.nitro.MyModule

import com.facebook.react.bridge.NativeModule
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.module.model.ReactModuleInfoProvider
import com.facebook.react.BaseReactPackage
import com.facebook.react.uimanager.ViewManager
import com.facebook.yoga.annotations.DoNotStrip
import com.margelo.nitro.MyModule.views.HybridCameraViewManager

@DoNotStrip
class NitroMymodulePackage : BaseReactPackage() {
    override fun getModule(name: String, reactContext: ReactApplicationContext): NativeModule? = null

    override fun getReactModuleInfoProvider(): ReactModuleInfoProvider = ReactModuleInfoProvider { HashMap() }

    override fun createViewManagers(reactContext: ReactApplicationContext): List<ViewManager<in Nothing, in Nothing>> {
        val viewManagers = ArrayList<ViewManager<*, *>>()
        viewManagers.add(HybridCameraViewManager())
        return viewManagers
    }
    companion object {
        init {
            NitroMymoduleOnLoad.initializeNative()
        }
    }
}
