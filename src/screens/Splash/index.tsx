import React, { useEffect, useState } from 'react';

import Animated, {
  Easing,
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming
} from 'react-native-reanimated';

import BrandSvg from '../../assets/brand.svg'
import LogoSvg from '../../assets/logo.svg'

import * as S from './styles';

export function Splash() {
  const splashAnimation = useSharedValue(0);

  const brandStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(splashAnimation.value, [0, 50], [1, 0]),
      transform: [
        {
          translateX: interpolate(splashAnimation.value,
            [0, 50],
            [0, -50],
            Extrapolate.CLAMP
          )
        }
      ]
    }
  })

  const logoStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(splashAnimation.value, [0, 25, 50], [0, 0.3, 1]),
      transform: [
        {
          translateX: interpolate(splashAnimation.value,
            [0, 50],
            [-50, 0],
            Extrapolate.CLAMP
          )
        }
      ]
    }
  })

  useEffect(() => {
    splashAnimation.value = withTiming(
      50,
      { duration: 1000 }
    );
  }, []);

  return (
    <S.Container>
      <Animated.View style={[brandStyle, { position: 'absolute' }]}>
        <BrandSvg width={200} height={80} />
      </Animated.View>

      <Animated.View style={[logoStyle, { position: 'absolute' }]}>
        <LogoSvg width={200} height={20} />
      </Animated.View>
    </S.Container>
  );
};
