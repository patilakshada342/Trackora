import React from 'react';
import DashboardLayout from '../components/Layout/DashboardLayout';

function ViewAllIncome() {

    const incomes = [
        {
            source: "Salary",
            amount: 50000,
            date: "05 Aug 2026",
            notes: "Monthly Salary"
        },
        {
            source: "Freelancing",
            amount: 8000,
            date: "03 Aug 2026",
            notes: "Website Project"
        },
        {
            source: "Business",
            amount: 50000,
            date: "05 Aug 2026",
            notes: "Client Payment"
        },
        {
            source: "Ristedar",
            amount: 50000,
            date: "05 Aug 2026",
            notes: "Free che paise"
        },
        {
            source: "Charity",
            amount: 50000,
            date: "05 Aug 2026",
            notes: "Someone donated"
        }
    ];

    return (
        <DashboardLayout title="All Incomes">

            <div className="flex items-center justify-between mb-6">
                <div>
                    <h1 className="text-2xl font-semibold">
                        All Incomes
                    </h1>

                    <p className="text-gray-500 mt-1">
                        View and manage all your income entries
                    </p>
                </div>
            </div>

        </DashboardLayout>
    );
}

export default ViewAllIncome;