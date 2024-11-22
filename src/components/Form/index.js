import "./Form.css";
import TextField from "../TextField";
import Dropdown from "../Dropdown";
import Button from "../Button";
import { useState } from "react";

const Form = (props) => {
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [img, setImg] = useState("");
  const [team, setTeam] = useState("");

  const onSave = (event) => {
    event.preventDefault();
    props.onEmployeeRegistered({
      name,
      position,
      img,
      team,
    });
    setName("");
    setPosition("");
    setImg("");
    setTeam("");
  };

  return (
    <section className="form">
      <form onSubmit={onSave}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <TextField
          required={true}
          label="Nome"
          placeholder="Digite seu nome"
          value={name}
          onChanged={(value) => setName(value)}
        />
        <TextField
          required={true}
          label="Cargo"
          placeholder="Digite seu cargo"
          value={position}
          onChanged={(value) => setPosition(value)}
        />
        <TextField
          label="Imagem"
          placeholder="Digite o endereço da imagem"
          value={img}
          onChanged={(value) => setImg(value)}
        />
        <Dropdown
          required={true}
          label="Time"
          itens={props.teams}
          value={team}
          onChanged={(value) => setTeam(value)}
        />
        <Button>Criar Card</Button>
      </form>
    </section>
  );
};

export default Form;
