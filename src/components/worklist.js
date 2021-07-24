import React from 'react';
import {useRecoilState, useRecoilValue} from "recoil";
import {workListState} from "../apis/works";
import Work from "./work";
import AddToHistory from "./addToHistory";
import {addHistory, historyState} from "../apis/history";
import ShowHistory from "./showHistory";


function Worklist(props) {
    const workList = useRecoilValue(workListState);
    const [history, setHistory] = useRecoilState(historyState);

    const addWorkHistory = (work) =>{
        const newHistory = addHistory(history,work);
        setHistory(newHistory);
    }
    return (
        <div style={{width: "400px",margin: "40px auto"}}>
            <h2>WorkList</h2>
            <ul>
                {workList.map(work=>(
                    <div key={work.id} style={{display: "flex",alignItems: "center", justifyContent: "space-around"}}>
                        <Work work={work}  />
                        <AddToHistory work={work} addWorkHistory={()=>addWorkHistory(work)} />
                    </div>
                ))}
            </ul>
            <ShowHistory />
        </div>
    );
}

export default Worklist;
