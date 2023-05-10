import React, { useEffect, useState } from "react";
import { StatusBar } from "react-native";

import {
  ParamListBase,
  NavigationProp,
  useNavigation,
} from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

import * as S from "./styles";

import { RFValue } from "react-native-responsive-fontsize";

import { Car } from "../../components/Car";
import { Load } from "../../components/Load";

import Logo from "../../assets/logo.svg";

import api from "../../services/api";
import { CarDTO } from "../../dtos/CarDTO";
import { useTheme } from "styled-components";

export function Home() {
  const [cars, setCars] = useState<CarDTO[]>([]);
  const [loading, setLoading] = useState(true);

  const navigation = useNavigation<NavigationProp<ParamListBase>>();
  const theme = useTheme();

  function handleCarDetails(car: CarDTO) {
    navigation.navigate("CarDetails", { car });
  }

  function handleOpenMyCars() {
    navigation.navigate("MyCars");
  }

  useEffect(() => {
    async function fetchCars() {
      try {
        const response = await api.get("/cars").then((response) => {
          return response.data;
        });

        console.log(response);
        
        setCars(response);
      } catch (error: any) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    fetchCars();
  }, []);

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

      {loading ? (
        <Load />
      ) : (
        <S.CarList
          data={cars}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <Car data={item} onPress={() => handleCarDetails(item)} />
          )}
        />
      )}
      <S.MyCarsButtonWrapper>
        <S.MyCarsButton onPress={handleOpenMyCars}>
          <Ionicons name="ios-car-sport" size={32} color={theme.colors.shape} />
        </S.MyCarsButton>
      </S.MyCarsButtonWrapper>
    </S.Container>
  );
}
