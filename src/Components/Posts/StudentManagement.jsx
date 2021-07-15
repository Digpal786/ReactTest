import axios from "axios";
import React, { useState, useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
const StudentMangement = () => {
  let [posts, setPost] = useState([]);
 

  useEffect(() => {
    axios
      .get("http://localhost:5000/posts")
      .then((posts) => {
        setPost(posts.data);
      
      })
      .catch((err) => console.log(err));
  }, []);
  
  let postData = posts.map((post) => {
    //using key for edit ,update
    return (
      <Fragment key={post.id}>
        <tr>
          <td>{post.id}</td>
          <td>{post.name}</td>
          <td> {post.dateofbirth }</td>
          <td>{post.dateofbirth}</td>

          <td>{post.gender}</td>
         
          <td>
            <div className="btn-group">
              <Link
                to={`/edit-post/${post.id}`}
                className="btn btn-outline-success"
              >
                <i className="far fa-edit"></i> Edit
              </Link>
              <Link
                to={`/delete-post/${post.id}`}
                className="btn btn-outline-danger"
              >
                <i className="fas fa-trash"></i> Delete
              </Link>
            </div>
          </td>
          <td><Link to='/student-post'>Add</Link></td>
        </tr>

      </Fragment>
    );
  });

  return (
    <div className="container my-4">
      <h2 className="h5 font-weight-bold text-uppercase text-success pb-2 my-2">
        Student Management
      </h2>
      <table className="table table-gray table-striped table-hover">
        <thead className="thead-dark">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Date Of Birth</th>
            <th>Age-Years</th>
            <th>Gender</th>
            <th>Action</th>
            <th>Add Post</th>
          </tr>
        </thead>
        <tbody>{postData}</tbody>
      </table>
    </div>
  );
};

export default StudentMangement;