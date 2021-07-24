import React from 'react';
import {useRecoilValue} from "recoil";
import {historyState, historyTotal} from "../apis/history";

function ShowHistory(props) {

    const history = useRecoilValue(historyState);
    const fulltime = useRecoilValue(historyTotal);
    return (
        <div>
            {history.map((item,index)=>(
                <li key={index}>
                    {item.work.name} : so lan {item.quanlity}
                </li>
            ))}
            <p>Time: {fulltime}p</p>
        </div>
    );
}

export default ShowHistory;
