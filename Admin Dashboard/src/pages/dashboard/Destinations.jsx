import React, { useState } from 'react';
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
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

// DESTINATION IMAGES
import betlaImg from '@/assets/destinations/betla.jpg';
import dassamImg from '@/assets/destinations/dassam.jpg';
import hundruImg from '@/assets/destinations/hundru.jpg'; // rename to .jpg if it fails
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
  },
    {
        id: 1,
        name: 'Dassam Falls',
        location: 'Ranchi, Jharkhand',
        category: 'Waterfall',
        description: 'A stunning 144-foot waterfall located on the Kanchi River, popular for its scenic beauty.',
        coordinates: { lat: 23.3435, lng: 85.5296 },
        rating: 4.6,
        totalVisits: 32000,
        status: 'active',
        entryFee: 20,
        openingHours: '6:00 AM - 6:00 PM',
        bestSeason: 'September to February',
        facilities: ['Parking', 'Viewpoint', 'Shops', 'Restrooms'],
        images: 5
    },
    {
        id: 2,
        name: 'Hundru Falls',
        location: 'Ranchi, Jharkhand',
        category: 'Waterfall',
        description: 'One of the highest waterfalls in Jharkhand with breathtaking views and rocky terrain.',
        coordinates: { lat: 23.3500, lng: 85.5167 },
        rating: 4.7,
        totalVisits: 28000,
        status: 'active',
        entryFee: 20,
        openingHours: '6:00 AM - 6:00 PM',
        bestSeason: 'Monsoon and Winter',
        facilities: ['Parking', 'Food Stalls', 'Restrooms', 'Viewpoint'],
        images: 6
    },
    {
        id: 3,
        name: 'Netarhat',
        location: 'Latehar, Jharkhand',
        category: 'Hill Station',
        description: 'The “Queen of Chotanagpur”, famous for mesmerizing sunrise and sunset views.',
        coordinates: { lat: 23.4710, lng: 84.2737 },
        rating: 4.8,
        totalVisits: 45000,
        status: 'active',
        entryFee: 0,
        openingHours: 'Open 24/7',
        bestSeason: 'October to April',
        facilities: ['Hotels', 'Viewpoints', 'Parking'],
        images: 7
    },
    {
        id: 4,
        name: 'Betla National Park',
        location: 'Latehar, Jharkhand',
        category: 'Wildlife Sanctuary',
        description: 'Part of Palamu Tiger Reserve known for elephants, tigers, and jungle safaris.',
        coordinates: { lat: 23.8354, lng: 84.2049 },
        rating: 4.5,
        totalVisits: 30000,
        status: 'active',
        entryFee: 100,
        openingHours: '6:00 AM - 5:00 PM',
        bestSeason: 'November to March',
        facilities: ['Safari Booking', 'Parking', 'Guides', 'Restrooms'],
        images: 8
    },
    {
        id: 5,
        name: 'Parasnath Hill (Shikharji)',
        location: 'Giridih, Jharkhand',
        category: 'Pilgrimage',
        description: 'One of the holiest Jain pilgrimage sites located at the highest peak of Jharkhand.',
        coordinates: { lat: 24.2565, lng: 86.1347 },
        rating: 4.9,
        totalVisits: 50000,
        status: 'active',
        entryFee: 0,
        openingHours: '4:00 AM - 7:00 PM',
        bestSeason: 'October to March',
        facilities: ['Parking', 'Shops', 'Rest Areas'],
        images: 10
    },
    {
        id: 6,
        name: 'Patratu Valley',
        location: 'Ramgarh, Jharkhand',
        category: 'Scenic Spot',
        description: 'Beautiful valley with winding roads, lake views, and a popular tourist viewpoint.',
        coordinates: { lat: 23.6435, lng: 85.3035 },
        rating: 4.7,
        totalVisits: 38000,
        status: 'active',
        entryFee: 0,
        openingHours: 'Open 24/7',
        bestSeason: 'Throughout the year',
        facilities: ['Parking', 'Viewpoint', 'Food Stalls', 'Boating (near lake)'],
        images: 6
    }


];

