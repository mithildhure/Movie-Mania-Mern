import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import axios from 'axios';
import { NavLink } from 'react-router-dom';

const Home = () => {
    const [movies, setMovies] = useState([]);
    useEffect(()=>{
        axios.get('http://localhost:4000/movie/').then((res) => {
            setMovies(res.data)
        }).catch((err) => {
            console.log(err);
        });
    },[]);
  return (
    <>
      <div
        className="container my-3 p-2"
      >
        <div
            className="row justify-content-center align-items-center g-2"
        >
            
            {
                movies.map((m)=>(
                    <div className="col">
                <div className="card">
                    <img className="card-img-top" src={m.poster} style={{height:300, width:555, objectFit: 'cover' }} alt="Title" />
                    <div className="card-body">
                        <h4 className="card-title">Title : {m.title}</h4>
                        <p className="card-text">Rating : {m.rating}</p>
                        <p className="card-text">Genre : {m.genre}</p>
                        <p className="card-text">Duration : {m.duration} Mins</p>
                        <h4 className="card-text">Language : {m.language}</h4>
                        <NavLink
                            name=""
                            id=""
                            className="btn btn-info"
                            to={`/showMovie/${m._id}`}
                            role="button"
                            >Show More</NavLink>
                        
                    </div>
                </div>
            </div>
                ))
            }

        </div>
        
      </div>
      
    </>
  )
}

export default Home
