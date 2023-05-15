import React from 'react';

import * as S from './styles';
import { BackButton } from '../../../components/BackButton';
import { NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native';
import { Bullet } from '../../../components/Bullet';
import { Input } from '../../../components/Input';
import { Button } from '../../../components/Button';
import { Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback } from 'react-native';

export function SignUpFirstStep() {
  const navigation = useNavigation<NavigationProp<ParamListBase>>()

  function handleBack() {
    navigation.goBack()
  }

  function handleNextStep() {
    navigation.navigate('SignUpSecondStep')
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
              keyboardType="email-address"
            />

            <Input
              iconName="credit-card"
              placeholder="CNH"
              keyboardType="numeric"
            />
          </S.Form>

          <Button
            title="Próximo"
            onPress={handleNextStep}
          />

        </S.Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}