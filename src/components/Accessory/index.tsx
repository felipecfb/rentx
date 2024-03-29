import React from 'react';

import * as S from './styles';

import { SvgProps } from 'react-native-svg';
import { useTheme } from 'styled-components';


interface Props {
  name: string;
  icon: React.FC<SvgProps>;
}

export function Accessory({ name, icon: Icon }: Props) {
  const theme = useTheme();

  return (
    <S.Container>
      <Icon
        width={32}
        height={32}
        fill={theme.colors.header}
      />
      <S.Name>{name}</S.Name>
    </S.Container>
  );
}