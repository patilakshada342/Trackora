import React from 'react'
import DashboardLayout from '../components/Layout/DashboardLayout'
import { FaPaperPlane } from "react-icons/fa";
import { useState, useEffect } from 'react'
import { sendAIChatMessage } from '../services/aiApi';


function AiChat() {

    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [loading, setLoading] = useState(false);



    const questions = [
        { text: "How can i save more money" },
        { text: "Where am I overspending" },
        { text: "How can I save ₹10,000 in 3 months" },
        { text: "How can I save for a vacation" },

    ]

    const handleSendMessage = async (text = input) => {
        const message = text.trim();

        if (!message || loading) return;

        setMessages((prev) => [
            ...prev, { role: 'user', text: message }
        ]);

        setInput('');
        setLoading(true);

        try {
            const data = await sendAIChatMessage(message);

            setMessages((prev) => [
                ...prev,
                {
                    role: 'ai',
                    text: data.reply
                }
            ]);
        }
        catch (error) {
            console.log("Ai chat error:", error);

            setMessages((prev) => [
                ...prev,
                {
                    role: 'ai',
                    text: 'Sorry, I could not generate a response.Please try again later.'
                }
            ]);
        }

        finally {
            setLoading(false);
        }
    };


    return (
        <>
            <DashboardLayout title="AI Chat Advisor">
                <div className='grid lg:grid-cols-12 sm:grid-cols-1 gap-6 h-[calc(100vh-150px)] overflow-hidden'>

                    <div className='lg:col-span-4 sm:col-span-8 bg-white rounded-2xl border border-gray-100 p-6 overflow-y-auto'>
                        <h3 className='text-lg font-semibold mb-5'>Quick financial Questions</h3>
                        {
                            questions.map((item, index) => (
                                <div className='space-y-4 mb-4'>
                                    <button className='w-full text-left rounded-xl  bg-[#f8f7ff] border
                             border-[#ddd8ff] p-4  text-sm hover:bg-[#f1edff] transition'>{item.text}</button>
                                </div>
                            ))
                        }
                    </div>

                    <div className='lg:col-span-8  bg-white rounded-2xl border border-gray-100 flex flex-col overflow-hidden min-h-0'>

                        <div className='flex-1 min-h-0 overflow-y-auto p-6 space-y-5'>
                            <div className={`max-w-[80%]  px-4 py-3 rounded-2xl text-sm leading-7 
                            ml-auto bg-[#a52cf6] text-white`}>
                                Hello akshada i am your chat ai financial advisor ask me anything about savigs ,budget , money wise ,
                                expense planning or financical disipline
                            </div>

                            <div className={`max-w-[80%]  px-4 py-3 rounded-2xl text-sm leading-7 
                            bg-gray-200 text-gray-700`}>
                                Explain my financial journey..
                            </div>

                            <div className={`max-w-[80%]  px-4 py-3 rounded-2xl text-sm leading-7 
                            ml-auto bg-[#a52cf6] text-white`}>
                                Your financial journey shows how your finances have evolved over time. It highlights your income,
                                expenses, savings growth, spending trends, and milestones, helping you understand your financial progress and make informed decisions for the future.
                            </div>

                            <div className={`max-w-[80%]  px-4 py-3 rounded-2xl text-sm leading-7 
                            bg-gray-200 text-gray-700`}>
                                thanks for the information
                            </div>



                        </div>

                        <div className='border-t border-gray-100 p-4 flex items-center gap-4 shrink-0' >
                            <input type="text"
                                placeholder='Ask your financial question...'
                                className='flex-1 border border-gray-100 rounded-xl py-3 px-4 outline-none'
                            />
                            <button className='w-12 h-12 rounded-xl bg-[#a52cf6] text-white flex items-center justify-center shrink-0'>
                                <FaPaperPlane />
                            </button>
                        </div>


                    </div >

                </div>
            </DashboardLayout>
        </>
    )
}

export default AiChat
