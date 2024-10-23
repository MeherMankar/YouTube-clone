import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
    const [formData, setFormData] = useState({ username: '', email: '', password: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/api/users/register', formData);
            alert('User registered successfully!');
        } catch (error) {
            alert('Error registering user');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
                  <input name="username" onChange={handleChange} placeholder="Username" required />
            <input name="email" onChange={handleChange} placeholder="Email" required />
            <input name="password" type="password" onChange={handleChange} placeholder="Password" required />
            <button type="submit">Register</button>
        </form>
    );
};

export default Register;
