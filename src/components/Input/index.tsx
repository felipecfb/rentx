import React, { ComponentProps } from 'react';
import { TextInputProps } from 'react-native';
import { useTheme } from 'styled-components';
import { Feather } from '@expo/vector-icons';

import * as S from './styles';

interface Props extends TextInputProps {
  iconName: ComponentProps<typeof Feather>['name']
}

export function Input({ iconName, ...rest }: Props) {
  const theme = useTheme()

  return (
    <S.Container>

      <S.IconContainer>
        <Feather
          name={iconName}
          size={24}
          color={theme.colors.text_detail}
        />
      </S.IconContainer>

      <S.InputText {...rest} />

    </S.Container>
  );
}