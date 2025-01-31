import { useState } from 'react'
import Header from '../components/Header'
// import MainHome from '../components/MainHome'
import Footer from '../components/Footer'
import Characters from '../components/Characters'

const Home = () => {

  // const [value, setValue] = useState("")

  // const getValue = (valor) => {
  //   console.log(valor)
  //   setValue(valor)
  // }

  return (
    <div>
        <Header/>
        {/* <MainHome getValue={getValue}/> */}
        <Characters/>
        <Footer />  
    </div>
  )
}

export default Home 