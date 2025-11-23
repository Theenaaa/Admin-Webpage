import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import { Button } from '@/components/ui/button';
import { Loader2, Lock, Mail, ShieldCheck, ArrowLeft, AlertCircle } from 'lucide-react';
import loginBg from '@/assets/login-bg.jpg';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/dashboard';

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);
        try {
            await login(email, password);
            navigate(from, { replace: true });
        } catch (err) {
            setError('Invalid email or password');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-slate-950 dark:bg-slate-950 p-4 relative overflow-hidden">
            {/* Split Background Design */}
            {/* Top Half - Smaller (35%) - LIGHT */}
            <div className="absolute top-0 left-0 right-0 h-[35%] bg-gradient-to-br from-blue-400 via-cyan-400 to-indigo-400 opacity-30">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    backgroundSize: '60px 60px'
                }}></div>
            </div>

            {/* Bottom Half - Larger (65%) - DARK */}
            <div className="absolute bottom-0 left-0 right-0 h-[65%] bg-gradient-to-tr from-purple-950 via-indigo-950 to-slate-950 opacity-40">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.08'%3E%3Cpath d='M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10S0 25.523 0 20s4.477-10 10-10zm10 8c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm40 40c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    backgroundSize: '80px 80px'
                }}></div>
            </div>

            {/* Decorative gradient orbs */}
            <div className="absolute top-10 right-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>

            {/* Back to Home Button */}
            <button
                onClick={() => navigate('/')}
                className="absolute top-6 left-6 inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors z-20"
            >
                <ArrowLeft className="w-4 h-4" />
                Back to Home
            </button>

            {/* Main Login Card */}
            <div className="relative w-full max-w-3xl">
<div className="bg-slate-900 dark:bg-slate-900 rounded-2xl shadow-2xl overflow-hidden border border-slate-800">
                    <div className="grid lg:grid-cols-2">
                        {/* Left Side - Image Section */}
                        <div className="relative hidden lg:block overflow-hidden">
                            {/* Background Image */}
                            <div className="absolute inset-0">
                                <img
                                    src={loginBg}
                                    alt="Tourism Landscape"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
                            </div>

                            {/* Content at Bottom */}
<div className="relative z-10 h-full flex flex-col justify-end p-6 text-white">
                                <div className="space-y-4">
<h1 className="text-4xl font-bold leading-tight">
                                        WELCOME<br />
                                        AGAIN
                                    </h1>
                                    <p className="text-slate-200 text-base leading-relaxed max-w-sm">
                                        Sign in to access the Tourism Department Admin Console and manage tourism services across Jharkhand.
                                    </p>
                                </div>

                                {/* Security Badge */}
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md w-fit mt-6">
                                    <ShieldCheck className="w-4 h-4" />
                                    <span className="text-sm font-medium">Secure Portal</span>
                                </div>
                            </div>
                        </div>

                        {/* Right Side - Login Form */}
<div className="p-5 lg:p-6 flex items-center bg-slate-900 dark:bg-slate-900">
                            <div className="w-full max-w-md mx-auto space-y-4">
                                {/* Form Header */}
                                <div className="text-center space-y-2">
                                    <h2 className="text-3xl font-bold text-white">Log In</h2>
                                    <p className="text-slate-400 text-sm">
                                        Enter your credentials to continue
                                    </p>
                                </div>

                                {/* Login Form */}
<form onSubmit={handleSubmit} className="space-y-4">
                                    {/* Error Alert */}
                                    {error && (
                                        <div className="flex items-start gap-3 p-4 rounded-xl bg-red-900/20 border border-red-800">
                                            <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                                            <div className="flex-1">
                                                <p className="text-sm font-medium text-red-200">Authentication Failed</p>
                                                <p className="text-sm text-red-300 mt-1">{error}</p>
                                            </div>
                                        </div>
                                    )}

                                    {/* Email Field */}
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-slate-300">
                                            Email Address
                                        </label>
                                        <div className="relative">
                                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                                            <input
                                                type="email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-700 bg-slate-800 focus:border-blue-500 focus:bg-slate-800/80 outline-none transition-all text-white placeholder:text-slate-500"
                                                placeholder="user name"
                                                required
                                            />
                                        </div>
                                    </div>

                                    {/* Password Field */}
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-slate-300">
                                            Password
                                        </label>
                                        <div className="relative">
                                            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                                            <input
                                                type="password"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                                className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-700 bg-slate-800 focus:border-blue-500 focus:bg-slate-800/80 outline-none transition-all text-white placeholder:text-slate-500"
                                                placeholder="password"
                                                required
                                            />
                                        </div>
                                        <div className="text-right">
                                            <a
                                                href="#"
                                                className="text-sm text-slate-400 hover:text-blue-400 transition-colors"
                                            >
                                                Forgot your password?
                                            </a>
                                        </div>
                                    </div>

                                    {/* Remember Me */}
                                    <div className="flex items-center">
                                        <label className="flex items-center gap-2 cursor-pointer">
                                            <input
                                                type="checkbox"
                                                className="w-4 h-4 rounded border-slate-700 bg-slate-800 text-blue-600 focus:ring-2 focus:ring-blue-500"
                                            />
                                            <span className="text-sm text-slate-400">Remember me</span>
                                        </label>
                                    </div>

                                    {/* Submit Button */}
                                    <Button
                                        type="submit"
                                        className="w-full h-12 text-base font-semibold bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl shadow-lg shadow-blue-500/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                                        disabled={loading}
                                    >
                                        {loading ? (
                                            <div className="flex items-center gap-2">
                                                <Loader2 className="w-5 h-5 animate-spin" />
                                                <span>Signing in...</span>
                                            </div>
                                        ) : (
                                            'Log in'
                                        )}
                                    </Button>
                                </form>

                                {/* Sign Up Link */}
                                <div className="text-center">
                                    <p className="text-sm text-slate-400">
                                        Don't have any account? {' '}
                                        <a
                                            href="#"
                                            className="font-semibold text-blue-400 hover:text-blue-300 transition-colors"
                                        >
                                            Sign Up
                                        </a>
                                    </p>
                                </div>

                                {/* Security Notice */}
                                <div className="pt-4 border-t border-slate-800">
                                    <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-800/50">
                                        <ShieldCheck className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                                        <div className="text-xs text-slate-400">
                                            <p className="font-medium text-slate-200 mb-1">Secure Connection</p>
                                            <p>Your credentials are encrypted and transmitted securely. This portal is for authorized personnel only.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
