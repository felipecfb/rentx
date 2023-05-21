import React from 'react'
import { Feather } from '@expo/vector-icons'

import * as S from './styles'
import { BackButton } from '../../components/BackButton'
import { useTheme } from 'styled-components'
import { useNavigation } from '@react-navigation/native'

export function Profile() {
  const theme = useTheme()
  const navigation = useNavigation()

  function handleBack() {
    navigation.goBack()
  }

  function handleSignout() {

  }

  return (
    <S.Container>
      <S.Header>
        <S.HeaderTop>
          <BackButton color={theme.colors.shape} onPress={handleBack} />

          <S.HeaderTitle>Editar Perfil</S.HeaderTitle>

          <S.LogoutButton onPress={handleSignout}>
            <Feather name="power" size={24} color={theme.colors.shape} />
          </S.LogoutButton>
        </S.HeaderTop>

        <S.PhotoContainer>
          <S.Photo source={{ uri: 'https://github.com/felipecfb.png' }} />
          <S.PhotoButton onPress={() => {}}>
            <Feather name="camera" size={24} color={theme.colors.shape} />
          </S.PhotoButton>
        </S.PhotoContainer>
      </S.Header>
    </S.Container>
  )
}