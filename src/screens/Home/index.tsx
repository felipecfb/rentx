import React, { useEffect, useState } from "react";
import { StatusBar } from "react-native";
import {
  ParamListBase,
  NavigationProp,
  useNavigation,
} from "@react-navigation/native";
import { RFValue } from "react-native-responsive-fontsize";

import { Car } from "../../components/Car";
import { LoadAnimation } from '../../components/LoadAnimation'

import api from "../../services/api";

import { CarDTO } from "../../dtos/CarDTO";

import Logo from "../../assets/logo.svg";

import * as S from "./styles";

export function Home() {
  const [cars, setCars] = useState<CarDTO[]>([]);
  const [loading, setLoading] = useState(true);

  const navigation = useNavigation<NavigationProp<ParamListBase>>();

  function handleCarDetails(car: CarDTO) {
    navigation.navigate("CarDetails", { car });
  }

  useEffect(() => {
    async function fetchCars() {
      try {
        const response = await api.get("/cars").then((response) => {
          return response.data;
        });

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
          {!loading && <S.TotalCars>Total de {cars.length} carros</S.TotalCars>}
        </S.HeaderContent>
      </S.Header>

      {loading ? (
        <LoadAnimation />
      ) : (
        <S.CarList
          data={cars}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <Car data={item} onPress={() => handleCarDetails(item)} />
          )}
        />
      )}
    </S.Container>
  );
}
