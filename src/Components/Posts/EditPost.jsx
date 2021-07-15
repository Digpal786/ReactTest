import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { withRouter } from "react-router-dom";
import { Fragment } from "react";
import { useParams } from "react-router-dom";

const EditPost = ({ history }) => {
  let { id } = useParams();
  let [post, setPost] = useState({
    name: "",
    dateofbirth: "",
    gender: "",
    loading: false,
  });

  useEffect(() => {
    axios
      .get(`http://localhost:5000/posts/${id}`)
      .then((result) => {
        setPost({
          id: result.data.id,
          name: result.data.name,
          dateofbirth: result.data.dateofbirth,
          gender: result.data.gender,
        });
      })
      .catch((err) => console.log(err));
  }, [id]);

  let handleChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:5000/posts/${id}`, post)
      .then((result) => {
        toast.info("Post Updated");
        history.push("/management-post");
      })
      .catch((err) => console.log(err));
  };

  let { name, dateofbirth, gender, loading } = post;

  return (
    <Fragment>
      <section id="PostsBlock" className="col-md-4 card my-4 mx-auto">
        <article className="card-body">
          <h2 className="display-5 font-weight-bold text-dark text-center text-uppercase">
            Update details
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                id="name"
                value={name}
                onChange={handleChange}
                placeholder="enter name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="dateofbirth">DOB</label>
              <input
                type="date"
                className="form-control"
                name="dateofbirth"
                id="dateofbirth"
                value={dateofbirth || ""}
                onChange={handleChange}
              />
            </div>
           <div className="form-group" name="gender" onChange={handleChange}>
            <label htmlFor="details">gender</label> <br/>
            <input type="radio" name="gender" value="male" />Male <br />
            <input type="radio" name="gender" value="female" />Female
          </div>
            
            <div className="form-group">
              <button className="btn btn-success btn-block my-2">
                {loading ? "loading..." : "Update "}
              </button>
            </div>
          </form>
        </article>
      </section>
    </Fragment>
  );
};

export default withRouter(EditPost);