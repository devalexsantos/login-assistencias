export default function Header() {
  return (
    <div className="w-auto text-center bg-cyan-900 py-6">
      <div className="m-auto container flex flex-col justify-center align-center gap-6">
        <div className="flex flex-col gap-2 md:gap-0 justify-center md:flex-row md:justify-between text-white py-4 md:py-0">
          <span>Logo</span>
          <span className="p-1 bg-white text-cyan-900 rounded w-[70%] md:w-auto m-auto md:m-0">
            Ir para o Site
          </span>
        </div>
        <div className="flex flex-col md:gap-4 gap-2">
          <h1 className="md:text-5xl text-3xl font-bold text-white">
            Assistências Login Indústria
          </h1>
          <h2 className="md:text-3xl text-2xl font-regular text-white">
            Selecione seu estado:
          </h2>
          <div className="text-black">
            <select className="p-2 rounded outline-none">
              <option value="1">Bahia</option>
              <option value="2">Sergipe</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
