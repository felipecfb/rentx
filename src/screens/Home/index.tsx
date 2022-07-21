import React from "react";
import { StatusBar } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import Logo from "../../assets/logo.svg";
import { Car } from "../../components/Car";

import * as S from "./styles";

export function Home() {
  const CarDataOne = {
    brand: "Audi",
    name: "RS 5 Coupé",
    rent: {
      period: "Ao dia",
      price: 120,
    },
    thumbnail: "https://pensecarros.com.br/cms/uploads/audi-rs5-2-9-v6-tfsi-gasolina-sportback-quattro-s-tronic-605a9d69353b2.png",
  }

  const CarDataTwo = {
    brand: "Prosche",
    name: "Panamera",
    rent: {
      period: "Ao dia",
      price: 340,
    },
    thumbnail: "https://www.webmotors.com.br/imagens/prod/348928/PORSCHE_PANAMERA_2.9_V6_EHYBRID_4_PLATINUM_EDITION_PDK_34892815305718989.webp?s=fill&w=130&h=97&q=70&t=true)",
  }

  return (
    <S.Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <S.Header>
        <S.HeaderContent>
        <Logo width={RFValue(108)} height={RFValue(12)} />
        <S.TotalCars>Total de 12 carros</S.TotalCars>
        </S.HeaderContent>
      </S.Header>

      <Car data={CarDataOne} />
      <Car data={CarDataTwo} />
    </S.Container>
  );
}
