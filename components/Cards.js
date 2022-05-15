export default function Cards(props) {
  return (
    <div className="m-auto sm:max-w-[250px] flex flex-col justify-center gap-1 text-cyan-900 shadow-lg p-2 m-4 rounded bg-white">
      <h1 className="font-bold text-md leading-5">
        {props.data.attributes.tittle}
      </h1>
      <span>
        <strong>Telefone: </strong>
        {props.data.attributes.phone}
      </span>
      <span>
        <strong>
          Endereço:
          <br />
        </strong>
        {props.data.attributes.address}
      </span>
      <span>
        <strong>Bairro:</strong> {props.data.attributes.neighborhood}
      </span>
      <span>
        <strong>Cidade:</strong> {props.data.attributes.city}
      </span>
      <footer className="flex justify-center gap-3">
        <span>
          <strong>UF:</strong> {props.data.attributes.state}
        </span>
        <span>
          <strong>CEP:</strong> {props.data.attributes.cep}
        </span>
      </footer>
    </div>
  );
}
