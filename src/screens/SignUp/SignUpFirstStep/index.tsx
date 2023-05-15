import React from 'react';

import * as S from './styles';
import { BackButton } from '../../../components/BackButton';
import { useNavigation } from '@react-navigation/native';
import { Bullet } from '../../../components/Bullet';
import { Input } from '../../../components/Input';
import { Button } from '../../../components/Button';
import { Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback } from 'react-native';

export function SignUpFirstStep() {
  const navigation = useNavigation()

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
            <S.FormTitle>1. Dados</S.FormTitle>
            <Input
              iconName="user"
              placeholder="Nome"
            />

            <Input
              iconName="mail"
              placeholder="E-mail"
            />

            <Input
              iconName="credit-card"
              placeholder="CNH"
            />
          </S.Form>

          <Button
            title="Próximo"
          />

        </S.Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}