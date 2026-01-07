import React from "react";
import { ArrowRight, Play } from "lucide-react";

const Hero = () => {
    return (
        <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2670&auto=format&fit=crop"
                    alt="Gym Background"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent dark:from-black/95 dark:to-black/40"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20">
                <div className="max-w-3xl">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-lime-500/20 border border-lime-500/30 text-lime-400 mb-6 backdrop-blur-sm animate-fade-in-up">
                        <span className="w-2 h-2 rounded-full bg-lime-500 animate-pulse"></span>
                        <span className="text-xs font-bold tracking-widest uppercase">Premium Fitness Experience</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-tight mb-6 tracking-tighter">
                        UNLEASH <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-emerald-600">
                            YOUR POTENTIAL
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl leading-relaxed">
                        Join the elite community of movers, shapers, and noise makers.
                        Experience state-of-the-art equipment and world-class training.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <button className="group px-8 py-4 bg-lime-500 hover:bg-lime-400 text-black font-bold text-lg uppercase tracking-wider rounded-sm transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(132,204,22,0.4)] hover:shadow-[0_0_30px_rgba(132,204,22,0.6)]">
                            Start Free Trial
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>

                        <button className="group px-8 py-4 bg-transparent border-2 border-white/20 text-white hover:bg-white/10 font-bold text-lg uppercase tracking-wider rounded-sm transition-all flex items-center justify-center gap-2 backdrop-blur-sm">
                            <Play className="w-5 h-5 fill-current" />
                            Watch Video
                        </button>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
                <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
                    <div className="w-1.5 h-1.5 bg-lime-500 rounded-full animate-ping" />
                </div>
            </div>
        </section>
    );
};

export default Hero;
