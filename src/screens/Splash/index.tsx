import React, { useState } from 'react';
import { Button, Dimensions, StyleSheet } from 'react-native';

import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming
} from 'react-native-reanimated';

import * as S from './styles';

const WIDTH = Dimensions.get('window').width;

export function Splash() {
  const animation = useSharedValue(0);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: withTiming(animation.value, {
            duration: 500,
            easing: Easing.bezier(.73, .17, 0, 1.01)
          })
        }
      ]
    }
  });

  function handleAnimationPosition () {
    animation.value = Math.random() * (WIDTH - 100);
  }

  return (
    <S.Container>
      <Animated.View style={[styles.box, animatedStyles]} />


      <Button title="Mover" onPress={handleAnimationPosition} />
    </S.Container>
  );
};

const styles = StyleSheet.create({
  box: {
    width: 100,
    height: 100,
    backgroundColor: 'red'
  }
});