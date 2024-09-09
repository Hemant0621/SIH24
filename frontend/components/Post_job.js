"use client";
import { useState } from 'react';
import Backend_Url from '@/config';
import axios from 'axios';
import { number } from 'zod';

export default function PostJob() {

    const [formData, setFormData] = useState({
        title: '',
        price: '',
        description: ''
    });
    const [message, setMessage] = useState(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData)
        try {
            const response = await axios.post(`${Backend_Url}employee/post_job`, {
                title : formData.title,
                price : formData.price,
                description : formData.description
            });

            const result = response.data;

            if (response.data.Job_list) {
                setMessage({ type: 'success', text: 'Job posted successfully!' });
                setFormData({
                    title: '',
                    price: '',
                    description: ''
                });
            } else {
                setMessage({ type: 'error', text: result.message || 'Failed to post job' });
            }
        } catch (error) {
            setMessage({ type: 'error', text: 'An error occurred while posting the job.' });
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6 w-full h-full    ">
            <h1 className="text-3xl font-bold mb-6">Post a Job</h1>

            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg">
                {message && (
                    <div className={`mb-4 p-4 rounded-lg text-white ${message.type === 'success' ? 'bg-green-500' : 'bg-red-500'}`}>
                        {message.text}
                    </div>
                )}

                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="title">
                        Job Title
                    </label>
                    <input
                        type="text"
                        name="title"
                        id="title"
                        value={formData.title}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="price">
                        Price
                    </label>
                    <input
                        type="text"
                        name="price"
                        id="price"
                        value={formData.price}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="description">
                        Job Description
                    </label>
                    <textarea
                        name="description"
                        id="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        rows="4"
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition duration-300"
                >
                    Post Job
                </button>
            </form>
        </div>
    );
}
