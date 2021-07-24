import {atom, selector} from "recoil";

export const historyState = atom({
    key: "history",
    default: []
})

export const historyTotal = selector({
    key: "historyTotal",
    get: ({get}) => {
        const history = get(historyState);
        return history.reduce((fulltime, item)=>{
            return fulltime + (item.work.time*item.quanlity)
        },0)
    }
})

export const addHistory = (history, work) => {
    const newHistory = [...history];
    const foundIndex = history.findIndex(x => x.id === work.id);

    if(foundIndex >= 0){
        newHistory[foundIndex] = {
            ...history[foundIndex],
            quanlity: history[foundIndex].quanlity + 1
        }
        return newHistory;
    }else{
        newHistory.push(
            {
                work,
                id: work.id,
                quanlity: 1,
            }
        )
        return newHistory;
    }

}
