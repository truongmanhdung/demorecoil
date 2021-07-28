import React, {useRef, memo} from 'react';
import Draggable from "react-draggable";
import {atom, selector,useRecoilState,useRecoilValue} from "recoil";
import {Button} from "antd";
import mem from "mem";
import "./style.css";
const boxIdState = atom({
    key: "boxIdState",
    default: [],
})
const getBoxState = mem((id) => atom({
    key: `boxState${id}`,
    default: {
        x:random(0,window.innerWidth-100),
        y:random(1,window.innerHeight-100)
    }
}))

const random = (min, max) => {
    return (Math.floor(Math.random()*(max-min+1))+min)
}
function Box(props) {
    return (
        <div className="">
            <Create />
            <Boxes />
            <BigNumber />
            <BoundingBox />
        </div>
    );
}
const boundingState = selector({
    key: 'boundingState',
    get: ({get}) => {
        const boxId = get(boxIdState);
        const boxes = boxId.map((id)=>get(getBoxState(id)));

        const bounding = boxes.reduce((acc, box) => {
                if(acc.minX === null || box.x < acc.minX)
                    acc.minX = box.x
                if(acc.minY === null || box.y < acc.minY)
                    acc.minY = box.y
                if(acc.maxX === null || box.x > acc.maxX)
                    acc.maxX = box.x
                if(acc.maxY === null || box.y > acc.maxY)
                    acc.maxY = box.y
                return acc;
            },
            {
                minX: null,
                minY: null,
                maxX: null,
                maxY: null
            }
        )
        console.log(bounding)
        return bounding;
    }
})

function BoundingBox(){
    const bounding = useRecoilValue(boundingState);
    if(bounding.minX === null){
        return null
    }

    return <div className="bounding-box" style={
        {top: bounding.minY+32,left: bounding.minX,width: bounding.maxX-bounding.minX +100, height: bounding.maxY-bounding.minY+100 }
    }>
    </div>
}
const totalState = selector({
    key: "totalState",
    get: ({get}) => {
        const boxId = get(boxIdState);
        return boxId.length;
    }
})
function BigNumber(){
    const total = useRecoilValue(totalState);
    return <div className="big-number">{total}</div>
}

function Boxes(){
    const boxId = useRecoilValue(boxIdState);
    return <>
        {boxId.map((id)=>(
            <DrawBox key={id} id={id} />
        ))}
    </>
}

const DrawBox = memo(({id}) => {
    const [box, setBox] = useRecoilState(getBoxState(id))
    const ref = useRef();
    console.log(box)
    return <Draggable nodeRef={ref} position={{x:box.x, y: box.y}} onDrag={(event, data)=>{
        setBox({
            ...box, x: data.x, y: data.y
        })
    }}>
        <div ref={ref} className="box" >
            Box
        </div>
    </Draggable>
});

function Create(){
    const [boxId, setBoxId] = useRecoilState(boxIdState);

    return <Button type="primary" onClick={()=>{
        const id = new Date().toISOString()
        setBoxId([...boxId, id]);
    }}>Add Box</Button>
}

export default Box;