export default function Destinations() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [categoryFilter, setCategoryFilter] = useState('all');

  const getStatusBadge = (status) => {
    switch (status) {
      case 'active':
        return 'success';
      case 'maintenance':
        return 'secondary';
      case 'closed':
        return 'destructive';
      default:
        return 'secondary';
    }
  };

  const getCategoryColor = (category) => {
    const c = category.toLowerCase();
    if (c.includes('waterfall')) {
      return 'bg-sky-50 text-sky-700 border border-sky-100';
    }
    if (c.includes('hill')) {
      return 'bg-emerald-50 text-emerald-700 border border-emerald-100';
    }
    if (c.includes('wildlife') || c.includes('park')) {
      return 'bg-lime-50 text-lime-700 border border-lime-100';
    }
    if (c.includes('pilgrimage') || c.includes('temple')) {
      return 'bg-amber-50 text-amber-800 border border-amber-100';
    }
    if (c.includes('scenic')) {
      return 'bg-purple-50 text-purple-700 border border-purple-100';
    }
    return 'bg-slate-50 text-slate-700 border border-slate-100';
  };

  const filteredDestinations = destinations.filter((d) => {
    const term = searchTerm.toLowerCase().trim();
    const matchesSearch =
      term === '' ||
      d.name.toLowerCase().includes(term) ||
      d.location.toLowerCase().includes(term) ||
      d.category.toLowerCase().includes(term);

    const matchesStatus =
      statusFilter === 'all' ? true : d.status === statusFilter;

    const matchesCategory =
      categoryFilter === 'all' ? true : d.category === categoryFilter;

    return matchesSearch && matchesStatus && matchesCategory;
  });

  const totalVisitsK =
    destinations.reduce((sum, d) => sum + d.totalVisits, 0) / 1000;

  const avgRating =
    destinations.reduce((sum, d) => sum + d.rating, 0) / destinations.length;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight text-foreground">
            Destination Management
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Monitor and curate key tourist destinations and attractions across
            Jharkhand.
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
        <Card className="glass-card border-border/70 bg-gradient-to-br from-slate-50 to-slate-100/60 hover:-translate-y-0.5 hover:shadow-md transition-all duration-200">
          <CardContent className="p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                  Total Destinations
                </p>
                <p className="mt-2 text-3xl font-semibold text-slate-900">
                  {destinations.length}
                </p>
              </div>
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-slate-900/5">
                <MapPin className="w-6 h-6 text-slate-800" />
              </div>
            </div>
            <p className="mt-3 text-xs text-muted-foreground">
              Waterfalls, hill stations, wildlife, pilgrimage and more.
            </p>
          </CardContent>
        </Card>

        <Card className="glass-card border-border/70 bg-gradient-to-br from-emerald-50 to-emerald-100/60 hover:-translate-y-0.5 hover:shadow-md transition-all duration-200">
          <CardContent className="p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-medium uppercase tracking-wide text-emerald-800/80">
                  Active
                </p>
                <p className="mt-2 text-3xl font-semibold text-emerald-800">
                  {destinations.filter((d) => d.status === 'active').length}
                </p>
              </div>
            </div>
            <p className="mt-3 text-xs text-emerald-900/80">
              Open and visit-ready destinations.
            </p>
          </CardContent>
        </Card>

        <Card className="glass-card border-border/70 bg-gradient-to-br from-indigo-50 to-indigo-100/60 hover:-translate-y-0.5 hover:shadow-md transition-all duration-200">
          <CardContent className="p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-medium uppercase tracking-wide text-indigo-800/80">
                  Total Visits
                </p>
                <p className="mt-2 text-3xl font-semibold text-indigo-800">
                  {totalVisitsK.toFixed(1)}K
                </p>
              </div>
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-indigo-900/5">
                <Users className="w-6 h-6 text-indigo-800" />
              </div>
            </div>
            <p className="mt-3 text-xs text-indigo-900/80">
              Cumulative footfall across all destinations.
            </p>
          </CardContent>
        </Card>

        <Card className="glass-card border-border/70 bg-gradient-to-br from-amber-50 to-amber-100/60 hover:-translate-y-0.5 hover:shadow-md transition-all duration-200">
          <CardContent className="p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-medium uppercase tracking-wide text-amber-800/80">
                  Avg. Rating
                </p>
                <p className="mt-2 text-3xl font-semibold text-amber-800">
                  {avgRating.toFixed(1)}
                </p>
              </div>
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-amber-900/5">
                <Star className="w-6 h-6 text-amber-800" />
              </div>
            </div>
            <p className="mt-3 text-xs text-amber-900/80">
              Average visitor satisfaction score.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Search + Filters */}
      <Card className="glass-card border-border bg-background/60">
        <CardContent className="p-4 md:p-5">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search by destination, location, or category..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 bg-muted/40 border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-slate-800/10 focus:border-slate-800/40 transition-all placeholder:text-muted-foreground"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-3 items-center">
              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4 text-muted-foreground" />
                <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Status
                </span>
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="text-sm bg-muted/40 border border-border rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-800/10 focus:border-slate-800/40"
                >
                  <option value="all">All</option>
                  <option value="active">Active</option>
                  <option value="maintenance">Maintenance</option>
                  <option value="closed">Closed</option>
                </select>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Category
                </span>
                <select
                  value={categoryFilter}
                  onChange={(e) => setCategoryFilter(e.target.value)}
                  className="text-sm bg-muted/40 border border-border rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-800/10 focus:border-slate-800/40"
                >
                  <option value="all">All</option>
                  <option value="Waterfall">Waterfall</option>
                  <option value="Hill Station">Hill Station</option>
                  <option value="Wildlife Sanctuary">
                    Wildlife Sanctuary
                  </option>
                  <option value="Pilgrimage">Pilgrimage</option>
                  <option value="Scenic Spot">Scenic Spot</option>
                </select>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Table */}
      <Card className="glass-card border-border bg-background/70">
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead className="bg-muted/60 text-xs uppercase tracking-wide text-muted-foreground">
                <tr>
                  <th className="py-3 px-4 text-left font-semibold">
                    Destination
                  </th>
                  <th className="py-3 px-4 text-left font-semibold">
                    Location
                  </th>
                  <th className="py-3 px-4 text-left font-semibold">
                    Category
                  </th>
                  <th className="py-3 px-4 text-left font-semibold">
                    Status
                  </th>
                  <th className="py-3 px-4 text-left font-semibold">
                    Rating
                  </th>
                  <th className="py-3 px-4 text-left font-semibold">
                    Visits
                  </th>
                  <th className="py-3 px-4 text-left font-semibold">
                    Last Updated
                  </th>
                  <th className="py-3 px-4 text-right font-semibold">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {filteredDestinations.length === 0 ? (
                  <tr>
                    <td
                      colSpan={8}
                      className="py-6 px-4 text-center text-sm text-muted-foreground"
                    >
                      No destinations match the current search or filters.
                    </td>
                  </tr>
                ) : (
                  filteredDestinations.map((d) => (
                    <tr
                      key={d.id}
                      className="hover:bg-muted/40 transition-colors"
                    >
                      {/* Image + Name */}
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-3">
                          <div className="h-12 w-16 rounded-md overflow-hidden bg-muted flex items-center justify-center">
                            {d.image ? (
                              <img
                                src={d.image}
                                alt={d.name}
                                className="h-full w-full object-cover"
                              />
                            ) : (
                              <ImageIcon className="w-5 h-5 text-muted-foreground" />
                            )}
                          </div>
                          <div>
                            <p className="font-medium text-foreground">
                              {d.name}
                            </p>
                            <p className="text-[11px] text-muted-foreground">
                              Managed by {d.manager}
                            </p>
                          </div>
                        </div>
                      </td>

                      {/* Location */}
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                          <MapPin className="w-3.5 h-3.5" />
                          <span>{d.location}</span>
                        </div>
                      </td>

                      {/* Category */}
                      <td className="py-3 px-4">
                        <Badge
                          className={`${getCategoryColor(
                            d.category,
                          )} text-[11px] font-medium`}
                        >
                          {d.category}
                        </Badge>
                      </td>

                      {/* Status */}
                      <td className="py-3 px-4">
                        <Badge
                          variant={getStatusBadge(d.status)}
                          className="text-[11px] capitalize"
                        >
                          {d.status}
                        </Badge>
                      </td>

                      {/* Rating */}
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-1 text-xs">
                          <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                          <span className="font-semibold text-foreground">
                            {d.rating.toFixed(1)}
                          </span>
                        </div>
                      </td>

                      {/* Visits */}
                      <td className="py-3 px-4">
                        <span className="text-xs text-foreground">
                          {d.totalVisits.toLocaleString()}
                        </span>
                      </td>

                      {/* Last Updated */}
                      <td className="py-3 px-4">
                        <span className="text-xs text-muted-foreground">
                          {d.lastUpdated}
                        </span>
                      </td>

                      {/* Actions */}
                      <td className="py-3 px-4">
                        <div className="flex items-center justify-end gap-2">
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8 rounded-lg"
                          >
                            <Eye className="w-4 h-4" />
                          </Button>
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8 rounded-lg"
                          >
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button
                            variant="destructive"
                            size="icon"
                            className="h-8 w-8 rounded-lg"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
