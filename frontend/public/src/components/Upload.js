import React, { useState } from 'react';
import axios from 'axios';

const Upload = () => {
    const [videoFile, setVideoFile] = useState(null);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleFileChange = (e) => {
        setVideoFile(e.target.files[0]);
    };

    const handleUpload = async () => {
        const formData = new FormData();
        formData.append('video', videoFile);
        formData.append('title', title);
        formData.append('description', description);

        const token = localStorage.getItem('token');
        
        await axios.post('http://localhost:5000/api/videos/upload', formData, {
            headers: { Authorization: token }
        });

        alert('Video uploaded successfully!');
    };

    return (
        <div>
            <input type="text" placeholder="Title" onChange={(e) => setTitle(e.target.value)} />
            <textarea placeholder="Description" onChange={(e) => setDescription(e.target.value)} />
            <input type="file" onChange={handleFileChange} />
            <button onClick={handleUpload}>Upload</button>
        </div>
    );
};

export default Upload;
