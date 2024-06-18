import React, { useState } from 'react';
import Form from './Form';
import Data from './Data';

const Main = () => {
    const [text, setText] = useState({
        firstName: "",
        lastName: "",
        email: "",
        gender: "",
        hobby: [],
        semester: "",
        password: "",
        confirmPassword: ""
    }); 
    const [data, setData] = useState([]);
    const [update, setUpdate] = useState(null);
  return (
    <div>
        <Form text={text} setText={setText} data={data} setData={setData} update={update} setUpdate={setUpdate}/>
        <Data data={data} setData={setData} setUpdate={setUpdate}/>
    </div>
  )
}
export default Main;
