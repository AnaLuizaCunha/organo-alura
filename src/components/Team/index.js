import Employee from "../Employee";
import "./Team.css";

const Team = (props) => {
  return props.employees.length > 0 ? (
    <section className="team" style={{ backgroundColor: props.secondaryColor }}>
      <h3 style={{ borderColor: props.primaryColor }}>{props.teamName}</h3>
      <div className="employees">
        {props.employees.map((employee) => (
          <Employee
            backgroundColor={props.primaryColor}
            key={employee.name}
            name={employee.name}
            position={employee.position}
            img={employee.img}
          />
        ))}
      </div>
    </section>
  ) : (
    ""
  );
};

export default Team;
