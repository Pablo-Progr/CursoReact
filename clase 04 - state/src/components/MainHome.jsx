import "../css/MainHome.css"
import {Button} from "react-bootstrap"
import { useState } from "react";
import Register from "./Register";

const MainHome = () => {

    //let resultado = useState("Pablo")
    //console.log(resultado)

    //let nombre = resultado[0]
    //console.log(nombre)

    //let cambioNombre = resultado[1]
    //console.log(cambioNombre)


    //let perritos = ["otto", "flopy", "olivia"]
    //Destructurar
    //const [a,b] = perritos 

    const [num, setNumero] = useState(245)
  
    //const [first, setfirst] = useState(second)
    const [apelldio, setApelldio] = useState("")
    const [show, setShow] = useState(false)



    let initialState = {
      nombre: "Pablo",
      apellido: "Dominguez",
      edad: 25
    }

    const [persona, setPersona] = useState(initialState)

    const handleClick = () =>{
        setNumero(num + 50)
      }

     const handleApellido = ()=> {
        setApelldio("Dominguez")
     }

     const handleRegister = () =>{
      //toggle Buttom
      setShow(!show)
     }
    
  return (
    <div className="main">
        <Button type="button" onClick={handleClick}>Sumar 20</Button>
        <h3>Numero: {num}</h3>

        <Button type="button" onClick={handleApellido}>Cambiar Apellido</Button>
        <h3>Apellido: {apelldio}</h3>

        <Button type="button" onClick={handleRegister}>{show===false ? "Mostrar Registro" : "Ocultar Registro"}</Button>
        
        <h3>Nombre: {persona.nombre}</h3>
        <h3>Apellido: {persona.apellido}</h3>
        <h3>Edad: {persona.edad}</h3>

        {/*show === true ? <Register /> : null */}
        {show && <Register persona={persona}/> }
    </div>
  )
}

export default MainHome