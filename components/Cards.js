export default function Cards() {
  return (
    <div className="m-auto sm:max-w-[250px] flex flex-col justify-center gap-1 text-cyan-900 shadow-lg p-2 m-4 rounded bg-white">
      <h1 className="font-bold text-md leading-5">
        Barbara Correia Martins Informática Barbara Correia Martins Informática
      </h1>
      <span>
        <strong>Telefone: </strong>
        (75)3422-1586
      </span>
      <span>
        <strong>
          Endereço:
          <br />
        </strong>
        Rua Rodrigues Lima, nº 14
      </span>
      <span>
        <strong>Bairro:</strong> Centro
      </span>
      <span>
        <strong>Cidade:</strong> Alagoinhas
      </span>
      <footer className="flex justify-center gap-3">
        <span>
          <strong>UF:</strong> BA
        </span>
        <span>
          <strong>CEP:</strong> 48.010-040
        </span>
      </footer>
    </div>
  );
}
