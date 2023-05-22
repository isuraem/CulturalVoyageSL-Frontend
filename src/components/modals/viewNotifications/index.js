import React from 'react';
import Row from 'react-bootstrap/Row';
import { Modal } from "react-bootstrap";

export default function ViewNotifications() {
  return (
    <div>
      <Modal.Header closeButton>
        <h5>Notifications</h5>
      </Modal.Header>
      <Modal.Body>
        <Row className='mb-2'>
          <div className="col-11 d-flex flex-column justify-content-left">
            <p className='d-flex justify-content-left pb-0 mb-0' style={{ marginLeft: 8 }}><strong>Anonymous</strong></p>
            <p className='d-flex justify-content-left pb-0 mb-0' style={{ marginLeft: 8 }}>Add new reply , 2023/7/2</p>
          </div>
        </Row>
        <hr />
        <Row className='mb-2'>
          <div className="col-11 d-flex flex-column justify-content-left">
            <p className='d-flex justify-content-left pb-0 mb-0' style={{ marginLeft: 8 }}><strong>Isura</strong></p>
            <p className='d-flex justify-content-left pb-0 mb-0' style={{ marginLeft: 8 }}>Add new reply , 2023/7/5</p>
          </div>
        </Row>
        <hr />
      </Modal.Body>
    </div>
  )
}
