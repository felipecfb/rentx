import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "react-native";

import { AntDesign } from "@expo/vector-icons";

import { BackButton } from "../../components/BackButton";
import { CarDTO } from "../../dtos/CarDTO";
import api from "../../services/api";

import * as S from "./styles";
import { useTheme } from "styled-components";
import { FlatList } from "react-native-gesture-handler";
import { Car } from "../../components/Car";
import { LoadAnimation } from "../../components/LoadAnimation";

interface CarProps {
  id: string;
  user_id: string;
  car: CarDTO;
  startDate: string;
  endDate: string;
}

export function MyCars() {
  const [cars, setCars] = useState<CarProps[]>([]);
  const [loading, setLoading] = useState(true);

  const navigation = useNavigation();
  const theme = useTheme();

  useEffect(() => {
    async function fetchCars() {
      try {
        const response = await api.get("/schedules_byuser?user_id=1");
        setCars(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    fetchCars();
  }, []);

  function handleBack() {
    navigation.goBack();
  }

  return (
    <S.Container>
      <S.Header>
        <StatusBar
          barStyle="light-content"
          translucent
          backgroundColor="transparent"
        />
        <BackButton onPress={handleBack} color={theme.colors.shape} />
        <S.Title>
          Escolha uma {"\n"}
          data de início e {"\n"}
          fim do aluguel
        </S.Title>
        <S.Subtitle>Conforto, segurança e praticidade</S.Subtitle>
      </S.Header>
      {loading ? (
        <LoadAnimation />
      ) : (
        <S.Content>
          <S.Appointments>
            <S.AppointmentsTitle>Agendamentos feitos</S.AppointmentsTitle>
            <S.AppointmentsQuantity>{cars.length}</S.AppointmentsQuantity>
          </S.Appointments>

          <FlatList
            data={cars}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <S.CarWrapper>
                <Car data={item.car} />
                <S.CarFooter>
                  <S.CarFooterTitle>Período</S.CarFooterTitle>
                  <S.CarFooterPeriod>
                    <S.CarFooterDate>{item.startDate}</S.CarFooterDate>
                    <AntDesign
                      name="arrowright"
                      size={20}
                      color={theme.colors.title}
                      style={{ marginHorizontal: 10 }}
                    />
                    <S.CarFooterDate>{item.endDate}</S.CarFooterDate>
                  </S.CarFooterPeriod>
                </S.CarFooter>
              </S.CarWrapper>
            )}
          />
        </S.Content>
      )}
    </S.Container>
  );
}
