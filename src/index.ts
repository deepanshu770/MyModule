// TODO: Export all HybridObjects here for the user
import { getHostComponent, NitroModules } from 'react-native-nitro-modules'
import CameraViewConfig from '../nitrogen/generated/shared/json/CameraViewConfig.json'
import type { CameraMethods, CameraProps } from './specs/Camera.nitro'
import type { Math } from './specs/Math.nitro'

export const Camera = getHostComponent<CameraProps, CameraMethods>(
  'Camera',
  () => CameraViewConfig
)


export const NitroMath = NitroModules.createHybridObject<Math>('Math')
