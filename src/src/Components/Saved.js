import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Image, Row, Button } from "react-bootstrap";

function Saved(props) {
  return (
    <>
      <h1>Nothing is Saved</h1>
      {props.name &&
        props.name.map((it) => {
          return (
            <div className="Cardimage">
              <Card>
                <Link to={`Artists/${it.artistId}`} state={it}>
                  <Card.Img src={it.image} width="200" />
                </Link>
                <Card.Body>
                  <Card.Title>{it.artistName}</Card.Title>
                  <Card.Text>{it.collectionCensoredName}</Card.Text>
                  <Button onClick={() => props.change1(it)}>Save!</Button>
                </Card.Body>
              </Card>
            </div>
          );
        })}
    </>
  );
}

export default Saved;
