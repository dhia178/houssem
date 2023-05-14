
import React, { useEffect, useState } from 'react';
import { Link , useNavigate, useParams} from 'react-router-dom';
import axiosApi from "../../config/axios";
import Navbar from '../../layouts/Navbar/navbar';
export default () => {
    const Swal = require('sweetalert2');
    const {id}=useParams();
    const [data , setData]=useState({});
     const [image , setimage]=useState(null);
     const navigate = useNavigate();
  const onChangeHandelerImage=(e)=>{
    e.preventDefault()
    setimage(e.target.files[0])
    console.log(e.target.files[0], "image");
 }
 const formData=new FormData();
  const UpdateProfile=()=>{
     formData.append("name",data?.name);
     formData.append("username",data?.username);
     formData.append("email",data?.email);
     formData.append("address",data?.address);
     formData.append("phone",data?.phone);
     formData.append("image",image);
     console.log(formData, "formdata profile update");
     Swal.fire({
        title: 'Do you want to save updated data ?',
        showDenyButton: true,
        confirmButtonText: `Save`,
        denyButtonText: `Don't save`,
    }).then((result) => {
       if (result.isConfirmed)
       {axiosApi.patch(`http://localhost:5000/users/etudiant/`+id,formData).then((res)=>{
        setData(res.data.data);
        console.log(res);
            navigate("/")
    }).catch((err)=>{
        console.log(err.response);
    })
    } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })
 }
 useEffect(()=>{
    axiosApi.get(`http://localhost:5000/users/`+id).then((res)=>{
        console.log(res.data.data, "data category");
        setData(res.data.data);
    })
 },[])
    return(
        <>
        <Navbar/>
        <div className="container-xl px-4 mt-4">
</div>
        <div className="row">
  <div className="col-xl-4">
    {/* Profile picture card*/}
    <div className="card mb-4 mb-xl-0">
      <div className="card-header">Profile Picture</div>
      <div className="card-body text-center">
        {/* Profile picture image*/}
        <img className="img-account-profile rounded-circle mb-2" src={"http://localhost:5000/file/users/"+data.image} alt  width="20%" height="20%"/>
        {/* Profile picture help block*/}
        <div className="small font-italic text-muted mb-4">{data?.username}</div>
        {/* Profile picture upload button*/}
        <button className="btn btn-primary" type="button">Upload new image</button>
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
            <input className="form-control"
             type="text"
            placeholder="Enter your username"
            id="username"
                value={data?.username}
                onChange={(e)=>setData({...data,username:e.target.value})}
/>
          </div>
          {/* Form Row*/}
          <div className="row gx-3 mb-3">
            {/* Form Group (first name)*/}
            <div className="col-md-6">
              <label className="small mb-1" >Full name</label>
              <input className="form-control"
               type="text"
               placeholder="Enter your full name"
               id="name"
               value={data.name}
               onChange={(e)=>setData({...data,name:e.target.value})}
                />
            </div>
            {/* Form Group (last name)*/}
            <div className="col-md-6">
              <label className="small mb-1" >Email</label>
              <input
                type="text"
                 className="form-control"
                  id="email"
                  value={data.email}
                 onChange={(e)=>setData({...data,email:e.target.value})}
                 />
              </div>
          </div>
          {/* Form Row        */}
          <div className="row gx-3 mb-3">
            {/* Form Group (organization name)*/}
            <div className="col-md-6">
              <label className="small mb-1" >Phone number</label>
              <input
                type="number"
                className="form-control"
                id='phone'
                value={data.phone}
                onChange={(e)=>setData({...data,phone:e.target.value})}
                 />
              </div>
            {/* Form Group (location)*/}
            <div className="col-md-6">
              <label className="small mb-1" >Address</label>
              <input
                type="text"
                className="form-control"
                id="address"
                onChange={(e)=>setData({...data,address:e.target.value})}
                value={data.address} />
            </div>
          </div>
          {/* Form Group (email address)*/}
          <div className="mb-3">
            <label className="small mb-1">image</label>
            <input type="file"
                className="form-control"
                id="picture"
                onChange={onChangeHandelerImage}
                />          </div>
          {/* Form Row*/}
          {/* <div className="row gx-3 mb-3">
            <div className="col-md-6">
              <label className="small mb-1" htmlFor="inputPhone">Phone number</label>
              <input className="form-control" id="inputPhone" type="tel" placeholder="Enter your phone number" defaultValue="555-123-4567" />
            </div>
            <div className="col-md-6">
              <label className="small mb-1" htmlFor="inputBirthday">Birthday</label>
              <input className="form-control" id="inputBirthday" type="text" name="birthday" placeholder="Enter your birthday" defaultValue="06/10/1988" />
            </div>
          </div> */}
          {/* Save changes button*/}
          <button className="btn btn-primary" type="submit"
            onClick={UpdateProfile}
            >Update</button>
      </div>
    </div>
  </div>
</div>
        </>
    )
}