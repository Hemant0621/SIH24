"use client";
import { useEffect, useState } from 'react';
import Backend_Url from '@/config';
import axios from 'axios';

export default function JobsList() {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const response = await axios.get(`${Backend_Url}employee/jobs`); 
                console.log(response.data)
                if (!response.data) {
                    setError('Failed to fetch jobs');
                }
                const data = response.data;
                setJobs(data);
            } catch (error) {
                setError("No Jobs Found");
            } finally {
                setLoading(false);
            }
        };

        fetchJobs();
    }, []);

    if (loading) {
        return <div className="text-center p-4">Loading jobs...</div>;
    }

    if (error) {
        return <div className="text-center p-4 text-red-500">Error: {error}</div>;
    }

    return (
        <div className="min-h-screen bg-gray-100 p-8 w-full h-full ">
            <h1 className="text-3xl font-bold text-center mb-8">Job Listings</h1>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {jobs.map((job) => (
                    <div
                        key={job.id}
                        className="bg-white rounded-lg shadow-lg p-6 flex flex-col justify-between hover:shadow-2xl transition-shadow duration-300"
                    >
                        <h2 className="text-xl font-semibold text-blue-600">{job.title}</h2>
                        <p className="text-gray-700 font-bold mt-2">{job.price}</p>
                        <p className="text-gray-600 mt-4">{job.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
