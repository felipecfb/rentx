import React from "react";

import * as S from "./styles";
import { FlatList } from "react-native";

interface Props {
  imagesUrl: string[];
}

export function ImageSlider({ imagesUrl }: Props) {
  return (
    <S.Container>
      <S.ImageIndexes>
        {
          imagesUrl.map((_, index) => {
            <S.ImageIndex
              key={String(index)}
              active={true}
            />
          })
        }
      </S.ImageIndexes>

        <FlatList
          data={imagesUrl}
          keyExtractor={key => key}
          renderItem={({ item }) => (
            <S.CarImageWrapper>
                  <S.CarImage source={{ uri: item }} resizeMode="contain" />
            </S.CarImageWrapper>
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
    </S.Container>
  );
}
