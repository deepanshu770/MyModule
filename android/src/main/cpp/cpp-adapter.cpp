#include <jni.h>
#include "NitroMymoduleOnLoad.hpp"

JNIEXPORT jint JNICALL JNI_OnLoad(JavaVM* vm, void*) {
  return margelo::nitro::MyModule::initialize(vm);
}
