import React from "react";

import * as S from "./styles";

import { RectButtonProps } from "react-native-gesture-handler";
import { useTheme } from "styled-components";

interface Props extends RectButtonProps {
  title: string;
  color?: string;
  onPress: () => void;
}

export function Button({ title, color, onPress }: Props) {
  const theme = useTheme();
  return (
    <S.Container color={color ? color : theme.colors.main} onPress={onPress}>
      <S.Title>{title}</S.Title>
    </S.Container>
  );
}
