import React from 'react';

import * as S from './styles';
import { StatusBar } from 'react-native';
import { Button } from '../../components/Button';
import theme from '../../styles/theme';
import { Input } from '../../components/Input';
import { PasswordInput } from '../../components/PasswordInput';

export function SignIn() {
  return (
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
        />

        <PasswordInput
          iconName="lock"
          placeholder="Senha"
        />
      </S.Form>

      <S.Footer>
        <Button
          title="Login"
          onPress={() => {}}
          enabled={false}
          loading={false}
        />
        <Button
          title="Criar conta gratuita"
          color={theme.colors.background_secondary}
          onPress={() => {}}
          enabled={false}
          loading={false}
          light
        />
      </S.Footer>
    </S.Container>
  );
}