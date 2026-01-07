import React from "react";
import { Check } from "lucide-react";

const Plans = () => {
    const plans = [
        {
            name: "Basic",
            price: "29",
            features: ["Access to gym floor", "Locker room access", "Free WiFi", "1 Guest pass/month"],
            recommended: false,
        },
        {
            name: "Pro",
            price: "59",
            features: ["All Basic features", "Group fitness classes", "Sauna & Steam room", "Nutrition consultation"],
            recommended: true,
        },
        {
            name: "Elite",
            price: "99",
            features: ["All Pro features", "Personal Training (2x/mo)", "Private locker", "Smoothie bar discount"],
            recommended: false,
        },
    ];

    return (
        <section id="plans" className="py-20 bg-white dark:bg-zinc-900 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-sm font-bold text-lime-600 dark:text-lime-500 uppercase tracking-widest mb-2">Membership Plans</h2>
                    <h3 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white uppercase italic">
                        Choose Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-500 to-emerald-600">Level</span>
                    </h3>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`relative p-8 border rounded-2xl transition-all duration-300 hover:-translate-y-2 group
                ${plan.recommended
                                    ? "bg-zinc-900 dark:bg-zinc-800 border-lime-500 shadow-2xl scale-105 z-10"
                                    : "bg-gray-50 dark:bg-zinc-950 border-gray-200 dark:border-zinc-800 hover:shadow-xl hover:border-lime-500/50"
                                }
              `}
                        >
                            {plan.recommended && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-lime-500 text-black font-bold px-4 py-1 rounded-full text-sm uppercase tracking-wider">
                                    Most Popular
                                </div>
                            )}

                            <h4 className={`text-2xl font-bold mb-2 ${plan.recommended ? "text-white" : "text-gray-900 dark:text-white"}`}>
                                {plan.name}
                            </h4>
                            <div className="flex items-end gap-1 mb-8">
                                <span className={`text-5xl font-black ${plan.recommended ? "text-lime-400" : "text-gray-900 dark:text-white"}`}>
                                    ${plan.price}
                                </span>
                                <span className="text-gray-500 dark:text-gray-400 font-medium pb-2">/month</span>
                            </div>

                            <ul className="space-y-4 mb-8">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <div className={`p-1 rounded-full ${plan.recommended ? 'bg-lime-500/20 text-lime-400' : 'bg-gray-200 dark:bg-zinc-800 text-gray-700 dark:text-gray-300'}`}>
                                            <Check size={14} strokeWidth={3} />
                                        </div>
                                        <span className={`text-sm ${plan.recommended ? 'text-gray-300' : 'text-gray-600 dark:text-gray-400'}`}>
                                            {feature}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            <button className={`w-full py-4 rounded-xl font-bold uppercase tracking-wide transition-all duration-300
                ${plan.recommended
                                    ? "bg-lime-500 text-black hover:bg-lime-400 hover:shadow-[0_0_20px_rgba(132,204,22,0.4)]"
                                    : "bg-gray-900 dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200"
                                }
              `}>
                                Choose Plan
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Plans;
