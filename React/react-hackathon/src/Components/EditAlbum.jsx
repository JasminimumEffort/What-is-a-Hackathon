import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios'


const EditAlbum = ({title, artist, track_total, label, id}) => {
    // const editDeets = async () => {
    //     try {
    //         const res = await axios.patch("http://localhost:1296/updateAlbum/" + id, {
    //             title,
    //             artist,
    //             track_total,
    //             label
    //         })
    //         console.log("Response:", res);
    //     } catch (err) {

    //     }
    // }

    return(
        <div>
            <h1>test Modal</h1>
            <Modal show={this.state.show} handleClose={this.hideModal}>
            <p>this ist the test Modal</p>
            </Modal>
            <button type = 'button' onClick = {this.showModal}> Show Modal </button>
        </div>
    );
}

export default EditAlbum;