import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row } from 'react-bootstrap';
import CardPizza from './components/CardPizza';
import './assets/css/style.css';
import Register from './components/Register';

function App() {


  return (
    <>
      <Navbar></Navbar>
      {/* <Header></Header> */}
      {/* <Row>
        <Col style={{display:'flex', alignItems: 'center', justifyContent: 'center', marginTop: '30px'}}>
          <CardPizza
            name='Napolitana'
            price={5950}
            ingredientes={["mozarella", " tomates", " jamón", " orégano"]}
            img="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media&token=6a9a33da-5c00-49d4-9080-784dcc87ec2c"/>
        </Col>
        <Col style={{display:'flex', alignItems: 'center', justifyContent: 'center', marginTop: '30px'}}>
          <CardPizza
            name='Española'
            price={6950}
            ingredientes={["mozzarella", " gorgonzola", " parmesano", " provolone"]}
            img="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fcheese-164872_640_com.jpg?alt=media&token=18b2b821-4d0d-43f2-a1c6-8c57bc388fab"/>
        </Col>
        <Col style={{display:'flex', alignItems: 'center', justifyContent: 'center', marginTop: '30px'}}>
          <CardPizza
            name="Pepperoni"
            price={6950}
            ingredientes={["mozzarella", " pepperoni", " orégano"]}
            img="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_com.jpg?alt=media&token=e7cde87a-08d5-4040-ac54-90f6c31eb3e3"/>
        </Col>
      </Row> */}
      {/* <Row>
        <Col style={{display:'flex', alignItems: 'center', justifyContent: 'center', marginTop: '30px', marginBottom: '30px'}}>
          <CardPizza
            name='Napolitana'
            price={5950}
            ingredientes={["mozarella", " tomates", " jamón", " orégano"]}
            img="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media&token=6a9a33da-5c00-49d4-9080-784dcc87ec2c"/>
        </Col>
        <Col style={{display:'flex', alignItems: 'center', justifyContent: 'center', marginTop: '30px', marginBottom: '30px'}}>
          <CardPizza
            name='Española'
            price={6950}
            ingredientes={["mozzarella", " gorgonzola", " parmesano", " provolone"]}
            img="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fcheese-164872_640_com.jpg?alt=media&token=18b2b821-4d0d-43f2-a1c6-8c57bc388fab"/>
        </Col>
        <Col style={{display:'flex', alignItems: 'center', justifyContent: 'center', marginTop: '30px', marginBottom: '30px'}}>
          <CardPizza
            name="Pepperoni"
            price={6950}
            ingredientes={["mozzarella", " pepperoni", " orégano"]}
            img="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_com.jpg?alt=media&token=e7cde87a-08d5-4040-ac54-90f6c31eb3e3"/>
        </Col>
      </Row> */}
      <Register></Register>
      <Footer></Footer>
    </>
  )
}

export default App
