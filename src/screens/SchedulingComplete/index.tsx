import React from "react";
import { useWindowDimensions } from "react-native";

import * as S from "./styles";

import LogoSvg from "../../assets/logo_background_gray.svg";
import DoneSvg from "../../assets/done.svg";

export function SchedulingComplete() {
  const { width } = useWindowDimensions();
  return (
    <S.Container>
      <LogoSvg width={width} />
    </S.Container>
  );
}
