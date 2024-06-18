import React, { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
const Form = ({ text, setText, data, setData, update, setUpdate }) => {
    const clear = {
        firstName: "",
        lastName: "",
        email: "",
        gender: "",
        hobby: [],
        semester: "",
        password: "",
        confirmPassword: ""
    };

    const newUpdate = (prdata, id) => {
        const newList = data.map((data) =>
            data.id === id ? { prdata, id } : data
        )
        setData(newList);
        setUpdate("");
        console.log(prdata);
    } 

    useEffect(() => {
        if (update) {
            console.log("update");
            setText(update.prdata);
            console.log(update.prdata) 
        } 
        else {
            setText(clear);
        }
    }, [update, setText]) 

    const inputChange = (e) => {
        if (e.target.name === 'hobby') {
            const store = { ...text };
            if (e.target.checked) {
                store.hobby.push(e.target.value);
            }
            else {
                store.hobby = store.hobby.filter(ex => ex !== e.target.value);
            }
            setText(store);
        } 
        else {
            setText(() => ({
                ...text, [e.target.name]: e.target.value
            })) 
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!update) {
            if (text.password === text.confirmPassword) {
                setData([...data, { id: uuidv4(), prdata: text }]);
                setText(clear);
            } 
            else {
                console.log("Password are not match");
            }
        }
        else {
            newUpdate(text, update.id);
        }
    }

    return (
        <div>
            <div className='input-wrapper'>
                <div className='container'>
                    <div className='input-inner'>
                        <h2>Input Here</h2>
                        <form onSubmit={handleSubmit}>
                            <div className='main-feild-outer'>
                                <div className='input-area'>
                                    <label htmlFor='firstName'>First Name</label>
                                    <input type='text' name='firstName' placeholder='Enter First Name' value={text.firstName} onChange={inputChange} required />
                                </div>
                                <div className='input-area'>
                                    <label htmlFor='lastName'>Last Name</label>
                                    <input type='text' name='lastName' placeholder='Enter Last Name' value={text.lastName} onChange={inputChange} />
                                </div>
                                <div className='input-area'>
                                    <label htmlFor='email'>Email</label>
                                    <input type='email' name='email' placeholder='Enter Email Address' value={text.email} onChange={inputChange} />
                                </div>
                                <div className='input-area'>
                                    <label htmlFor='gender'>Gender</label>
                                    <div className='gender-block'>
                                        <div className='gender'>
                                            <label htmlFor="female">Female</label>
                                            <input type="radio" name="gender" value="female" onChange={inputChange} checked={text.gender === 'female'} />
                                        </div>
                                        <div className='gender'>
                                            <label htmlFor="male">Male</label>
                                            <input type="radio" name="gender" value="male" onChange={inputChange} checked={text.gender === 'male'} />
                                        </div>
                                    </div>
                                </div>
                                <div className='input-area'>
                                    <label htmlFor='hobby'>Hobby</label>
                                    <div className='hobby-block'>
                                        <div className='hobby'>
                                            <input type='checkbox' name='hobby' value='learning' onChange={inputChange} checked={text.hobby.includes("learning")} />
                                            <label htmlFor='learning'>Learning</label>
                                        </div>
                                        <div className='hobby'>
                                            <input type='checkbox' name='hobby' value='coding' onChange={inputChange} checked={text.hobby.includes("coding")} />
                                            <label htmlFor='coding'>Coding</label>
                                        </div>
                                        <div className='hobby'>
                                            <input type='checkbox' name='hobby' value='running' onChange={inputChange} checked={text.hobby.includes("running")} />
                                            <label htmlFor='running'>Running</label>
                                        </div>
                                    </div>
                                </div>
                                <div className='input-area'>
                                    <select name="semester" onChange={inputChange} value={text.semester}>
                                        <option value="semester">Select Semester</option>
                                        <option value="semester1">Semester 1</option>
                                        <option value="semester2">Semester 2</option>
                                        <option value="semester3">Semester 3</option>
                                        <option value="semester4">Semester 4</option>
                                        <option value="semester5">Semester 5</option>
                                        <option value="semester6">Semester 6</option>
                                    </select>
                                </div>
                                <div className='input-area'>
                                    <label htmlFor='password'>Password</label>
                                    <input type='password' name='password' value={text.password} onChange={inputChange} />
                                </div>
                                <div className='input-area'>
                                    <label htmlFor='confirmPassword'>Confirm Password</label>
                                    <input type='password' name='confirmPassword' value={text.confirmPassword} onChange={inputChange} />
                                </div>
                                <div className='input-area'>
                                    <button type='submit' name='submit' value='submit'>{update ? "Update" : "Submit"}</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Form;
