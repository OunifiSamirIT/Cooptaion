import React, { useEffect, useState } from 'react'
import CreateIcon from '@mui/icons-material/Create';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import WorkIcon from '@mui/icons-material/Work';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { NavLink, useParams } from 'react-router-dom';
import axios from 'axios'

const DetailsUs = () => {

    const [getuserdata, setUserdata] = useState([]);
    console.log(getuserdata);

    const { id } = useParams("");
    console.log(id);



    const getdata = async () => {


        const result = await axios.get(`/api/user/users/${id}`);
        setUserdata(result.data.reverse());
        

        const data = await result.json();
        console.log(data);

        if (result.status === 422 || !data) {
            console.log("error ");

        } else {
            setUserdata(data)
            console.log("get data");
        }
    }

    useEffect(() => {
        getdata();
    }, [])

    // const deleteuser = async (id) => {

    //     const res2 = await fetch(`https://crudappreactjs.herokuapp.com/deleteuser/${id}`, {
    //         method: "DELETE",
    //         headers: {
    //             "Content-Type": "application/json"
    //         }
    //     });

    //     const deletedata = await res2.json();
    //     console.log(deletedata);

    //     if (res2.status === 422 || !deletedata) {
    //         console.log("error");
    //     } else {
    //         console.log("user deleted");
    //         history.push("/");
    //     }

    // }

    return (
        <div className="container mt-3">
            <h1 style={{ fontWeight: 400 }}>Welcome </h1>

            <Card sx={{ maxWidth: 600 }}>
                <CardContent>
                    <div className="add_btn">
                        <NavLink to={`/edit/${getuserdata._id}`}>  <button className="btn btn-primary mx-2"><CreateIcon /></button></NavLink>
                        {/* <button className="btn btn-danger" onClick={() => deleteuser(getuserdata._id)}><DeleteOutlineIcon /></button> */}
                    </div>
                    <div className="row">
                        <div className="left_view col-lg-6 col-md-6 col-12">
                            <img src="/profile.png" style={{ width: 50 }} alt="profile" />
                            <h3 className="mt-3">Name: <span >{getuserdata.Firstname}</span></h3>
                            <h3 className="mt-3">Age: <span >{getuserdata.Age}</span></h3>
                            <p className="mt-3"><MailOutlineIcon />Email: <span>{getuserdata.Email}</span></p>
                            <p className="mt-3"><WorkIcon />Occuption: <span>{getuserdata.Lastname}</span></p>
                        </div>
                        <div className="right_view  col-lg-6 col-md-6 col-12">

                            <p className="mt-5"><PhoneAndroidIcon />mobile: <span>+91 {getuserdata.age}</span></p>
                            <p className="mt-3"><LocationOnIcon />location: <span>{getuserdata.age}</span></p>
                            <p className="mt-3">Description: <span>{getuserdata.desc}</span></p>
                        </div>
                    </div>

                </CardContent>
            </Card>
        </div>
    )
}

export default DetailsUs
