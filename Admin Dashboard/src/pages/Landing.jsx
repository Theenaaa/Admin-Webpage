import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Shield,
    Globe,
    MapPin,
    Users,
    AlertTriangle,
    FileText,
    HelpCircle,
    Landmark,
    Phone,
    Info,
    ChevronRight
} from 'lucide-react';
import heroBg from '@/assets/hero-placeholder.jpg';
import jharkhandLogo from '@/assets/jharkhand-tourism-logo.png';

import { Button } from '@/components/ui/button';

export default function Landing() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex flex-col font-sans text-slate-800 bg-slate-50 transition-colors duration-300">

            {/* Government Header */}
            <header className="bg-white border-b border-slate-200 sticky top-0 z-50 transition-colors duration-300">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        {/* Jharkhand Tourism Logo */}
                        <img
                            src={jharkhandLogo}
                            alt="Jharkhand Tourism"
                            className="h-14 w-auto object-contain"
                        />
                    </div>

                    <nav className="hidden md:flex items-center gap-8">
                        <a href="#home" className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">Home</a>
                        <a href="#departments" className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">Departments</a>
                        <a href="#" className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">Services</a>
                        <a href="#contact" className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">Contact</a>
                    </nav>

                    <div className="flex items-center gap-4">
                        <Button variant="outline" size="sm" className="hidden sm:flex gap-2 border-slate-300 text-slate-700 hover:bg-slate-50">
                            <HelpCircle className="w-4 h-4" />
                            Helpdesk
                        </Button>
                        <Button
                            size="sm"
                            onClick={() => navigate('/login')}
                            className="bg-slate-900 hover:bg-slate-800 text-white shadow-md"
                        >
                            Login
                        </Button>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section id="home" className="relative h-[600px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img src={heroBg} alt="Tourism Landscape" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/40"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-6">
                        <img
                            src={jharkhandLogo}
                            alt="Jharkhand Tourism"
                            className="h-6 w-auto object-contain"
                        />
                        <span className="text-white/90 text-sm font-medium">Official Administration Portal</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
                        Tourism Department <br />
                        <span className="text-blue-400">Central Admin Console</span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-200 mb-10 max-w-3xl mx-auto leading-relaxed font-light">
                        Unified Governance Platform for Tourism, Safety & Public Services. <br className="hidden md:block" />
                        Manage infrastructure, safety alerts, and citizen services securely.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button
                            variant="outline"
                            className="h-12 px-8 text-base border-white/30 text-white hover:bg-white/10 hover:text-white backdrop-blur-sm w-full sm:w-auto"
                        >
                            About the System
                        </Button>
                        <Button
                            onClick={() => navigate('/login')}
                            className="h-12 px-8 text-base bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-900/20 border-none w-full sm:w-auto"
                        >
                            Proceed to Login
                        </Button>
                    </div>
                </div>
            </section>

            {/* System Overview */}
            <section className="py-20 bg-white transition-colors duration-300">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-slate-800 mb-6">About the Admin Platform</h2>
                    <p className="text-lg text-slate-600 leading-relaxed">
                        This secure admin platform provides centralized control for managing tourism operations,
                        infrastructure data, safety alerts, and public engagement services across regions.
                        Designed for authorized government officials to ensure seamless tourism governance.
                    </p>
                </div>
            </section>

            {/* Key Government Services */}
            <section id="departments" className="py-20 bg-slate-50 border-t border-slate-200 transition-colors duration-300">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-slate-800 mb-4">Key Government Services</h2>
                        <p className="text-slate-500 max-w-2xl mx-auto">
                            Facilitating efficient public service delivery and operational oversight.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Card 1 */}
                        <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all group">
                            <div className="w-14 h-14 bg-blue-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-100 transition-colors">
                                <MapPin className="w-7 h-7 text-blue-600" />
                            </div>
                            <h3 className="text-lg font-bold text-slate-800 mb-3">Tourism Governance</h3>
                            <p className="text-slate-500 text-sm leading-relaxed">
                                Information management for destinations, infrastructure, and public amenities.
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all group">
                            <div className="w-14 h-14 bg-red-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-red-100 transition-colors">
                                <AlertTriangle className="w-7 h-7 text-red-600" />
                            </div>
                            <h3 className="text-lg font-bold text-slate-800 mb-3">Public Safety</h3>
                            <p className="text-slate-500 text-sm leading-relaxed">
                                Real-time monitoring of emergency SOS alerts and safety protocols.
                            </p>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all group">
                            <div className="w-14 h-14 bg-green-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-green-100 transition-colors">
                                <Phone className="w-7 h-7 text-green-600" />
                            </div>
                            <h3 className="text-lg font-bold text-slate-800 mb-3">Citizen Support</h3>
                            <p className="text-slate-500 text-sm leading-relaxed">
                                Assistance centers, grievance redressal, and tourist helpline services.
                            </p>
                        </div>

                        {/* Card 4 */}
                        <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all group">
                            <div className="w-14 h-14 bg-purple-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-purple-100 transition-colors">
                                <FileText className="w-7 h-7 text-purple-600" />
                            </div>
                            <h3 className="text-lg font-bold text-slate-800 mb-3">Documentation</h3>
                            <p className="text-slate-500 text-sm leading-relaxed">
                                Digital repository for policies, notifications, and official circulars.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer id="contact" className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800 transition-colors duration-300">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                        <div className="col-span-1 md:col-span-2">
                            <div className="flex items-center gap-3 mb-6">
                                <Landmark className="w-8 h-8 text-slate-300" />
                                <div>
                                    <h3 className="text-white font-bold text-lg">Tourism Department</h3>
                                    <p className="text-xs uppercase tracking-wider">Government of Jharkhand</p>
                                </div>
                            </div>
                            <p className="text-sm leading-relaxed max-w-md">
                                Dedicated to promoting sustainable tourism and ensuring the safety and comfort of every visitor to our state.
                            </p>
                        </div>

                        <div>
                            <h4 className="text-white font-bold mb-6">Quick Links</h4>
                            <ul className="space-y-3 text-sm">
                                <li><a href="#" className="hover:text-white transition-colors">Department Login</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Official Website</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Tenders & Notices</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">RTI Information</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-white font-bold mb-6">Contact</h4>
                            <ul className="space-y-3 text-sm">
                                <li className="flex items-start gap-3">
                                    <MapPin className="w-5 h-5 text-slate-500 flex-shrink-0" />
                                    <span>Tourism Bhawan, Main Road,<br />Ranchi, Jharkhand - 834001</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <Phone className="w-5 h-5 text-slate-500 flex-shrink-0" />
                                    <span>1800-123-4567 (Toll Free)</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
                        <p>&copy; 2025 Jharkhand Tourism Department · All rights reserved.</p>
                        <div className="flex items-center gap-6">
                            <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
                            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                            <a href="#" className="hover:text-white transition-colors">Accessibility</a>
                        </div>
                    </div>
                    <div className="mt-8 text-center text-xs text-slate-600">
                        Maintained by Tourism Department – Digital Services Division
                    </div>
                </div>
            </footer>
        </div>
    );
}
