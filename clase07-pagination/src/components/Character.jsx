import { Col,Card,Button } from "react-bootstrap"

const Character = (props) => {
  console.log(props)
  return (
    <>
      <Col lg={4} md={3} >
        <Card style={{width:'18rem'}}>
          <Card.Img variant="top" src={props.image} />
          <Card.Title>Nombre: {props.name} (ID { props.id})</Card.Title>
          <Card.Text>Estado: {props.status}</Card.Text>
          <Card.Text>Genero {props.gender}</Card.Text>
          <Card.Text>Especies: { props.species}</Card.Text>
          <Button variant="primary"> Ver Mas</Button>
        </Card>
      </Col>
    </>
  )
}

export default Character
