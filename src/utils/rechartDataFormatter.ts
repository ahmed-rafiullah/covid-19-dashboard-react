import { Timeline } from "../DataInterfaces/allCountriesDataInterface";
import sma from "../utils/sma";
export default function format({
  yAxisValue,
  data,
}: {
  yAxisValue: string;
  data: Timeline[] | undefined | null;
}) {
  
  if (!data) {
    return null;
  }

  console.log(data);
  const shiet = data?.map((x) => x[yAxisValue]);
  const mavg = sma(shiet, 5)
  // 7 day simple moving average



  const dataMapped = data?.map((x,i) => {
    return {
      name: new Date(x.date).toLocaleString("default", { month: "short" }),
      fulldate: x.date,
      value: x[yAxisValue],
      movingAvg: mavg[i]

    };
  });

  return dataMapped.reverse();
}
