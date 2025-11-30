import React, { useState, useRef, useEffect } from 'react';
import {
  Search,
  MapPin,
  Edit,
  Trash2,
  Eye,
  Star,
  Users,
  Image as ImageIcon,
  Filter,
  CheckCircle,
  AlertTriangle,
  XCircle,
  Clock,
  Mountain,
  Waves,
  Trees
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

// DESTINATION IMAGES
import betlaImg from '@/assets/destinations/betla.jpg';
import dassamImg from '@/assets/destinations/dassam.jpg';
import hundruImg from '@/assets/destinations/hundru.jpg';
import netarhatImg from '@/assets/destinations/netarhat.jpg';
import parasnathImg from '@/assets/destinations/parasnath.jpg';
import patratuImg from '@/assets/destinations/patratu.webp';

const destinations = [
  {
    id: 1,
    name: 'Dassam Falls',
    location: 'Ranchi, Jharkhand',
    category: 'Waterfall',
    description:
      'A stunning 144-foot waterfall located on the Kanchi River, popular for its scenic beauty.',
    coordinates: { lat: 23.3435, lng: 85.5296 },
    rating: 4.6,
    totalVisits: 32000,
    status: 'active',
    entryFee: 20,
    openingHours: '6:00 AM - 6:00 PM',
    bestSeason: 'September to February',
    facilities: ['Parking', 'Viewpoint', 'Shops', 'Restrooms'],
    images: 5,
    image: dassamImg,
    lastUpdated: '2025-10-02',
    manager: 'Ranchi Tourism Office',
  },
  {
    id: 2,
    name: 'Hundru Falls',
    location: 'Ranchi, Jharkhand',
    category: 'Waterfall',
    description:
      'One of the highest waterfalls in Jharkhand with breathtaking views and rocky terrain.',
    coordinates: { lat: 23.35, lng: 85.5167 },
    rating: 4.7,
    totalVisits: 28000,
    status: 'active',
    entryFee: 20,
    openingHours: '6:00 AM - 6:00 PM',
    bestSeason: 'Monsoon and Winter',
    facilities: ['Parking', 'Food Stalls', 'Restrooms', 'Viewpoint'],
    images: 6,
    image: hundruImg,
    lastUpdated: '2025-09-21',
    manager: 'Ranchi District Tourism Cell',
  },
  {
    id: 3,
    name: 'Netarhat',
    location: 'Latehar, Jharkhand',
    category: 'Hill Station',
    description:
      'The “Queen of Chotanagpur”, famous for mesmerizing sunrise and sunset views.',
    coordinates: { lat: 23.471, lng: 84.2737 },
    rating: 4.8,
    totalVisits: 45000,
    status: 'active',
    entryFee: 0,
    openingHours: 'Open 24/7',
    bestSeason: 'October to April',
    facilities: ['Hotels', 'Viewpoints', 'Parking'],
    images: 7,
    image: netarhatImg,
    lastUpdated: '2025-10-10',
    manager: 'Netarhat Tourism Facilitation Centre',
  },
  {
    id: 4,
    name: 'Betla National Park',
    location: 'Latehar, Jharkhand',
    category: 'Wildlife Sanctuary',
    description:
      'Part of Palamu Tiger Reserve known for elephants, tigers, and jungle safaris.',
    coordinates: { lat: 23.8354, lng: 84.2049 },
    rating: 4.5,
    totalVisits: 30000,
    status: 'maintenance',
    entryFee: 100,
    openingHours: '6:00 AM - 5:00 PM',
    bestSeason: 'November to March',
    facilities: ['Safari Booking', 'Parking', 'Guides', 'Restrooms'],
    images: 8,
    image: betlaImg,
    lastUpdated: '2025-11-01',
    manager: 'Forest & Wildlife Division, Latehar',
  },
  {
    id: 5,
    name: 'Parasnath Hill (Shikharji)',
    location: 'Giridih, Jharkhand',
    category: 'Pilgrimage',
    description:
      'One of the holiest Jain pilgrimage sites located at the highest peak of Jharkhand.',
    coordinates: { lat: 24.2565, lng: 86.1347 },
    rating: 4.9,
    totalVisits: 50000,
    status: 'active',
    entryFee: 0,
    openingHours: '4:00 AM - 7:00 PM',
    bestSeason: 'October to March',
    facilities: ['Parking', 'Shops', 'Rest Areas'],
    images: 10,
    image: parasnathImg,
    lastUpdated: '2025-09-30',
    manager: 'Giridih Pilgrimage Board',
  },
  {
    id: 6,
    name: 'Patratu Valley',
    location: 'Ramgarh, Jharkhand',
    category: 'Scenic Spot',
    description:
      'Beautiful valley with winding roads, lake views, and a popular tourist viewpoint.',
    coordinates: { lat: 23.6435, lng: 85.3035 },
    rating: 4.7,
    totalVisits: 38000,
    status: 'active',
    entryFee: 0,
    openingHours: 'Open 24/7',
    bestSeason: 'Throughout the year',
    facilities: ['Parking', 'Viewpoint', 'Food Stalls', 'Boating (near lake)'],
    images: 6,
    image: patratuImg,
    lastUpdated: '2025-10-15',
    manager: 'Ramgarh District Tourism Cell',
  }
];

export default function Destinations() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('all'); // 'all', 'active', 'maintenance', 'closed'
  const [categoryFilter, setCategoryFilter] = useState('all');
  const destinationsListRef = useRef(null);
  const [isGlowing, setIsGlowing] = useState(false);

  const scrollToDestinations = (tab) => {
    setActiveTab(tab);
    if (destinationsListRef.current) {
      destinationsListRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsGlowing(true);
      setTimeout(() => setIsGlowing(false), 2000);
    }
  };

  const getDestinationsByTab = () => {
    switch (activeTab) {
      case 'active': return destinations.filter(d => d.status === 'active');
      case 'maintenance': return destinations.filter(d => d.status === 'maintenance');
      case 'closed': return destinations.filter(d => d.status === 'closed');
      default: return destinations;
    }
  };

  const filteredDestinations = getDestinationsByTab().filter((d) => {
    const term = searchTerm.toLowerCase().trim();
    const matchesSearch =
      term === '' ||
      d.name.toLowerCase().includes(term) ||
      d.location.toLowerCase().includes(term) ||
      d.category.toLowerCase().includes(term);

    const matchesCategory =
      categoryFilter === 'all' ? true : d.category === categoryFilter;

    return matchesSearch && matchesCategory;
  });

  const totalVisitsK =
    destinations.reduce((sum, d) => sum + d.totalVisits, 0) / 1000;

  const avgRating =
    destinations.reduce((sum, d) => sum + d.rating, 0) / destinations.length;

  const activeCount = destinations.filter(d => d.status === 'active').length;
  const maintenanceCount = destinations.filter(d => d.status === 'maintenance').length;

  const getStatusBadge = (status) => {
    switch (status) {
      case 'active': return <Badge className="bg-green-500 hover:bg-green-600">Active</Badge>;
      case 'maintenance': return <Badge className="bg-orange-500 hover:bg-orange-600">Maintenance</Badge>;
      case 'closed': return <Badge className="bg-red-500 hover:bg-red-600">Closed</Badge>;
      default: return <Badge variant="outline">{status}</Badge>;
    }
  };

  const getCategoryColor = (category) => {
    const c = category.toLowerCase();
    if (c.includes('waterfall')) return 'bg-sky-50 text-sky-700 border border-sky-100';
    if (c.includes('hill')) return 'bg-emerald-50 text-emerald-700 border border-emerald-100';
    if (c.includes('wildlife') || c.includes('park')) return 'bg-lime-50 text-lime-700 border border-lime-100';
    if (c.includes('pilgrimage') || c.includes('temple')) return 'bg-amber-50 text-amber-800 border border-amber-100';
    if (c.includes('scenic')) return 'bg-purple-50 text-purple-700 border border-purple-100';
    return 'bg-slate-50 text-slate-700 border border-slate-100';
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">
            Destination Management
          </h1>
          <p className="mt-2 text-muted-foreground">
            Monitor and curate key tourist destinations and attractions
          </p>
        </div>
        <div className="flex gap-3">
          <Badge
            variant="outline"
            className="text-lg px-4 py-2 cursor-pointer"
            onClick={() => setActiveTab('all')}
          >
            Total: {destinations.length}
          </Badge>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        <Card
          className={`glass-card border-border cursor-pointer transition-all group ${activeTab === 'all' ? 'ring-2 ring-blue-500 bg-blue-500/10' : 'hover:bg-muted/50'}`}
          onClick={() => scrollToDestinations('all')}
        >
          <CardContent className="p-6 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
              <MapPin className="w-6 h-6 text-blue-500" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Total Destinations</p>
              <h3 className="text-2xl font-bold text-foreground">{destinations.length}</h3>
              <p className="text-xs text-blue-500 font-medium">All listed spots</p>
            </div>
          </CardContent>
        </Card>

        <Card
          className={`glass-card border-border cursor-pointer transition-all group ${activeTab === 'active' ? 'ring-2 ring-green-500 bg-green-500/10' : 'hover:bg-muted/50'}`}
          onClick={() => scrollToDestinations('active')}
        >
          <CardContent className="p-6 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
              <CheckCircle className="w-6 h-6 text-green-500" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Active</p>
              <h3 className="text-2xl font-bold text-foreground">{activeCount}</h3>
              <p className="text-xs text-green-500 font-medium">Open for visitors</p>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-card border-border hover:bg-muted/50 transition-all group">
          <CardContent className="p-6 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-indigo-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Users className="w-6 h-6 text-indigo-500" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Total Visits</p>
              <h3 className="text-2xl font-bold text-foreground">{totalVisitsK.toFixed(1)}K</h3>
              <p className="text-xs text-indigo-500 font-medium">Cumulative footfall</p>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-card border-border hover:bg-muted/50 transition-all group">
          <CardContent className="p-6 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Star className="w-6 h-6 text-amber-500" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Avg. Rating</p>
              <h3 className="text-2xl font-bold text-foreground">{avgRating.toFixed(1)}</h3>
              <p className="text-xs text-amber-500 font-medium">Visitor satisfaction</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Search + Filters */}
      <Card className="glass-card border-border">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
            <div className="flex gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
              <Button
                variant={activeTab === 'all' ? 'default' : 'outline'}
                onClick={() => setActiveTab('all')}
                className={`whitespace-nowrap ${activeTab === 'all' ? 'bg-blue-600 hover:bg-blue-700 text-white' : ''}`}
              >
                All
              </Button>
              <Button
                variant={activeTab === 'active' ? 'default' : 'outline'}
                onClick={() => setActiveTab('active')}
                className={`whitespace-nowrap ${activeTab === 'active' ? 'bg-green-600 hover:bg-green-700 text-white' : ''}`}
              >
                Active
              </Button>
              <Button
                variant={activeTab === 'maintenance' ? 'default' : 'outline'}
                onClick={() => setActiveTab('maintenance')}
                className={`whitespace-nowrap ${activeTab === 'maintenance' ? 'bg-orange-500 hover:bg-orange-600 text-white' : ''}`}
              >
                Maintenance
              </Button>
            </div>

            <div className="flex gap-3 w-full md:w-auto">
              <div className="relative flex-1 md:w-64">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search destinations..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 bg-muted/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-sm"
                />
              </div>
              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4 text-muted-foreground" />
                <select
                  value={categoryFilter}
                  onChange={(e) => setCategoryFilter(e.target.value)}
                  className="text-sm bg-muted/50 border border-border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50"
                >
                  <option value="all">All Categories</option>
                  <option value="Waterfall">Waterfall</option>
                  <option value="Hill Station">Hill Station</option>
                  <option value="Wildlife Sanctuary">Wildlife</option>
                  <option value="Pilgrimage">Pilgrimage</option>
                  <option value="Scenic Spot">Scenic Spot</option>
                </select>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Destinations Grid */}
      <div
        ref={destinationsListRef}
        className={`grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 transition-all duration-500 ${isGlowing ? 'ring-4 ring-primary/50 rounded-xl p-2 bg-primary/5' : ''}`}
      >
        {filteredDestinations.length > 0 ? (
          filteredDestinations.map((d) => (
            <Card key={d.id} className="glass-card border-border hover:shadow-xl transition-all duration-300 group">
              {/* Image Header */}
              <div className="relative h-48 w-full overflow-hidden rounded-t-xl">
                {d.image ? (
                  <img
                    src={d.image}
                    alt={d.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                ) : (
                  <div className="h-full w-full bg-muted flex items-center justify-center">
                    <ImageIcon className="w-10 h-10 text-muted-foreground" />
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute top-4 right-4">
                  {getStatusBadge(d.status)}
                </div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold drop-shadow-md">{d.name}</h3>
                  <div className="flex items-center gap-1 text-sm text-slate-200">
                    <MapPin className="w-3 h-3" />
                    {d.location}
                  </div>
                </div>
              </div>

              <CardContent className="p-5 space-y-4">
                <div className="flex items-center justify-between">
                  <Badge className={`${getCategoryColor(d.category)} text-xs font-medium`}>
                    {d.category}
                  </Badge>
                  <div className="flex items-center gap-1 text-sm font-semibold text-amber-500">
                    <Star className="w-4 h-4 fill-amber-500" />
                    {d.rating.toFixed(1)}
                  </div>
                </div>

                <p className="text-sm text-muted-foreground line-clamp-2">
                  {d.description}
                </p>

                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Users className="w-4 h-4" />
                    <span>{d.totalVisits.toLocaleString()} Visits</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span>{d.openingHours}</span>
                  </div>
                </div>

                <div className="pt-4 flex gap-2 border-t border-border">
                  <Button variant="outline" className="flex-1 gap-2">
                    <Eye className="w-4 h-4" />
                    View
                  </Button>
                  <Button variant="outline" size="icon">
                    <Edit className="w-4 h-4" />
                  </Button>
                  <Button variant="destructive" size="icon">
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))
        ) : (
          <div className="col-span-full text-center py-12 text-muted-foreground">
            No destinations found matching your search.
          </div>
        )}
      </div>
    </div>
  );
}
