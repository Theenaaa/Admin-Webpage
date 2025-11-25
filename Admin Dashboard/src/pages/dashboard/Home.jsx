import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Users,
    UserCheck,
    Store,
    AlertCircle,
    Siren,
    MapPin,
    Calendar,
    Activity,
    TrendingUp,
    TrendingDown,
    ArrowRight,
    CheckCircle,
    Eye,
    Plus,
    Send,
    Star,
    Package,
    IndianRupee,
    Globe
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
    LineChart,
    Line,
    AreaChart,
    Area,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell,
    Legend
} from 'recharts';

// Merged Data
const touristGrowthData = [
    { month: 'Jan', tourists: 4200, revenue: 420000 },
    { month: 'Feb', tourists: 3800, revenue: 380000 },
    { month: 'Mar', tourists: 5100, revenue: 510000 },
    { month: 'Apr', tourists: 6200, revenue: 620000 },
    { month: 'May', tourists: 5800, revenue: 580000 },
    { month: 'Jun', tourists: 7200, revenue: 720000 },
    { month: 'Jul', tourists: 8500, revenue: 850000 },
    { month: 'Aug', tourists: 9200, revenue: 920000 },
    { month: 'Sep', tourists: 7800, revenue: 780000 },
    { month: 'Oct', tourists: 8900, revenue: 890000 },
    { month: 'Nov', tourists: 10200, revenue: 1020000 },
    { month: 'Dec', tourists: 12000, revenue: 1200000 },
];

const destinationData = [
    { name: 'Taj Mahal', visits: 45000, revenue: 450000 },
    { name: 'Red Fort', visits: 38000, revenue: 380000 },
    { name: 'Jaipur City', visits: 42000, revenue: 420000 },
    { name: 'Goa Beaches', visits: 52000, revenue: 520000 },
    { name: 'Kerala', visits: 35000, revenue: 350000 },
];

const countryData = [
    { name: 'USA', value: 30, color: '#3b82f6' },
    { name: 'UK', value: 20, color: '#10b981' },
    { name: 'China', value: 15, color: '#f59e0b' },
    { name: 'Germany', value: 12, color: '#ef4444' },
    { name: 'Others', value: 23, color: '#8b5cf6' },
];

const guidePerformance = [
    { name: 'Rajesh Kumar', tours: 89, rating: 4.8, revenue: 89000 },
    { name: 'Priya Sharma', tours: 76, rating: 4.9, revenue: 76000 },
    { name: 'Amit Patel', tours: 95, rating: 4.7, revenue: 95000 },
    { name: 'Neha Singh', tours: 68, rating: 4.6, revenue: 68000 },
    { name: 'Vikram Reddy', tours: 82, rating: 4.8, revenue: 82000 },
];

const upcomingEvents = [
    { name: 'Diwali Festival', date: 'Nov 12, 2025', location: 'Delhi' },
    { name: 'Goa Carnival', date: 'Feb 15, 2026', location: 'Goa' },
    { name: 'Holi Celebration', date: 'Mar 8, 2026', location: 'Mathura' },
];

const quickActions = [
    { label: 'Approve Vendors', icon: CheckCircle, path: '/vendors' },
    { label: 'Approve Guides', icon: UserCheck, path: '/guides' },
    { label: 'View SOS Live Map', icon: Siren, path: '/sos' },
    { label: 'Add Event', icon: Plus, path: '/events' },
    { label: 'Push Travel Advisory', icon: Send, path: '/notifications' },
    { label: 'Add Destination', icon: MapPin, path: '/destinations' },
];

