import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {
  Calendar,
  dateFnsLocalizer,
  momentLocalizer,
} from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import enUS from "date-fns/locale/en-US";
import { FaCalendar } from "react-icons/fa";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { getAllEventsService } from "../services/eventService";
import NavBar from "./shared/NavBar";

// const locales = {
//   'en-US': {
//     format: (date, formatStr, options) => format(date, formatStr, { locale: enUS, ...options }),
//     ...enUS
//   }
// }
const localizer = momentLocalizer(moment);

// const localizer = dateFnsLocalizer({
//   format,
//   parse,
//   startOfWeek,
//   getDay,
//   locales
// })

const EventsCalendar = () => {
  const [eventsDetails, setEventsDetails] = useState([]);
  const [calenederEvents, setCalendarEvents] = useState([]);

  const getAllEvents = async () => {
    let response = await getAllEventsService();
    console.log("respose", response);
    if (response.ok) {
      // await setEventsDetails(response.data.data)
      // console.log("state>>", eventsDetails)S
      console.log("eventdetails>>", response.data.data.length);
      if (response.data.data.length != 0) {
        const eventArray = [];
        for (let i = 0; i < response.data.data.length; i++) {
          let eventObject = {
            title: response.data.data[i].eventName,
            allDay: false,
            start: moment(response.data.data[i].dateFrom),
            end: moment(response.data.data[i].dateTo)
              .add(1, "days")
              .subtract(1, "seconds"),
            type: response.data.data[i].eventType,
          };
          eventArray.push(eventObject);
        }
        setCalendarEvents(eventArray);
        console.log("eventArray >>", eventArray);
      }
    }
    console.log(">>>>", calenederEvents);
  };

  // const getEventStyle = (calenederEvents, start, end, isSelected) => {
  //   let backgroundColor = ''
  //   switch (calenederEvents.eventType) {
  //     case 'conference':
  //       backgroundColor = 'Pink'
  //       break
  //     case 'entertain':
  //       backgroundColor = 'lightGreen'
  //       break
  //     case 'Festival':
  //       backgroundColor = 'lightSkyBlue'
  //       break
  //     case 'religious':
  //       backgroundColor = 'lightSkyBlue'
  //       break
  //     default:
  //       backgroundColor = 'lightBlue'
  //   }
  //   return {
  //     style: {
  //       backgroundColor: backgroundColor
  //     }
  //   }
  // }

  const getEventStyle = (event) => {
    console.log("color", event);
    let backgroundColor = "";
    switch (event.type) {
      case "conference":
        backgroundColor = "lightGreen";
        break;
      case "Entertain":
        backgroundColor = "gold";
        break;
      case "Festival":
        backgroundColor = "lightSkyBlue";
        break;
      case "Religious":
        backgroundColor = "lightcoral";
        break;
      case "Exhibition":
        backgroundColor = "lightsteelblue";
        break;
      default:
        backgroundColor = "lightBlue";
    }
    console.log("bg", backgroundColor);
    return {
      style: {
        backgroundColor: backgroundColor,
      },
    };
  };

  useEffect(() => {
    getAllEvents();
  }, []);

  return (
    <div>
      <Container>
        <NavBar />

        <Row>
          <Col>
            <img
              src="images/DashOne.jpg"
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
            "Stay up-to-date with the latest cultural events in Sri Lanka with
            our event calendar. Never miss a festival, exhibition, or conference
            again! Our calendar is a one-stop-shop for all your event needs,
            providing you with a comprehensive guide to the exciting events
            taking place throughout the country. Browse by date or event type,
            and find the perfect cultural experience to enrich your life and
            expand your horizons. Discover the rich tapestry of Sri Lankan
            culture through our event calendar today."
          </p>
          <br></br>
          <hr></hr>
        </Row>
        <Row style={{ marginTop: "50px", marginBottom: "50px" }}>
          <Col>
            <Card
              style={{
                width: "15rem",
                boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
              }}
            >
              <Card.Header className="bg-dark text-white">
                Events Type
              </Card.Header>
              <ListGroup
                style={{ backgroundColor: "gostWhite" }}
                variant="flush"
              >
                <ListGroup.Item className="d-flex justify-content-left">
                  Festival{" "}
                  <FaCalendar
                    style={{
                      marginTop: "4px",
                      marginLeft: "117px",
                      fill: "lightSkyBlue",
                    }}
                  />
                </ListGroup.Item>
                <ListGroup.Item className="d-flex justify-content-left">
                  Religious{" "}
                  <FaCalendar
                    style={{
                      marginTop: "4px",
                      marginLeft: "106px",
                      fill: "lightcoral",
                    }}
                  />{" "}
                </ListGroup.Item>
                <ListGroup.Item className="d-flex justify-content-left">
                  Exhibition
                  <FaCalendar
                    style={{
                      marginTop: "4px",
                      marginLeft: "101px",
                      fill: "lightsteelblue",
                    }}
                  />
                </ListGroup.Item>
                <ListGroup.Item className="d-flex justify-content-left">
                  Conference{" "}
                  <FaCalendar
                    style={{
                      marginTop: "4px",
                      marginLeft: "88px",
                      fill: "lightGreen",
                    }}
                  />
                </ListGroup.Item>
                <ListGroup.Item className="d-flex justify-content-left">
                  Entertain{" "}
                  <FaCalendar
                    style={{
                      marginTop: "4px",
                      marginLeft: "106px",
                      fill: "gold",
                    }}
                  />
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
          <Col xs={9}>
            {console.log("calender.evnts>>>", calenederEvents)}
            <Calendar
              localizer={localizer}
              events={calenederEvents}
              startAccessor="start"
              endAccessor="end"
              style={{
                height: 600,
                backgroundColor: "gostWhite",
                padding: 20,
                borderRadius: 20,
                boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
              }}
              eventPropGetter={getEventStyle}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default EventsCalendar;
