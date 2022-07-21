import React from "react";
import { BackButton } from "../../components/BackButton";
import { ImageSlider } from "../../components/ImageSlider";

import * as S from "./styles";

export function CarDetails() {
  return (
    <S.Container>
      <S.Header>
        <BackButton onPress={() => {}} />
      </S.Header>

      <S.CarImages>
        <ImageSlider
          imagesUrl={[
            "https://pensecarros.com.br/cms/uploads/audi-rs5-2-9-v6-tfsi-gasolina-sportback-quattro-s-tronic-605a9d69353b2.png",
          ]}
        />
      </S.CarImages>
    </S.Container>
  );
}
