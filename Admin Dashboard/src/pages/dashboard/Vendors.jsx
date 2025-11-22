import React, { useState, useRef } from 'react';
import {
    Search,
    Filter,
    Eye,
    CheckCircle,
    XCircle,
    Store,
    Phone,
    Mail,
    MapPin,
    Star,
    Calendar,
    FileText,
    Shield,
    Clock,
    AlertTriangle
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

// Sample data
const vendors = [
    {
        id: 1,
        name: 'Heritage Hotels Pvt Ltd',
        type: 'Hotel',
        email: 'contact@heritagehotels.com',
        phone: '+91 98765 43210',
        location: 'Jaipur, Rajasthan',
        license: 'HTL-2024-001',
        licenseExpiry: '2025-12-31',
        status: 'active',
        rating: 4.5,
        verifiedDate: '2024-01-15',
        servicesOffered: ['Accommodation', 'Restaurant', 'Spa'],
        fraudAlerts: 0
    },
    {
        id: 2,
        name: 'Royal Transport Services',
        type: 'Transport',
        email: 'info@royaltransport.com',
        phone: '+91 98765 43211',
        location: 'Delhi',
        license: 'TRP-2024-045',
        licenseExpiry: '2025-06-30',
        status: 'pending',
        rating: 4.2,
        verifiedDate: null,
        servicesOffered: ['Car Rental', 'Bus Service'],
        fraudAlerts: 0
    },
    {
        id: 3,
        name: 'Spice Route Restaurant',
        type: 'Restaurant',
        email: 'hello@spiceroute.com',
        phone: '+91 98765 43212',
        location: 'Mumbai',
        license: 'RST-2024-089',
        licenseExpiry: '2025-03-15',
        status: 'active',
        rating: 4.8,
        verifiedDate: '2024-02-20',
        servicesOffered: ['Fine Dining', 'Catering'],
        fraudAlerts: 0
    },
    {
        id: 4,
        name: 'Adventure Tours India',
        type: 'Tour Operator',
        email: 'bookings@adventuretours.com',
        phone: '+91 98765 43213',
        location: 'Goa',
        license: 'TOR-2024-123',
        licenseExpiry: '2024-12-31',
        status: 'inactive', // Changed from expiring_soon to inactive for consistency with tabs, or map expiring_soon to active/inactive
        rating: 4.6,
        verifiedDate: '2024-01-10',
        servicesOffered: ['Trekking', 'Water Sports', 'Camping'],
        fraudAlerts: 1
    },
    {
        id: 5,
        name: 'City Cabs',
        type: 'Transport',
        email: 'citycabs@email.com',
        phone: '+91 98765 99999',
        location: 'Bangalore',
        license: 'TRP-2024-999',
        licenseExpiry: '2025-10-10',
        status: 'pending',
        rating: 4.0,
        verifiedDate: null,
        servicesOffered: ['Taxi Service'],
        fraudAlerts: 0
    }
];

export default function Vendors() {
    const [selectedVendor, setSelectedVendor] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [activeTab, setActiveTab] = useState('all'); // 'all', 'pending', 'active', 'inactive'
    const vendorsListRef = useRef(null);
    const [isGlowing, setIsGlowing] = useState(false);

    const handleApprove = (vendorId) => {
        console.log('Approving vendor:', vendorId);
    };

    const handleReject = (vendorId) => {
        console.log('Rejecting vendor:', vendorId);
    };

    const scrollToVendors = (tab) => {
        setActiveTab(tab);
        if (vendorsListRef.current) {
            vendorsListRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setIsGlowing(true);
            setTimeout(() => setIsGlowing(false), 2000);
        }
    };

    const getVendorsByTab = () => {
        switch (activeTab) {
            case 'pending': return vendors.filter(v => v.status === 'pending');
            case 'active': return vendors.filter(v => v.status === 'active');
            case 'inactive': return vendors.filter(v => v.status === 'inactive');
            default: return vendors;
        }
    };

    const filteredVendors = getVendorsByTab().filter(vendor =>
        vendor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        vendor.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        vendor.email.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const totalVendors = vendors.length;
    const activeVendorsCount = vendors.filter(v => v.status === 'active').length;
    const pendingVendorsCount = vendors.filter(v => v.status === 'pending').length;
    const inactiveVendorsCount = vendors.filter(v => v.status === 'inactive').length;

    const getStatusBadge = (status) => {
        switch (status) {
            case 'active': return <Badge className="bg-green-500 hover:bg-green-600">Active</Badge>;
            case 'pending': return <Badge className="bg-orange-500 hover:bg-orange-600">Pending</Badge>;
            case 'inactive': return <Badge className="bg-red-500 hover:bg-red-600">Inactive</Badge>;
            default: return <Badge variant="outline">{status}</Badge>;
        }
    };

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-foreground">Vendor Management</h1>
                    <p className="text-muted-foreground mt-2">Manage and verify tourism service vendors</p>
                </div>
                <div className="flex gap-3">
                    <Badge variant={activeTab === 'all' ? 'default' : 'outline'} className="text-lg px-4 py-2 cursor-pointer" onClick={() => setActiveTab('all')}>
                        Total: {totalVendors}
                    </Badge>
                </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                <Card
                    className={`glass-card border-border cursor-pointer transition-all group ${activeTab === 'all' ? 'ring-2 ring-blue-500 bg-blue-500/10' : 'hover:bg-muted/50'}`}
                    onClick={() => scrollToVendors('all')}
                >
                    <CardContent className="p-6 flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                            <Store className="w-6 h-6 text-blue-500" />
                        </div>
                        <div>
                            <p className="text-sm text-muted-foreground">Total Vendors</p>
                            <h3 className="text-2xl font-bold text-foreground">{totalVendors}</h3>
                            <p className="text-xs text-blue-500 font-medium">All vendors in system</p>
                        </div>
                    </CardContent>
                </Card>

                <Card
                    className={`glass-card border-border cursor-pointer transition-all group ${activeTab === 'active' ? 'ring-2 ring-green-500 bg-green-500/10' : 'hover:bg-muted/50'}`}
                    onClick={() => scrollToVendors('active')}
                >
                    <CardContent className="p-6 flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                            <CheckCircle className="w-6 h-6 text-green-500" />
                        </div>
                        <div>
                            <p className="text-sm text-muted-foreground">Active Vendors</p>
                            <h3 className="text-2xl font-bold text-foreground">{activeVendorsCount}</h3>
                            <p className="text-xs text-green-500 font-medium">Verified services</p>
                        </div>
                    </CardContent>
                </Card>

                <Card
                    className={`glass-card border-border cursor-pointer transition-all group ${activeTab === 'pending' ? 'ring-2 ring-orange-500 bg-orange-500/10' : 'hover:bg-muted/50'}`}
                    onClick={() => scrollToVendors('pending')}
                >
                    <CardContent className="p-6 flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-orange-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                            <Clock className="w-6 h-6 text-orange-500" />
                        </div>
                        <div>
                            <p className="text-sm text-muted-foreground">Pending Requests</p>
                            <h3 className="text-2xl font-bold text-foreground">{pendingVendorsCount}</h3>
                            <p className="text-xs text-orange-500 font-medium">Requires action</p>
                        </div>
                    </CardContent>
                </Card>

                <Card
                    className={`glass-card border-border cursor-pointer transition-all group ${activeTab === 'inactive' ? 'ring-2 ring-red-500 bg-red-500/10' : 'hover:bg-muted/50'}`}
                    onClick={() => scrollToVendors('inactive')}
                >
                    <CardContent className="p-6 flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                            <AlertTriangle className="w-6 h-6 text-red-500" />
                        </div>
                        <div>
                            <p className="text-sm text-muted-foreground">Inactive Vendors</p>
                            <h3 className="text-2xl font-bold text-foreground">{inactiveVendorsCount}</h3>
                            <p className="text-xs text-red-500 font-medium">Temporarily disabled</p>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Search and Filter */}
            <Card className="glass-card border-border">
                <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
                        <div className="flex gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
                            <Button
                                variant={activeTab === 'all' ? 'default' : 'outline'}
                                onClick={() => setActiveTab('all')}
                                className="whitespace-nowrap"
                            >
                                All Vendors
                            </Button>
                            <Button
                                variant={activeTab === 'active' ? 'default' : 'outline'}
                                onClick={() => setActiveTab('active')}
                                className={`whitespace-nowrap ${activeTab === 'active' ? 'bg-green-600 hover:bg-green-700 text-white' : ''}`}
                            >
                                Active
                            </Button>
                            <Button
                                variant={activeTab === 'pending' ? 'default' : 'outline'}
                                onClick={() => setActiveTab('pending')}
                                className={`whitespace-nowrap ${activeTab === 'pending' ? 'bg-orange-500 hover:bg-orange-600 text-white' : ''}`}
                            >
                                Pending
                            </Button>
                            <Button
                                variant={activeTab === 'inactive' ? 'default' : 'outline'}
                                onClick={() => setActiveTab('inactive')}
                                className={`whitespace-nowrap ${activeTab === 'inactive' ? 'bg-red-500 hover:bg-red-600 text-white' : ''}`}
                            >
                                Inactive
                            </Button>
                        </div>
                        <div className="relative w-full md:w-64">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                            <input
                                type="text"
                                placeholder="Search vendors..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-9 pr-4 py-2 bg-muted/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-sm"
                            />
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Vendors Grid */}
            <div
                ref={vendorsListRef}
                className={`grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 transition-all duration-500 ${isGlowing ? 'ring-4 ring-primary/50 rounded-xl p-2 bg-primary/5' : ''}`}
            >
                {filteredVendors.length > 0 ? (
                    filteredVendors.map((vendor) => (
                        <Card key={vendor.id} className="glass-card border-border hover:shadow-xl transition-all duration-300">
                            <CardHeader className="pb-3">
                                <div className="flex items-start justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                                            <Store className="w-6 h-6 text-primary" />
                                        </div>
                                        <div>
                                            <CardTitle
                                                className="text-lg text-foreground cursor-pointer hover:text-primary hover:underline transition-colors"
                                                onClick={() => setSelectedVendor(vendor)}
                                            >
                                                {vendor.name}
                                            </CardTitle>
                                            <div className="flex items-center gap-1 mt-1">
                                                <MapPin className="w-3 h-3 text-muted-foreground" />
                                                <span className="text-xs text-muted-foreground">{vendor.location}</span>
                                            </div>
                                        </div>
                                    </div>
                                    {getStatusBadge(vendor.status)}
                                </div>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="space-y-2 text-sm">
                                    <div className="flex items-center gap-2 text-muted-foreground">
                                        <Mail className="w-4 h-4" />
                                        <span className="truncate">{vendor.email}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-muted-foreground">
                                        <Phone className="w-4 h-4" />
                                        <span>{vendor.phone}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-muted-foreground">
                                        <Shield className="w-4 h-4" />
                                        <span>License: {vendor.license}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                        <span className="font-semibold text-foreground">{vendor.rating}</span>
                                    </div>
                                </div>

                                <div>
                                    <p className="text-xs text-muted-foreground mb-2">Services:</p>
                                    <div className="flex flex-wrap gap-1">
                                        {vendor.servicesOffered.map((service, idx) => (
                                            <Badge key={idx} variant="secondary" className="text-xs">
                                                {service}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>

                                {vendor.status === 'pending' && (
                                    <div className="bg-muted/50 p-3 rounded-lg">
                                        <p className="text-xs font-medium text-foreground mb-2">View documents:</p>
                                        <ul className="space-y-1.5">
                                            <li className="text-xs text-muted-foreground flex items-center gap-2 cursor-pointer hover:text-primary transition-colors">
                                                <FileText className="w-3 h-3" /> Business License
                                            </li>
                                            <li className="text-xs text-muted-foreground flex items-center gap-2 cursor-pointer hover:text-primary transition-colors">
                                                <FileText className="w-3 h-3" /> Tax Registration
                                            </li>
                                            <li className="text-xs text-muted-foreground flex items-center gap-2 cursor-pointer hover:text-primary transition-colors">
                                                <FileText className="w-3 h-3" /> Owner ID Proof
                                            </li>
                                            <li className="text-xs text-muted-foreground flex items-center gap-2 cursor-pointer hover:text-primary transition-colors">
                                                <FileText className="w-3 h-3" /> Establishment Photos
                                            </li>
                                        </ul>
                                    </div>
                                )}

                                <div className="pt-4 flex gap-2">
                                    <Button
                                        variant="outline"
                                        className="flex-1 gap-2"
                                        onClick={() => setSelectedVendor(vendor)}
                                    >
                                        <Eye className="w-4 h-4" />
                                        View Details
                                    </Button>
                                    {vendor.status === 'pending' && (
                                        <>
                                            <Button
                                                variant="default"
                                                className="flex-1 gap-2 bg-green-600 hover:bg-green-700 text-white"
                                                onClick={() => handleApprove(vendor.id)}
                                            >
                                                <CheckCircle className="w-4 h-4" />
                                                Approve
                                            </Button>
                                            <Button
                                                variant="destructive"
                                                size="icon"
                                                onClick={() => handleReject(vendor.id)}
                                            >
                                                <XCircle className="w-4 h-4" />
                                            </Button>
                                        </>
                                    )}
                                </div>
                            </CardContent>
                        </Card>
                    ))
                ) : (
                    <div className="col-span-full text-center py-12 text-muted-foreground">
                        No vendors found matching your search.
                    </div>
                )}
            </div>

            {/* Detail Modal */}
            {selectedVendor && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
                    <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-card border-border">
                        <CardHeader>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <CardTitle className="text-foreground">Vendor Details - {selectedVendor.name}</CardTitle>
                                    {getStatusBadge(selectedVendor.status)}
                                </div>
                                <Button variant="ghost" size="icon" onClick={() => setSelectedVendor(null)}>
                                    <XCircle className="w-5 h-5" />
                                </Button>
                            </div>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <p className="text-sm text-muted-foreground">Email</p>
                                    <p className="font-medium text-foreground">{selectedVendor.email}</p>
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground">Phone</p>
                                    <p className="font-medium text-foreground">{selectedVendor.phone}</p>
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground">Location</p>
                                    <p className="font-medium text-foreground">{selectedVendor.location}</p>
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground">License</p>
                                    <p className="font-medium text-foreground">{selectedVendor.license}</p>
                                </div>
                            </div>

                            <div>
                                <p className="text-sm text-muted-foreground mb-2">Services Offered</p>
                                <div className="flex flex-wrap gap-2">
                                    {selectedVendor.servicesOffered.map((service, idx) => (
                                        <Badge key={idx} variant="secondary">{service}</Badge>
                                    ))}
                                </div>
                            </div>

                            {selectedVendor.status === 'pending' && (
                                <div className="flex gap-3 pt-4">
                                    <Button className="flex-1 bg-green-600 hover:bg-green-700 text-white" onClick={() => handleApprove(selectedVendor.id)}>
                                        Approve Vendor
                                    </Button>
                                    <Button variant="destructive" className="flex-1" onClick={() => handleReject(selectedVendor.id)}>
                                        Reject Application
                                    </Button>
                                </div>
                            )}
                        </CardContent>
                    </Card>
                </div>
            )}
        </div>
    );
}