export default function Home() {
    const navigate = useNavigate();

    return (
        <div className="space-y-8">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-foreground">Dashboard Overview</h1>
                    <p className="text-muted-foreground mt-2">Welcome back, Admin! Here's what's happening today.</p>
                </div>
                <div className="flex gap-2">
                    <Badge variant="outline" className="text-sm px-3 py-1">
                        <Calendar className="w-4 h-4 mr-1" />
                        Last 12 Months
                    </Badge>
                </div>
            </div>

            {/* Section 1: Key Performance Indicators (Financial & Growth) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="glass-card border-border">
                    <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-muted-foreground text-sm mb-1">Total Tours Completed</p>
                                <p className="text-3xl font-bold text-foreground">12.5K</p>
                                <div className="flex items-center gap-1 mt-2">
                                    <CheckCircle className="w-4 h-4 text-green-600" />
                                    <span className="text-sm text-green-600 font-medium">+15.3%</span>
                                </div>
                            </div>
                            <div className="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-xl flex items-center justify-center">
                                <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400" />
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card className="glass-card border-border">
                    <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-muted-foreground text-sm mb-1">Total Tourists Registered</p>
                                <p className="text-3xl font-bold text-foreground">89.2K</p>
                                <div className="flex items-center gap-1 mt-2">
                                    <TrendingUp className="w-4 h-4 text-green-600" />
                                    <span className="text-sm text-green-600 font-medium">+18.2%</span>
                                </div>
                            </div>
                            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-xl flex items-center justify-center">
                                <Users className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card className="glass-card border-border">
                    <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-muted-foreground text-sm mb-1">Avg. Rating</p>
                                <p className="text-3xl font-bold text-foreground">4.7</p>
                                <div className="flex items-center gap-1 mt-2">
                                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                    <span className="text-sm text-muted-foreground">Excellent</span>
                                </div>
                            </div>
                            <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900/20 rounded-xl flex items-center justify-center">
                                <Star className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card className="glass-card border-border">
                    <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-muted-foreground text-sm mb-1">Active Destinations</p>
                                <p className="text-3xl font-bold text-foreground">156</p>
                                <div className="flex items-center gap-1 mt-2">
                                    <Activity className="w-4 h-4 text-blue-600" />
                                    <span className="text-sm text-muted-foreground">+12 new</span>
                                </div>
                            </div>
                            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-xl flex items-center justify-center">
                                <MapPin className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Section 2: Operational Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                <Card className="glass-card hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-105" onClick={() => navigate('/dashboard/guides')}>
                    <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-muted-foreground text-sm font-medium mb-1">Active<br />Guides</p>
                                <h3 className="text-2xl font-bold text-foreground">5</h3>
                                <span className="text-sm text-green-500 font-medium">+5 new</span>
                            </div>
                            <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center">
                                <UserCheck className="w-6 h-6 text-green-500" />
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card className="glass-card hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-105" onClick={() => navigate('/dashboard/vendors')}>
                    <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-muted-foreground text-sm font-medium mb-1">Active Vendors</p>
                                <h3 className="text-2xl font-bold text-foreground">892</h3>
                                <span className="text-sm text-green-500 font-medium">+8 today</span>
                            </div>
                            <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center">
                                <Store className="w-6 h-6 text-purple-500" />
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card className="glass-card hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-105" onClick={() => navigate('/dashboard/guides')}>
                    <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-muted-foreground text-sm font-medium mb-1">Pending Verifications</p>
                                <h3 className="text-2xl font-bold text-foreground">28</h3>
                                <span className="text-sm text-orange-500 font-medium">Action needed</span>
                            </div>
                            <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center">
                                <AlertCircle className="w-6 h-6 text-orange-500" />
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card className="glass-card hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-105" onClick={() => navigate('/dashboard/sos')}>
                    <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-muted-foreground text-sm font-medium mb-1">Today's SOS Alerts</p>
                                <h3 className="text-2xl font-bold text-foreground">3</h3>
                                <span className="text-sm text-red-500 font-medium">Live updates</span>
                            </div>
                            <div className="w-12 h-12 bg-red-500/10 rounded-xl flex items-center justify-center">
                                <Siren className="w-6 h-6 text-red-500" />
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card className="glass-card hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-105" onClick={() => navigate('/dashboard/marketplace')}>
                    <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-muted-foreground text-sm font-medium mb-1">Pending Products</p>
                                <h3 className="text-2xl font-bold text-foreground">3</h3>
                                <span className="text-sm text-blue-500 font-medium">Action needed</span>
                            </div>
                            <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center">
                                <Package className="w-6 h-6 text-blue-500" />
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Section 3: Primary Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Tourist Growth & Revenue */}
                <Card className="glass-card border-border">
                    <CardHeader>
                        <CardTitle className="text-foreground">Tourist Growth & Revenue</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ResponsiveContainer width="100%" height={300}>
                            <AreaChart data={touristGrowthData}>
                                <defs>
                                    <linearGradient id="colorTourists" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                                        <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                                <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
                                <YAxis stroke="hsl(var(--muted-foreground))" />
                                <Tooltip
                                    contentStyle={{
                                        backgroundColor: 'hsl(var(--card))',
                                        border: '1px solid hsl(var(--border))',
                                        borderRadius: '8px',
                                        color: 'hsl(var(--foreground))'
                                    }}
                                />
                                <Area
                                    type="monotone"
                                    dataKey="tourists"
                                    stroke="#3b82f6"
                                    fillOpacity={1}
                                    fill="url(#colorTourists)"
                                />
                            </AreaChart>
                        </ResponsiveContainer>
                    </CardContent>
                </Card>

                {/* Country Distribution */}
                <Card className="glass-card border-border">
                    <CardHeader>
                        <CardTitle className="text-foreground">Tourist Distribution by Country</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ResponsiveContainer width="100%" height={300}>
                            <PieChart>
                                <Pie
                                    data={countryData}
                                    cx="50%"
                                    cy="50%"
                                    labelLine={false}
                                    label={({ name, value }) => `${name}: ${value}%`}
                                    outerRadius={100}
                                    fill="#8884d8"
                                    dataKey="value"
                                >
                                    {countryData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.color} />
                                    ))}
                                </Pie>
                                <Tooltip
                                    contentStyle={{
                                        backgroundColor: 'hsl(var(--card))',
                                        border: '1px solid hsl(var(--border))',
                                        borderRadius: '8px',
                                        color: 'hsl(var(--foreground))'
                                    }}
                                />
                            </PieChart>
                        </ResponsiveContainer>
                    </CardContent>
                </Card>
            </div>

            {/* Section 4: Secondary Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Top Destinations */}
                <Card className="glass-card border-border">
                    <CardHeader>
                        <CardTitle className="text-foreground">Top Destinations by Visits</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ResponsiveContainer width="100%" height={300}>
                            <BarChart data={destinationData}>
                                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                                <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" />
                                <YAxis stroke="hsl(var(--muted-foreground))" />
                                <Tooltip
                                    contentStyle={{
                                        backgroundColor: 'hsl(var(--card))',
                                        border: '1px solid hsl(var(--border))',
                                        borderRadius: '8px',
                                        color: 'hsl(var(--foreground))'
                                    }}
                                />
                                <Bar dataKey="visits" fill="#10b981" radius={[8, 8, 0, 0]} />
                            </BarChart>
                        </ResponsiveContainer>
                    </CardContent>
                </Card>

                {/* Revenue Trend */}
                <Card className="glass-card border-border">
                    <CardHeader>
                        <CardTitle className="text-foreground">Monthly Revenue Trend</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ResponsiveContainer width="100%" height={300}>
                            <LineChart data={touristGrowthData}>
                                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                                <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
                                <YAxis stroke="hsl(var(--muted-foreground))" />
                                <Tooltip
                                    contentStyle={{
                                        backgroundColor: 'hsl(var(--card))',
                                        border: '1px solid hsl(var(--border))',
                                        borderRadius: '8px',
                                        color: 'hsl(var(--foreground))'
                                    }}
                                />
                                <Legend />
                                <Line
                                    type="monotone"
                                    dataKey="revenue"
                                    stroke="#10b981"
                                    strokeWidth={3}
                                    dot={{ fill: '#10b981', r: 5 }}
                                    activeDot={{ r: 7 }}
                                />
                            </LineChart>
                        </ResponsiveContainer>
                    </CardContent>
                </Card>
            </div>

            {/* Section 5: Lists & Actions */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Top Performing Guides */}
                <Card className="glass-card border-border lg:col-span-1">
                    <CardHeader>
                        <CardTitle className="text-foreground">Top Performing Guides</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-3">
                            {guidePerformance.map((guide, idx) => (
                                <div key={idx} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg hover:bg-muted transition-colors">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                                            <span className="text-sm font-bold text-primary">{idx + 1}</span>
                                        </div>
                                        <div>
                                            <p className="font-semibold text-foreground">{guide.name}</p>
                                            <p className="text-xs text-muted-foreground">{guide.tours} tours</p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <div className="flex items-center gap-1 justify-end">
                                            <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                                            <span className="text-sm font-semibold text-foreground">{guide.rating}</span>
                                        </div>
                                        <p className="text-xs font-semibold text-green-600">₹{guide.revenue.toLocaleString()}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                {/* Quick Actions & Events */}
                <div className="lg:col-span-2 space-y-6">
                    {/* Quick Actions */}
                    <Card className="glass-card">
                        <CardHeader>
                            <CardTitle className="text-lg font-semibold text-foreground">Quick Actions</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                {quickActions.map((action, index) => (
                                    <Button
                                        key={index}
                                        variant="outline"
                                        className="h-auto py-6 flex flex-col items-center gap-3 hover:bg-primary/10 hover:border-primary/50 border-border text-foreground hover:text-primary transition-all duration-200"
                                        onClick={() => navigate(action.path)}
                                    >
                                        <action.icon className="w-6 h-6 text-primary" />
                                        <span className="text-sm font-medium text-center">{action.label}</span>
                                    </Button>
                                ))}
                            </div>
                        </CardContent>
                    </Card>

                    {/* Upcoming Events */}
                    <Card className="glass-card">
                        <CardHeader>
                            <CardTitle className="text-lg font-semibold text-foreground">Upcoming Festivals & Events</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                {upcomingEvents.map((event, index) => (
                                    <div key={index} className="flex items-start gap-3 p-3 rounded-xl hover:bg-muted/50 transition-colors">
                                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <Calendar className="w-5 h-5 text-primary" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <h4 className="font-semibold text-foreground text-sm">{event.name}</h4>
                                            <p className="text-xs text-muted-foreground mt-1">{event.date}</p>
                                            <div className="flex items-center gap-1 mt-1">
                                                <MapPin className="w-3 h-3 text-muted-foreground" />
                                                <span className="text-xs text-muted-foreground">{event.location}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>

            {/* Section 6: System Health */}
            <Card className="glass-card">
                <CardHeader>
                    <CardTitle className="text-lg font-semibold text-foreground">System Health</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-xl flex items-center justify-center">
                                <Activity className="w-6 h-6 text-green-600 dark:text-green-400" />
                            </div>
                            <div>
                                <p className="text-sm text-muted-foreground">Uptime</p>
                                <p className="text-xl font-bold text-foreground">99.9%</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-xl flex items-center justify-center">
                                <Activity className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                            </div>
                            <div>
                                <p className="text-sm text-muted-foreground">Server Load</p>
                                <p className="text-xl font-bold text-foreground">45%</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-xl flex items-center justify-center">
                                <Activity className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                            </div>
                            <div>
                                <p className="text-sm text-muted-foreground">API Response</p>
                                <p className="text-xl font-bold text-foreground">120ms</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/20 rounded-xl flex items-center justify-center">
                                <Activity className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                            </div>
                            <div>
                                <p className="text-sm text-muted-foreground">Active Users</p>
                                <p className="text-xl font-bold text-foreground">1,234</p>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
