export default function Header() {
  return (
    <div className="w-auto text-center flex flex-col justify-center bg-cyan-900 text-white align-center">
      <div className="w-auto text-left md:ml-[5rem] m-auto mt-[5rem]">Logo</div>
      <div className="my-[3rem] flex flex-col justify-center gap-3">
        <h1 className="md:text-6xl text-3xl font-bold">Assistências Login</h1>
        <h2 className="md:text-3xl text-2xl font-regular">
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
  );
}
