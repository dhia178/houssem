import React, { useState, useEffect } from "react";
 import { Link } from 'react-router-dom';
import Navbar from "../../layouts/Navbar/navbar";
import Header from "../../layouts/Header/header";

export default () => {
    const [auth, setauth] = useState({})
  useEffect(() => {
    setauth(JSON.parse(localStorage.getItem("user")))
  }, [])
    return(
        <>
        <Header/>
        <Navbar/>
        <div className="container">
        <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title bg-white text-center text-primary px-3 mb-5">
              Profile
            </h6>
          </div>
          </div>
            </div>
   <div className="row">
  <div className="col-xl-4">
    <div className="card mb-4 mb-xl-0">
      <div className="card-header">Profile Picture</div>
      <div className="card-body text-center">
        <img className="img-account-profile rounded-circle mb-2" src={"http://localhost:5000/file/users/"+auth?.user?.image} alt  width="20%" height="20%"/>
      </div>
    </div>
  </div>
  <div className="col-xl-8">
    {/* Account details card*/}
    <div className="card mb-4">
      <div className="card-header">Account Details</div>
      <div className="card-body">
          {/* Form Group (username)*/}
          <div className="mb-3">
            <label className="small mb-1" htmlFor="inputUsername">Username</label>
            <p >{auth?.user?.username}</p>
          </div>
          <div className="row gx-3 mb-3">
            {/* Form Group (first name)*/}
            <div className="col-md-6">
              <label className="small mb-1" >Full name</label>
                <p >{auth?.user?.name}</p>
            </div>
            <div className="col-md-6">
              <label className="small mb-1" >Email</label>
                <p  >{auth?.user?.email}</p>
          </div>
          </div>
          <div className="row gx-3 mb-3">
            {/* Form Group (organization name)*/}
            <div className="col-md-6">
              <label className="small mb-1" >Phone number</label>
               <p>{auth?.user?.phone}</p>
              </div>
              <div className="col-md-6">
              <label className="small mb-1" >Address</label>
                <p>{auth?.user?.address}</p>
            </div>
            </div>
            <Link to ={`/updateprofileetudiant/${auth?.user?._id}`}>
            <button className="btn btn-primary" type="button">Edit</button>
            </Link>
          </div>
            </div>
            </div>
          </div>
          </div>
        </>
    )
}