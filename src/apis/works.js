import {atom} from "recoil";
import axiosClient from "../common/axiosClient";



export const workListState = atom({
    key: "workList",
    default: [
        {
            id: 1,
            name: "hoc lap trinh",
            time: 30
        },
        {
            id: 2,
            name: "hoc php",
            time: 10
        },
        {
            id: 3,
            name: "hoc react",
            time: 40
        },
        {
            id: 4,
            name: "hoc recoil",
            time: 60
        },
    ]
})
