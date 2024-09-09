'use client'
import React, { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight, FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { GiSpeaker, GiStarFormation } from 'react-icons/gi';
import { MdOutlineAccessTime } from 'react-icons/md';

const images = [
  'https://images.pexels.com/photos/1181329/pexels-photo-1181329.jpeg',
  'https://images.pexels.com/photos/706376/pexels-photo-706376.jpeg',
  'https://images.pexels.com/photos/842567/pexels-photo-842567.jpeg',
];

const categoryImages = [
  { src: 'https://cdn.hashnode.com/res/hashnode/image/upload/v1680413762129/71e707fb-1dbf-4f50-9e0b-a77d03101b79.jpeg', title: 'Front-End Developer' },
  { src: 'https://images.pexels.com/photos/1181329/pexels-photo-1181329.jpeg', title: 'Back-End Developer' },
  { src: 'https://images.pexels.com/photos/3861963/pexels-photo-3861963.jpeg', title: 'Software Engineer' },
  { src: 'https://images.pexels.com/photos/5474312/pexels-photo-5474312.jpeg', title: 'Artificial Intelligence' },
  { src: 'https://img.freepik.com/free-photo/person-playing-3d-video-games-device_23-2151005800.jpg', title: 'Game Developer' },
  { src: 'https://images.pexels.com/photos/593533/pexels-photo-593533.jpeg', title: 'Network Engineer' },
  { src: 'https://img.freepik.com/free-vector/data-analyst-oversees-governs-income-expenses-with-magnifier-financial-management-system-finance-software-it-management-tool-concept_335657-1891.jpg', title: 'Systems Analyst' },
  { src: 'https://images.pexels.com/photos/3183187/pexels-photo-3183187.jpeg', title: 'Technical Support' },
];

const recentJobs = [
  { title: 'Senior Front-End Developer', company: 'Tech Innovations', location: 'Remote', image: 'https://images.pexels.com/photos/1181329/pexels-photo-1181329.jpeg' },
  { title: 'Backend Developer', company: 'Web Solutions', location: 'New York, NY', image: 'https://images.pexels.com/photos/706376/pexels-photo-706376.jpeg' },
  { title: 'AI Research Scientist', company: 'Future Labs', location: 'San Francisco, CA', image: 'https://images.pexels.com/photos/842567/pexels-photo-842567.jpeg' },
  // Add more recent jobs as needed
];


const popularPortfolios = [
  { name: 'Jane Doe', title: 'UI/UX Designer', image: 'https://images.pexels.com/photos/1181329/pexels-photo-1181329.jpeg' },
  { name: 'John Smith', title: 'Full-Stack Developer', image: 'https://images.pexels.com/photos/706376/pexels-photo-706376.jpeg' },
  { name: 'Emily Johnson', title: 'Data Scientist', image: 'https://images.pexels.com/photos/842567/pexels-photo-842567.jpeg' },
  { name: 'Michael Brown', title: 'Digital Marketer', image: 'https://images.pexels.com/photos/706376/pexels-photo-706376.jpeg' },
  { name: 'Jane Doe', title: 'UI/UX Designer', image: 'https://images.pexels.com/photos/1181329/pexels-photo-1181329.jpeg' },
  { name: 'John Smith', title: 'Full-Stack Developer', image: 'https://images.pexels.com/photos/706376/pexels-photo-706376.jpeg' },
  { name: 'Emily Johnson', title: 'Data Scientist', image: 'https://images.pexels.com/photos/842567/pexels-photo-842567.jpeg' },
  { name: 'Michael Brown', title: 'Digital Marketer', image: 'https://images.pexels.com/photos/706376/pexels-photo-706376.jpeg' },
];

const SimpleCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  

  return (
    <div className="relative w-full mb-12">
      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white p-3 rounded-full bg-gray-800 opacity-70 hover:opacity-100 transition-opacity"
        aria-label="Previous Slide"
        onClick={() => setCurrentIndex((currentIndex - 1 + images.length) % images.length)}
      >
        <FaArrowLeft className="w-6 h-6" />
      </button>
      <img
        src={images[currentIndex]}
        alt="Slide"
        className="w-full custom-carousel-height object-cover rounded-lg" // Use a custom class
      />
      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white p-3 rounded-full bg-gray-800 opacity-70 hover:opacity-100 transition-opacity"
        aria-label="Next Slide"
        onClick={() => setCurrentIndex((currentIndex + 1) % images.length)}
      >
        <FaArrowRight className="w-6 h-6" />
      </button>
    </div>
  );
};

const FreelancerLandingPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col text-gray-900">
      <header className="fixed top-0 left-0 w-full bg-white shadow-md rounded-b-lg z-50">
  <nav className="container mx-auto flex items-center justify-between p-6">
    <a href="#" className="text-3xl font-bold text-primary">LearnIT</a>
    <div className="flex-1 mx-8">
      <div className="relative">
        <input
          type="text"
          placeholder="Search for freelancers or jobs..."
          className="px-4 py-2 outline-none bg-gray-200 text-gray-900 placeholder-gray-500 rounded-full w-full"
        />
        <button className="absolute right-0 top-0 mt-1 mr-1 bg-primary text-white px-4 py-2 rounded-full hover:bg-primary-dark transition-colors">
          <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35M16.65 13.65a6.5 6.5 0 1 0-9.2-9.2 6.5 6.5 0 0 0 9.2 9.2z" />
          </svg>
        </button>
      </div>
    </div>
    <ul className="flex space-x-6">
      <li><a href="#" className="text-primary hover:text-primary-dark transition-colors">Home</a></li>
      <li><a href="#" className="text-primary hover:text-primary-dark transition-colors">Find Work</a></li>
      <li><a href="#" className="text-primary hover:text-primary-dark transition-colors">Find Freelancers</a></li>
      <li><a href="/employee/auth/sign-up" className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-colors">Register as Employee</a></li>
      <li><a href="/Freelancer/auth/sign-up" className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition-colors">Start as Freelancer</a></li>
    </ul>
  </nav>
