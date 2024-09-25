import React, { useEffect } from 'react';
import Taro, { useReady } from '@tarojs/taro';
import lottie from 'lottie-miniprogram';
import { Canvas } from '@tarojs/components';

const LottieAnimation = () => {
  useReady(() => {

    const query = Taro.createSelectorQuery()
    query.select(`#canvas`).node(res => {
        const canvas = res.node
        const context = canvas.getContext('2d')
        lottie.setup(canvas);
        lottie.loadAnimation({
          loop: true,
          autoplay: true,
          // animationData: lottieData,
          path: 'https://kami-static.oafine.cn/assets/lottie/explore-main-ciie-lottie.json',
          rendererSettings: {
            context,
          },
        });
    }).exec()
  })

  return <Canvas canvasId="canvas" id="canvas" type="2d"></Canvas>;
};

export default LottieAnimation;
