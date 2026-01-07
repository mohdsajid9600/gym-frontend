import React from "react";
import { Instagram, Twitter, Linkedin } from "lucide-react";

const Trainers = () => {
    const trainers = [
        {
            name: "Alex Drago",
            role: "Strength Coach",
            image: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&q=80&w=800",
        },
        {
            name: "Sarah Fit",
            role: "Yoga & Mobility",
            image: "https://images.unsplash.com/photo-1549476464-37392f717541?auto=format&fit=crop&q=80&w=800",
        },
        {
            name: "Mike Power",
            role: "CrossFit Expert",
            image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&q=80&w=800",
        },
        {
            name: "Emily Strong",
            role: "Cardio Specialist",
            image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop",
        }
    ];

    return (
        <section id="trainers" className="py-20 bg-gray-50 dark:bg-black transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-sm font-bold text-lime-600 dark:text-lime-500 uppercase tracking-widest mb-2">Our Team</h2>
                    <h3 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white uppercase italic">
                        Expert <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-500 to-emerald-600">Trainers</span>
                    </h3>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {trainers.map((trainer, index) => (
                        <div key={index} className="group relative overflow-hidden rounded-2xl cursor-pointer">
                            <div className="aspect-[3/4] overflow-hidden bg-gray-200 dark:bg-zinc-800">
                                <img
                                    src={trainer.image}
                                    alt={trainer.name}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0"
                                />
                            </div>

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                <h4 className="text-xl font-bold text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    {trainer.name}
                                </h4>
                                <p className="text-lime-400 font-medium mb-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                                    {trainer.role}
                                </p>
                                <div className="flex gap-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                                    <div className="p-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-lime-500 hover:text-black text-white transition-colors">
                                        <Instagram size={18} />
                                    </div>
                                    <div className="p-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-lime-500 hover:text-black text-white transition-colors">
                                        <Twitter size={18} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Trainers;
