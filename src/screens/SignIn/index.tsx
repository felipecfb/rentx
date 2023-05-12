import React, { useState } from 'react';
import { KeyboardAvoidingView, StatusBar, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import * as Yup from 'yup'

import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { PasswordInput } from '../../components/PasswordInput';

import theme from '../../styles/theme';
import * as S from './styles';

export function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function handleSignIn() {
    try {
      const schema = Yup.object().shape({
        email: Yup.string()
          .required('E-mail obrigatório')
          .email('Digite um e-mail válido'),
        password: Yup.string()
          .required('A senha é obrigatória')
      })

      await schema.validate({ email, password })
      Alert.alert('Tudo certo!')

      // Fazer login.
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        return Alert.alert('Opa', err.message)
      }

      return Alert.alert('Erro na autenticação', 'Ocorreu um erro ao fazer login, verifique as credenciais')
    }
  }

  return (
    <KeyboardAvoidingView
      behavior="position"
      enabled
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <S.Container>
          <StatusBar
            barStyle="dark-content"
            backgroundColor="transparent"
            translucent
          />
          <S.Header>
            <S.Title>
              Estamos{'\n'}quase lá
            </S.Title>
            <S.Subtitle>
              Faça seu login para começar{'\n'}uma experiência incrível.
            </S.Subtitle>
          </S.Header>

          <S.Form>
            <Input
              iconName="mail"
              placeholder="E-mail"
              keyboardType="email-address"
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={setEmail}
              value={email}
            />

            <PasswordInput
              iconName="lock"
              placeholder="Senha"
              onChangeText={setPassword}
              value={password}
            />
          </S.Form>

          <S.Footer>
            <Button
              title="Login"
              onPress={handleSignIn}
              enabled={true}
              loading={false}
            />
            <Button
              title="Criar conta gratuita"
              color={theme.colors.background_secondary}
              onPress={() => { }}
              enabled={false}
              loading={false}
              light
            />
          </S.Footer>
        </S.Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}