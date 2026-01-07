import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Check } from "lucide-react";

const Join = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        age: "",
        plan: "Basic", // Default
    });

    useEffect(() => {
        if (location.state?.selectedPlan) {
            setFormData((prev) => ({ ...prev, plan: location.state.selectedPlan }));
        }
    }, [location.state]);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate submission
        alert(`Application Submitted!\nName: ${formData.fullName}\nPlan: ${formData.plan}`);
        navigate("/");
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <section className="relative min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2670&auto=format&fit=crop"
                    alt="Join Background"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gray-100/80 dark:bg-black/80 backdrop-blur-sm"></div>
            </div>

            <div className="relative z-10 w-full max-w-4xl bg-white dark:bg-zinc-900 rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row border dark:border-zinc-800">

                {/* Left Side - Visual */}
                <div className="md:w-5/12 bg-zinc-900 relative p-8 flex flex-col justify-between text-white">
                    <div className="absolute inset-0 z-0 opacity-40">
                        <img src="https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?q=80&w=2669&auto=format&fit=crop" className="w-full h-full object-cover" alt="Gym" />
                        <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/50 to-black"></div>
                    </div>

                    <div className="relative z-10">
                        <h2 className="text-3xl font-black italic uppercase tracking-tighter mb-4">
                            Start Your <span className="text-lime-500">Journey</span>
                        </h2>
                        <p className="text-gray-300 text-sm">
                            Join the elite community today. Transform your body and mind with our world-class facilities.
                        </p>
                    </div>

                    <div className="relative z-10 space-y-4 mt-8">
                        <div className="flex items-center gap-3">
                            <div className="p-1 rounded-full bg-lime-500/20 text-lime-400"><Check size={16} /></div>
                            <span className="font-bold text-sm">State-of-the-art Equipment</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="p-1 rounded-full bg-lime-500/20 text-lime-400"><Check size={16} /></div>
                            <span className="font-bold text-sm">Expert Personal Trainers</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="p-1 rounded-full bg-lime-500/20 text-lime-400"><Check size={16} /></div>
                            <span className="font-bold text-sm">Flexible Membership Plans</span>
                        </div>
                    </div>
                </div>

                {/* Right Side - Form */}
                <div className="md:w-7/12 p-8 md:p-12">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 uppercase tracking-wide">
                        Membership Application
                    </h3>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-wide text-gray-500 dark:text-gray-400">Full Name</label>
                                <input
                                    type="text"
                                    name="fullName"
                                    required
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    className="w-full bg-gray-50 dark:bg-zinc-800 border-none rounded-lg px-4 py-3 text-gray-900 dark:text-white focus:ring-2 focus:ring-lime-500 outline-none transition-all"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-wide text-gray-500 dark:text-gray-400">Age</label>
                                <input
                                    type="number"
                                    name="age"
                                    required
                                    value={formData.age}
                                    onChange={handleChange}
                                    className="w-full bg-gray-50 dark:bg-zinc-800 border-none rounded-lg px-4 py-3 text-gray-900 dark:text-white focus:ring-2 focus:ring-lime-500 outline-none transition-all"
                                    placeholder="25"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-wide text-gray-500 dark:text-gray-400">Email Address</label>
                            <input
                                type="email"
                                name="email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full bg-gray-50 dark:bg-zinc-800 border-none rounded-lg px-4 py-3 text-gray-900 dark:text-white focus:ring-2 focus:ring-lime-500 outline-none transition-all"
                                placeholder="john@example.com"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-wide text-gray-500 dark:text-gray-400">Phone Number</label>
                            <input
                                type="tel"
                                name="phone"
                                required
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full bg-gray-50 dark:bg-zinc-800 border-none rounded-lg px-4 py-3 text-gray-900 dark:text-white focus:ring-2 focus:ring-lime-500 outline-none transition-all"
                                placeholder="+1 (555) 000-0000"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-wide text-gray-500 dark:text-gray-400">Selected Plan</label>
                            <select
                                name="plan"
                                value={formData.plan}
                                onChange={handleChange}
                                className="w-full bg-gray-50 dark:bg-zinc-800 border-none rounded-lg px-4 py-3 text-gray-900 dark:text-white focus:ring-2 focus:ring-lime-500 outline-none transition-all appearance-none cursor-pointer"
                            >
                                <option value="Basic">Basic Plan - $29/mo</option>
                                <option value="Pro">Pro Plan - $59/mo</option>
                                <option value="Elite">Elite Plan - $99/mo</option>
                            </select>
                        </div>

                        <button
                            type="submit"
                            className="w-full py-4 mt-4 bg-lime-500 hover:bg-lime-400 text-black font-bold uppercase tracking-wider rounded-lg shadow-lg shadow-lime-500/20 hover:shadow-lime-500/40 transition-all transform hover:-translate-y-1"
                        >
                            Confirm Membership
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Join;
