import React, { Fragment } from "react";
import Navbar from "./Components/HeaderComponents/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import StudentDetails from "./Components/Posts/StudentDetails";
import Home from "./pages/Home";
import StudentManagement from "./Components/Posts/StudentManagement";
import EditPost from "./Components/Posts/EditPost";
import DeletePost from "./Components/Posts/DeletePost";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <Fragment>
      <section>
        <Router>
          <header>
            <Navbar></Navbar>
          </header>
          <ToastContainer />
          <main>
            <Switch>
              <Route path="/" exact>
                <Home></Home>
              </Route>
              <Route path="/student-post" exact>
                <StudentDetails />
              </Route>
              <Route path="/management-post" exact>
                <StudentManagement />
              </Route>
              <Route path="/edit-post/:id" exact>
                <EditPost />
              </Route>
              <Route path="/delete-post/:id" exact>
                <DeletePost />
              </Route>
            </Switch>
          </main>
        </Router>
      </section>
    </Fragment>
  );
};

export default App;
