import { useState } from "react";
import Banner from "./components/Banner";
import Form from "./components/Form";
import Team from "./components/Team";

function App() {
  const teams = [
    {
      name: "Programação",
      primaryColor: "#57c278",
      secondaryColor: "#d9f7e9",
    },
    {
      name: "Front-end",
      primaryColor: "#82cffa",
      secondaryColor: "#e8f8ff",
    },
    {
      name: "Data Science",
      primaryColor: "#a6d157",
      secondaryColor: "#f0f8e1",
    },
    {
      name: "Devops",
      primaryColor: "#e06b69",
      secondaryColor: "#fde7e8",
    },
    {
      name: "UX e Design",
      primaryColor: "#db6ebf",
      secondaryColor: "#fae9f5",
    },
    {
      name: "Mobile",
      primaryColor: "#ffba05",
      secondaryColor: "#fff5d9",
    },
    {
      name: "Inovação e Gestão",
      primaryColor: "#ff8a29",
      secondaryColor: "#ffeedf",
    },
  ];

  const [employees, setEmployees] = useState([]);

  const onNewEmployeeAdded = (employee) => {
    console.log(employee);
    setEmployees([...employees, employee]); // Adiciona um novo colaborador ao array de colaboradores
  };

  return (
    <div className="App">
      <Banner />
      <Form
        teams={teams.map((team) => team.name)}
        onEmployeeRegistered={(employee) => onNewEmployeeAdded(employee)}
      />
      {teams.map((team) => (
        <Team
          key={team.name}
          teamName={team.name}
          primaryColor={team.primaryColor}
          secondaryColor={team.secondaryColor}
          employees={employees.filter(
            (employee) => employee.team === team.name
          )}
        />
      ))}
    </div>
  );
}

export default App;
