import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Dumbbell } from "lucide-react";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setLoading(true);
        try {
            await login(email, password);
            navigate("/");
        } catch (err) {
            setError("Failed to sign in. Please check your credentials.");
        }
        setLoading(false);
    };

    return (
        <div className="relative flex min-h-screen items-center justify-center px-4 py-12 transition-colors duration-300">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=2670&auto=format&fit=crop"
                    alt="Gym Background"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-white/30 dark:bg-black/70 backdrop-blur-sm"></div>
            </div>

            <div className="relative z-10 w-full max-w-md space-y-8 rounded-2xl bg-white/90 p-8 shadow-2xl dark:bg-zinc-900/90 border border-gray-200 dark:border-zinc-800 backdrop-blur-md">
                <div className="text-center">
                    <Link to="/" className="inline-flex items-center gap-2 mb-6 group">
                        <div className="p-2 bg-lime-400 rounded-lg group-hover:rotate-12 transition-transform">
                            <Dumbbell className="w-6 h-6 text-black" />
                        </div>
                        <span className="text-2xl font-black italic tracking-tighter text-gray-900 dark:text-white">
                            POWER<span className="text-lime-500">GYM</span>
                        </span>
                    </Link>
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Welcome Back
                    </h2>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                        Sign in to access your dashboard
                    </p>
                </div>

                {error && <div className="p-3 bg-red-100 border border-red-200 text-red-700 rounded-lg text-sm">{error}</div>}

                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="email-address" className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-1">
                                Email address
                            </label>
                            <input
                                id="email-address"
                                name="email"
                                type="email"
                                required
                                className="block w-full rounded-lg border-gray-300 bg-gray-50 dark:bg-zinc-800 dark:border-zinc-700 text-gray-900 dark:text-white focus:ring-lime-500 focus:border-lime-500 sm:text-sm p-3 border outline-none transition-all"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-1">
                                Password
                            </label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                required
                                className="block w-full rounded-lg border-gray-300 bg-gray-50 dark:bg-zinc-800 dark:border-zinc-700 text-gray-900 dark:text-white focus:ring-lime-500 focus:border-lime-500 sm:text-sm p-3 border outline-none transition-all"
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="group relative flex w-full justify-center rounded-lg bg-lime-500 py-3 text-sm font-bold uppercase tracking-wider text-black hover:bg-lime-400 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                        {loading ? "Signing in..." : "Sign in"}
                    </button>
                </form>
                <div className="text-center text-sm">
                    <span className="text-gray-500 dark:text-gray-400">
                        Don't have an account?{' '}
                        <Link to="/signup" className="font-bold text-lime-600 hover:text-lime-500 dark:text-lime-500 transition-colors">
                            Register Now
                        </Link>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Login;
