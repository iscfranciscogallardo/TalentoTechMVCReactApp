// import "bootstrap/dist/css/boostrap.min.css"
import { useEffect, useState } from "react"
//import Tarjeta from "./components/Tarjeta"


const App = () => {
    /*
    let modeloPersona = {
        nombre :"Paco"
        , correo :"paco@paco.com"
    }


    const [numero, setNumero] = useState(0);
    const [persona, setPersona] = useState(modeloPersona);

    const [nombre, setNombre] = useState("Paco");

    const EscribirNombre = () => {
        setNombre(nombre == "Paco" ? "Paquito" : "Paco");
    }

    useEffect(() => { console.log(numero) });
    */

    const [empleados, setEmpleados] = useState([]);

    const ConsumirApi = async () => {
        const response = await fetch("api/empleado/ObtenerEmpleados")

        if (response.ok) {
            const data = response.json();
            console.log(data);
            setEmpleados(data);
        }
    }

    useEffect(() => {
        ConsumirApi();
    }, [])

    return (
        /*<div className="container">
            <h1>Hola soy Paco y este es mi proyecto REact Net Core</h1>
        </div>*/

        /*
  
          <div className="container-fluid">
              <div className="row justify-content-sm-center">
                  <div className="col-sm-4">
                      <Tarjeta/>
                      <Tarjeta titulo="Soy Paco" descripcion="Aqui soy" textbutton="Más información" />
                      <Tarjeta />
                      <Tarjeta />
                      <Tarjeta />
                      <Tarjeta />
                  </div>
              </div>
          </div>*/


        /*  <div className="container-fluid">
              <h1>Valor actual del numero {numero}</h1>
              <button onClick={() => setNumero(numero + 1)}>Sumar + 1</button>
  
  
              <br></br>
              <br></br><br></br><br></br><br></br>
  
              <P>Nombre: {persona.nombre}</P>
              <P>Correo: {persona.correo}</P>
              <button onClick={() => setNumero({ ...persona, correo: "otrocorreo@paco.com" })}>Cambiar correo</button>
              <br></br><br></br><br></br><br></br>
              <P>Nombre actual: {nombre}</P>
              <button onClick={() => EscribirNombre()}>Cambiar nombre</button>
  
  
  
          </div>*/






        <div className="container-fluid">
            <h5>Lista de empleados</h5>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Correo</th>
                        <th>Direccion</th>
                        <th>Telefono</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        empleados.map((empleado) => (
                            <tr key={ empleado.idEmpleado} >
                                <td>{empleado.nombre}</td>
                                <td>{empleado.nombre}</td>
                                <td>{empleado.nombre}</td>
                                <td>{empleado.nombre}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default App;