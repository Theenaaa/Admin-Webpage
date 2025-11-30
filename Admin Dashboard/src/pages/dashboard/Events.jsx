import React, { useState } from 'react';
import {
  Search,
  Calendar,
  Plus,
  Edit,
  Trash2,
  MapPin,
  Users,
  Clock,
  Star,
} from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

// Images from src/assets/events
import tusuImg from '@/assets/events/tusu.jpg';
import sarhulImg from '@/assets/events/sarhul.avif';
import scienceImg from '@/assets/events/science_carnival.jpg';
import jiffaImg from '@/assets/events/jiffa.png';
import karmaImg from '@/assets/events/karma.jpg';
import jamshedpurImg from '@/assets/events/jamshedpur.jpg';

const events = [
  {
    id: 1,
    name: 'Tusu Parab Festival',
    type: 'Cultural Festival',
    location: 'Ranchi, Jharkhand',
    date: '2024-12-14',
    endDate: '2024-12-16',
    status: 'upcoming',
    expectedAttendees: 20000,
    description:
      'A popular harvest festival celebrated with traditional songs, rituals and community gatherings across Jharkhand.',
    organizer: 'Jharkhand Tourism Department',
    registrationRequired: false,
    entryFee: 0,
    featured: true,
    image: tusuImg,
  },
  {
    id: 2,
    name: 'Sarhul Festival',
    type: 'Tribal Festival',
    location: 'Ranchi, Gumla, Khunti',
    date: '2025-04-10',
    endDate: '2025-04-12',
    status: 'upcoming',
    expectedAttendees: 50000,
    description:
      'Traditional festival of the tribal communities celebrating the worship of nature and Sal tree.',
    organizer: 'Department of Arts, Culture & Youth Affairs, Jharkhand',
    registrationRequired: false,
    entryFee: 0,
    featured: true,
    image: sarhulImg,
  },
  {
    id: 3,
    name: 'Science City Winter Carnival',
    type: 'Cultural Event',
    location: 'Ranchi, Jharkhand',
    date: '2024-12-20',
    endDate: '2024-12-25',
    status: 'upcoming',
    expectedAttendees: 30000,
    description:
      'A vibrant carnival featuring cultural performances, food stalls, exhibitions and science shows.',
    organizer: 'Ranchi Science City & Jharkhand Tourism',
    registrationRequired: true,
    entryFee: 150,
    featured: false,
    image: scienceImg,
  },
  {
    id: 4,
    name: 'Jharkhand International Film Festival',
    type: 'Film Festival',
    location: 'Ranchi, Jharkhand',
    date: '2025-01-05',
    endDate: '2025-01-07',
    status: 'upcoming',
    expectedAttendees: 15000,
    description:
      'Annual film festival promoting regional cinema, filmmakers, workshops, and celebrity interactions.',
    organizer: 'JIFFA Foundation & Jharkhand Government',
    registrationRequired: true,
    entryFee: 500,
    featured: true,
    image: jiffaImg,
  },
  {
    id: 5,
    name: 'Karma Festival',
    type: 'Tribal Dance Festival',
    location: 'Dumka, Deoghar, Bokaro',
    date: '2025-09-05',
    endDate: '2025-09-05',
    status: 'upcoming',
    expectedAttendees: 60000,
    description:
      'Traditional Karma dance festival celebrated with music, worship of Karma tree, and cultural rituals.',
    organizer: 'Jharkhand Tribal Welfare Department',
    registrationRequired: false,
    entryFee: 0,
    featured: false,
    image: karmaImg,
  },
  {
    id: 6,
    name: 'Jamshedpur Winter Fest',
    type: 'Cultural Event',
    location: 'Jamshedpur, Jharkhand',
    date: '2024-12-24',
    endDate: '2024-12-31',
    status: 'active',
    expectedAttendees: 40000,
    description:
      'A winter celebration with concerts, cultural nights, food festivals, adventure activities and exhibitions.',
    organizer: 'Tata Steel & Jharkhand Tourism',
    registrationRequired: true,
    entryFee: 200,
    featured: true,
    image: jamshedpurImg,
  },
    {
        id: 1,
        name: 'Tusu Parab Festival',
        type: 'Cultural Festival',
        location: 'Ranchi, Jharkhand',
        date: '2024-12-14',
        endDate: '2024-12-16',
        status: 'upcoming',
        expectedAttendees: 20000,
        description: 'A popular harvest festival celebrated with traditional songs, rituals and community gatherings across Jharkhand.',
        organizer: 'Jharkhand Tourism Department',
        registrationRequired: false,
        entryFee: 0
    },
    {
        id: 2,
        name: 'Sarhul Festival',
        type: 'Tribal Festival',
        location: 'Ranchi, Gumla, Khunti',
        date: '2025-04-10',
        endDate: '2025-04-12',
        status: 'upcoming',
        expectedAttendees: 50000,
        description: 'Traditional festival of the tribal communities celebrating the worship of nature and Sal tree.',
        organizer: 'Department of Arts, Culture & Youth Affairs, Jharkhand',
        registrationRequired: false,
        entryFee: 0
    },
    {
        id: 3,
        name: 'Science City Winter Carnival',
        type: 'Cultural Event',
        location: 'Ranchi, Jharkhand',
        date: '2024-12-20',
        endDate: '2024-12-25',
        status: 'upcoming',
        expectedAttendees: 30000,
        description: 'A vibrant carnival featuring cultural performances, food stalls, exhibitions and science shows.',
        organizer: 'Ranchi Science City & Jharkhand Tourism',
        registrationRequired: true,
        entryFee: 150
    },
    {
        id: 4,
        name: 'Jharkhand International Film Festival',
        type: 'Film Festival',
        location: 'Ranchi, Jharkhand',
        date: '2025-01-05',
        endDate: '2025-01-07',
        status: 'upcoming',
        expectedAttendees: 15000,
        description: 'Annual film festival promoting regional cinema, filmmakers, workshops, and celebrity interactions.',
        organizer: 'JIFFA Foundation & Jharkhand Government',
        registrationRequired: true,
        entryFee: 500
    },
    {
        id: 5,
        name: 'Karma Festival',
        type: 'Tribal Dance Festival',
        location: 'Dumka, Deoghar, Bokaro',
        date: '2025-09-05',
        endDate: '2025-09-05',
        status: 'upcoming',
        expectedAttendees: 60000,
        description: 'Traditional Karma dance festival celebrated with music, worship of Karma tree, and cultural rituals.',
        organizer: 'Jharkhand Tribal Welfare Department',
        registrationRequired: false,
        entryFee: 0
    },
    {
        id: 6,
        name: 'Jamshedpur Winter Fest',
        type: 'Cultural Event',
        location: 'Jamshedpur, Jharkhand',
        date: '2024-12-24',
        endDate: '2024-12-31',
        status: 'active',
        expectedAttendees: 40000,
        description: 'A winter celebration with concerts, cultural nights, food festivals, adventure activities and exhibitions.',
        organizer: 'Tata Steel & Jharkhand Tourism',
        registrationRequired: true,
        entryFee: 200
    }

];

