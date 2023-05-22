import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import { searchEventsService } from "../services/eventService";


export default function EventsSearchBar(props) {

  const [search ,setSearch]= useState('');
  console.log('...search',search);



  const onSearch = async ()=>{
   props.searchEvent(search)
  }

  return (
    <Row>
      <h3 style={{ fontFamily: "'Poppins', sans-serif", marginTop: 12 }}>
        <strong>Search For Events</strong>
      </h3>
      <Col
        className="d-flex justify-content-center"
        style={{ width: 1000, height: 50, marginTop: 10 }}
      >
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder=" Search ... "
            className="me-2 rounded-pill"
            aria-label="Search"
            onChange={(e)=>setSearch(e.target.value)}
            value={search}
            style={{ width: 700, height: 50 }}
          />
          <Button className="rounded-pill" variant="outline-warning" onClick={() => onSearch()}>
            <FaSearch style={{ width: 25, height: 25 }} />

          </Button>
        </Form>
      </Col>
    </Row>
  );
}
