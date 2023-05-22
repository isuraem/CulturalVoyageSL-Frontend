import React, { useState } from 'react';
import { Modal } from "react-bootstrap";
import './addPost.css'
import Swal from 'sweetalert2'
import {addPostService} from "../../services/postService"

export default function AddPost() {

    const [title,setTitle] = useState(null);
    const [message,setMessage] = useState(null);
    const [keyWords,setKeyWords] = useState(null);
    const [image, setImage] = useState(null)
    const user = '6467c45d09e93cb4faa85904';
     //handle and convert it in base 64
     const handleImage = (e) => {
        const file = e.target.files[0];
        setFileToBase(file);
        console.log(file);
    }

    const setFileToBase = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setImage(reader.result);
        }

    }
    const sendData = async (e) => {
        e.preventDefault();
        const newPost = {
            user,
            title,
            message,
            keyWords,
            image,
        }
        let response = await addPostService(newPost);
        if (response.ok) {
            Swal.fire({
              icon: "warning",
              title: "Post Added !",
              showConfirmButton: false,
              timer: 2500,
            });
            window.location.reload();
          }
    }

    return (
        <div>
            <Modal.Header closeButton>
            </Modal.Header>
            <Modal.Body>
                <section class="get-in-touch">
                    <h1 class="title">Write Question</h1>
                    <form onSubmit={sendData} class="contact-form row">
                        <center>
                            <div class="form-field col-lg-12">
                                <input id="name" class="input-text js-input" type="text" required 
                                onChange={(e) => {
                                    setTitle(e.target.value);  //asign values
                                }}
                                />
                                <label class="label" for="name">Title :</label>
                            </div>
                        </center>
                        <center>
                        <div class="form-field col-lg-12">
                            <input id="message" class="input-text1 js-input" type="text" required 
                            onChange={(e) => {
                                setMessage(e.target.value);  //asign values
                            }}
                            />
                            <label class="label1" for="message">Message :</label>
                        </div>
                        </center>
                      
                        <center>
                            <div class="form-field col-lg-12">
                                <input id="name" class="input-text js-input" type="text" required 
                                 onChange={(e) => {
                                    setKeyWords(e.target.value);  //asign values
                                }}
                                />
                                <label class="label" for="name">Keyword :</label>
                            </div>
                        </center>
                        <center>
                            <div class="form-field col-lg-12">
                                <input onChange={handleImage} id="name" class="input-text js-input" type="file" required />
                                <label class="label pr-4" for="name">Additional:</label>
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
