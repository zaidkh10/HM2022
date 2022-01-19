// ملف ملوش لازمة 

import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Image , Row, Button} from "react-bootstrap";

import "../App.css";

const Artistcard = (props) => {
  return (
    <div className="Cardimage" >
    <Card  >
        <Link to={`Artists/${props.name.artistId}`} state={props.name}>
          <Card.Img  src={props.name.image} />
        </Link>
        <Card.Body>
          <Card.Title>{props.name.artistName}</Card.Title>
          <Card.Text>{props.name.collectionCensoredName}</Card.Text>
          <Button onClick={props.change(props.name)}>  </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Artistcard;
