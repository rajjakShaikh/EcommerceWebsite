  import React from "react";
  import { useState } from "react";
  import Button from "react-bootstrap/Button";
  import Card from "react-bootstrap/Card";
  import CardData from "./CardData";
  import Header from "./Header";
  import "./headingStyle.css";
  import Footer from "./Footer";
  import { useDispatch } from "react-redux";
  import {ADD} from '../Redux/actions/action'

  export default function Men() {
    const [data, setData] = useState(CardData);
    console.log(data);

  const dispatch = useDispatch();

  const send= (e)=>{
    console.log(e);
    dispatch(ADD(e));
  }

    return (
      <>
      <Header />
    
      <div className="product">
        {data.map((element,id) => (
          <Card className="card">
            <Card.Img variant="top" src={element.img} />
            <Card.Body>

              <h4>{element.title}</h4>.
              <h5 className="card-size">{element.size}</h5>
              <Card.Text className="card_price"> Price: {element.price}</Card.Text>


              <Button  className="card-btn" onClick={()=> send(element)}>Add to Cart</Button>

            </Card.Body>
          </Card>
        ))}
      </div>

      <Footer />

      </>
      
    );
  }
