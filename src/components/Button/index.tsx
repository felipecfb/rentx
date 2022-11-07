import React from "react";

import * as S from "./styles";

import { RectButtonProps } from "react-native-gesture-handler";
import { useTheme } from "styled-components";

interface Props extends RectButtonProps {
  title: string;
  color?: string;
  onPress: () => void;
  enabled?: boolean;
}

export function Button({ title, color, onPress, enabled = true }: Props) {
  const theme = useTheme();
  return (
    <S.Container
      color={color ? color : theme.colors.main}
      onPress={onPress}
      enabled={enabled}
      style={{ opacity: enabled ? 1 : .5 }}
    >
      <S.Title>{title}</S.Title>
    </S.Container>
  );
}
