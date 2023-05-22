import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";

export default function SearchBar() {
  return (
    <Row>
      <h3 style= {{fontFamily: "'Poppins', sans-serif",marginTop: 12}}><strong>Ask community</strong></h3>
      <Col className='d-flex justify-content-center' style={{ width: 1000, height: 50, marginTop: 10 }}>
        <Form className="d-flex" >
          <Form.Control
            type="search"
            placeholder="  Need help ? "
            className="me-2 rounded-pill"
            aria-label="Search"
            style={{ width: 700, height: 50 }}
          />
          <Button className="rounded-pill" variant="outline-warning">
            <FaSearch style={{ width: 25, height: 25 }} />
          </Button>
        </Form>
      </Col>
    </Row>
  );
}