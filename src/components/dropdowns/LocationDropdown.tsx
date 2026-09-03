import type { Dispatch, SetStateAction } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

type Props = {
  location: string;
  setLocation: Dispatch<SetStateAction<string>>;
};

export default function LocationDropdown({ location, setLocation }: Props) {
  const locations = [
    "New York",
    "London",
    "Paris",
    "Tokyo",
    "Los Angeles",
    "Dubai",
    "Singapore",
    "Sydney",
    "Berlin",
    "Rome",
    "Barcelona",
    "Amsterdam",
  ];

  return (
    <Select value={location} onValueChange={(value) => setLocation(value)}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Cities" />
      </SelectTrigger>
      <SelectContent className="z-1001">
        {location === "custom" && (
          <SelectItem value="custom">Custom</SelectItem>
        )}
        {locations.map((city) => (
          <SelectItem key={city} value={city}>
            {city}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
