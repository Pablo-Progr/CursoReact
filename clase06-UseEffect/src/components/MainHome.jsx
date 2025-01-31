import { useEffect, useState } from "react"
import { Button } from "react-bootstrap"
import "../css/mainHome.css"
import Hijo from "./Hijo"

const MainHome = () => {


  let [contador, setContador] = useState(0)
  const [nombre, setNombre] = useState(" ")
  const [show, setShow] = useState(false)
  
  const handleSumar = () => {
    if (contador >= 9) {
      setContador(0)
    } else {
      setContador(contador+1)
    }
    console.log("Sumo Contador" + contador)
  }

  const handleRestar = () => {
    setContador(contador - 1)
    console.log("Resto Contador" + contador)
  }
  

  useEffect(() => { console.log('Componente Montado') }, [])

  useEffect(()=> {console.log("Cambia Mi Estado Nombre"+nombre)}, [nombre])
  
  // useEffect(() => {
  //   first
  
  //   return () => {
  //     second
  //   }
  // }, [third])
  

  return (
    <div className="container main">

      <h3>Contador: {contador}</h3>
      <Button  onClick={handleSumar}>+</Button>
      <Button onClick={handleRestar}>-</Button>
      <br />

      <input type="text" onChange={(e) => setNombre(e.target.value)} />
      <Button>Agregar</Button>

      <h3>Nombre: {nombre} </h3>

      <Button onClick={() => {setShow(!show)}}>{show ? "Ocultar"  : "Mostrar" }</Button>
      {show && <Hijo/>}
    </div>
  )
}

export default MainHome