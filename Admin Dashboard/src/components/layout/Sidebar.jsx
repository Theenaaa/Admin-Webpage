import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {
    LayoutDashboard,
    Users,
    Store,
    UserCheck,
    MessageSquare,
    Map,
    Calendar,
    Box,
    ShoppingBag,
    BookOpen,
    Siren,
    Bell,
    LogOut
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useAuth } from '@/context/AuthContext';
import logoImg from '@/assets/jharkhand_tourism_logo.png';

const navItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard' },
    { icon: UserCheck, label: 'Guide Verification', path: '/dashboard/guides' },
    { icon: Store, label: 'Vendor Management', path: '/dashboard/vendors' },
    { icon: MessageSquare, label: 'Reviews', path: '/dashboard/reviews' },
    { icon: Map, label: 'Destinations', path: '/dashboard/destinations' },
    { icon: Calendar, label: 'Events', path: '/dashboard/events' },
    { icon: Box, label: 'AR/VR Assets', path: '/dashboard/assets' },
    { icon: ShoppingBag, label: 'Marketplace', path: '/dashboard/marketplace' },
    { icon: BookOpen, label: 'Knowledge Base', path: '/dashboard/knowledge-base' },
    { icon: Siren, label: 'SOS Console', path: '/dashboard/sos' },
    { icon: Bell, label: 'Notifications', path: '/dashboard/notifications' },
];

export default function Sidebar() {
    const { logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    return (
        <aside className="w-64 bg-white dark:bg-card border-r border-neutral-100 dark:border-border h-screen fixed left-0 top-0 overflow-y-auto z-50 hidden md:flex flex-col transition-colors duration-300">
            <div className="p-6 flex justify-center">
                <img src={logoImg} alt="Jharkhand Tourism" className="h-12 w-auto object-contain" />
            </div>

            <nav className="flex-1 px-4 space-y-2">
                {navItems.map((item) => (
                    <NavLink
                        key={item.path}
                        to={item.path}
                        end={item.path === '/dashboard'}
                        className={({ isActive }) =>
                            cn(
                                "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 group relative overflow-hidden",
                                isActive
                                    ? "bg-gradient-to-r from-primary to-primary/90 text-primary-foreground shadow-md shadow-primary/25 translate-x-1"
                                    : "text-muted-foreground hover:bg-gray-100 hover:text-accent-foreground hover:translate-x-1"
                            )
                        }
                    >
                        {({ isActive }) => (
                            <>
                                <item.icon className={cn("w-5 h-5 transition-transform duration-300", isActive && "scale-110")} />
                                <span className="font-medium">{item.label}</span>
                            </>
                        )}
                    </NavLink>
                ))}
            </nav>
            <div className="p-4 mt-auto">
                <button
                    onClick={handleLogout}
                    className={cn(
                        "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 group relative overflow-hidden w-full",
                        "text-muted-foreground hover:bg-gray-100 hover:text-accent-foreground hover:translate-x-1"
                    )}
                >
                    <LogOut className="w-5 h-5 transition-transform duration-300" />
                    <span className="font-medium">Logout</span>
                </button>
            </div>
        </aside >
    );
}
