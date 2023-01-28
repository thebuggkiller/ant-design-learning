import logo from "./logo.svg";
import "./App.css";
import { Button, Input, Select } from "antd";
import { useState } from "react";
import {
  PoweroffOutlined,
  UserOutlined,
  UserAddOutlined,
} from "@ant-design/icons";

function App() {
  const [loading, setLoading] = useState(false);
  const animes = [
    "Attack on Titan",
    "One Puchman",
    "Naruto",
    "One Pice",
    "Chainsaw Man",
  ];

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert("Button is clicked!");
    }, 2000);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          Choose your favourite anime?
        </p>
          <Select style={{width: '150px'}} placeholder="Select anime" mode="multiple" allowClear>
            {animes.map((anime, index) => {
              return <Select.Option key={index}>{anime}</Select.Option>;
            })}
          </Select>
        <Input
          placeholder="Username..."
          maxLength={20}
          prefix={<UserOutlined></UserOutlined>}
          allowClear
        ></Input>
        <Input.Search
          placeholder="Search..."
          maxLength={20}
          prefix={<UserAddOutlined></UserAddOutlined>}
          allowClear
        ></Input.Search>
        <Button
          type="primary"
          onClick={handleClick}
          loading={loading}
          icon={<PoweroffOutlined></PoweroffOutlined>}
        >
          My Button
        </Button>
      </header>
    </div>
  );
}

export default App;
