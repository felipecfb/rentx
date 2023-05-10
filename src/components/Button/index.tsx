import React from "react";
import { ActivityIndicator } from 'react-native'

import * as S from "./styles";

import { RectButtonProps } from "react-native-gesture-handler";
import { useTheme } from "styled-components";

interface Props extends RectButtonProps {
  title: string;
  color?: string;
  onPress: () => void;
  enabled?: boolean;
  loading?: boolean;
}

export function Button({ title, color, onPress, enabled = true, loading = false }: Props) {
  const theme = useTheme();
  return (
    <S.Container
      color={color ? color : theme.colors.main}
      onPress={onPress}
      enabled={enabled}
      style={{ opacity: (enabled === false || loading === true) ? .5 : 1 }}
    >
      {
        loading 
        ? <ActivityIndicator color={theme.colors.shape} /> 
        : <S.Title>{title}</S.Title>
      }
    </S.Container>
  );
}
