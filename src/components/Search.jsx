import React from 'react';
import { Form, Container, Col, Button } from 'react-bootstrap';

export default function Search(props) {
  const [search, setSearch] = React.useState('');

  return (
    <Container>
      <Form className="mt-2">
        <Col>
          <Form.Control
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search for Pokemon"
          />
        </Col>
        <Col sm={2} className="my-1">
          <Button  onClick={(e) => props.getPokemon(search)}>
            Search
          </Button>
        </Col>
      </Form>
    </Container>
  );
}
