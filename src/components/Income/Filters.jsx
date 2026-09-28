import React from 'react';

function Filters({
    search,
    setSearch,
    fromDate,
    setFromDate,
    toDate,
    setToDate
}) {

    return (
        <div className='flex flex-col md:flex-row gap-4 items-end'>

            {/* Search Source */}
            <div>
                <label className='text-sm font-medium mb-2 block'>
                    Search Source
                </label>

                <div className='relative'>
                    <input
                        type="text"
                        placeholder='Search....'
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className='w-full md:w-[400px] border border-gray-300 rounded-xl px-4 py-3 pr-10 outline-none focus:border-[#a52cf6]'
                    />

                    {search && (
                        <button
                            type="button"
                            onClick={() => setSearch("")}
                            className='absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-700 cursor-pointer'
                        >
                            ✕
                        </button>
                    )}
                </div>
            </div>


            {/* From Date */}
            <div>
                <label className='text-sm font-medium mb-2 block'>
                    From Date :
                </label>

                <div className='relative'>
                    <input
                        type="date"
                        value={fromDate}
                        onChange={(e) => setFromDate(e.target.value)}
                        className='border border-gray-300 rounded-xl px-4 py-3 pr-10 outline-none focus:border-[#a52cf6]'
                    />

                    {fromDate && (
                        <button
                            type="button"
                            onClick={() => setFromDate("")}
                            className='absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-700 cursor-pointer'
                        >
                            ✕
                        </button>
                    )}
                </div>
            </div>


            {/* To Date */}
            <div>
                <label className='text-sm font-medium mb-2 block'>
                    To Date :
                </label>

                <div className='relative'>
                    <input
                        type="date"
                        value={toDate}
                        onChange={(e) => setToDate(e.target.value)}
                        className='border border-gray-300 rounded-xl px-4 py-3 pr-10 outline-none focus:border-[#a52cf6]'
                    />

                    {toDate && (
                        <button
                            type="button"
                            onClick={() => setToDate("")}
                            className='absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-700 cursor-pointer'
                        >
                            ✕
                        </button>
                    )}
                </div>
            </div>

        </div>
    );
}

export default Filters;