import { View, Text } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import './index.scss'
import LottieAnimation from './animate-once'

export default function Index () {
  useLoad(() => {
    console.log('Page loaded.')
  })

  return (
    <View className='index'>
      <Text>Hello world!</Text>
      <LottieAnimation keyId={'1'} lottieUrl='https://kami-static.oafine.cn/assets/lottie/explore-main-ciie-lottie.json' />
    </View>
  )
}
