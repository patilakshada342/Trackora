import React, { useState, useEffect } from 'react'
import { FaRobot } from 'react-icons/fa'
import { FaArrowTrendUp } from "react-icons/fa6";
import { aiInsights } from "../../services/aiApi";



function AIPreviewCard() {

    const [insights, setInsights] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');


    useEffect(() => {
        const fetchInsights = async () => {
            try {
                const data = await aiInsights();
                console.log("AI insights API response", data);

                const parsedInsights
                    = typeof data.aiInsights === "string"
                        ? JSON.parse(data.aiInsights)
                        : data.aiInsights;
                setInsights(parsedInsights);
            }
            catch (error) {
                console.log('AI insights error', error);
                setError("Unable to load AI insights.");
            }
            finally {
                setLoading(false);
            }
        };
        fetchInsights();
    }, []);

    return (
        <>
            <div className='bg-white rounded-2xl border border-gray-100 p-5 h-full'>
                <div className={`w-11 h-11 rounded-xl  bg-[#f4f1ff] text-[#5b3df5] flex items-center  justify-center`}>
                    <FaRobot />
                </div>

                <h3 className='font-semibold  my-5'>AI Quick Insights</h3>

                <div className='space-y-3 mb-5'>

                    <div className='bg-[#f8f7ff] border-[#ddd8ff] rounded-xl p-3 text-sm text-gray-700'>
                        {loading ? "Analyzing your financial data..." : insights?.trend || error || "No insight available."}
                    </div>

                    <div className='bg-red-50 border border-red-100 rounded-xl p-3 text-sm text-gray-700'>
                        {loading ? "Analyzing your financial data..." : insights?.concern || error || "No insight available."}                   
                    </div>

                    <div className='bg-green-50 border border-green-100 rounded-xl p-3 text-sm text-gray-700'>
                        {loading ? "Analyzing your financial data..." : insights?.positive || error || "No insight available."}                    
                    </div>
                </div >

           
            <button className='w-full h-11 justify-center px-7 py-4  bg-[#a52cf6] 
                rounded-lg text-white text-sm font-medium hover:text-[#a52cf6] hover:border-[#a52cf6] hover:bg-[#f1e6f8] 
                transition cursor-pointer flex items-center gap-2'>
                View Full AI Advisory <FaArrowTrendUp /></button>
            </div >

        </>

    );
}
export default AIPreviewCard
