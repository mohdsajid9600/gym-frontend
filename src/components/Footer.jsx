import React from "react";
import { Dumbbell, Facebook, Instagram, Twitter, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-1">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="p-2 bg-lime-500 rounded-lg">
                                <Dumbbell className="w-6 h-6 text-black" />
                            </div>
                            <span className="text-2xl font-black italic tracking-tighter">
                                POWER<span className="text-lime-500">GYM</span>
                            </span>
                        </div>
                        <p className="text-gray-400 mb-6 leading-relaxed">
                            Take your fitness to the next level with our world-class equipment and expert trainers.
                            Your journey starts here.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-lime-500 hover:text-black transition-all">
                                <Facebook size={18} />
                            </a>
                            <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-lime-500 hover:text-black transition-all">
                                <Instagram size={18} />
                            </a>
                            <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-lime-500 hover:text-black transition-all">
                                <Twitter size={18} />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-6 text-lime-500">Quick Links</h4>
                        <ul className="space-y-4 text-gray-400">
                            <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
                            <li><a href="#plans" className="hover:text-white transition-colors">Plans</a></li>
                            <li><a href="#trainers" className="hover:text-white transition-colors">Trainers</a></li>
                            <li><a href="#members" className="hover:text-white transition-colors">Members</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-6 text-lime-500">Programs</h4>
                        <ul className="space-y-4 text-gray-400">
                            <li><a href="#" className="hover:text-white transition-colors">Bodybuilding</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">CrossFit</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Yoga & Flex</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Cardio Blast</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-6 text-lime-500">Contact Us</h4>
                        <ul className="space-y-4 text-gray-400">
                            <li className="flex items-start gap-3">
                                <MapPin className="shrink-0 text-lime-500" size={20} />
                                <span>123 Fitness Blvd, Gym City, GC 12345</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="shrink-0 text-lime-500" size={20} />
                                <span>+1 (555) 123-4567</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="shrink-0 text-lime-500" size={20} />
                                <span>hello@powergym.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm">
                        © 2024 PowerGym. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-sm text-gray-500">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
