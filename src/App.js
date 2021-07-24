import logo from './logo.svg';
import './App.css';
import {atom, useRecoilState} from "recoil";
import {Button} from "antd";
import Worklist from "./components/worklist";
const textState = atom({
  key: 'product', // unique ID (with respect to other atoms/selectors)
  default: '', // default value (aka initial value)
});
function App() {
  const [text, setText] = useRecoilState(textState);

  const onChange = (event) => {
    setText(event.target.value);
  };

  return (
      <div style={{
          width: "600px",
          margin: "20px auto"
      }}>
        <Worklist />
      </div>
  );
}

export default App;
