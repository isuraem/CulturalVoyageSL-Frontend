import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { FaSearch } from "react-icons/fa";
import { getAllEventsService,searchEventsService,filterEventsService} from "../services/eventService";
import { useLocation, useHistory } from "react-router-dom";
import EventsSearchBar from "./eventsSearchBar";
// import NavBar from './shared/NavBar';

const Events = (props) => {
  const [eventsDetails, setEventsDetails] = useState([]);
  let id = props.location.search
  console.log('id',id);

  let result = id.substring(4);
  console.log("res>>", result)
  let history = useHistory();


  const viewOne = async (data) => {

    console.log(">>", data)
    if (data) {
    
    let singledata = window.location.replace(`/eventSingle?id=${data._id}`)
    
    singledata.data = data
    }}
    
  const searchEvent = async (search) =>{
    if(search){
        let searchData={
      eventName: search
    }
    let response = await searchEventsService(searchData);
    console.log('>>',response);
    if(response.ok){
      setEventsDetails(response.data.data)

    }}else if(result){
      let searchType={
        eventType: result
      }

      let response = await filterEventsService(searchType);
        if (response.ok) {
          setEventsDetails(response.data.data);
        }
        console.log(">>>>", response);
    }
    else{

     
        let response = await getAllEventsService();
        if (response.ok) {
          setEventsDetails(response.data.data);
        }
        console.log(">>>>", response);

    }
  
  }

  useEffect(() => {
    searchEvent();
  }, []);

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <img
              src="images/DashTwo.jpg"
              style={{ width: "100%", marginRight: "10px", height: "400px" }}
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
            paddingTop: "25px",
            paddingBottom: "25px",
            paddingLeft: "275px",
            paddingRight: "275px",
            borderRadius: "20px",
          }}
        >
          <hr></hr>
          <p>
            "Discover the vibrant world of Sri Lankan heritage with our
            comprehensive events page. Explore the latest cultural activities,
            workshops, and exhibitions taking place across the country, and stay
            up-to-date with everything related to Sri Lanka's rich cultural
            traditions. Plan your next adventure and immerse yourself in the
            beauty and diversity of Sri Lanka's heritage today!"
          </p>
          <br></br>
          <hr></hr>
        </Row>
        <Row>
          <EventsSearchBar searchEvent={searchEvent} />
        </Row>
        <Row
          style={{
            marginTop: "35px",
            marginBottom: "25px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          {eventsDetails.map((events) => {
            return (
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
                  marginRight: "40px",
                  marginBottom: "50px",
                  height: "35rem",
                }}
              >
                {console.log("events", events)}
                <Card.Img
                  style={{
                    textAlign: "center",
                    borderRadius: "1.25rem",
                    Container: "contents",
                    fit: "fill-box",
                    height: "12rem",
                    marginBottom: "1rem",
                    boxShadow: "0 16px 24px -12px rgba(black,0.15)",
                  }}
                  variant="top"
                  src={
                    events.imageOne != 0
                      ? events.imageOne
                      : "images/calander.jpg"
                  }
                />
                <Card.Body
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                  }}
                >
                  <Card.Title>{events.eventName}</Card.Title>
                  <Card.Text style={{ textAlign: "left" }}>
                    {events.eventDescription.substring(0, 200)}...
                  </Card.Text>

                  <Button
                    style={{ borderRadius: "1.25rem" }}
                    variant="primary"
                    onClick={() => {
                      viewOne(events);
                    }}
                  >
                    View More
                  </Button>
                </Card.Body>
              </Card>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default Events;
