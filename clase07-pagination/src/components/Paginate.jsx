import { Pagination } from "react-bootstrap"

const Paginate = () => {
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