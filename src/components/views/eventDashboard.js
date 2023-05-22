import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const EventDashboard = () => {
  const [transformStyle, setTransformStyle] = useState("scale(1)");
  const [transformStyle1, setTransformStyle1] = useState("scale(1)");
  const [transformStyle2, setTransformStyle2] = useState("scale(1)");
  const [transformStyle3, setTransformStyle3] = useState("scale(1)");
  const [transformStyle4, setTransformStyle4] = useState("scale(1)");

    const viewCategory = async (data) => {
    console.log(">>", data)
    if (data) {
    
    let singledata = window.location.replace(`/eventAll?id=${data}`)
    singledata.data = data
     }
    }


  return (
    <div>
      <Container>
        <Row>
          <Col>
            <img
              src="images/Dash.jpg"
              style={{ width: "100%", marginRight: "10px" }}
              alt="events"
            />
          </Col>
        </Row>

        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Events</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">Dashboard</Nav.Link>
              <Nav.Link href="#features">All Events</Nav.Link>
              <Nav.Link href="#pricing">Events Calander</Nav.Link>
            </Nav>
          </Container>
        </Navbar>

        <Row
          style={{
            marginTop: "25px",
            marginBottom: "25px",
            backgroundColor: "ghostwhite",
            borderRadius: "20px",
          }}
        >
          <h1 style={{ fontFamily: "Roboto", marginTop: "25px" }}>
            Celebrate traditions, embrace heritage
          </h1>
          <h3 style={{ fontFamily: "Montserrat" }}>Discover our events.</h3>
          <Col>
            <Row
              style={{
                marginTop: "5px",
                marginBottom: "25px",
                justifyContent: "space-between",
                paddingLeft: "70px",
                paddingRight: "70px",
              }}
            >
              <Card
                border="primary"
                style={{
                  width: "9rem",
                  transition: "transform .2s",
                  transform: transformStyle,
                }}
                onMouseEnter={() => {
                  setTransformStyle("scale(1.1)");
                }}
                onMouseLeave={() => {
                  setTransformStyle("scale(1)");
                }}

                onClick={() => {
                  viewCategory("Religious")
                }}
              >
                {/* <Card border="primary" style={{ width: '9rem',height:'7rm'}}  onMouseEnter={() => { style.transform = 'scale(1.1)' }} onMouseLeave={() => { style.transform = 'scale(1)' }}> */}
                {/* <Card.Header> </Card.Header> */}
                <Card.Body>
                  <Card.Title style={{ fontSize: "12px", color: "#0d6efd" }}>
                    Religious
                  </Card.Title>
                  <Card.Text>
                    <img
                      src="images/religions.png"
                      style={{ width: "100%" }}
                      alt="events"
                    />
                    {/* <a href="https://www.flaticon.com/free-icons/festival" title="festival icons">Festival icons created by Freepik - Flaticon</a> */}
                  </Card.Text>
                </Card.Body>
              </Card>

              <Card
                border="info"
                style={{
                  width: "9rem",
                  transition: "transform .2s",
                  transform: transformStyle1,
                }}
                onMouseEnter={() => {
                  setTransformStyle1("scale(1.1)");
                }}
                onMouseLeave={() => {
                  setTransformStyle1("scale(1)");
                }}
                onClick={() => {
                  viewCategory("Festival")
                }}
              >
                <Card.Body>
                  <Card.Title style={{ fontSize: "12px", color: "#0dcaf0" }}>
                    Festivals
                  </Card.Title>
                  <Card.Text>
                    <img
                      src="images/music.png"
                      style={{ width: "100%" }}
                      alt="events"
                    />
                  </Card.Text>
                </Card.Body>
              </Card>

              <Card
                border="success"
                style={{
                  width: "9rem",
                  transition: "transform .2s",
                  transform: transformStyle2,
                }}
                onMouseEnter={() => {
                  setTransformStyle2("scale(1.1)");
                }}
                onMouseLeave={() => {
                  setTransformStyle2("scale(1)");
                }}
                onClick={() => {
                  viewCategory("Exhibition")
                }}
              >
                <Card.Body>
                  <Card.Title style={{ fontSize: "12px", color: "#198754" }}>
                    Exibitions
                  </Card.Title>
                  <Card.Text>
                    <img
                      src="images/exibition.png"
                      style={{ width: "100%" }}
                      alt="events"
                    />
                  </Card.Text>
                </Card.Body>
              </Card>

              <Card
                border="danger"
                style={{
                  width: "9rem",
                  transition: "transform .2s",
                  transform: transformStyle3,
                }}
                onMouseEnter={() => {
                  setTransformStyle3("scale(1.1)");
                }}
                onMouseLeave={() => {
                  setTransformStyle3("scale(1)");
                }}
                onClick={() => {
                  viewCategory("Entertains")
                }}
              >
                <Card.Body>
                  <Card.Title style={{ fontSize: "12px", color: "#dc3545" }}>
                    Entertains
                  </Card.Title>
                  <Card.Text>
                    <img
                      src="images/entertain.png"
                      style={{ width: "100%" }}
                      alt="events"
                    />
                  </Card.Text>
                </Card.Body>
              </Card>

              <Card
                border="warning"
                style={{
                  width: "9rem",
                  transition: "transform .2s",
                  transform: transformStyle4,
                }}
                onMouseEnter={() => {
                  setTransformStyle4("scale(1.1)");
                }}
                onMouseLeave={() => {
                  setTransformStyle4("scale(1)");
                }}
                onClick={() => {
                  viewCategory("Confference")
                }}
              >
                <Card.Body>
                  <Card.Title style={{ fontSize: "12px", color: "#ffc107" }}>
                    Confference
                  </Card.Title>
                  <Card.Text>
                    <img
                      src="images/confference.png"
                      style={{ width: "100%" }}
                      alt="events"
                    />
                  </Card.Text>
                </Card.Body>
              </Card>
            </Row>
          </Col>
        </Row>
        <Row
          style={{
            marginTop: "25px",
            marginBottom: "25px",
            backgroundColor: "ghostwhite",
            padding: "25px",
            borderRadius: "20px",
          }}
        >
          <Col>
            <img
              src="images/calander.jpg"
              style={{ width: "100%" }}
              alt="events"
            />
          </Col>
          <Col
            style={{
              fontFamily: "Montserrat",
              justifyContent: "center",
              lineHeight: "80%",
            }}
          >
            <hr></hr>
            <p>
              <h5>
                "Stay up-to-date with the latest cultural events in Sri Lanka
                with our event calendar. Never miss a festival, exhibition, or
                conference again! Our calendar is a one-stop-shop for all your
                event needs, providing you with a comprehensive guide to the
                exciting events taking place throughout the country. Browse by
                date or event type, and find the perfect cultural experience to
                enrich your life and expand your horizons. Discover the rich
                tapestry of Sri Lankan culture through our event calendar
                today."
              </h5>
            </p>
            <hr></hr>
            <br></br>
            <br></br>

            <Row>
              {" "}
              <Button variant="outline-secondary" size="lg">
                Event Calander
              </Button>
            </Row>
          </Col>
        </Row>
        <Row
          style={{
            marginTop: "25px",
            marginBottom: "25px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <Card
            style={{
              width: "18rem",
              display: "block",
              maxWidth: "480px",
              backgroundColor: "ghostwhite",
              borderRadius: "1.75rem",
              padding: " .75rem",
              boxShadow: "0 16px 24px -12px rgba(black,0.15)",
              border: "none",
              marginRight: "50px",
              marginBottom: "50px",
            }}
          >
            <Card.Img
              style={{
                textAlign: "center",
                borderRadius: "1.25rem",
                Container: "contents",
                fit: "fill-box",
                marginBottom: "1rem",
                boxShadow: "0 16px 24px -12px rgba(black,0.15)",
              }}
              variant="top"
              src="images/calander.jpg"
            />
            <Card.Body
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <Card.Title></Card.Title>
              <Card.Text style={{ textAlign: "left" }}></Card.Text>
              <Button style={{ borderRadius: "1.25rem" }} variant="primary">
                View More
              </Button>
            </Card.Body>
          </Card>
          <Card
            style={{
              width: "18rem",
              display: "block",
              maxWidth: "480px",
              backgroundColor: "ghostwhite",
              borderRadius: "1.75rem",
              padding: " .75rem",
              boxShadow: "0 16px 24px -12px rgba(black,0.15)",
              border: "none",
              marginRight: "50px",
              marginBottom: "50px",
            }}
          >
            <Card.Img
              style={{
                textAlign: "center",
                borderRadius: "1.25rem",
                Container: "contents",
                fit: "fill-box",
                marginBottom: "1rem",
                boxShadow: "0 16px 24px -12px rgba(black,0.15)",
              }}
              variant="top"
              src="images/calander.jpg"
            />
            <Card.Body
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <Card.Title></Card.Title>
              <Card.Text style={{ textAlign: "left" }}></Card.Text>
              <Button style={{ borderRadius: "1.25rem" }} variant="primary">
                View More
              </Button>
            </Card.Body>
          </Card>
          <Card
            style={{
              width: "18rem",
              display: "block",
              maxWidth: "480px",
              backgroundColor: "ghostwhite",
              borderRadius: "1.75rem",
              padding: " .75rem",
              boxShadow: "0 16px 24px -12px rgba(black,0.15)",
              border: "none",
              marginRight: "50px",
              marginBottom: "50px",
            }}
          >
            <Card.Img
              style={{
                textAlign: "center",
                borderRadius: "1.25rem",
                Container: "contents",
                fit: "fill-box",
                marginBottom: "1rem",
                boxShadow: "0 16px 24px -12px rgba(black,0.15)",
              }}
              variant="top"
              src="images/calander.jpg"
            />
            <Card.Body
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <Card.Title></Card.Title>
              <Card.Text style={{ textAlign: "left" }}></Card.Text>
              <Button style={{ borderRadius: "1.25rem" }} variant="primary">
                View More
              </Button>
            </Card.Body>
          </Card>
          <Card
            style={{
              width: "18rem",
              display: "block",
              maxWidth: "480px",
              backgroundColor: "ghostwhite",
              borderRadius: "1.75rem",
              padding: " .75rem",
              boxShadow: "0 16px 24px -12px rgba(black,0.15)",
              border: "none",
              marginBottom: "50px",
            }}
          >
            <Card.Img
              style={{
                textAlign: "center",
                borderRadius: "1.25rem",
                Container: "contents",
                fit: "fill-box",
                marginBottom: "1rem",
                boxShadow: "0 16px 24px -12px rgba(black,0.15)",
              }}
              variant="top"
              src="images/calander.jpg"
            />
            <Card.Body
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <Card.Title></Card.Title>
              <Card.Text style={{ textAlign: "left" }}></Card.Text>
              <Button style={{ borderRadius: "1.25rem" }} variant="primary">
                View More
              </Button>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </div>
  );
};

export default EventDashboard;
