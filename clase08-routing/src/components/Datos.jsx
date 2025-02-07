import { useParams } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"

const Datos = () => {

    let {id} = useParams()

  return (
      <div>
          <Header/>
          <div>
              <h3>Los datos que vienen en mi ruta es: { id}</h3>
          </div>
          <Footer/>
    </div>
  )
}

export default Datos
