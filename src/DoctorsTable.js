import { useState, useEffect } from 'react';
import axios from 'axios';


const DoctorTable = () => {
    const [Doctors, setDoctors] = useState([]);
    const [editRecord, setEditRecord] = useState(null);
    const [form, setForm] = useState({
        id: 0, name: '', specification: '', phone_num: 0,
        location: ''
    });


    //Fetch the data from API.
    useEffect(() => {
        fetchDoctors()
    }, []);




    //Gets the list of trainers from the backend (Express --> Mongoose --> MongoDB)
    const fetchDoctors = async () => {
        try {
            const response = await axios.get("http://localhost:8001/docinfo");
            console.log(response.data);
            setDoctors(response.data);
        } catch (error) {
            console.error("Error fetching trainers..", error);
        }
    }

    //To handle delete operation.
    const handleDelete = async (id) => {
        await axios.delete("http://localhost:8001/deletedoctor/" + id);
        fetchDoctors();
    }
    //Whenever there is a change in the text, form data is updated.
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }


    //Setting the Edit record field..
    const handleEdit = (form) => {
        setForm(form);
        setEditRecord(true);
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        if (editRecord) {
            await axios.put("http://localhost:8001/updatedoctor/"+form.id, form);
        } else {
            await axios.post("http://localhost:8001/adddoctor", form);
        }
        setForm({ id: 0, name: '', specification: '', phone_number: 0, location: '' });
        setEditRecord(false);
        fetchDoctors();
    }




    return (
        <div className='tabledoctor'>
            
            <table border={1} cellPadding={10}>
                <thead>
                    <tr>
                        <th> ID </th>
                        <th> Name </th>
                        <th> specification </th>
                        <th> Phone Number </th>
                        <th> Location </th>
                        <th>Action</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {Doctors.map((doctor) => (
                        <tr key={doctor.id}>
                            <td>{doctor.id}</td>
                            <td>{doctor.name}</td>
                            <td>{doctor.specification}</td>
                            <td>{doctor.phone_num}</td>
                            <td>{doctor.location}</td>
                            <td>
                            <button onClick={() => handleEdit(doctor)}>Edit </button> &nbsp;
                            <button onClick={() => handleDelete(doctor.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <br /><br />
            <h2> Form to update or add record...</h2>
            <form onSubmit={handleSubmit}>


                Id :  <input name='id' value={form.id} onChange={handleChange} placeholder='Enter your ID' /> 
                Name :  <input name='name' value={form.name} onChange={handleChange} placeholder='Enter your name' />
                Technology :  <input name='specification' value={form.specification} onChange={handleChange} placeholder='Enter specification' />
                Phone Number <input name='phone_num' value={form.phone_num} onChange={handleChange}  placeholder='Enter your phone number'/>
                Location :  <input name='location' value={form.location} onChange={handleChange}  placeholder='Enter the location'/> &nbsp;<br />
                <button  id='submitbutton' type='submit'>{editRecord ? 'Update' : 'Add'} Record </button>
            </form>


            </div>
    );
}


export default DoctorTable;



        