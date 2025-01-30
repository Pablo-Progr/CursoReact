

const ShowUsers = (props ) => {
  return (
    <div>
      {props.usuarios.map((user, index) => <div key={index}>
              <div className="d-flex justify-content-around">
                  <div className="card">
                  <h3>Nombre Completo: {user.nombre} {user.apellido} </h3>
                    <h3>Edad: {user.edad} </h3>
                    <h3>Mail: {user.mail} </h3>
                    </div>
              </div>
              
          </div>)}
    </div>
  )
}

export default ShowUsers
