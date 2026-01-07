import React from 'react';
import Members from '../components/Members';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';

const MembersPage = () => {
    const { user } = useAuth();

    if (!user) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-black px-4">
                <div className="text-center">
                    <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-4">Members Only Area</h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md mx-auto">
                        Please login to view our active community members and connect with others.
                    </p>
                    <Link
                        to="/login"
                        className="px-8 py-3 bg-lime-500 text-black font-bold uppercase tracking-wider rounded-sm hover:bg-lime-400 transition"
                    >
                        Login to View
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="pt-10">
            <Members />
        </div>
    );
};

export default MembersPage;
