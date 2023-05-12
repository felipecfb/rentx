import React from 'react';

import * as S from './styles';
import { BackButton } from '../../../components/BackButton';
import { useNavigation } from '@react-navigation/native';
import { Bullet } from '../../../components/Bullet';

export function SignUpFirstStep() {
  const navigation = useNavigation()

  function handleBack() {
    navigation.goBack()
  }

  return (
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
      </S.Form>
    </S.Container>
  );
}