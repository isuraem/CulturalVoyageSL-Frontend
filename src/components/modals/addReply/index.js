import React, {useState} from 'react'
import { Modal } from "react-bootstrap";
import './addReply.css'
import Swal from 'sweetalert2'
import { addReplyService } from "../../services/replyService"

export default function AddReply(props) {
    const { data } = props;
    // const [title,setTitle] = useState(null);
    const [message,setMessage] = useState(null);
    const [user,setUser] = useState(data.user);
    const [post, setPost] = useState(data._id)
    const sendData = async (e) => {
        e.preventDefault();
        const newReply = {
            user,
            post,
            message,
        }
        let response = await addReplyService(newReply);
        if (response.ok) {
            Swal.fire({
              icon: "warning",
              title: "Reply Added !",
              showConfirmButton: false,
              timer: 2500,
            });
            window.location.reload();
          }
    }
    console.log("addReply",data)
  return (
    <div>
            <Modal.Header closeButton>
            </Modal.Header>
            <Modal.Body>
                <section class="get-in-touch">
                    <h1 class="title">Write Reply</h1>
                    <form onSubmit={sendData} class="contact-form row">
                        <center>
                            <div class="form-field col-lg-12">
                                <input id="name" class="input-text js-input" type="text" required
                                 onChange={(e) => {
                                    setMessage(e.target.value);  //asign values
                                }}
                                />
                                <label class="label" for="name">Reply:</label>
                            </div>
                        </center>
                        <div class="form-field col-lg-12 ">
                            <div className='row d-flex justify-content-end mr-5'>
                            <input class="submit-btn" type="submit" value="Submit" />
                            </div>
                            
                        </div>
                    </form>
                </section>
            </Modal.Body>
        </div>
  )
}
