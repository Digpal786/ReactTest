import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { withRouter } from "react-router-dom";

const DeletePost = ({ history }) => {
  let { id } = useParams();
  let [post, setPost] = useState();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/posts/${id}`, post)
      .then((result) => {
        setPost(result.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  let RemovePost = (e) => {
    axios
      .delete(`http://localhost:5000/posts/${id}`)
      .then((_) => {
        toast.dark("Post Deleted Successfully");
        history.push("/management-post");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container my-4 ">
      {post === undefined ? (
        "no title"
      ) : (
        <Fragment>
          <h1 className="h4 font-weight-bold text-text-uppercase my-2">
            {post.name}
          </h1>

          <Link to="/management-post" className="btn btn-primary">
            Go Back
          </Link>
          <button className="btn btn-danger  float-right" onClick={RemovePost}>
           Delete 
          </button>
        </Fragment>
      )}
    </div>
  );
};

export default withRouter(DeletePost);