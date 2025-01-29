import {Form, Button} from "react-bootstrap"
import { useState } from "react"

const Register = (props) => {

    //console.log(props)
    //let {nombre, apellido, edad} = props.persona 

    const [nombre,setNombre] = useState("")
    const [apellido,setApellido] = useState("")
    const [edad,setEdad] = useState(null)

    const [users, setUsers] = useState([])

    let user= {
        nombre: "",
        apelldio: "",
        edad: null
    }
    const {usuario, setUsuario} = useState(user)

    const handleSubmit = (e) => {
       e.preventDefault()
       setUsers()
    }

    //const handleNombre = (e) => {
      //  setNombre(e.target.value)
    //}
    
    const handleApellido = (e) => {
        setApellido(e.target.value)
    }
    const handleEdad = (e) => {
        setEdad(e.target.value)
    }


  return (
    <div>
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Label>Nombre</Form.Label>
                <Form.Control placeholder="Ingresa tu Nombre"  onChange={(e)=>setNombre(e.target.value)}></Form.Control>
                <Form.Label>Apellido</Form.Label>
                <Form.Control placeholder="Ingresa tu Apellido" onChange={handleApellido}></Form.Control>
                <Form.Label>Email</Form.Label>
                <Form.Control placeholder="Ingresa tu Edad" onChange={handleEdad}></Form.Control>
                <Button type="submit">Guardar</Button>
            </Form.Group>
            
        </Form>

        {<h3>{nombre} {apellido} {edad}</h3>}  
    </div>
  )
}

export default Register