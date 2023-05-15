import React, { useState } from 'react';

import * as S from './styles';
import { BackButton } from '../../../components/BackButton';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Bullet } from '../../../components/Bullet';
import { Button } from '../../../components/Button';
import { Alert, Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback } from 'react-native';
import { PasswordInput } from '../../../components/PasswordInput';
import { useTheme } from 'styled-components';

interface Params {
  user: {
    name: string
    email: string
    driverLicense: string
  }
}

export function SignUpSecondStep() {
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')

  const navigation = useNavigation()
  const route = useRoute()
  const theme = useTheme()

  const { user } = route.params as Params;

  function handleRegister() {
    if (!password || !passwordConfirm) {
      return Alert.alert('Informe a senha e a confirmação')
    }

    if (password != passwordConfirm) {
      return Alert.alert('As senhas devem ser iguais')
    }
  }

  function handleBack() {
    navigation.goBack()
  }

  return (
    <KeyboardAvoidingView
      behavior="position"
      enabled
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <S.Container>
          <S.Header>
            <BackButton onPress={handleBack} />

            <S.Steps>
              <Bullet />
              <Bullet active />
            </S.Steps>
          </S.Header>

          <S.Title>
            Crie sua{'\n'}conta
          </S.Title>
          <S.Subtitle>
            Faça seu cadastro de{'\n'}
            forma rápida e fácil
          </S.Subtitle>

          <S.Form>
            <S.FormTitle>2. Senha</S.FormTitle>
            <PasswordInput
              iconName="lock"
              placeholder="Senha"
              onChangeText={setPassword}
              value={password}
            />
            <PasswordInput
              iconName="lock"
              placeholder="Repetir senha"
              onChangeText={setPasswordConfirm}
              value={passwordConfirm}
            />
          </S.Form>

          <Button
            color={theme.colors.success}
            title="Cadastrar"
            onPress={handleRegister}
          />

        </S.Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}