package com.margelo.nitro.MyModule
import android.view.View
import com.facebook.react.uimanager.ThemedReactContext

class HybridCameraView(val context: ThemedReactContext) : HybridCameraViewSpec() {
    // Props
    override var enableFlash: Boolean = false

    // View
    override val view: View = View(context)
}