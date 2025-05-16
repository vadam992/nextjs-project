import CityGrid from "../../components/CityGrid";
import "../../styles/cities.css";

const cities = [
  { id: 1, name: "Solaria" },
  { id: 2, name: "Marindale" },
  { id: 3, name: "Glenhaven" },
  { id: 4, name: "Rivercrest" },
  { id: 5, name: "Northpoint" },
  { id: 6, name: "Eagleford" },
];

export default function CitiesPage() {
  return (
    <div className="cities-container">
      <CityGrid cities={cities} />
    </div>
  );
}
