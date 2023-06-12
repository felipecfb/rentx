import React, { useEffect, useState } from "react";
import { Alert, StatusBar } from "react-native";
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
import { useNetInfo } from "@react-native-community/netinfo";

export function Home() {
  const [cars, setCars] = useState<CarDTO[]>([]);
  const [loading, setLoading] = useState(true);

  const netInfo = useNetInfo();
  const navigation = useNavigation<NavigationProp<ParamListBase>>();

  function handleCarDetails(car: CarDTO) {
    navigation.navigate("CarDetails", { car });
  }

  useEffect(() => {
    let isMounted = true;

    async function fetchCars() {
      try {
        const response = await api.get("/cars");

        if (isMounted) {
          setCars(response.data);
        }
      } catch (error: any) {
        console.log(error);
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    fetchCars();
    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    if (netInfo.isConnected) {
      Alert.alert('Você está On-Line')
    } else {
      Alert.alert('Você está Off-Line')
    }
  }, [netInfo.isConnected])

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
