import React from 'react';

const Navbar = () => {
    return (
        <nav className="bg-white border-b border-gray-200 p-4">
            <div className=" mx-auto flex justify-between items-center">
                {/* Logo */}
                <div className="flex items-center ml-20 md:ml-2">
                    <img
                        src="/path-to-your-logo.png" // Replace with your logo path
                        alt="LearnIt"
                        className="h-8 mr-2"
                    />
                    <span className="text-xl font-bold">LearnIt</span>
                </div>

                {/* Navigation Links */}
                <div className="hidden md:flex space-x-6 items-center">
                    <div className="hover:text-gray-700 flex items-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="w-5 h-5 mr-1"
                        >
                            <rect width="8" height="8" x="3" y="3" rx="1" />
                            <rect width="8" height="8" x="13" y="3" rx="1" />
                            <rect width="8" height="8" x="3" y="13" rx="1" />
                            <rect width="8" height="8" x="13" y="13" rx="1" />
                        </svg>

                        Categories
                    </div>
                    <div className="relative group ">
                        <div className='flex items-center cursor-pointer'>
                            <a href="#" className="hover:text-gray-700">Home</a>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                className="w-5 h-5 mr-1"
                            >
                                <path d="M5 9l7 7 7-7" />
                            </svg>
                        </div>
                        <div className="absolute hidden group-hover:block bg-white shadow-lg p-2 w-32 rounded-lg">
                            <a href="#" className="block py-2 px-2 rounded-lg hover:bg-gray-100">Sub-item 1</a>
                            <a href="#" className="block py-2 px-2 rounded-lg hover:bg-gray-100">Sub-item 2</a>
                        </div>
                    </div>
                    <div className="relative group ">
                        <div className='flex items-center cursor-pointer'>
                            <a href="#" className="hover:text-gray-700">Browse Jobs</a>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                className="w-5 h-5 mr-1"
                            >
                                <path d="M5 9l7 7 7-7" />
                            </svg>
                        </div>
                        <div className="absolute hidden group-hover:block bg-white shadow-lg p-2 w-32 rounded-lg">
                            <a href="#" className="block py-2 px-2 rounded-lg hover:bg-gray-100">Sub-item 1</a>
                            <a href="#" className="block py-2 px-2 rounded-lg hover:bg-gray-100">Sub-item 2</a>
                        </div>
                    </div>
                    <div className="relative group ">
                        <div className='flex items-center cursor-pointer'>
                            <a href="#" className="hover:text-gray-700">Users</a>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                className="w-5 h-5 mr-1"
                            >
                                <path d="M5 9l7 7 7-7" />
                            </svg>
                        </div>
                        <div className="absolute hidden group-hover:block bg-white shadow-lg p-2 w-32 rounded-lg">
                            <a href="#" className="block py-2 px-2 rounded-lg hover:bg-gray-100">Sub-item 1</a>
                            <a href="#" className="block py-2 px-2 rounded-lg hover:bg-gray-100">Sub-item 2</a>
                        </div>
                    </div>
                    <div className="relative group ">
                        <div className='flex items-center cursor-pointer'>
                            <a href="#" className="hover:text-gray-700">Blogs</a>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                className="w-5 h-5 mr-1"
                            >
                                <path d="M5 9l7 7 7-7" />
                            </svg>
                        </div>
                        <div className="absolute hidden group-hover:block bg-white shadow-lg p-2 w-32 rounded-lg">
                            <a href="#" className="block py-2 px-2 rounded-lg hover:bg-gray-100">Sub-item 1</a>
                            <a href="#" className="block py-2 px-2 rounded-lg hover:bg-gray-100">Sub-item 2</a>
                        </div>
                    </div>
                    <div className="relative group ">
                        <div className='flex items-center cursor-pointer'>
                            <a href="#" className="hover:text-gray-700">Pages</a>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                className="w-5 h-5 mr-1"
                            >
                                <path d="M5 9l7 7 7-7" />
                            </svg>
                        </div>
                        <div className="absolute hidden group-hover:block bg-white shadow-lg p-2 w-32 rounded-lg">
                            <a href="#" className="block py-2 px-2 rounded-lg hover:bg-gray-100">Sub-item 1</a>
                            <a href="#" className="block py-2 px-2 rounded-lg hover:bg-gray-100">Sub-item 2</a>
                        </div>
                    </div>
                </div>

                {/* Right Icons */}
                <div className="flex space-x-4 items-center">
                    <div className="flex items-center"> 
                        <div className="text-sm">
                            <p className="text-gray-700 font-semibold">Freelancer</p>
                            <p className="text-gray-500">Employer</p>
                        </div>
                        <img
                            src="/path-to-avatar.png" // Replace with your avatar image path
                            alt="Avatar"
                            className="h-8 w-8 rounded-full ml-2"
                        />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
