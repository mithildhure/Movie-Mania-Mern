import React from 'react'
import { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddMovie = () => {
    const [movie, setMovie] = useState({title :'', rating:'', genre:'', duration:'', language:'', poster:''});
    const navigate = useNavigate();
    const handleSubmit = (e)=>{
        e.preventDefault();
        axios.post('http://localhost:4000/movie/add',movie).then(() => {
            navigate('/');
        }).catch((err) => {
            console.log(err);
        });
    }
  return (
    <>
      <div
        className="container my-3 p-3 col-5 bg-light rounded"
      >
        <h3 className='text-center'>Add Movie</h3>
        <form onSubmit={handleSubmit}>
            
            <div className="form-floating mb-3">
                <input
                    type="text"
                    className="form-control"
                    name="formId1"
                    id="formId1"
                    placeholder=""
                    required
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

export default AddMovie
