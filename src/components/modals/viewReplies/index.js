import React, { useEffect, useState } from 'react';
import Row from 'react-bootstrap/Row';
import { Modal } from "react-bootstrap";
import {getPostReplyService} from "../../services/replyService"

export default function ViewReplys(props) {
  const { data } = props;
  const [replyData, setreplyData] = useState([]);
  const getData = async () => {

    try {
        const response = await getPostReplyService(data);
        if (response.ok) {
            console.log(response.data)
            setreplyData(response.data);
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }

};
  useEffect(()=>{
    getData()
  },[])
  return (
    <div>
      <Modal.Header closeButton>
        <h3>All Replies</h3>
      </Modal.Header>
      <Modal.Body>
      {replyData.map(reply => (
        <div>
        <Row className='mb-2'>
        <div className='col-1'>
          <img src="images/Ella-Sri-Lanka.jpg" class="rounded" alt="Profile pic" style={{ width: 50, height: 50 }} />
        </div>
        <div className="col-11 d-flex flex-column justify-content-left">
          <p className='d-flex justify-content-left pb-0 mb-0' style={{ marginLeft: 8 }}><strong>Anonymous</strong></p>
          <p className='d-flex justify-content-left pb-0 mb-0' style={{ marginLeft: 8 }}>{reply.message}</p>
        </div>
      </Row>
      <hr />  
      </div>
      ))}
        
      </Modal.Body>
    </div>
  )
}
