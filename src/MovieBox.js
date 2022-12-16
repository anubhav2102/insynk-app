import React, { useState } from 'react';
import {Modal} from 'react-bootstrap'
const API_IMG="https://image.tmdb.org/t/p/w500/";

const MovieBox = ({title,poster_path,vote_average,release_date,overview})=>{
    const [show, setShow] = useState(false);
    const handleShow = ()=>setShow(true)
    const handleClose = ()=>setShow(false)

    return (
        <div className='card text-center mb-3'>
            <div className="card-body">
            <h4 style={{borderRadius: "100%", position: "absolute" ,left: "30px", top: "30px", backgroundColor: "white", padding: "4px"}}>{vote_average}</h4>
                <img className='card-img-top' src={API_IMG+poster_path} alt='/' />
                <div className="card-body">
                    <button type="button" style={{border: "none", backgroundColor: "white"}} onClick={handleShow}>{title}</button>
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title></Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                        <h3>{title}</h3>
                        <img className='card-img-top' alt='/' src={API_IMG+poster_path} />
                        <h5>Release Date: {release_date}</h5>
                        <p>{overview}</p>
                        <h4>{vote_average} / 10</h4>
                        </Modal.Body>
                    </Modal>
                </div>
            </div>
        </div>
    )
}

export default MovieBox;