</header>


      <main className="flex flex-col items-center text-center p-12 mt-16 container mx-auto space-y-12">
      <h1 className="text-5xl font-bold font-montserrat mt-7">Find Your Next Opportunity or Top Talent</h1>
      <p className="text-lg font-roboto">LearnIT connects you with exceptional talent and job opportunities...</p>
        <SimpleCarousel />

        <div className="flex flex-col md:flex-row md:space-x-8 space-y-8 md:space-y-0 mb-12">
          <div className="bg-white p-8 rounded-xl shadow-lg w-full md:w-1/3 flex flex-col items-center">
            <img src="https://images.pexels.com/photos/1181329/pexels-photo-1181329.jpeg" alt="Post a Job" className="mb-4 rounded-lg h-48 w-full object-cover" />
            <h2 className="text-2xl font-semibold mb-4">Post a Job</h2>
            <p className="mb-4">Reach out to talented freelancers and find the perfect match for your projects.</p>
            <button className="bg-gradient-to-r from-blue-500 to-teal-400 text-white px-6 py-3 rounded-full hover:opacity-90 transition-opacity">Post a Job</button>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg w-full md:w-1/3 flex flex-col items-center">
            <img src="https://images.pexels.com/photos/706376/pexels-photo-706376.jpeg" alt="Find Freelancers" className="mb-4 rounded-lg h-48 w-full object-cover" />
            <h2 className="text-2xl font-semibold mb-4">Find Freelancers</h2>
            <p className="mb-4">Browse through our pool of skilled freelancers and find the right talent for your needs.</p>
            <button className="bg-gradient-to-r from-blue-500 to-teal-400 text-white px-6 py-3 rounded-full hover:opacity-90 transition-opacity">Find Freelancers</button>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg w-full md:w-1/3 flex flex-col items-center">
            <img src="https://images.pexels.com/photos/842567/pexels-photo-842567.jpeg" alt="Explore Categories" className="mb-4 rounded-lg h-48 w-full object-cover" />
            <h2 className="text-2xl font-semibold mb-4">Explore Categories</h2>
            <p className="mb-4">Explore various categories to find the perfect match for your needs or interests.</p>
            <button className="bg-gradient-to-r from-blue-500 to-teal-400 text-white px-6 py-3 rounded-full hover:opacity-90 transition-opacity">Browse Categories</button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:space-x-8 space-y-8 md:space-y-0 mb-12">
          <div className="bg-white p-8 rounded-xl shadow-lg w-full md:w-1/2 flex flex-col items-center">
            <img src="https://images.pexels.com/photos/1181329/pexels-photo-1181329.jpeg" alt="Top Talent" className="mb-4 h-48 w-full object-cover rounded-lg" />
            <h2 className="text-2xl font-semibold mb-4">Top Talent</h2>
            <p className="mb-4">Meet some of the top-rated freelancers who can help bring your projects to life.</p>
            <button className="bg-gradient-to-r from-blue-500 to-teal-400 text-white px-6 py-3 rounded-full hover:opacity-90 transition-opacity">See Top Talent</button>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg w-full md:w-1/2 flex flex-col items-center">
            <img src="https://images.pexels.com/photos/5749023/pexels-photo-5749023.jpeg" alt="Recent Projects" className="mb-4 h-48 w-full object-cover rounded-lg" />
            <h2 className="text-2xl font-semibold mb-4">Recent Projects</h2>
            <p className="mb-4">Check out some of the recent projects posted on our platform and get inspired.</p>
            <button className="bg-gradient-to-r from-blue-500 to-teal-400 text-white px-6 py-3 rounded-full hover:opacity-90 transition-opacity">View Projects</button>
          </div>
        </div>

        <section className="bg-white p-12 rounded-xl shadow-lg mb-12 w-full md:w-4/5 mx-auto">
          <h2 className="text-3xl font-bold mb-6">Why Choose Us?</h2>
          <div className="flex flex-col md:flex-row md:space-x-8 space-y-8 md:space-y-0">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <GiSpeaker className="text-4xl text-primary" />
              <div>
                <h3 className="text-xl font-semibold">Expertise You Can Trust</h3>
                <p className="text-gray-600">Our team of experts ensures high-quality results and professional service.</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <GiStarFormation className="text-4xl text-primary" />
              <div>
                <h3 className="text-xl font-semibold">Top-Tier Talent</h3>
                <p className="text-gray-600">Connect with highly skilled freelancers who excel in their fields.</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <MdOutlineAccessTime className="text-4xl text-primary" />
              <div>
                <h3 className="text-xl font-semibold">24/7 Support</h3>
                <p className="text-gray-600">Our support team is available around the clock to assist you with any issues.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="bg-white p-12 rounded-xl shadow-lg mb-12 w-full md:w-4/5 mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">Explore Categories</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categoryImages.map((category, index) => (
              <div key={index} className="relative overflow-hidden rounded-2xl border-2 border-gray-300 shadow-md hover:shadow-lg transition-shadow duration-300">
                <img
                  src={category.src}
                  alt={category.title}
                  className="w-full h-60 object-cover rounded-2xl"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-xl font-bold p-4 rounded-2xl">
                  {category.title}
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="bg-white p-12 rounded-xl shadow-lg mb-12 w-full md:w-4/5 mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">Recent Posted Jobs</h2>
          <div className="relative w-full">
            <button
              className="absolute left-0 top-1/2 transform -translate-y-1/2 text-gray-500 bg-white p-2 rounded-full shadow-md"
              aria-label="Previous Slide"
              onClick={() => setCurrentIndex((currentIndex - 1 + recentJobs.length) % recentJobs.length)}
            >
              <FaArrowLeft className="w-6 h-6" />
            </button>
            <div className="overflow-hidden">
              <div className="flex transition-transform duration-300" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {recentJobs.map((job, index) => (
                  <div key={index} className="flex-shrink-0 w-full md:w-1/3 p-4">
                    <div className="bg-gray-50 rounded-xl shadow-lg overflow-hidden">
                      <img src={job.image} alt={job.title} className="w-full h-48 object-cover rounded-t-xl" />
                      <div className="p-4">
                        <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
                        <p className="text-gray-600 mb-2">{job.company}</p>
                        <p className="text-gray-500">{job.location}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <button
              className="absolute right-0 top-1/2 transform -translate-y-1/2 text-gray-500 bg-white p-2 rounded-full shadow-md"
              aria-label="Next Slide"
              onClick={() => setCurrentIndex((currentIndex + 1) % recentJobs.length)}
            >
              <FaArrowRight className="w-6 h-6" />
            </button>
          </div>
        </section>

      <div className="bg-white p-8 rounded-xl shadow-lg w-full md:w-3/4 mb-12">
        <h2 className="text-3xl font-bold mb-6">Popular Portfolios</h2>
        <div className="flex overflow-x-auto space-x-4 pb-4">
          {popularPortfolios.map((portfolio, index) => (
            <div key={index} className="flex-none bg-gray-100 p-4 rounded-lg shadow-md w-64">
              <img src={portfolio.image} alt={portfolio.name} className="w-full h-32 object-cover rounded-lg mb-4" />
              <h3 className="text-xl font-semibold mb-2">{portfolio.name}</h3>
              <p className="text-gray-700">{portfolio.title}</p>
            </div>
          ))}
        </div>
        
      </div>

        {/* Floating Action Button */}
        <a href="#" className="fixed bottom-24 right-8 bg-primary text-black rounded-full p-4 shadow-lg hover:opacity-40">
          <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v14m7-7H5" />
          </svg>
        </a>
      </main>

      

      <footer className="bg-gray-800 text-white w-full py-4">
        <div className="container mx-auto px-1">
          <div className="flex flex-col md:flex-row md:justify-between mb-6">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-bold mb-4">LearnIT</h2>
              <p className="mb-5">Connecting top talent with exceptional opportunities. We’re here to help you find or hire the best.</p>
              <ul className="flex space-x-4">
                <li><a href="#" className="hover:text-gray-400"><FaFacebookF /></a></li>
                <li><a href="#" className="hover:text-gray-400"><FaTwitter /></a></li>
                <li><a href="#" className="hover:text-gray-400"><FaLinkedinIn /></a></li>
                <li><a href="#" className="hover:text-gray-400"><FaInstagram /></a></li>
              </ul>
            </div>

            <div className="flex flex-col md:flex-row md:space-x-12 mb-8 md:mb-0">
              <div className="mb-6 md:mb-5">
                <h3 className="text-lg font-semibold mb-12">Quick Links</h3>
                <ul>
                  <li><a href="#" className="hover:text-gray-400">Home</a></li>
                  <li><a href="#" className="hover:text-gray-400">Find Work</a></li>
                  <li><a href="#" className="hover:text-gray-400">Find Freelancers</a></li>
                  <li><a href="#" className="hover:text-gray-400">About Us</a></li>
                  <li><a href="#" className="hover:text-gray-400">Contact</a></li>
                </ul>
              </div>

              <div className="mb-6 md:mb-0">
                <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                <p className="mb-4">Chennai, India<br />600127</p>
                <p className="mb-4">Email: <a href="mailto:contact@spaceclance.com" className="hover:text-gray-400">contact@learnit.com</a></p>
                <p>Phone: <a href="tel:+1234567890" className="hover:text-gray-400">7388889908</a></p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-4 text-center ">
            <p className="text-sm">&copy; {new Date().getFullYear()} LearnIT. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>

    
  );
};

export default FreelancerLandingPage;
