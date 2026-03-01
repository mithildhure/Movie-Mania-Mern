import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const EditMovie = () => {
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
    const handleSubmit = (e)=>{
        e.preventDefault();
        axios.patch(`http://localhost:4000/movie/update/${id}`,movie).then(() => {
            navigate(`/showMovie/${id}`);
        }).catch((err) => {
            console.log(err);
        });
    }
  return (
    <>
      <div
        className="container my-3 p-3 col-5 bg-light rounded"
      >
        <h3 className='text-center'>Edit Movie</h3>
        <form onSubmit={handleSubmit}>
            
            <div className="form-floating mb-3">
                <input
                    type="text"
                    className="form-control"
                    name="formId1"
                    id="formId1"
                    placeholder=""
                    required
                    value={movie.title}
                    onChange={(e)=>{setMovie({...movie,title : e.target.value})}}
                />
                <label for="formId1">Title</label>
            </div>
            <div className="form-floating mb-3">
                <input
                    type="number"
                    className="form-control"
                    name="formId1"
                    id="formId1"
                    placeholder=""
                    required
                    value={movie.rating}
                    onChange={(e)=>{setMovie({...movie,rating : e.target.value})}}
                />
                <label for="formId1">Rating</label>
            </div>
            <div className="form-floating mb-3">
                <input
                    type="text"
                    className="form-control"
                    name="formId1"
                    id="formId1"
                    placeholder=""
                    required
                    value={movie.genre}
                    onChange={(e)=>{setMovie({...movie,genre : e.target.value})}}
                />
                <label for="formId1">Genre</label>
            </div>
            <div className="form-floating mb-3">
                <input
                    type="number"
                    className="form-control"
                    name="formId1"
                    id="formId1"
                    placeholder=""
                    required
                    value={movie.duration}
                    onChange={(e)=>{setMovie({...movie,duration : e.target.value})}}
                />
                <label for="formId1">Duration</label>
            </div>
            <div className="form-floating mb-3">
                <input
                    type="text"
                    className="form-control"
                    name="formId1"
                    id="formId1"
                    placeholder=""
                    required
                    value={movie.language}
                    onChange={(e)=>{setMovie({...movie,language : e.target.value})}}
                />
                <label for="formId1">Language</label>
            </div>

            <div className="form-floating mb-3">
                <input
                    type="text"
                    className="form-control"
                    name="formId1"
                    id="formId1"
                    placeholder=""
                    required
                    value={movie.poster}
                    onChange={(e)=>{setMovie({...movie,poster : e.target.value})}}
                />
                <label for="formId1">Poster URL</label>
            </div>

            <button
                type="submit"
                className="btn btn-success"
            >
                Submit
            </button>    

        </form>
      </div>
    </>
  )
}

export default EditMovie
