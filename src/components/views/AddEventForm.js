import React, { useState, useEffect } from "react";
import "./form.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { ProgressBar } from "react-bootstrap";
import DropzoneArea from "../../dropZoneComponents/dropZone";
import { addEventsService } from "../services/eventService";

const AddEventForm = () => {
  const [eventName, seteventName] = useState("");
  const [eventDescription, seteventDescription] = useState("");
  const [eventType, seteventType] = useState("");
  const [dateFrom, setdateFrom] = useState("");
  const [dateTo, setdateTo] = useState("");
  const [Time, setTime] = useState("");
  const [Location, setLocation] = useState("");
  const [Performer, setPerformer] = useState("");
  const [contactPerson, setcontactPerson] = useState("");
  const [Contact, setContact] = useState("");
  const [imageOne, setimageOne] = useState("");
  const [imageTwo, setimageTwo] = useState("");
  const [imageThree, setimageThree] = useState("");
  const [Agenda, setAgenda] = useState("");

  const [errFile, setErrFile] = useState(true);
  const [errType, setErrType] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(10);
  const [state, setState] = useState(false);

  const [errFileOne, setErrFileOne] = useState(true);
  const [errTypeOne, setErrTypeOne] = useState(true);
  const [loadingProgressOne, setLoadingProgressOne] = useState(10);
  const [stateOne, setStateOne] = useState(false);

  const [errFileTwo, setErrFileTwo] = useState(true);
  const [errTypeTwo, setErrTypeTwo] = useState(true);
  const [loadingProgressTwo, setLoadingProgressTwo] = useState(10);
  const [stateTwo, setStateTwo] = useState(false);

  const [errFileThree, setErrFileThree] = useState(true);
  const [errTypeThree, setErrTypeThree] = useState(true);
  const [loadingProgressThree, setLoadingProgressThree] = useState(10);
  const [stateThree, setStateThree] = useState(false);

  const onSubmit = async () => {
    let event = {
      eventName: eventName,
      eventDescription: eventDescription,
      eventType: eventType,
      dateFrom: dateFrom,
      dateTo: dateTo,
      Time: Time,
      Location: Location,
      Performer: Performer,
      contactPerson: contactPerson,
      Contact: Contact,
      imageOne: imageOne,
      imageTwo: imageTwo,
      imageThree: imageThree,
      Agenda: Agenda,
    };
    console.log("event", event);
    let response = await addEventsService(event);
    console.log("responseEvents>>>", response);
  };

  const sendData = (data) => {
    console.log("data1", data);
    setErrFile(false);
    setimageOne(data);
  };

  const sendDataOne = (data) => {
    console.log("data2", data);
    setErrFileOne(false);
    setimageTwo(data);
  };

  const sendDataTwo = (data) => {
    console.log("data3", data);
    setErrFileTwo(false);
    setimageThree(data);
  };

  const sendDataThree = (data) => {
    console.log("data4", data);
    setErrFileThree(false);
    setAgenda(data);
  };

  const sendProgress = (data) => {
    console.log("DATAAAA1", data);
    setState(true);
    setLoadingProgress(data);
  };

  const sendProgressOne = (data) => {
    console.log("DATAAAA2", data);
    setStateOne(true);
    setLoadingProgressOne(data);
  };

  const sendProgressTwo = (data) => {
    console.log("DATAAAA3", data);
    setStateTwo(true);
    setLoadingProgressTwo(data);
  };

  const sendProgressThree = (data) => {
    console.log("DATAAAA4", data);
    setStateThree(true);
    setLoadingProgressThree(data);
  };

  return (
    <div>
      <section
        style={{
          padding: "50px 20px 35px 20px",
          boxShadow:
            "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
        }}
        class="get-in-touch"
      >
        <h1 class="title">Add new Event From Here </h1>
        <form class="contact-form row">
          <div class="form-field col-lg-6">
            <input
              id="name"
              class="input-text js-input"
              type="text"
              value={eventName}
              onChange={(e) => {
                seteventName(e.target.value);
              }}
              required
            />
            <label class="label" for="name">
              Event Title
            </label>
          </div>
          <div class="form-field col-lg-6 ">
            <input
              id="des"
              class="input-text js-input"
              type="text"
              value={eventDescription}
              onChange={(e) => {
                seteventDescription(e.target.value);
              }}
              required
            />
            <label class="label" for="email">
              Description
            </label>
          </div>
          <div class="form-field col-lg-3 ">
            <input
              id="type"
              class="input-text js-input"
              type="text"
              value={eventType}
              onChange={(e) => {
                seteventType(e.target.value);
              }}
              required
            />
            <label class="label" for="company">
              Event Type
            </label>
          </div>
          <div class="form-field col-lg-3 ">
            <input
              id="datefrom"
              class="input-text js-input"
              type="date"
              value={dateFrom}
              onChange={(e) => {
                setdateFrom(e.target.value);
              }}
              required
            />
            <label class="label" for="company">
              From
            </label>
          </div>
          <div class="form-field col-lg-3 ">
            <input
              id="dateTo"
              class="input-text js-input"
              type="date"
              value={dateTo}
              onChange={(e) => {
                setdateTo(e.target.value);
              }}
              required
            />
            <label class="label" for="company">
              To
            </label>
          </div>
          <div class="form-field col-lg-3 ">
            <input
              id="time"
              class="input-text js-input"
              type="time"
              value={Time}
              onChange={(e) => {
                setTime(e.target.value);
              }}
              required
            />
            <label class="label" for="company">
              Time
            </label>
          </div>
          <div class="form-field col-lg-3 ">
            <input
              id="location"
              class="input-text js-input"
              type="text"
              value={Location}
              onChange={(e) => {
                setLocation(e.target.value);
              }}
              required
            />
            <label class="label" for="phone">
              Location
            </label>
          </div>
          <div class="form-field col-lg-3 ">
            <input
              id="performer"
              class="input-text js-input"
              type="text"
              value={Performer}
              onChange={(e) => {
                setPerformer(e.target.value);
              }}
              required
            />
            <label class="label" for="phone">
              Performer / Organizer
            </label>
          </div>
          <div class="form-field col-lg-3 ">
            <input
              id="CPerson"
              class="input-text js-input"
              type="text"
              value={contactPerson}
              onChange={(e) => {
                setcontactPerson(e.target.value);
              }}
              required
            />
            <label class="label" for="phone">
              Contact Person
            </label>
          </div>
          <div class="form-field col-lg-3 ">
            <input
              id="CNum"
              class="input-text js-input"
              type="text"
              value={Contact}
              onChange={(e) => {
                setContact(e.target.value);
              }}
              required
            />
            <label class="label" for="phone">
              Contact Number
            </label>
          </div>
          <div class="form-field col-lg-3">
            <label class="label" for="company">
              Image 1{" "}
            </label>
            <div>
              <DropzoneArea sendData={sendData} sendProgress={sendProgress} />
              {/* {imageOne ? imageOne.substring(0, 30) + "..." : ''} */}

              <div>
                {errFile ? (
                  <sub className="text-danger">Upload Image One</sub>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div className="col-8">
              {!imageOne && state ? <ProgressBar now={loadingProgress} /> : ""}
            </div>
          </div>
          <div class="form-field col-lg-3">
            <label class="label" for="company">
              Image 2{" "}
            </label>
            <div>
              <DropzoneArea
                sendData={sendDataOne}
                sendProgress={sendProgressOne}
              />
              {/* {imageTwo ? imageTwo.substring(0, 30) + "..." : ''} */}

              <div>
                {errFileOne ? (
                  <sub className="text-danger">Upload Image Two</sub>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div className="col-8">
              {!imageTwo && state ? (
                <ProgressBar now={loadingProgressOne} />
              ) : (
                ""
              )}
            </div>
          </div>

          <div class="form-field col-lg-3">
            <label class="label" for="company">
              Image 3
            </label>
            <div>
              <DropzoneArea
                sendData={sendDataTwo}
                sendProgress={sendProgressTwo}
              />
              {/* {imageThree ? imageThree.substring(0, 30) + "..." : ''} */}

              <div>
                {errFileTwo ? (
                  <sub className="text-danger">Upload Image Three</sub>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div className="col-8">
              {!imageThree && state ? (
                <ProgressBar now={loadingProgressTwo} />
              ) : (
                ""
              )}
            </div>
          </div>
          <div class="form-field col-lg-3 ">
            <label class="label" for="company">
              Agenda/Guide
            </label>
            <div style={{ marginLeft: 58 }}>
              <DropzoneArea
                sendData={sendDataThree}
                sendProgress={sendProgressThree}
              />
              {/* {Agenda ? Agenda.substring(0, 30) + "..." : ''} */}

              <div>
                {errFileThree ? (
                  <sub className="text-danger">Upload Agenda or Guide File</sub>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div className="col-8">
              {!Agenda && state ? (
                <ProgressBar now={loadingProgressThree} />
              ) : (
                ""
              )}
            </div>
          </div>

          <div class="form-field col-lg-12">
            <input
              class="submit-btn"
              type="submit"
              value="Add Event"
              onClick={() => onSubmit()}
            />
          </div>
        </form>
      </section>
    </div>
  );
};

export default AddEventForm;
