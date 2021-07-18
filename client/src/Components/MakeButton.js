import React, { useState } from "react";
import {Button} from '@material-ui/core';

const MakeButton = (data) => {
    return (
        // <div style={{width:"100%"}}>
            <Button style={{marginRight:"30px",padding:"20px 50px 20px 50px",width:"100%",marginBottom:"1%"}} key={data.id}>
                {data.name}
            </Button>
        // </div>
    );
};

export default MakeButton;
