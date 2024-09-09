import React from 'react'

function Maincontent({user}) {
    return (
        <main className="flex-1 p-8">
            <h1 className="text-2xl font-bold">Dashboard</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
                <div className="bg-card p-4 rounded-lg shadow">
                    <h2 className="text-lg font-semibold">Jobs</h2>
                    <p className="text-2xl font-bold">0</p>
                </div>
                <div className="bg-card p-4 rounded-lg shadow">
                    <h2 className="text-lg font-semibold">{user=="Freelancer" ? "Completed Projects" : "Posted Projects"}</h2>
                    <p className="text-2xl font-bold">0</p>
                </div>
                <div className="bg-card p-4 rounded-lg shadow">
                    <h2 className="text-lg font-semibold">{user=="Freelancer" ? "Earning" : "Amount Paid"}</h2>
                    <p className="text-2xl font-bold">0</p>
                </div>
                <div className="bg-card p-4 rounded-lg shadow">
                    <h2 className="text-lg font-semibold">{user=="Freelancer" ? "Pending Amount" : "Amount To pay"}</h2>
                    <p className="text-2xl font-bold">0</p>
                </div>
            </div>
            <div className="mt-8">
                <h2 className="text-lg font-semibold">Your Profile Views</h2>
                {/* <img
                    aria-hidden="true"
                    alt="Profile Views Chart"
                    src="https://openui.fly.dev/openui/600x300.svg?text=Chart"
                    className="mt-4 rounded-lg"
                /> */}
            </div>
            <div className="mt-4">
                <h2 className="text-lg font-semibold">Notifications</h2>
                <p className="text-muted-foreground">No new notifications</p>
            </div>
        </main>
    )
}

export default Maincontent