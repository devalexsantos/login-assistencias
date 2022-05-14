import { ArrowBendUpRight } from "phosphor-react";

export default function Header() {
  return (
    <div className="w-auto text-center bg-cyan-900 py-6">
      <div className="m-auto container mx-auto flex flex-col justify-center align-center gap-6">
        <div className="flex flex-col gap-2 md:gap-0 justify-center md:flex-row md:justify-between text-white py-4 md:py-0">
          <span>Logo</span>
          <button className="flex justify-center gap-2 align-center p-1 bg-white text-cyan-900 rounded w-[70%] md:w-auto m-auto md:m-0 md:px-4">
            <ArrowBendUpRight size={24} weight="bold" /> Ir para o Site
          </button>
        </div>
        <div className="flex flex-col md:gap-4 gap-2">
          <h1 className="md:text-5xl text-3xl font-bold text-white">
            Assistências Login Indústria
          </h1>
          <h2 className="md:text-3xl text-2xl font-regular text-white">
            Selecione seu estado:
          </h2>
          <div className="text-black">
            <select className="p-2 rounded outline-none w-[80%] md:w-[200px]">
              <option value="1">Bahia</option>
              <option value="2">Sergipe</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
