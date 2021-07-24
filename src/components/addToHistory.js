import React from 'react';
import {Button} from "antd";
function AddToHistory(props) {
    const {work, addWorkHistory} = props
    const addHistory = (work) =>{
        addWorkHistory(work);
    }
    return (
        <Button onClick={() => addHistory(work)} type="primery">Add History</Button>
    );
}

export default AddToHistory;
