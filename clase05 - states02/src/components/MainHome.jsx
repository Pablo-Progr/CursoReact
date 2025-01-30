import { useState } from "react"
import { Button } from "react-bootstrap"

import "../css/mainHome.css"

const MainHome = () => {

  let initialState = ["Olivia", "Floppy", "Otto"]
  const [perritos, setPerritos] = useState(initialState)  
  const [nombrePerrito, setNombrePerrito] = useState(" ")

  const handleClick = () => {
    setPerritos([...perritos, nombrePerrito])
    setNombrePerrito(" ")
  }

  const handleChange = (e) => {
    setNombrePerrito(e.target.value)
    
  }
  
  const handleDelete = (id) => {
    let nuevosperritos = perritos.filter((_, index) => index != id)
    setPerritos(nuevosperritos)
    
  }
  
  return (
    <div className="main">
      <h3>Listado de Perritos</h3>

      <input type="text" onChange={handleChange} value={nombrePerrito}/>
      <Button type="button" onClick={handleClick}>Agregar </Button>

      {perritos.map((perro, index) => <ul key={index}>{perro} <Button className="btn btn-danger" onClick={() => handleDelete(index)}>Eliminar</Button></ul>)}
      

      {/* <h3>Nombre Perrito: {nombrePerrito}</h3> */}
      
    </div>
  )
}

export default MainHome