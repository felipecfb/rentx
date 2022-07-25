import { eachDayOfInterval, format } from "date-fns";

import { MarkedDateProps, DayProps } from ".";

import theme from "../../styles/theme";

import { getPlatformDate } from "../../utils/getPlatformData";

export function generateInterval(start: DayProps, end: DayProps) {
  let intervalo: MarkedDateProps = {};

  const teste = eachDayOfInterval({
    start: new Date(start.timestamp),
    end: new Date(end.timestamp),
  });

  console.log(teste);
}
