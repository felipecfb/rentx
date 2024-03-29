import React from "react";
import { RectButtonProps } from "react-native-gesture-handler";

import { getAccessoryIcon } from "../../utils/getAccessoryIcon";
import { Car as ModelCar } from "../../database/model/Car";

import * as S from "./styles";
import { useNetInfo } from "@react-native-community/netinfo";

interface Props extends RectButtonProps {
  data: ModelCar;
}

export function Car({ data, ...rest }: Props) {
  const netInfo = useNetInfo();

  const MotorIcon = getAccessoryIcon(data.fuel_type);

  return (
    <S.Container {...rest}>
      <S.Details>
        <S.Brand>{data.brand}</S.Brand>
        <S.Name>{data.name}</S.Name>

        <S.About>
          <S.Rent>
            <S.Period>{data.period}</S.Period>
            <S.Price>
              {
                netInfo.isConnected === true ? `R$ ${data.price}` : '...'
              }
            </S.Price>
          </S.Rent>

          <S.Type>
            <MotorIcon />
          </S.Type>
        </S.About>
      </S.Details>

      <S.CarImage source={{ uri: data.thumbnail }} resizeMode="contain" />
    </S.Container>
  );
}
