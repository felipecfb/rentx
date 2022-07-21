import { StatusBar } from "react-native";
import React from "react";

import * as S from "./styles";

export function Home() {
  return (
    <S.Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <S.Title>HOME</S.Title>
    </S.Container>
  );
}
