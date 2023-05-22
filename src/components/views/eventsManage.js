import React, { useState, useEffect } from "react";
import "./table.css";
import { Container, Button,Modal } from "react-bootstrap";
import { deleteEventsService,getAllEventsService } from "../services/eventService";
import Swal from 'sweetalert2'
import UpdateEventModal from "./updateEventModal";

const EventsManage = () => {
  const [eventsDetails, setEventsDetails] = useState([]);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const[deleteData,setDeleteData] = useState('')
  const [showModal, setShowModal] = useState(false);
  const[updateData,setUpdateData] = useState({})

  const handleShowModal = (data) => {
    setShowModal(true);
    setUpdateData(data);
  };
  
  const handleHideModal = () => {
    setShowModal(false);
    // Clear the updateModalData
  };


  const handleShowDeleteModal = (data) => {
    setShowDeleteModal(true);
    setDeleteData(data);

  };

  const handleHideDeleteModal = () => {
    setShowDeleteModal(false);
  };

  const handleDelete = async () => {
    let deleteDatails={
      _id :deleteData
    }
    let response = await deleteEventsService(deleteDatails);
    if (response.ok) {
      // setEventsDetails(response.data.data);
      handleHideDeleteModal();
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        timer: 2000,
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
          window.location.reload();
        }
      })
      
    }
    console.log(">>>>", response);
    
  };

  const getAllEvents = async () => {
    let response = await getAllEventsService();
    if (response.ok) {
      setEventsDetails(response.data.data);
    }
    console.log(">>>>", response);
  };

  useEffect(() => {
    getAllEvents();
  }, []);

  return (
    <div>
      <Container>
        <h2 style={{ marginTop: "50px" }}>All Events </h2>
        <ul class="responsive-table">
          <li class="table-header">
            <div class="col col-1">Event Name</div>
            <div class="col col-2">Date From</div>
            <div class="col col-3">Date To</div>
            <div class="col col-4">Time</div>
            <div class="col col-5">Location</div>
            <div class="col col-6">Actions</div>
          </li>
          {eventsDetails.map((events) => {
            return (
              <li class="table-row">
                <div class="col col-1" data-label="Job Id">
                  {events.eventName}
                </div>
                <div class="col col-2" data-label="Customer Name">
                  {events.dateFrom}
                </div>
                <div class="col col-3" data-label="Amount">
                  {events.dateTo}
                </div>
                <div class="col col-4" data-label="Payment Status">
                  {events.Time}
                </div>
                <div class="col col-5" data-label="Amount">
                  {events.Location}
                </div>
                <div class="col col-6" data-label="Payment Status">
                  <Button variant="warning"  onClick={()=>handleShowModal(events)}>Update</Button> &nbsp;
                  <Button variant="danger"   onClick={()=>handleShowDeleteModal(events._id)}>Delete</Button>
                </div>
              </li>
            );
          })}

{showDeleteModal && (
        <Modal
          show={showDeleteModal}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          onHide={handleHideDeleteModal}
        >
          <Modal.Header closeButton>
            <Modal.Title>Delete Event </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Are you sure you want to delete this event?</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleHideDeleteModal}>
              Cancel
            </Button>
            <Button variant="danger" onClick={handleDelete} >
              Delete
            </Button>
          </Modal.Footer>
        </Modal>
      )}


{showModal && (
        <Modal
          show={showModal}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          onHide={handleHideModal}
        >
            <Modal.Header closeButton>
                <Modal.Title>Update Event</Modal.Title>
            </Modal.Header>
            <Modal.Body>
        <UpdateEventModal data={updateData}/>
          </Modal.Body>

        </Modal>
           )}


        </ul>
      </Container>
    </div>
  );
};

export default EventsManage;
