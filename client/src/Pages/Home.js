import React, { useState } from "react";
import {ButtonGroup} from '@material-ui/core';
import MakeButton from "../Components/MakeButton";

const Home = () => {
    const dept = [{name : "Educational Department",id:"fes"},{name : "sd",id:"fes"},{name : "sd",id:"fes"},{name : "sd",id:"fes"},{name : "sd",id:"fes"},{name : "sd",id:"fes"},{name : "sd",id:"fes"},{name : "sd",id:"fes"},{name : "sd",id:"fes"},{name : "sd",id:"fes"}];
    return (
        <ButtonGroup className="content container-fluid row" variant="contained" color="primary" aria-label="large contained button group" style={{display:"flex",marginTop:"5%",width :"80%",marginLeft:"1%",marginRight:"1%",marginBottom:"5%"}}>
            {/* <Button style={{marginRight:"30px",padding:"20px 50px 20px 50px"}}>Educational Department</Button>
            <Button style={{marginRight:"30px",padding:"20px 50px 20px 50px"}}>Two</Button>
            <Button style={{marginRight:"30px",padding:"20px 50px 20px 50px"}}>Three</Button> */}
                 {dept.map(MakeButton,this)}
        </ButtonGroup>
        );
}

export default Home;
