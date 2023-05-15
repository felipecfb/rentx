import React, { useState } from 'react';

import * as S from './styles';
import { BackButton } from '../../../components/BackButton';
import { NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native';
import { Bullet } from '../../../components/Bullet';
import { Input } from '../../../components/Input';
import { Button } from '../../../components/Button';
import { Alert, Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback } from 'react-native';

import * as Yup from 'yup'

export function SignUpFirstStep() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [driverLicense, setDriverLicense] = useState('')
  const navigation = useNavigation<NavigationProp<ParamListBase>>()

  function handleBack() {
    navigation.goBack()
  }

  async function handleNextStep() {
    try {
      const schema = Yup.object().shape({
        driverLicense: Yup.string()
        .required('CNH é obrigatório'),
        email: Yup.string()
        .email('E-mail inválido')
        .required('E-mail é obrigatório'),
        name: Yup.string()
        .required('Nome é obrigatório'),
      })

      const data = { name, email, driverLicense }
      await schema.validate(data)

      navigation.navigate('SignUpSecondStep', { user: data })
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        return Alert.alert('Opa', err.message)
      }

      console.error(err);

    }
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
              onChangeText={setName}
              value={name}
            />

            <Input
              iconName="mail"
              placeholder="E-mail"
              keyboardType="email-address"
              onChangeText={setEmail}
              value={email}
            />

            <Input
              iconName="credit-card"
              placeholder="CNH"
              keyboardType="numeric"
              onChangeText={setDriverLicense}
              value={driverLicense}
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