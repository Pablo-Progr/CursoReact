import { useEffect, useState } from "react"
import { BASE_URL } from "../constants/Api"
import {Button, Row } from "react-bootstrap"
import { Pagination } from "react-bootstrap"
import Character from "./Character"
import Paginate from "./Paginate"


const Characters = () => {

    const [personajes, setPersonajes] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [nombre, setNombre] = useState("")
    // const [prev, setPrev] = useState("")
    // const [next, setNext] = useState("")
    const [info, setInfo] = useState({})


    useEffect(() => {
        getCharacters()
    }, [])

    const getCharacters = async () => {
        try {
            let response = await fetch(BASE_URL)
            let respuesta = await response.json()
            setPersonajes(respuesta.results)
            // setPrev(respuesta.info.prev)
            // setNext(respuesta.info.next)
            setInfo(respuesta.info)
            setLoading(false)
            setError(false)
        } catch (error) {
            console.log(error);
            setError(true)
            setPersonajes([])
            setLoading(false)
        }
        
    }

    const handleSubmit = () => {

    }

    // const handlePrev  = async() => {
    //     let response = await fetch(prev)
    //     let data = await response.json()
    //     console.log(data)
    //     setPersonajes(data.results)
    //     setPrev(data.info.prev)
    //     setNext(data.info.next)
    // }

    // const handleNext  = async() => {
    //     let response = await fetch(next)
    //     let data = await response.json()
    //     console.log(data)

    //     setPersonajes(data.results)
    //     setPrev(data.info.prev)
    //     setNext(data.info.next)
    // }

    // const handleUltimo  = async() => {
    //     let response = await fetch("https://rickandmortyapi.com/api/character/?page=42")
    //     let data = await response.json()
    //     console.log(data)

    //     setPersonajes(data.results)
    //     setPrev(data.info.prev)
    //     setNext(data.info.next)
    // }
    
    

  return (
    <div>
          <h2>Personajes Rick y Morty</h2>
         
          <div className="container characters">
                <label htmlFor="">Busca Tu Personaje </label>
                <input type="text" onChange={(e) => setNombre(e.target.value)} />
                <Button type="button" onClick={handleSubmit}>Buscar</Button>
              <Row >
              {loading ?  <h3>Cargando...</h3> : personajes.map(personaje => <Character key={personaje.id} {...personaje }/>)}
              </Row>
          </div>

        

        <Paginate {...info}/>

        
        
        

          
            
    </div>
  )
}

export default Characters
