import React, { useState, useRef } from "react";

import * as S from "./styles";
import { FlatList, ViewToken } from "react-native";
import { Bullet } from "../Bullet";

interface Props {
  imagesUrl: {
    id: string;
    photo: string;
  }[];
}

interface ChangeImageProps {
  viewableItems: ViewToken[];
  changed: ViewToken[];
}

export function ImageSlider({ imagesUrl }: Props) {
  const [imageIndex, setImageIndex] = useState(0);

  const indexChanged = useRef(({ viewableItems, changed }: ChangeImageProps) => {
    const index = viewableItems[0].index!;

    setImageIndex(index)
  });

  return (
    <S.Container>
      <S.ImageIndexes>
        {
          imagesUrl.map((item, index) => (
            <Bullet
              key={String(item.id)}
              active={index === imageIndex}
            />
          ))
        }
      </S.ImageIndexes>

        <FlatList
          data={imagesUrl}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <S.CarImageWrapper>
                  <S.CarImage source={{ uri: item.photo }} resizeMode="contain" />
            </S.CarImageWrapper>
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          onViewableItemsChanged={indexChanged.current}
        />
    </S.Container>
  );
}
