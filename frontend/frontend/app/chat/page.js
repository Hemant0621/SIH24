"use client";
import { useState } from 'react';

export default function Chatbot() {
    const [messages, setMessages] = useState([]); // Stores chat messages
    const [input, setInput] = useState(''); // Stores user input

    const handleSend = async () => {
        if (!input.trim()) return; // Don't send empty input

        // Add user message to the chat
        const newMessage = { text: input, sender: 'user' };
        setMessages([...messages, newMessage]);

        // Send user input to the API
        try {
            const response = await fetch('/api/python', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ inputData: input }),
            });

            const result = await response.json();
            
            // Add API response to the chat
            const botMessage = { text: result.output, sender: 'bot' };
            setMessages((prevMessages) => [...prevMessages, botMessage]);
        } catch (error) {
            console.error('Error:', error);
        }

        setInput(''); // Clear input field
    };

    return (
        <div className="flex flex-col h-screen max-w-xl mx-auto border border-gray-300 rounded-lg shadow-lg">
            <div className="flex-1 p-4 overflow-y-auto bg-gray-100">
                {messages.map((message, index) => (
                    <div
                        key={index}
                        className={`max-w-[70%] mb-4 p-3 rounded-xl ${
                            message.sender === 'user'
                                ? 'ml-auto bg-blue-500 text-white text-right'
                                : 'mr-auto bg-gray-300 text-left'
                        }`}
                    >
                        {message.text}
                    </div>
                ))}
            </div>

            <div className="p-4 bg-white flex border-t border-gray-300">
                <input
                    type="text"
                    placeholder="Type your message..."
                    className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                    autoComplete="off"
                />
                <button
                    onClick={handleSend}
                    className="ml-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                >
                    Send
                </button>
            </div>
        </div>
    );
}
