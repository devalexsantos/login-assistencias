import Cards from "./Cards";

export default function CardsSection() {
  return (
    <div className="m-auto container text-center py-4 flex flex-col justify-center align-center gap-2">
      <span>Resultado:</span>
      <div className="flex flex-col justify-center align-center m-auto md:flex-row md:flex-wrap">
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </div>
    </div>
  );
}
