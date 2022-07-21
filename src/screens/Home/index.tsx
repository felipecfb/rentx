import React from "react";
import { StatusBar } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import Logo from "../../assets/logo.svg";
import { Car } from "../../components/Car";

import * as S from "./styles";

export function Home() {
  const CarData = {
    brand: "Audi",
    name: "RS 5 Coupé",
    rent: {
      period: "Ao dia",
      price: 120,
    },
    thumbnail:
      "https://pensecarros.com.br/cms/uploads/audi-rs5-2-9-v6-tfsi-gasolina-sportback-quattro-s-tronic-605a9d69353b2.png",
  };

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

      <S.CarList
        data={[1, 2, 3, 4, 5, 6, 7]}
        keyExtractor={(item) => String(item)}
        renderItem={({ item }) => <Car data={CarData} />}
      />
    </S.Container>
  );
}
