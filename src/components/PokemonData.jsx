import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

export default function PokemonData(props) {

  return (
    <Container className="mt-2">
      <Row>
        <Col xs={12} md={6}>
          <Card>
            <Card.Header>
              <h5>{props.name}</h5>
              <img src={props.sprite} alt={props.name} />
            </Card.Header>
            <Card.Body>
                <h5>Description</h5>
                  <p> {props.description} </p>
                 <h5>Shakespeare Description</h5>
                 <p>{props.descriptionShakespeare}</p>
            </Card.Body>
          </Card>
        </Col>

      </Row>
    </Container>
  )
}