import "../css/MainHome.css"
import {Button} from "react-bootstrap"
import { useState } from "react";

const MainHome = () => {

    let resultado = useState("Pablo")
    console.log(resultado)

    let nombre = resultado[0]
    console.log(nombre)

    let cambioNombre = resultado[1]
    console.log(cambioNombre)


    let perritos = ["otto", "flopy", "olivia"]
    //Destructurar
    const [a,b] = perritos 



    let numero = 10;

     const handleClick = () =>{
        numero = numero + 20
        //console.log(numero)
     }

    
  return (
    <div className="main">
        <Button onClick={handleClick}>Sumar 20</Button>
        <h3>Numero: {numero}</h3>
    </div>
  )
}

export default MainHome