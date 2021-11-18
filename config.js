import { BASE_URL, ANDROID_KEY, IOS_KEY } from '@env'
import { Platform } from 'react-native'

export default {
    BASE_URL,
    APP_KEY: Platform.select({
        ios: IOS_KEY,
        android: ANDROID_KEY
    })
}