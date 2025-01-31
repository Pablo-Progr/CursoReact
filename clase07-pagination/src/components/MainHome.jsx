import { useState } from "react"
import "../css/mainHome.css"

const MainHome = (props) => {

 console.log(props)
  const [nombre, setNombre] = useState("Pablo")

  props.getValue(nombre)

  return (
    <div className="container main">
      <h3>personajes</h3>
    </div>
  )
}

export default MainHome