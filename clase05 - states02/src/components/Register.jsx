import {Form, Button} from "react-bootstrap"
import { useState } from "react"
import "../css/register.css"
import ShowUsers from "./ShowUsers"

const Register = (props) => {

    let initialState = {
        nombre: "",
        apellido: "",
        edad: null,
        mail: ""
    }

    const [datos, setDatos] = useState(initialState)
    const [usuarios, setUsuarios] = useState([])
    
    const handleSubmit = (e) => {
        e.preventDefault()
        setUsuarios([...usuarios, datos])
        e.target.reset()
        setDatos(initialState)
    }

    const handleChange = (e) => {
        setDatos({...datos, [e.target.name]:e.target.value }) 
    }

  return (
      <div className="register container">
          <h3 >Registrate</h3>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control   placeholder="Ingresa tu Nombre"  onChange={handleChange} name="nombre" required></Form.Control>
                    <Form.Label>Apellido</Form.Label>
                    <Form.Control type="text" placeholder="Ingresa tu Apellido" onChange={handleChange} name="apellido" required></Form.Control>
                    <Form.Label>Edad</Form.Label>
                    <Form.Control type="number" placeholder="Ingresa tu Edad" onChange={handleChange} name="edad" required></Form.Control>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="mail" placeholder="Ingresa tu Mail" onChange={handleChange} name="mail" required></Form.Control>
                    <Button type="submit">Guardar</Button>
                </Form.Group>
          </Form>
          
          <ShowUsers usuarios={usuarios} />
    </div>
  )
}

export default Register