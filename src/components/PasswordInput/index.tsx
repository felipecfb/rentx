import React, { ComponentProps, useState } from 'react';
import { TextInputProps } from 'react-native';
import { useTheme } from 'styled-components';
import { Feather } from '@expo/vector-icons';
import { BorderlessButton } from 'react-native-gesture-handler';

import * as S from './styles';

interface Props extends TextInputProps {
  iconName: ComponentProps<typeof Feather>['name']
}

export function PasswordInput({ iconName, ...rest }: Props) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(true);

  const theme = useTheme()

  function handlePasswordVisibilityChange() {
    setIsPasswordVisible(!isPasswordVisible)
  }

  return (
    <S.Container>

      <S.IconContainer>
        <Feather
          name={iconName}
          size={24}
          color={theme.colors.text_detail}
        />
      </S.IconContainer>

      <S.InputText
        {...rest}
        secureTextEntry={isPasswordVisible}
      />

      <BorderlessButton onPress={handlePasswordVisibilityChange}>
        <S.IconContainer>
          <Feather
            name={isPasswordVisible ? "eye" : "eye-off"}
            size={24}
            color={theme.colors.text_detail}
          />
        </S.IconContainer>
      </BorderlessButton>
    </S.Container>
  );
}