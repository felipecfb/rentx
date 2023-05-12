import React, { useState } from 'react';
import { Button, StyleSheet } from 'react-native';

import Animated, { useAnimatedStyle, useSharedValue } from 'react-native-reanimated';

import * as S from './styles';

export function Splash() {
  const animation = useSharedValue(0);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: animation.value }]
    }
  });

  function handleAnimationPosition () {
    animation.value = Math.random() * 500;
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