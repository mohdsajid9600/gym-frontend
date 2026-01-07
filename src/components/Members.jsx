import React, { useEffect, useState } from "react";
import axios from "axios";
import { User, Activity, Calendar } from "lucide-react";

const Members = () => {
    const [members, setMembers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchMembers();
    }, []);

    const fetchMembers = async () => {
        try {
            // Assuming backend is running on default 8080
            const response = await axios.get("http://localhost:8080/api/members");
            setMembers(response.data);
            setLoading(false);
        } catch (err) {
            console.error("Failed to fetch members", err);
            // Fallback mock data if API fails (for demonstration)
            setError("Could not connect to backend. Showing demo data.");
            setMembers([
                { id: 1, name: "John Doe", email: "john@example.com", plan: "Pro", joinDate: "2023-01-15" },
                { id: 2, name: "Jane Smith", email: "jane@example.com", plan: "Basic", joinDate: "2023-02-20" },
                { id: 3, name: "Mike Johnson", email: "mike@example.com", plan: "Elite", joinDate: "2023-03-10" },
            ]);
            setLoading(false);
        }
    };

    return (
        <section id="members" className="relative py-20 bg-gray-50 dark:bg-black transition-colors duration-300">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=2675&auto=format&fit=crop"
                    alt="Gym Members Background"
                    className="w-full h-full object-cover opacity-10 dark:opacity-20"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/50 to-white dark:from-black/90 dark:via-black/50 dark:to-black"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <div>
                        <h2 className="text-sm font-bold text-lime-600 dark:text-lime-500 uppercase tracking-widest mb-2">Community</h2>
                        <h3 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white uppercase italic">
                            Active <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-500 to-emerald-600">Members</span>
                        </h3>
                    </div>

                    <div className="mt-4 md:mt-0">
                        <div className="bg-gray-100 dark:bg-zinc-800 px-6 py-3 rounded-full flex items-center gap-2">
                            <div className="flex -space-x-2">
                                {[1, 2, 3].map(i => (
                                    <div key={i} className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white dark:border-zinc-800"></div>
                                ))}
                            </div>
                            <span className="text-sm font-bold text-gray-700 dark:text-gray-300">
                                {members.length}+ Active Members
                            </span>
                        </div>
                    </div>
                </div>

                {error && (
                    <div className="mb-8 p-4 bg-yellow-50 dark:bg-yellow-900/20 text-yellow-800 dark:text-yellow-200 border border-yellow-200 dark:border-yellow-800 rounded-lg text-sm">
                        Note: {error} (Start your Spring Boot backend to see real data)
                    </div>
                )}

                {loading ? (
                    <div className="flex justify-center p-20">
                        <div className="w-10 h-10 border-4 border-lime-500 border-t-transparent rounded-full animate-spin"></div>
                    </div>
                ) : (
                    <div className="overflow-x-auto rounded-2xl border border-gray-200 dark:border-zinc-800 shadow-xl bg-white dark:bg-black">
                        <table className="w-full text-left">
                            <thead className="bg-gray-50 dark:bg-zinc-900">
                                <tr>
                                    <th className="px-6 py-4 text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Member</th>
                                    <th className="px-6 py-4 text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Contact</th>
                                    <th className="px-6 py-4 text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Plan</th>
                                    <th className="px-6 py-4 text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Joined</th>
                                    <th className="px-6 py-4 text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Status</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 dark:divide-zinc-800">
                                {members.map((member) => (
                                    <tr key={member.id} className="hover:bg-gray-50 dark:hover:bg-zinc-900/50 transition-colors">
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 rounded-full bg-lime-100 dark:bg-lime-900/30 text-lime-600 dark:text-lime-400 flex items-center justify-center font-bold">
                                                    {member.name.charAt(0)}
                                                </div>
                                                <div>
                                                    <div className="font-bold text-gray-900 dark:text-white">{member.name}</div>
                                                    <div className="text-xs text-gray-500">Member #{member.id}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-900 dark:text-gray-300">{member.email}</div>
                                            <div className="text-xs text-gray-500">{member.phone || "N/A"}</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 dark:bg-zinc-800 text-gray-800 dark:text-gray-200">
                                                <Activity size={12} className="mr-1" />
                                                {member.plan || "Standard"}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                                            <div className="flex items-center gap-1">
                                                <Calendar size={14} />
                                                {member.joinDate}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className="px-2 py-1 text-xs font-bold bg-green-100 text-green-800 rounded-full">
                                                Active
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Members;
