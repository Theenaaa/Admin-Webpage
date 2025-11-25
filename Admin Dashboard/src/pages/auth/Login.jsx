import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import { Button } from '@/components/ui/button';
import { Loader2, Lock, Mail, ArrowLeft, AlertCircle } from 'lucide-react';

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
  <div className="min-h-screen w-full flex items-center justify-center bg-neutral-100 px-4">
    {/* Back to Home */}
    <button
      onClick={() => navigate('/')}
      className="absolute top-6 left-6 inline-flex items-center gap-2 text-sm text-neutral-500 hover:text-neutral-900 transition-colors"
    >
      <ArrowLeft className="w-4 h-4" />
      Back to Home
    </button>

      {/* Main Card: LEFT = login, RIGHT = signup */}
      <div className="relative w-full max-w-5xl bg-white rounded-3xl shadow-lg border border-slate-200 overflow-hidden">
<div className="grid grid-cols-1 md:grid-cols-2 min-h-[520px]">
         {/* LEFT: Login panel */}
<div className="px-8 py-10 md:px-12 md:py-14 bg-white">
  {/* Mini logo / title */}
  <div className="flex items-center gap-2 mb-10">
    <div className="h-9 w-9 rounded-xl border border-neutral-400 bg-neutral-50 flex items-center justify-center text-xs font-semibold text-neutral-800">
      TD
    </div>
    <span className="text-sm font-semibold tracking-wide text-neutral-700">
      Tourism Admin Portal
    </span>
  </div>

  {/* Heading */}
  <h1 className="text-3xl md:text-4xl font-bold text-neutral-900">
    Login to Your Account
  </h1>
  <p className="mt-2 text-sm text-neutral-500">
    Login using social networks
  </p>

  {/* Social buttons */}
  <div className="mt-6 flex items-center gap-4">
    <button className="h-10 w-10 rounded-full bg-neutral-900 text-white text-sm font-semibold flex items-center justify-center">
      f
    </button>
    <button className="h-10 w-10 rounded-full bg-neutral-700 text-white text-sm font-semibold flex items-center justify-center">
      G+
    </button>
    <button className="h-10 w-10 rounded-full bg-neutral-800 text-white text-sm font-semibold flex items-center justify-center">
      in
    </button>
  </div>

  {/* OR divider */}
  <div className="mt-8 flex items-center gap-4">
    <div className="h-px flex-1 bg-neutral-200" />
    <span className="text-[11px] uppercase tracking-[0.25em] text-neutral-400">
      or
    </span>
    <div className="h-px flex-1 bg-neutral-200" />
  </div>

  {/* Error */}
  {error && (
    <div className="mt-6 flex items-start gap-3 p-3 rounded-xl bg-red-50 border border-red-200">
      <AlertCircle className="w-4 h-4 text-red-500 mt-0.5" />
      <div className="text-xs text-red-700">
        <p className="font-semibold">Authentication failed</p>
        <p>{error}</p>
      </div>
    </div>
  )}

  {/* Form */}
  <form onSubmit={handleSubmit} className="mt-6 space-y-4">
    {/* Email */}
    <div className="space-y-1">
      <label className="text-xs font-semibold text-neutral-700">
        Email
      </label>
      <div className="relative">
        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full pl-11 pr-4 py-3 rounded-full bg-neutral-50 border border-neutral-200 text-sm text-neutral-900 placeholder:text-neutral-400 outline-none focus:ring-2 focus:ring-neutral-700 focus:border-neutral-700"
          placeholder="Email"
          required
        />
      </div>
    </div>

    {/* Password */}
    <div className="space-y-1">
      <label className="text-xs font-semibold text-neutral-700">
        Password
      </label>
      <div className="relative">
        <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full pl-11 pr-4 py-3 rounded-full bg-neutral-50 border border-neutral-200 text-sm text-neutral-900 placeholder:text-neutral-400 outline-none focus:ring-2 focus:ring-neutral-700 focus:border-neutral-700"
          placeholder="Password"
          required
        />
      </div>
    </div>

    {/* Remember + Forgot */}
    <div className="flex items-center justify-between text-xs mt-1">
      <label className="flex items-center gap-2 cursor-pointer text-neutral-500">
        <input
          type="checkbox"
          className="w-4 h-4 rounded border-neutral-300 text-neutral-800 focus:ring-neutral-600"
        />
        <span>Remember me</span>
      </label>
      <button
        type="button"
        className="text-neutral-500 hover:text-neutral-900"
      >
        Forgot password?
      </button>
    </div>

    {/* Submit */}
    <Button
      type="submit"
      className="mt-4 w-full h-11 rounded-full bg-neutral-900 hover:bg-black text-white text-sm font-semibold shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
      disabled={loading}
    >
      {loading ? (
        <span className="inline-flex items-center gap-2">
          <Loader2 className="w-4 h-4 animate-spin" />
          Signing in...
        </span>
      ) : (
        'Sign In'
      )}
    </Button>
  </form>
</div>

{/* RIGHT SIDE — SIGNUP PANEL WITH IMAGE */}
<div className="relative flex flex-col justify-center items-center p-10 text-black overflow-hidden min-h-[520px]">

  {/* Background image */}
  <div
    className="absolute inset-0 bg-cover bg-center opacity-72"
    style={{
      backgroundImage: "url('/login-sidebar.jpg')"
    }}
  />

  {/* Content on top of image */}
  <div className="relative z-10 text-center space-y-6">
    <h2 className="text-4xl font-bold">New Here?</h2>
    <p className="text-sm opacity-60 max-w-xs mx-auto">
      Sign up and discover a great amount of new opportunities!
    </p>

    <button className="px-8 py-3 rounded-full bg-black text-white font-semibold hover:bg-neutral-800 transition">
      Sign Up
    </button>
  </div>
</div>


        </div>
      </div>
    </div>
  );
}
