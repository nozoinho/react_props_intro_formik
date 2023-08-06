// la idea de Form.jsx es tener el control del formulario en un componente separado

import { useState } from "react";

//const initialState = { text: "initial text" };

// independiente del formulario que creemos pueda procesar su informacion
const Form = ({ children, initialState, onSubmit }) => {
  const [values, setValues] = useState(initialState);

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;

    setValues((prev) => ({
      ...prev,
      [name]: type == "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log(values);
    onSubmit(values);
  };

  //return children;
  //en vez del children enviamos la ejecucion de una funcion
  // para ello creamos una función de flecha en el componente Form desde App

  //return children({ text: "mi texto desde el componente" });
  return children({ values, handleChange, handleSubmit });
  // el children ya no es jsx sino una funcion
  // el children ejecuta la funcion
  // ala ejecutarla le envia un parametro, en este caso text
  // como se envia un parametro, se recibe desde la funcion en App
};
export default Form;
