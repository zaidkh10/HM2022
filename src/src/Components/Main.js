import { Row, Col } from "react-bootstrap";
import Artistcard from "./Artistcard";
import { Card, Button } from "react-bootstrap";
import React from "react";
import { Link } from "react-router-dom";
import { Image } from "react-bootstrap";

const Main = (props) => {
  return (
    <div>
      <div className="Mainstyle">
        {props.name.map((artist) => (
          <div className="Cardimage">
            <Card>
              <Link to={`Artists/${artist.artistId}`} state={artist}>
                <Card.Img src={artist.image} width="200" />
              </Link>
              <Card.Body>
                <Card.Title>{artist.artistName}</Card.Title>
                <Card.Text>{artist.collectionCensoredName}</Card.Text>
                <Button onClick={() => props.change1(artist)}>Save!</Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Main;
