import React from 'react'


const Records  = ({data}) => {
    return (
        <div className="data">
            <table>
                <tr>
                    <th scope='col'>id</th>
                    <th scope='col'>imageurl</th>
                    <th scope='col'>Firstname</th>
                    <th scope='col'>Lastname</th>
                    <th scope='col'>Email</th>
                    <th scope='col'>Contact number</th>
                    <th scope='col'>Age</th>
                    <th scope='col'>dob</th>
                    <th scope='col'>Salary</th>
                    <th scope='col'>address</th>

                 </tr>
             <tbody>    
                {data.map(record => (
                    <tr key = {record.id}>

                        <td>{record.id}</td>
                        <td>{record.imageUrl}</td>
                        <td>{record.firstName}</td>
                        <td>{record.lastName}</td>
                        <td>{record.email}</td>
                        <td>{record.contactNumber}</td>
                        <td>{record.age}</td>
                        <td>{record.dob}</td>
                        <td>{record.salary}</td>
                        <td>{record.address}</td>
                    </tr>
                    
                    ))}
                    </tbody>
                    </table>
                    </div>
    )
}

export default Records;
        
    
