import { useEffect, useState } from "react"
import { BASE_URL } from "../constants/Api"
import {Button, Row } from "react-bootstrap"
import Character from "./Character"
import "../css/characters.css"


const Characters = () => {

    const [personajes, setPersonajes] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [apelldio, setApelldio] = useState("")


    useEffect(() => {
        getCharacters()
    }, [])

    const getCharacters = async () => {
        try {
            let response = await fetch(BASE_URL)
            let respuesta = await response.json()
            setPersonajes(respuesta.results)
            setLoading(false)
            setError(false)
        } catch (error) {
            console.log(error);
            setError(true)
            setPersonajes([])
            setLoading(false)
        }
        
    }



  return (
    <div>
          <h2>Personajes Rick y Morty</h2>
          <input type="text" onChange={() =>setApellido(error.target.value)}></input>
          <Button > Buscar</Button>
          <div className="characters">
              <Row >
              {loading ? <h3>Cargando...</h3> : personajes.map(personaje => <Character key={personaje.id} {...personaje }/>)}
          </Row>
          </div>
          
            
    </div>
  )
}

export default Characters
