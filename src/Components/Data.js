import React from 'react';

const Data = ({ data, setData, setUpdate }) => {
  console.log(data);
  const updateOne = ({ id }) => {
    const find = data.find((data) => data.id === id);
    setUpdate(find);
  }
  console.log(data.length);
  const deleteOne = ({ id }) => {
    console.log("sfvd", data.id);
    setData(data.filter((data) => data.id !== id));
  }
  return (
    <div>
      <div className='data-wrapper'>
        <div className='container'>
          <div className='data-inner'>
            {data.length > 0 ? (
              <table border={1} cellPadding={0} cellSpacing={0}>
                <thead>
                  <th>Id</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                  <th>Gender</th>
                  <th>Hobby</th>
                  <th>Semester</th>
                  <th>Password</th>
                  <th>Confirm Password</th>
                  <th>Update</th>
                  <th>Delete</th>
                </thead>
                <tbody>
                  {data.map((data, index) => (
                    <tr key={data.id}>
                      <td>
                        {index + 1}
                      </td>
                      <td>
                        {data.prdata.firstName}
                      </td>
                      <td>
                        {data.prdata.lastName}
                      </td>
                      <td>
                        {data.prdata.email}
                      </td>
                      <td>
                        {data.prdata.gender}
                      </td>
                      <td>
                        {data.prdata.hobby}
                      </td>
                      <td>
                        {data.prdata.semester}
                      </td>
                      <td>
                        {data.prdata.password}
                      </td>
                      <td>
                        {data.prdata.confirmPassword}
                      </td>
                      <td className='btn'>
                        <button type='button' onClick={() => updateOne(data)}>Update</button>
                      </td>
                      <td className='btn'>
                        <button type='button' onClick={() => deleteOne(data)}>Delete  </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) :
              (
                <p>Not Found</p>
              )
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Data;