import React from "react";
import { StatusBar, useWindowDimensions } from "react-native";

import * as S from "./styles";

import LogoSvg from "../../assets/logo_background_gray.svg";
import DoneSvg from "../../assets/done.svg";
import { ConfirmButton } from "../../components/ConfirmButton";
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
  useRoute,
} from "@react-navigation/native";

interface Params {
  title: string;
  message: string;
  nextScreenRoute: string;
}

export function Confirmation() {
  const { width } = useWindowDimensions();

  const navigation = useNavigation<NavigationProp<ParamListBase>>();
  const route = useRoute();
  const { title, message, nextScreenRoute } = route.params as Params

  function handleConfirm() {
    navigation.navigate(nextScreenRoute);
  }
  return (
    <S.Container>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <LogoSvg width={width} />

      <S.Content>
        <DoneSvg width={80} height={80} />
        <S.Title>{title}</S.Title>
        <S.Message>
          {message}
        </S.Message>
      </S.Content>

      <S.Footer>
        <ConfirmButton title="Ok" onPress={handleConfirm} />
      </S.Footer>
    </S.Container>
  );
}
