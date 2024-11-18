import { useState } from "react";
import Banner from "./components/Banner";
import Form from "./components/Form";

function App() {
  const [employees, setEmployees] = useState([]);

  const onNewEmployeeAdded = (employee) => {
    console.log(employee);
    setEmployees([...employees, employee]); // Adiciona um novo colaborador ao array de colaboradores
  };

  return (
    <div className="App">
      <Banner />
      <Form onEmployeeRegistered={(employee) => onNewEmployeeAdded(employee)} />
    </div>
  );
}

export default App;
