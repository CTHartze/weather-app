import { useSuspenseQuery } from "@tanstack/react-query";
import { getWeather } from "../../api";
import Card from "./Card";

type Props = {};

export default function DailyForecast({}: Props) {
  const { data } = useSuspenseQuery({
    queryKey: ["weather"],
    queryFn: () => getWeather({ lat: 10, lon: 25 }),
  });
  return (
    <Card title="Daily Forecast">
      <div className="flex flex-col gap-4">
        {data?.daily.map((day) => (
          <div key={day.dt}></div>
        ))}
      </div>
    </Card>
  );
}
