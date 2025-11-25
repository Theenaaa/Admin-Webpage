import React, { useState, useRef, useEffect } from 'react';
import {
    Search,
    Filter,
    Eye,
    CheckCircle,
    XCircle,
    Download,
    Phone,
    Mail,
    MapPin,
    Star,
    Users,
    Calendar,
    FileText,
    UserCheck,
    Globe,
    AlertTriangle
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

// Sample data
const pendingGuides = [
    {
        id: 1,
        name: 'Rajesh Kumar',
        email: 'rajesh.kumar@email.com',
        phone: '+91 98765 43210',
        location: 'Delhi',
        experience: '5 years',
        languages: ['Hindi', 'English', 'French'],
        certifications: ['Tourism Guide License', 'First Aid'],
        rating: 4.5,
        touristsServed: 234,
        status: 'pending',
        appliedDate: '2025-01-15',
        documents: ['ID Proof', 'Certification', 'Experience Letter']
    },
    {
        id: 2,
        name: 'Priya Sharma',
        email: 'priya.sharma@email.com',
        phone: '+91 98765 43211',
        location: 'Agra',
        experience: '3 years',
        languages: ['Hindi', 'English', 'Spanish'],
        certifications: ['Tourism Guide License'],
        rating: 4.8,
        touristsServed: 189,
        status: 'pending',
        appliedDate: '2025-01-18',
        documents: ['ID Proof', 'Certification']
    },
    {
        id: 3,
        name: 'Amit Patel',
        email: 'amit.patel@email.com',
        phone: '+91 98765 43212',
        location: 'Jaipur',
        experience: '7 years',
        languages: ['Hindi', 'English', 'Gujarati'],
        certifications: ['Tourism Guide License', 'History Degree'],
        rating: 4.7,
        touristsServed: 450,
        status: 'pending',
        appliedDate: '2025-01-20',
        documents: ['ID Proof', 'Certification', 'Experience Letter', 'Police Clearance']
    }
];

const approvedGuides = [
    {
        id: 101,
        name: 'Neha Singh',
        email: 'neha.singh@email.com',
        phone: '+91 98765 43213',
        location: 'Mumbai',
        experience: '4 years',
        languages: ['Hindi', 'English', 'Marathi'],
        certifications: ['Tourism Guide License'],
        rating: 4.6,
        touristsServed: 312,
        status: 'approved',
        approvalDate: '2024-12-10'
    },
    {
        id: 102,
        name: 'Vikram Reddy',
        email: 'vikram.reddy@email.com',
        phone: '+91 98765 43214',
        location: 'Hyderabad',
        experience: '6 years',
        languages: ['Hindi', 'English', 'Telugu'],
        certifications: ['Tourism Guide License', 'First Aid'],
        rating: 4.9,
        touristsServed: 560,
        status: 'approved',
        approvalDate: '2024-11-05'
    },
    {
        id: 105,
        name: 'Rahul Dravid',
        email: 'rahul.d@email.com',
        phone: '+91 98765 55555',
        location: 'Dhanbad',
        experience: '10 years',
        languages: ['Hindi', 'English', 'Kannada'],
        certifications: ['Master Guide', 'First Aid'],
        rating: 5.0,
        touristsServed: 2500,
        status: 'approved',
        documents: ['ID Proof', 'Certification']
    }
];

const inactiveGuides = [
    {
        id: 201,
        name: 'Rohit Sharma',
        email: 'rohit.s@email.com',
        phone: '+91 98765 66666',
        location: 'Bokaro',
        experience: '2 years',
        languages: ['Hindi', 'English'],
        certifications: ['Certified Guide'],
        rating: 3.5,
        touristsServed: 120,
        status: 'inactive',
        documents: ['ID Proof']
    },
    {
        id: 202,
        name: 'Kavita Singh',
        email: 'kavita.s@email.com',
        phone: '+91 98765 77777',
        location: 'Giridih',
        experience: '1 year',
        languages: ['Hindi'],
        certifications: ['Certified Guide'],
        rating: 3.0,
        touristsServed: 50,
        status: 'inactive',
        documents: ['ID Proof']
    }
];

export default function Guides() {
    const [selectedGuide, setSelectedGuide] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [activeTab, setActiveTab] = useState('all'); // 'all', 'pending', 'approved', 'inactive'
    const guidesListRef = useRef(null);
    const [isGlowing, setIsGlowing] = useState(false);

    const handleApprove = (guideId) => {
        console.log('Approving guide:', guideId);
        // Implement approval logic with blockchain hash
    };

    const handleReject = (guideId) => {
        console.log('Rejecting guide:', guideId);
        // Implement rejection logic with reason modal
    };

    const scrollToGuides = (tab) => {
        setActiveTab(tab);
        if (guidesListRef.current) {
            guidesListRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setIsGlowing(true);
            setTimeout(() => setIsGlowing(false), 2000); // Remove glow after 2 seconds
        }
    };

    // Combine all guides for 'all' view
    const allGuides = [...pendingGuides, ...approvedGuides, ...inactiveGuides];

    // Filter guides based on search term and active tab
    const getGuidesByTab = () => {
        switch (activeTab) {
            case 'pending': return pendingGuides;
            case 'approved': return approvedGuides;
            case 'inactive': return inactiveGuides;
            default: return allGuides;
        }
    };

    const filteredGuides = getGuidesByTab().filter(guide =>
        guide.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        guide.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        guide.email.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const totalRegistered = pendingGuides.length + 10 + inactiveGuides.length; // Using 543 as base for approved

    const getStatusBadge = (status) => {
        switch (status) {
            case 'approved': return <Badge className="bg-green-500 hover:bg-green-600">Active</Badge>;
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
                    <h1 className="text-3xl font-bold text-foreground">Guide Verification</h1>
                    <p className="text-muted-foreground mt-2">Review and manage guide applications and active guides</p>
                </div>
                <div className="flex gap-3">
                    <Badge
                        variant={activeTab === 'all' ? 'default' : 'outline'}
                        className={`text-lg px-4 py-2 cursor-pointer ${activeTab === 'all' ? 'text-black rounded-full font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground border border-input bg-background hover:bg-accent' : ''}`}
                        onClick={() => setActiveTab('all')}
                    >
                        Total: {totalRegistered}
                    </Badge>
                </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                <Card
                    className={`glass-card border-border cursor-pointer transition-all group ${activeTab === 'all' ? 'ring-2 ring-blue-500 bg-blue-500/10' : 'hover:bg-muted/50'}`}
                    onClick={() => scrollToGuides('all')}
                >
                    <CardContent className="p-6 flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                            <Globe className="w-6 h-6 text-blue-500" />
                        </div>
                        <div>
                            <p className="text-sm text-muted-foreground">Total Registered</p>
                            <h3 className="text-2xl font-bold text-foreground">{totalRegistered}</h3>
                            <p className="text-xs text-blue-500 font-medium">All guides in system</p>
                        </div>
                    </CardContent>
                </Card>

                <Card
                    className={`glass-card border-border cursor-pointer transition-all group ${activeTab === 'approved' ? 'ring-2 ring-green-500 bg-green-500/10' : 'hover:bg-muted/50'}`}
                    onClick={() => scrollToGuides('approved')}
                >
                    <CardContent className="p-6 flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                            <UserCheck className="w-6 h-6 text-green-500" />
                        </div>
                        <div>
                            <p className="text-sm text-muted-foreground">Active Guides</p>
                            <h3 className="text-2xl font-bold text-foreground">5</h3>
                            <p className="text-xs text-green-500 font-medium flex items-center gap-1">
                                <span className="inline-block w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                                +5 new this week
                            </p>
                        </div>
                    </CardContent>
                </Card>

                <Card
                    className={`glass-card border-border cursor-pointer transition-all group ${activeTab === 'pending' ? 'ring-2 ring-orange-500 bg-orange-500/10' : 'hover:bg-muted/50'}`}
                    onClick={() => scrollToGuides('pending')}
                >
                    <CardContent className="p-6 flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-orange-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                            <Users className="w-6 h-6 text-orange-500" />
                        </div>
                        <div>
                            <p className="text-sm text-muted-foreground">Pending Requests</p>
                            <h3 className="text-2xl font-bold text-foreground">{pendingGuides.length}</h3>
                            <p className="text-xs text-orange-500 font-medium">Requires action</p>
                        </div>
                    </CardContent>
                </Card>

                <Card
                    className={`glass-card border-border cursor-pointer transition-all group ${activeTab === 'inactive' ? 'ring-2 ring-red-500 bg-red-500/10' : 'hover:bg-muted/50'}`}
                    onClick={() => scrollToGuides('inactive')}
                >
                    <CardContent className="p-6 flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                            <AlertTriangle className="w-6 h-6 text-red-500" />
                        </div>
                        <div>
                            <p className="text-sm text-muted-foreground">Inactive Guides</p>
                            <h3 className="text-2xl font-bold text-foreground">{inactiveGuides.length}</h3>
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
                                className={`whitespace-nowrap ${activeTab === 'all' ? 'bg-blue-600 hover:bg-blue-700 text-white' : ''}`}
                            >
                                All Guides
                            </Button>
                            <Button
                                variant={activeTab === 'approved' ? 'default' : 'outline'}
                                onClick={() => setActiveTab('approved')}
                                className={`whitespace-nowrap ${activeTab === 'approved' ? 'bg-green-600 hover:bg-green-700 text-white' : ''}`}
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
                                placeholder="Search guides..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-9 pr-4 py-2 bg-muted/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-sm"
                            />
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Guides Grid */}
            <div
                ref={guidesListRef}
                className={`grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 transition-all duration-500 ${isGlowing ? 'ring-4 ring-primary/50 rounded-xl p-2 bg-primary/5' : ''}`}
            >
                {filteredGuides.length > 0 ? (
                    filteredGuides.map((guide) => (
                        <Card key={guide.id} className="glass-card border-border hover:shadow-xl transition-all duration-300">
                            <CardHeader className="pb-3">
                                <div className="flex items-start justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                                            <span className="text-lg font-bold text-primary">
                                                {guide.name.split(' ').map(n => n[0]).join('')}
                                            </span>
                                        </div>
                                        <div>
                                            <CardTitle
                                                className="text-lg text-foreground cursor-pointer hover:text-primary hover:underline transition-colors"
                                                onClick={() => setSelectedGuide(guide)}
                                            >
                                                {guide.name}
                                            </CardTitle>
                                            <div className="flex items-center gap-1 mt-1">
                                                <MapPin className="w-3 h-3 text-muted-foreground" />
                                                <span className="text-xs text-muted-foreground">{guide.location}</span>
                                            </div>
                                        </div>
                                    </div>
                                    {getStatusBadge(guide.status)}
                                </div>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="space-y-2 text-sm">
                                    <div className="flex items-center gap-2 text-muted-foreground">
                                        <Mail className="w-4 h-4" />
                                        <span className="truncate">{guide.email}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-muted-foreground">
                                        <Phone className="w-4 h-4" />
                                        <span>{guide.phone}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-muted-foreground">
                                        <Calendar className="w-4 h-4" />
                                        <span>{guide.experience} experience</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-muted-foreground">
                                        <Users className="w-4 h-4" />
                                        <span>{guide.touristsServed} tourists served</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                        <span className="font-semibold text-foreground">{guide.rating}</span>
                                    </div>
                                </div>

                                <div>
                                    <p className="text-xs text-muted-foreground mb-2">Languages:</p>
                                    <div className="flex flex-wrap gap-1">
                                        {guide.languages.map((lang, idx) => (
                                            <Badge key={idx} variant="secondary" className="text-xs">
                                                {lang}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>

                                {guide.status === 'pending' && (
                                    <div className="bg-muted/50 p-3 rounded-lg">
                                        <p className="text-xs font-medium text-foreground mb-2">View documents:</p>
                                        <ul className="space-y-1.5">
                                            <li className="text-xs text-muted-foreground flex items-center gap-2 cursor-pointer hover:text-primary transition-colors">
                                                <FileText className="w-3 h-3" /> ID proof
                                            </li>
                                            <li className="text-xs text-muted-foreground flex items-center gap-2 cursor-pointer hover:text-primary transition-colors">
                                                <FileText className="w-3 h-3" /> Certification
                                            </li>
                                            <li className="text-xs text-muted-foreground flex items-center gap-2 cursor-pointer hover:text-primary transition-colors">
                                                <FileText className="w-3 h-3" /> Experience proof
                                            </li>
                                            <li className="text-xs text-muted-foreground flex items-center gap-2 cursor-pointer hover:text-primary transition-colors">
                                                <FileText className="w-3 h-3" /> Photo + intro script
                                            </li>
                                        </ul>
                                    </div>
                                )}

                                <div className="pt-4 flex gap-2">
                                    <Button
                                        variant="outline"
                                        className="flex-1 gap-2"
                                        onClick={() => setSelectedGuide(guide)}
                                    >
                                        <Eye className="w-4 h-4" />
                                        View Details
                                    </Button>
                                    {guide.status === 'pending' && (
                                        <>
                                            <Button
                                                variant="default"
                                                className="flex-1 gap-2 bg-green-600 hover:bg-green-700 text-white"
                                                onClick={() => handleApprove(guide.id)}
                                            >
                                                <CheckCircle className="w-4 h-4" />
                                                Approve
                                            </Button>
                                            <Button
                                                variant="destructive"
                                                size="icon"
                                                onClick={() => handleReject(guide.id)}
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
                        No guides found matching your search.
                    </div>
                )}
            </div>

            {/* Detail Modal */}
            {selectedGuide && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
                    <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-card border-border">
                        <CardHeader>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <CardTitle className="text-foreground">Guide Details - {selectedGuide.name}</CardTitle>
                                    {getStatusBadge(selectedGuide.status)}
                                </div>
                                <Button variant="ghost" size="icon" onClick={() => setSelectedGuide(null)}>
                                    <XCircle className="w-5 h-5" />
                                </Button>
                            </div>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <p className="text-sm text-muted-foreground">Email</p>
                                    <p className="font-medium text-foreground">{selectedGuide.email}</p>
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground">Phone</p>
                                    <p className="font-medium text-foreground">{selectedGuide.phone}</p>
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground">Location</p>
                                    <p className="font-medium text-foreground">{selectedGuide.location}</p>
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground">Experience</p>
                                    <p className="font-medium text-foreground">{selectedGuide.experience}</p>
                                </div>
                            </div>

                            <div>
                                <p className="text-sm text-muted-foreground mb-2">Certifications</p>
                                <div className="flex flex-wrap gap-2">
                                    {selectedGuide.certifications.map((cert, idx) => (
                                        <Badge key={idx} variant="success">{cert}</Badge>
                                    ))}
                                </div>
                            </div>

                            {selectedGuide.status === 'pending' && (
                                <div className="flex gap-3 pt-4">
                                    <Button className="flex-1 bg-green-600 hover:bg-green-700 text-white" onClick={() => handleApprove(selectedGuide.id)}>
                                        Approve & Generate Blockchain Hash
                                    </Button>
                                    <Button variant="destructive" className="flex-1" onClick={() => handleReject(selectedGuide.id)}>
                                        Reject with Reason
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
