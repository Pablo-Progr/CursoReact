import { Pagination } from "react-bootstrap"

const Paginate = ({prev, next, handlePages}) => {
  const handlePrev  = async() => {
    let datos = prev.split("?")

     const [,newurl] = datos
     handlePages(newurl)
    }

    const handleNext  = async() => {
     let datos = next.split("?")

     const [,newurl] = datos
     handlePages(newurl)
    }

    const handleUltimo  = async() => {

    }

    


  return (
    <div>
      <Pagination>
            {prev && <Pagination.Prev onClick={handlePrev}>Anterior</Pagination.Prev>}
            {next &&<Pagination.Next  onClick={handleNext}>Siguiente</Pagination.Next>}
            <Pagination.Last onClick={handleUltimo}>Ultimo</Pagination.Last>
        </Pagination>
    </div>
  )
}

export default Paginate