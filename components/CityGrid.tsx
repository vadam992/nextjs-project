type City = {
  id: number;
  name: string;
};

type Props = {
  cities: City[];
};

const CityGrid = ({ cities }: Props) => {
  return (
    <div className="grid">
      {cities.map((city) => (
        <div key={city.id} className="card">
          <span>{city.name}</span>
        </div>
      ))}
    </div>
  );
};

export default CityGrid;
