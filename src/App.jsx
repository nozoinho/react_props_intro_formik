//import { useState } from "react";
import Form from "./components/Form";

const App = () => {
  //const [values, setValues] = useState({ text: "" });

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <div>
      <Form
        onSubmit={onSubmit}
        initialState={{ text: "desde app", email: "test@test.com" }}
      >
        {({ values, handleChange, handleSubmit }) => (
          //({ text }) => ( // texto desde el componente
          // estamos colocando children como función, donde devuelve el form principal
          // estamos ejecutando esta funcion en el children
          // el children ejecuta lo que devuelve el jsx
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="text"
              name="text" // debe llevar el mismo nombre de la propiedad
              //value={values.text}
              value={values.text} // texto desde el componente
              onChange={handleChange}
              //onChange={(e) => setValues({ ...values, text: e.target.value })}
            />
            <input
              type="email"
              placeholder="email"
              name="email"
              value={values.email}
              onChange={handleChange}
            />
            <button type="submit">Submit</button>
          </form>
        )}
      </Form>
    </div>
  );
};
export default App;
