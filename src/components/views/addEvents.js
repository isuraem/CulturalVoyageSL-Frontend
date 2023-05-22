import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { ProgressBar } from 'react-bootstrap';
import DropzoneArea from '../../dropZoneComponents/dropZone';
import { addEventsService } from '../services/eventService';

const AddEvents = () => {
    const [eventName,seteventName] = useState('');
    const [eventDescription,seteventDescription] =useState('');
    const [eventType,seteventType] = useState('');
    const [dateFrom,setdateFrom] = useState('');
    const [dateTo,setdateTo] = useState('');
    const [Time,setTime] = useState('');
    const [Location,setLocation] = useState('');
    const [Performer,setPerformer] = useState('');
    const [contactPerson,setcontactPerson] = useState('');
    const [Contact,setContact] = useState('');
    const [imageOne,setimageOne] = useState('');
    const [imageTwo,setimageTwo] = useState('');
    const [imageThree,setimageThree] = useState('');
    const [Agenda,setAgenda] = useState('');

    const [errFile, setErrFile] = useState(true);
    const [errType, setErrType] = useState(true);
    const [loadingProgress, setLoadingProgress] = useState(10)
    const [state, setState] = useState(false)

    const [errFileOne, setErrFileOne] = useState(true);
    const [errTypeOne, setErrTypeOne] = useState(true);
    const [loadingProgressOne, setLoadingProgressOne] = useState(10)
    const [stateOne, setStateOne] = useState(false)

    const [errFileTwo, setErrFileTwo] = useState(true);
    const [errTypeTwo, setErrTypeTwo] = useState(true);
    const [loadingProgressTwo, setLoadingProgressTwo] = useState(10)
    const [stateTwo, setStateTwo] = useState(false)

    const [errFileThree, setErrFileThree] = useState(true);
    const [errTypeThree, setErrTypeThree] = useState(true);
    const [loadingProgressThree, setLoadingProgressThree] = useState(10)
    const [stateThree, setStateThree] = useState(false)

   
    const onSubmit =async () =>{
        let event = {
            eventName:eventName, 
            eventDescription:eventDescription, 
            eventType:eventType,
            dateFrom:dateFrom,
            dateTo:dateTo, 
            Time:Time, 
            Location:Location, 
            Performer:Performer, 
            contactPerson:contactPerson, 
            Contact:Contact,
            imageOne:imageOne,
            imageTwo:imageTwo,
            imageThree:imageThree,
            Agenda:Agenda
        }
        console.log("event",event);
        let response = await addEventsService(event)
        console.log("responseEvents>>>",response);
        if(response){
         window.alert("Successfully Added..")
        }
    }

    const sendData = (data) => {
        console.log("data1",data);
        setErrFile(false)
        setimageOne(data)
    }
    
    const sendDataOne = (data) => {
        console.log("data2",data);
        setErrFileOne(false)
        setimageTwo(data)
    }

    
    const sendDataTwo = (data) => {
        console.log("data3",data);
        setErrFileTwo(false)
        setimageThree(data)
    }

    
    const sendDataThree = (data) => {
        console.log("data4",data);
        setErrFileThree(false)
        setAgenda(data)
    }

    const sendProgress = (data) => {
        console.log("DATAAAA1", data)
        setState(true)
        setLoadingProgress(data)
    }

    const sendProgressOne = (data) => {
        console.log("DATAAAA2", data)
        setStateOne(true)
        setLoadingProgressOne(data)
    }

    const sendProgressTwo = (data) => {
        console.log("DATAAAA3", data)
        setStateTwo(true)
        setLoadingProgressTwo(data)
    }

    const sendProgressThree = (data) => {
        console.log("DATAAAA4", data)
        setStateThree(true)
        setLoadingProgressThree(data)
    }

  
  return (
    <div>
        <Container >
           <Row>
        <Col>
        <img src="images/Dash.jpg" 
        style={{width: '100%',marginRight:'10px'}}
         alt="events" />
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
      
        <Container
       >
        <Card  style={{ 
          marginTop:'80px',
          marginLeft:'150px',
          marginRight:'150px',
          marginBottom:'20px',
          padding:'80px',
          border: '2px solid lightGreen' ,
          backgroundColor:'ghostwhite'
        }}>
         <Form  >
         <h4> Add New Event </h4> 
       <br></br>
      <Form.Group className="mb-3" controlId="formBasicEmail" value={eventName} onChange={(e)=>{seteventName(e.target.value)}}>
        <Form.Label>Event Title</Form.Label>
        <Form.Control type="text" placeholder="Enter event title" />
      </Form.Group>
    
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" value={eventDescription} onChange={(e)=>{seteventDescription(e.target.value)}}>
        <Form.Label>Description</Form.Label>
        <Form.Control as="textarea" rows={3} placeholder="Enter description with max 100 words"/>
      </Form.Group>

      <Row style={{display:'flex',flexDirection:'row',alignItems:'flex-start'}}>
        <Col>
      <Form.Group className="mb-3" controlId="formBasicEmail"value={eventType} onChange={(e)=>{seteventType(e.target.value)}}>
        <Form.Label>Event Type</Form.Label>
        <Form.Control type="text" placeholder="Enter event type" />
      </Form.Group>
      </Col>
      <Col>
      <Form.Group className="mb-3" controlId="formBasicEmail" value={dateFrom} onChange={(e)=>{setdateFrom(e.target.value)}}>
        <Form.Label>DateFrom</Form.Label>
        <Form.Control type="date" />
      </Form.Group>
      </Col>
      <Col>
      <Form.Group className="mb-3" controlId="formBasicEmail" value={dateTo} onChange={(e)=>{setdateTo(e.target.value)}}>
        <Form.Label>DateTo</Form.Label>
        <Form.Control type="date"  />
      </Form.Group>
      </Col>
      <Col>
      <Form.Group className="mb-3" controlId="formBasicEmail" value={Time} onChange={(e)=>{setTime(e.target.value)}}>
        <Form.Label>Time</Form.Label>
        <Form.Control type="time" />
      </Form.Group>
      </Col>
      </Row>
        <Row>
          <Col>
      <Form.Group className="mb-3" controlId="formBasicEmail" value={Location} onChange={(e)=>{setLocation(e.target.value)}}>
        <Form.Label>Location</Form.Label>
        <Form.Control type="text" placeholder="Enter location" />
      </Form.Group>
      </Col>
      <Col>
      <Form.Group className="mb-3" controlId="formBasicEmail" value={Performer} onChange={(e)=>{setPerformer(e.target.value)}}>
        <Form.Label>Performer / Organizer</Form.Label>
        <Form.Control type="text" placeholder="performer/organizer" />
      </Form.Group>
      </Col>
      <Col>
      <Form.Group className="mb-3" controlId="formBasicEmail" value={contactPerson} onChange={(e)=>{setcontactPerson(e.target.value)}}>
        <Form.Label>Contact Person</Form.Label>
        <Form.Control type="text" placeholder="Enter contact person" />
      </Form.Group>
      </Col>
      <Col>
      <Form.Group className="mb-3" controlId="formBasicEmail" value={Contact} onChange={(e)=>{setContact(e.target.value)}}>
        <Form.Label>Contact Number</Form.Label>
        <Form.Control type="text" placeholder="078#######" />
      </Form.Group>
      </Col>
      </Row>
        <Row>
          <Col>
      <Form.Group className="mb-3" controlId="formBasicEmail"> 
        <Form.Label>Image One</Form.Label>
        <div className='col-4'>
        <DropzoneArea sendData={sendData} sendProgress={sendProgress}/>
        {/* {imageOne ? imageOne.substring(0, 30) + "..." : ''} */}
       
        <div>
        {errFile ? <sub className='text-danger'>Must upload a file</sub> : ""}
        </div>
        </div>
        <div className='col-8'>
        {!imageOne && state ? <ProgressBar now={loadingProgress} /> : ""}
        </div>
      </Form.Group>
      </Col>
      <Col>
      <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Image Two</Form.Label>
        <div className='col-4'>
        <DropzoneArea sendData={sendDataOne} sendProgress={sendProgressOne}/>
        {/* {imageTwo ? imageTwo.substring(0, 30) + "..." : ''} */}
       
       <div>
       {errFileOne? <sub className='text-danger'>Must upload a file</sub> : ""}
       </div>
       </div>
       <div className='col-8'>
       {!imageTwo && state ? <ProgressBar now={loadingProgressOne} /> : ""}
       </div>
      </Form.Group>
      </Col>
      <Col>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Image Three</Form.Label>
        <div className='col-4'>
        <DropzoneArea sendData={sendDataTwo} sendProgress={sendProgressTwo}/>
        {/* {imageThree ? imageThree.substring(0, 30) + "..." : ''} */}
       
       <div>
       {errFileTwo? <sub className='text-danger'>Must upload a file</sub> : ""}
       </div>
       </div>
       <div className='col-8'>
       {!imageThree && state ? <ProgressBar now={loadingProgressTwo} /> : ""}
       </div>
      </Form.Group>
      </Col>
      <Col>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Agenda / Guide PDF</Form.Label>
        <div className='col-4'>
        <DropzoneArea sendData={sendDataThree} sendProgress={sendProgressThree}/>
         {/* {Agenda ? Agenda.substring(0, 30) + "..." : ''} */}
       
       <div>
       {errFileThree? <sub className='text-danger'>Must upload a file</sub> : ""}
       </div>
       </div>
       <div className='col-8'>
       {!Agenda && state ? <ProgressBar now={loadingProgressThree} /> : ""}
       </div>
        </Form.Group>
        </Col>
        </Row>
    
    </Form>
    <br></br>
    <Button  variant="success" type="submit" onClick={()=>onSubmit()}>
        Add Event
      </Button>
      </Card>
      </Container>
    </Container>

    </div>
  )
}

export default AddEvents