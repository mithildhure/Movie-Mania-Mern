import axios from 'axios'
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom';
const ShowMovie = () => {

    const [movie, setMovie] = useState([]);
    const {id} = useParams();
    const navigate = useNavigate();
    useEffect(()=>{
        axios.get(`http://localhost:4000/movie/movie/${id}`).then((res) => {
            setMovie(res.data)
        }).catch((err) => {
            console.log(err);
        });
    },[]);
    const handleDelete = ()=>{
        axios.delete(`http://localhost:4000/movie/delete/${id}`).then(() => {
            navigate(`/`);
        }).catch((err) => {
            console.log(err);
        }); 
    }

  return (
    <>
      <div
        className="container my-3 p-2"
      >
        <div
            className="row justify-content-center align-items-center g-2"
        >
            <div className="col">
                <div className="card">
                    <img className="card-img-top" src={movie.poster} alt="Title" />
                    <div className="card-body">
                        <h4 className="card-title">Title : {movie.title}</h4>
                        <p className="card-text">Rating : {movie.rating}</p>
                        <p className="card-text">Genre : {movie.genre}</p>
                        <p className="card-text">Duration : {movie.duration} Mins</p>
                        <h4 className="card-text">Language : {movie.language}</h4>
                        <NavLink
                            name=""
                            id=""
                            className="btn btn-warning"
                            to={`/edit/${id}`}
                            role="button"
                            >Edit Movie</NavLink> &nbsp;
                        <button
                            type="button"
                            className="btn btn-danger"
                            onClick={handleDelete}
                        >
                            Delete Movie
                        </button> &nbsp;
                        <NavLink
                            name=""
                            id=""
                            className="btn btn-secondary"
                            to="/"
                            role="button"
                            >Back</NavLink>
                                
                    </div>
                </div>
                
            </div>
        </div>
        
      </div>
      
    </>
  )
}

export default ShowMovie
