

const Register = () => {
  return (
    <div>
        <h3> Registrate</h3>

        <form action="">
            <label htmlFor="">Nombre</label>
            <input type="text" />
            <br/>
            <label htmlFor="">Apellido</label>
            <input type="text" />
            <br/>
            <label htmlFor="">Email</label>
            <input type="email" />
            <br/>
            <label htmlFor="">Contraseña</label>
            <input type="password" />
            <br />
            <button>Registrarse</button>
        </form>
    </div>
  )
}

export default Register