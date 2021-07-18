import React, { useState,useEffect} from "react";
import {ButtonGroup} from '@material-ui/core';
import MakeButton from "../Components/MakeButton";
import axios from './../Axios/Axios'

const Home = () => {
    const[Dept,setDept] = useState([]);
    useEffect(() => {
        async function setData() {
			try {
                const response = await axios.get("/home");
                setDept(response.data.data);
                console.log(response.data.data);
            } catch (err) {
                console.log(err);
            }
		}
		setData();
    },[])
    return (
        <ButtonGroup className="content container-fluid row" variant="contained" color="primary" aria-label="large contained button group" style={{display:"flex",marginTop:"5%",width :"80%",marginLeft:"1%",marginRight:"1%",marginBottom:"5%"}}>
            {/* <Button style={{marginRight:"30px",padding:"20px 50px 20px 50px"}}>Educational Department</Button>
            <Button style={{marginRight:"30px",padding:"20px 50px 20px 50px"}}>Two</Button>
            <Button style={{marginRight:"30px",padding:"20px 50px 20px 50px"}}>Three</Button> */}
                 {Dept.map(MakeButton,this)}
        </ButtonGroup>
        );
}

export default Home;
