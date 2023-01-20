import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';

const CreateDriver = ({ onAddDriver }) => {

    const navigate = useNavigate();

    //define state for errors in signing up
    const [error, setError] = useState([]);

    const [formData, setFormData] = useState({
        name: "",
        address: "",
        idNumber: "",
        mobileNumber: "",
        password: "",
        cnfpassword: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    function handleSubmit(e) {
        e.preventDefault()

        const newUser = {
            ...formData
        }

        console.log(JSON.stringify(newUser));

        fetch('/drivers', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify({
                name: newUser.name,
                address: newUser.address,
                id_number: newUser.idNumber,
                phone_number: newUser.mobileNumber,
                password: newUser.password,
                password_confirmation: newUser.cnfpassword
            }),
        })
            //handle errors
            .then((res) => {
                if (res.ok) {
                    res.json().then((data) => {
                        onAddDriver(data)
                    })
                    alert("Signup Successful!")
                    return navigate('/admin')
                } else {
                    res.json().then(err => {
                        console.log(err.errors)
                        setError(err.errors)
                    })
                }
            })
        // .then((data) => {
        setFormData({
            name: "",
            address: "",
            idNumber: "",
            mobileNumber: "",
            password: "",
            cnfpassword: "",
        });
        //   onAddUser(data)
        // })

        //navigate('/login')
    }

    return (
        <div className="auth-form-container">
            <div className="SignUpController">
                <form className="register-form">
                    <h1>Create Account</h1>
                    <label htmlFor="name">Full name</label>
                    <input
                        value={formData.name}
                        onChange={handleChange}
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Enter Full name"
                    />
                    <label htmlFor="name">Address</label>
                    <input
                        value={formData.address}
                        onChange={handleChange}
                        type="text"
                        name="address"
                        id="address"
                        placeholder="Enter address location"
                    />
                    <label htmlFor="name">ID Number</label>
                    <input
                        value={formData.idNumber}
                        onChange={handleChange}
                        type="number"
                        name="idNumber"
                        id="idNumber"
                        placeholder="Enter ID Number"
                    />
                    <label htmlFor="name">Mobile Number</label>
                    <input
                        value={formData.mobileNumber}
                        onChange={handleChange}
                        type="mobile"
                        name="mobileNumber"
                        id="mobileNumber"
                        placeholder="Enter Mobile Number"
                    />
                    <label htmlFor="name">Password</label>
                    <input
                        value={formData.password}
                        onChange={handleChange}
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Enter Password"
                    />
                    <label htmlFor="name">Confirm Password</label>
                    <input
                        value={formData.cnfpassword}
                        onChange={handleChange}
                        type="password"
                        name="cnfpassword"
                        id="cnfpassword"
                        placeholder="Confirm Password"
                    />

                    {/* render error(s) */}
                    {error.map((e) => (
                        <h5 key={e} style={{ color: 'red' }}>
                            {e}!
                        </h5>
                    ))}

                    <button
                        onClick={handleSubmit}
                        type="submit">Sign Up</button>
                </form>


            </div>
            
        </div>
    )
}

export default CreateDriver