export default function Events() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');

  const getStatusBadgeVariant = (status) => {
    switch (status) {
      case 'active':
        return 'success';
      case 'upcoming':
        return 'default';
      case 'completed':
        return 'secondary';
      case 'cancelled':
        return 'destructive';
      default:
        return 'secondary';
    }
  };

  const getTypeColor = (type) => {
    if (type.toLowerCase().includes('tribal')) {
      return 'bg-emerald-50 text-emerald-700 border border-emerald-100';
    }
    if (type.toLowerCase().includes('film')) {
      return 'bg-sky-50 text-sky-700 border border-sky-100';
    }
    if (type.toLowerCase().includes('festival')) {
      return 'bg-purple-50 text-purple-700 border border-purple-100';
    }
    if (type.toLowerCase().includes('cultural')) {
      return 'bg-blue-50 text-blue-700 border border-blue-100';
    }
    return 'bg-slate-50 text-slate-700 border border-slate-100';
  };

  const filteredEvents = events.filter((e) => {
    const matchesType = filterType === 'all' ? true : e.type === filterType;
    const term = searchTerm.toLowerCase().trim();
    const matchesSearch =
      term === '' ||
      e.name.toLowerCase().includes(term) ||
      e.location.toLowerCase().includes(term) ||
      e.type.toLowerCase().includes(term);
    return matchesType && matchesSearch;
  });

  const totalVisitors =
    events.reduce((sum, e) => sum + e.expectedAttendees, 0) / 1000;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight text-foreground">
            Events &amp; Community
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Curate and monitor key tourism events, festivals and cultural programs
            across Jharkhand.
          </p>
        </div>
        <Button className="gap-2 rounded-xl shadow-sm">
          <Plus className="w-4 h-4" />
          Add Event
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
        <Card className="glass-card border-border/70 bg-gradient-to-br from-slate-50 to-slate-100/60 hover:-translate-y-0.5 hover:shadow-md transition-all duration-200">
          <CardContent className="p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                  Total Events
                </p>
                <p className="mt-2 text-3xl font-semibold text-slate-900">
                  {events.length}
                </p>
              </div>
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-slate-900/5">
                <Calendar className="w-6 h-6 text-slate-800" />
              </div>
            </div>
            <p className="mt-3 text-xs text-muted-foreground">
              Across festivals, carnivals, and cultural programs.
            </p>
          </CardContent>
        </Card>

        <Card className="glass-card border-border/70 bg-gradient-to-br from-emerald-50 to-emerald-100/50 hover:-translate-y-0.5 hover:shadow-md transition-all duration-200">
          <CardContent className="p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-medium uppercase tracking-wide text-emerald-800/80">
                  Active Now
                </p>
                <p className="mt-2 text-3xl font-semibold text-emerald-800">
                  {events.filter((e) => e.status === 'active').length}
                </p>
              </div>
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-emerald-900/5">
                <Clock className="w-6 h-6 text-emerald-800" />
              </div>
            </div>
            <p className="mt-3 text-xs text-emerald-900/80">
              Currently running tourism events.
            </p>
          </CardContent>
        </Card>

        <Card className="glass-card border-border/70 bg-gradient-to-br from-indigo-50 to-indigo-100/60 hover:-translate-y-0.5 hover:shadow-md transition-all duration-200">
          <CardContent className="p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-medium uppercase tracking-wide text-indigo-800/80">
                  Upcoming
                </p>
                <p className="mt-2 text-3xl font-semibold text-indigo-800">
                  {events.filter((e) => e.status === 'upcoming').length}
                </p>
              </div>
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-indigo-900/5">
                <Calendar className="w-6 h-6 text-indigo-800" />
              </div>
            </div>
            <p className="mt-3 text-xs text-indigo-900/80">
              Planned festivals and cultural programs.
            </p>
          </CardContent>
        </Card>

        <Card className="glass-card border-border/70 bg-gradient-to-br from-amber-50 to-amber-100/60 hover:-translate-y-0.5 hover:shadow-md transition-all duration-200">
          <CardContent className="p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-medium uppercase tracking-wide text-amber-800/80">
                  Expected Visitors
                </p>
                <p className="mt-2 text-3xl font-semibold text-amber-800">
                  {totalVisitors.toFixed(0)}K
                </p>
              </div>
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-amber-900/5">
                <Users className="w-6 h-6 text-amber-800" />
              </div>
            </div>
            <p className="mt-3 text-xs text-amber-900/80">
              Aggregate footfall across all listed events.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Search and Filter */}
      <Card className="glass-card border-border bg-background/60">
        <CardContent className="p-4 md:p-5">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search by event, location, or type..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 bg-muted/40 border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-slate-800/10 focus:border-slate-800/40 transition-all placeholder:text-muted-foreground"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {[
                'all',
                'Cultural Festival',
                'Tribal Festival',
                'Cultural Event',
                'Film Festival',
              ].map((type) => (
                <Button
                  key={type}
                  variant={filterType === type ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setFilterType(type)}
                  className="capitalize rounded-full px-4 text-xs"
                >
                  {type === 'all' ? 'All Types' : type}
                </Button>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Events Grid */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {filteredEvents.map((event) => (
          <Card
            key={event.id}
            className="glass-card border-border/70 overflow-hidden group hover:-translate-y-1 hover:shadow-xl transition-all duration-300 bg-background/80"
          >
            {/* Image cover */}
            <div className="relative h-40 w-full overflow-hidden">
              <img
                src={event.image}
                alt={event.name}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

              <div className="absolute left-4 bottom-4 right-4 flex items-center justify-between gap-2">
                <div className="space-y-1">
                  <p className="text-xs font-medium text-slate-100/80">
                    {event.location}
                  </p>
                  <h2 className="text-base font-semibold text-white drop-shadow-sm">
                    {event.name}
                  </h2>
                </div>

                <div className="flex flex-col items-end gap-1">
                  {event.featured && (
                    <span className="inline-flex items-center gap-1 rounded-full bg-amber-400/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-amber-950 shadow-sm">
                      <Star className="w-3 h-3" />
                      Featured
                    </span>
                  )}
                  <Badge
                    variant={getStatusBadgeVariant(event.status)}
                    className="text-[10px] font-medium capitalize bg-white/95 text-slate-900 border border-slate-200 shadow-sm"
                  >
                    {event.status}
                  </Badge>
                </div>
              </div>
            </div>

            <CardHeader className="pb-2 pt-4 px-5">
              <div className="flex items-center justify-between gap-3">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge
                    className={`${getTypeColor(
                      event.type
                    )} text-[10px] font-medium uppercase tracking-wide`}
                  >
                    {event.type}
                  </Badge>
                </div>
                <p className="text-[11px] font-medium text-muted-foreground">
                  ID: #{event.id.toString().padStart(3, '0')}
                </p>
              </div>
            </CardHeader>

            <CardContent className="pb-5 pt-1 px-5 space-y-4">
              {/* Date / Location / Attendees row */}
              <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                <div className="inline-flex items-center gap-1.5 rounded-full bg-muted/70 px-3 py-1">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>
                    {event.date}
                    {event.endDate !== event.date && ` — ${event.endDate}`}
                  </span>
                </div>
                <div className="inline-flex items-center gap-1.5 rounded-full bg-muted/60 px-3 py-1">
                  <MapPin className="w-3.5 h-3.5" />
                  <span className="line-clamp-1">{event.location}</span>
                </div>
                <div className="inline-flex items-center gap-1.5 rounded-full bg-muted/60 px-3 py-1">
                  <Users className="w-3.5 h-3.5" />
                  <span>{event.expectedAttendees.toLocaleString()} visitors</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm leading-relaxed text-slate-700 line-clamp-3">
                {event.description}
              </p>

              {/* Organizer / Meta */}
              <div className="grid grid-cols-1 gap-3 text-xs md:grid-cols-3">
                <div className="space-y-1">
                  <p className="text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">
                    Organizer
                  </p>
                  <p className="text-slate-800 line-clamp-2">
                    {event.organizer}
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">
                    Entry Fee
                  </p>
                  <p className="font-medium text-slate-900">
                    {event.entryFee === 0 ? 'Free' : `₹${event.entryFee}`}
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">
                    Registration
                  </p>
                  <p className="font-medium text-slate-900">
                    {event.registrationRequired ? 'Required' : 'Not required'}
                  </p>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-wrap items-center justify-between gap-2 pt-3 border-t border-border/80">
                <div className="text-[11px] text-muted-foreground">
                  Last updated by Events Cell
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    className="flex-1 gap-2 rounded-lg"
                    size="sm"
                  >
                    <Edit className="w-4 h-4" />
                    Edit
                  </Button>
                  <Button variant="outline" className="rounded-lg" size="sm">
                    View Details
                  </Button>
                  <Button
                    variant="destructive"
                    size="sm"
                    className="rounded-lg"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
