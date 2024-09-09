import { useState } from "react";

export default function Dashboard({user}) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="flex flex-col md:flex-row h-screen bg-background">
            {/* Mobile Hamburger Menu */}
            <div className="md:hidden fixed top-4 left-4 z-50">
                <button
                    id="mobile-menu-button"
                    className="bg-primary text-primary-foreground p-2 rounded-lg shadow-lg"
                    onClick={toggleSidebar}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16m-7 6h7"
                        />
                    </svg>
                </button>
            </div>

            {/* Sidebar */}
            <aside
                className={`fixed top-20 md:top-0 left-0 w-64 h-full bg-white border-r border-border p-4 transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
                    } transition-transform duration-300 ease-in-out md:relative md:translate-x-0 md:w-1/4`}
            >
                <h2 className="text-xl font-bold">Freelancer</h2>
                <div className="mt-4">
                    <a href="#" className="flex gap-2 py-2 text-zinc-700 hover:bg-zinc-100 ">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="w-5 h-5"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M3 7h18M5 7V6a2 2 0 012-2h10a2 2 0 012 2v1m2 0a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9a2 2 0 012-2z"
                            />
                        </svg>
                        <span>Dashboard</span>
                    </a>
                    <a href="#" className="flex gap-2 py-2 text-zinc-700 hover:bg-zinc-100 ">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="w-5 h-5"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M3 7h18M5 7V6a2 2 0 012-2h10a2 2 0 012 2v1m2 0a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9a2 2 0 012-2z"
                            />
                        </svg>
                        <span>My Jobs</span>
                    </a>
                    <a href="#" className="flex gap-2 py-2 text-zinc-700 hover:bg-zinc-100 ">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="w-5 h-5"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M8 2h8a2 2 0 012 2v16a2 2 0 01-2 2H8a2 2 0 01-2-2V4a2 2 0 012-2zM12 1v4m-4-4v4m8-4v4M5 12h14m-7 4h.01"
                            />
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 19l7-7-1.5-1.5-5.5 5.5-1.5 2.5L12 19z"
                            />
                        </svg>

                        <span>My Applications</span>
                    </a>
                    <a href="#" className="flex gap-2 py-2 text-zinc-700 hover:bg-zinc-100 ">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="w-5 h-5"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.682l1.318-1.364a4.5 4.5 0 116.364 6.364L12 21.364 4.318 12.682a4.5 4.5 0 010-6.364z"
                            />
                        </svg>

                        <span>My Favorites</span>
                    </a>
                    <a href="#" className="flex gap-2 py-2 text-zinc-700 hover:bg-zinc-100 ">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="w-5 h-5"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M8 10h.01M12 10h.01M16 10h.01M21 12.91a9.004 9.004 0 01-18 0V12a9 9 0 0118 0v.91zM12 17h.01M8 14h.01M16 14h.01"
                            />
                        </svg>

                        <span>Messages</span>
                    </a>
                </div>
            </aside>

            {/* Main content */}
            <main className="flex-1 p-8">
                <h1 className="text-2xl font-bold">Dashboard</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
                    <div className="bg-card p-4 rounded-lg shadow">
                        <h2 className="text-lg font-semibold">Posted Projects</h2>
                        <p className="text-2xl font-bold">0</p>
                    </div>
                    <div className="bg-card p-4 rounded-lg shadow">
                        <h2 className="text-lg font-semibold">Completed Projects</h2>
                        <p className="text-2xl font-bold">0</p>
                    </div>
                    <div className="bg-card p-4 rounded-lg shadow">
                        <h2 className="text-lg font-semibold">Proposals</h2>
                        <p className="text-2xl font-bold">0</p>
                    </div>
                    <div className="bg-card p-4 rounded-lg shadow">
                        <h2 className="text-lg font-semibold">Review</h2>
                        <p className="text-2xl font-bold">0</p>
                    </div>
                </div>
                <div className="mt-8">
                    <h2 className="text-lg font-semibold">Your Profile Views</h2>
                    <img
                        aria-hidden="true"
                        alt="Profile Views Chart"
                        src="https://openui.fly.dev/openui/600x300.svg?text=Chart"
                        className="mt-4 rounded-lg"
                    />
                </div>
                <div className="mt-4">
                    <h2 className="text-lg font-semibold">Notifications</h2>
                    <p className="text-muted-foreground">No new notifications</p>
                </div>
            </main>
        </div>
    );
}
