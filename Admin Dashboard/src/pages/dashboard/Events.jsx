import React, { useState, useRef } from 'react';
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
  Filter,
  Music,
  Video,
  Tent,
  PartyPopper,
  X
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
  }
];

export default function Events() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('all'); // 'all', 'active', 'upcoming'
  const [filterType, setFilterType] = useState('all');
  const eventsListRef = useRef(null);
  const [isGlowing, setIsGlowing] = useState(false);

  // Add Event Modal State
  const [showAddEventModal, setShowAddEventModal] = useState(false);
  const [newEvent, setNewEvent] = useState({
    name: '',
    type: 'Cultural Festival',
    location: '',
    date: '',
    endDate: '',
    description: '',
    organizer: '',
    entryFee: '',
    expectedAttendees: '',
    featured: false
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setNewEvent(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSaveEvent = () => {
    // Create new event object
    const eventToAdd = {
      id: events.length + 1,
      ...newEvent,
      status: 'upcoming',
      image: tusuImg, // Default image for now
      entryFee: Number(newEvent.entryFee) || 0,
      expectedAttendees: Number(newEvent.expectedAttendees) || 0
    };

    // In a real app, this would be an API call
    // For now, we'll just log it and close the modal
    console.log('Saving event:', eventToAdd);
    // events.push(eventToAdd); // Cannot mutate const array directly in this setup without state, but assuming we just want the UI flow for now.

    setShowAddEventModal(false);
    setNewEvent({
      name: '',
      type: 'Cultural Festival',
      location: '',
      date: '',
      endDate: '',
      description: '',
      organizer: '',
      entryFee: '',
      expectedAttendees: '',
      featured: false
    });
  };

  const scrollToEvents = (tab) => {
    setActiveTab(tab);
    if (eventsListRef.current) {
      eventsListRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsGlowing(true);
      setTimeout(() => setIsGlowing(false), 2000);
    }
  };

  const getEventsByTab = () => {
    switch (activeTab) {
      case 'active': return events.filter(e => e.status === 'active');
      case 'upcoming': return events.filter(e => e.status === 'upcoming');
      default: return events;
    }
  };

  const getStatusBadgeVariant = (status) => {
    switch (status) {
      case 'active': return 'success';
      case 'upcoming': return 'default';
      case 'completed': return 'secondary';
      case 'cancelled': return 'destructive';
      default: return 'secondary';
    }
  };

  const getTypeColor = (type) => {
    if (type.toLowerCase().includes('tribal')) return 'bg-emerald-50 text-emerald-700 border border-emerald-100';
    if (type.toLowerCase().includes('film')) return 'bg-sky-50 text-sky-700 border border-sky-100';
    if (type.toLowerCase().includes('festival')) return 'bg-purple-50 text-purple-700 border border-purple-100';
    if (type.toLowerCase().includes('cultural')) return 'bg-blue-50 text-blue-700 border border-blue-100';
    return 'bg-slate-50 text-slate-700 border border-slate-100';
  };

  const filteredEvents = getEventsByTab().filter((e) => {
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

  const activeCount = events.filter(e => e.status === 'active').length;
  const upcomingCount = events.filter(e => e.status === 'upcoming').length;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">
            Events & Community
          </h1>
          <p className="mt-2 text-muted-foreground">
            Curate and monitor key tourism events and festivals
          </p>
        </div>
        <div className="flex gap-3">
          <Button
            className="gap-2 rounded-xl shadow-sm bg-primary hover:bg-primary/90"
            onClick={() => setShowAddEventModal(true)}
          >
            <Plus className="w-4 h-4" />
            Add Event
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
        <Card
          className={`glass-card border-border cursor-pointer transition-all group ${activeTab === 'all' ? 'ring-2 ring-blue-500 bg-blue-500/10' : 'hover:bg-muted/50'}`}
          onClick={() => scrollToEvents('all')}
        >
          <CardContent className="p-6 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Calendar className="w-6 h-6 text-blue-500" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Total Events</p>
              <h3 className="text-2xl font-bold text-foreground">{events.length}</h3>
              <p className="text-xs text-blue-500 font-medium">All scheduled</p>
            </div>
          </CardContent>
        </Card>

        <Card
          className={`glass-card border-border cursor-pointer transition-all group ${activeTab === 'active' ? 'ring-2 ring-emerald-500 bg-emerald-500/10' : 'hover:bg-muted/50'}`}
          onClick={() => scrollToEvents('active')}
        >
          <CardContent className="p-6 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Clock className="w-6 h-6 text-emerald-500" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Active Now</p>
              <h3 className="text-2xl font-bold text-foreground">{activeCount}</h3>
              <p className="text-xs text-emerald-500 font-medium">Running currently</p>
            </div>
          </CardContent>
        </Card>

        <Card
          className={`glass-card border-border cursor-pointer transition-all group ${activeTab === 'upcoming' ? 'ring-2 ring-indigo-500 bg-indigo-500/10' : 'hover:bg-muted/50'}`}
          onClick={() => scrollToEvents('upcoming')}
        >
          <CardContent className="p-6 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-indigo-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
              <PartyPopper className="w-6 h-6 text-indigo-500" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Upcoming</p>
              <h3 className="text-2xl font-bold text-foreground">{upcomingCount}</h3>
              <p className="text-xs text-indigo-500 font-medium">Coming soon</p>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-card border-border hover:bg-muted/50 transition-all group">
          <CardContent className="p-6 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Users className="w-6 h-6 text-amber-500" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Expected Visitors</p>
              <h3 className="text-2xl font-bold text-foreground">{totalVisitors.toFixed(0)}K</h3>
              <p className="text-xs text-amber-500 font-medium">Total footfall</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Search and Filter */}
      <Card className="glass-card border-border bg-background/60">
        <CardContent className="p-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
              <Button
                variant={activeTab === 'all' ? 'default' : 'outline'}
                onClick={() => setActiveTab('all')}
                className={`whitespace-nowrap ${activeTab === 'all' ? 'bg-blue-600 hover:bg-blue-700 text-white' : ''}`}
              >
                All Events
              </Button>
              <Button
                variant={activeTab === 'active' ? 'default' : 'outline'}
                onClick={() => setActiveTab('active')}
                className={`whitespace-nowrap ${activeTab === 'active' ? 'bg-emerald-600 hover:bg-emerald-700 text-white' : ''}`}
              >
                Active
              </Button>
              <Button
                variant={activeTab === 'upcoming' ? 'default' : 'outline'}
                onClick={() => setActiveTab('upcoming')}
                className={`whitespace-nowrap ${activeTab === 'upcoming' ? 'bg-indigo-600 hover:bg-indigo-700 text-white' : ''}`}
              >
                Upcoming
              </Button>
            </div>

            <div className="flex gap-3 w-full md:w-auto">
              <div className="relative flex-1 md:w-64">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search events..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 bg-muted/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-sm"
                />
              </div>
              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4 text-muted-foreground" />
                <select
                  value={filterType}
                  onChange={(e) => setFilterType(e.target.value)}
                  className="text-sm bg-muted/50 border border-border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50"
                >
                  <option value="all">All Types</option>
                  <option value="Cultural Festival">Cultural Festival</option>
                  <option value="Tribal Festival">Tribal Festival</option>
                  <option value="Cultural Event">Cultural Event</option>
                  <option value="Film Festival">Film Festival</option>
                </select>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Events Grid */}
      <div
        ref={eventsListRef}
        className={`grid grid-cols-1 gap-6 lg:grid-cols-2 transition-all duration-500 ${isGlowing ? 'ring-4 ring-primary/50 rounded-xl p-2 bg-primary/5' : ''}`}
      >
        {filteredEvents.map((event) => (
          <Card
            key={event.id}
            className="glass-card border-border/70 overflow-hidden group hover:-translate-y-1 hover:shadow-xl transition-all duration-300 bg-background/80"
          >
            {/* Image cover */}
            <div className="relative h-48 w-full overflow-hidden">
              <img
                src={event.image}
                alt={event.name}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              <div className="absolute top-4 right-4 flex flex-col items-end gap-2">
                {event.featured && (
                  <span className="inline-flex items-center gap-1 rounded-full bg-amber-400/90 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-amber-950 shadow-sm backdrop-blur-sm">
                    <Star className="w-3 h-3 fill-amber-950" />
                    Featured
                  </span>
                )}
                <Badge
                  variant={getStatusBadgeVariant(event.status)}
                  className="text-[10px] font-bold uppercase tracking-wider shadow-sm backdrop-blur-sm"
                >
                  {event.status}
                </Badge>
              </div>

              <div className="absolute left-5 bottom-5 right-5">
                <div className="flex items-center gap-2 mb-1">
                  <MapPin className="w-3.5 h-3.5 text-slate-300" />
                  <p className="text-xs font-medium text-slate-200">
                    {event.location}
                  </p>
                </div>
                <h2 className="text-xl font-bold text-white drop-shadow-md leading-tight">
                  {event.name}
                </h2>
              </div>
            </div>

            <CardContent className="p-5 space-y-4">
              <div className="flex items-center justify-between">
                <Badge
                  className={`${getTypeColor(
                    event.type
                  )} text-[10px] font-medium uppercase tracking-wide`}
                >
                  {event.type}
                </Badge>
                <p className="text-[11px] font-medium text-muted-foreground">
                  ID: #{event.id.toString().padStart(3, '0')}
                </p>
              </div>

              {/* Date / Attendees row */}
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="flex items-center gap-2 text-muted-foreground bg-muted/50 p-2 rounded-lg">
                  <Calendar className="w-4 h-4 text-primary" />
                  <span className="font-medium text-foreground">
                    {event.date}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground bg-muted/50 p-2 rounded-lg">
                  <Users className="w-4 h-4 text-primary" />
                  <span className="font-medium text-foreground">{event.expectedAttendees.toLocaleString()} visitors</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm leading-relaxed text-muted-foreground line-clamp-2">
                {event.description}
              </p>

              {/* Organizer / Meta */}
              <div className="grid grid-cols-2 gap-4 pt-2 border-t border-border/50">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-wide text-muted-foreground mb-1">
                    Organizer
                  </p>
                  <p className="text-xs font-medium text-foreground line-clamp-1">
                    {event.organizer}
                  </p>
                </div>
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-wide text-muted-foreground mb-1">
                    Entry Fee
                  </p>
                  <p className="text-xs font-medium text-foreground">
                    {event.entryFee === 0 ? 'Free Entry' : `₹${event.entryFee}`}
                  </p>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-2 pt-2">
                <Button
                  variant="outline"
                  className="flex-1 gap-2"
                >
                  <Edit className="w-4 h-4" />
                  Edit
                </Button>
                <Button variant="outline" size="icon">
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Add Event Modal */}
      {showAddEventModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-gray-100 text-black rounded-xl border border-gray-300 shadow-2xl animate-in fade-in zoom-in-95 duration-200">
            <div className="sticky top-0 z-10 flex items-center justify-between p-6 border-b border-gray-200 bg-gray-100/95 backdrop-blur-sm">
              <h2 className="text-xl font-bold text-gray-900">Add New Event</h2>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setShowAddEventModal(false)}
                className="rounded-full hover:bg-gray-500 text-gray-500 hover:text-black"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>

            <div className="p-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Event Name</label>
                  <input
                    type="text"
                    name="name"
                    value={newEvent.name}
                    onChange={handleInputChange}
                    placeholder="e.g. Winter Carnival"
                    className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-black placeholder:text-gray-400"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Event Type</label>
                  <select
                    name="type"
                    value={newEvent.type}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-black"
                  >
                    <option value="Cultural Festival">Cultural Festival</option>
                    <option value="Tribal Festival">Tribal Festival</option>
                    <option value="Cultural Event">Cultural Event</option>
                    <option value="Film Festival">Film Festival</option>
                    <option value="Music Concert">Music Concert</option>
                  </select>
                </div>

                <div className="space-y-2 md:col-span-2">
                  <label className="text-sm font-medium text-gray-700">Location</label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                    <input
                      type="text"
                      name="location"
                      value={newEvent.location}
                      onChange={handleInputChange}
                      placeholder="e.g. Ranchi, Jharkhand"
                      className="w-full pl-9 pr-4 py-2 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-black placeholder:text-gray-400"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Start Date</label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                    <input
                      type="date"
                      name="date"
                      value={newEvent.date}
                      onChange={handleInputChange}
                      className="w-full pl-9 pr-4 py-2 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-black placeholder:text-gray-400"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">End Date</label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                    <input
                      type="date"
                      name="endDate"
                      value={newEvent.endDate}
                      onChange={handleInputChange}
                      className="w-full pl-9 pr-4 py-2 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-black placeholder:text-gray-400"
                    />
                  </div>
                </div>

                <div className="space-y-2 md:col-span-2">
                  <label className="text-sm font-medium text-gray-700">Description</label>
                  <textarea
                    name="description"
                    value={newEvent.description}
                    onChange={handleInputChange}
                    rows={4}
                    placeholder="Describe the event details, highlights, and schedule..."
                    className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none text-black placeholder:text-gray-400"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Organizer</label>
                  <div className="relative">
                    <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                    <input
                      type="text"
                      name="organizer"
                      value={newEvent.organizer}
                      onChange={handleInputChange}
                      placeholder="e.g. Tourism Dept"
                      className="w-full pl-9 pr-4 py-2 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-black placeholder:text-gray-400"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Entry Fee (₹)</label>
                  <input
                    type="number"
                    name="entryFee"
                    value={newEvent.entryFee}
                    onChange={handleInputChange}
                    placeholder="0 for free"
                    min="0"
                    className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-black placeholder:text-gray-400"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Expected Attendees</label>
                  <input
                    type="number"
                    name="expectedAttendees"
                    value={newEvent.expectedAttendees}
                    onChange={handleInputChange}
                    placeholder="e.g. 5000"
                    min="0"
                    className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-black placeholder:text-gray-400"
                  />
                </div>

                <div className="flex items-center gap-2 pt-4">
                  <input
                    type="checkbox"
                    name="featured"
                    id="featured"
                    checked={newEvent.featured}
                    onChange={handleInputChange}
                    className="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary"
                  />
                  <label htmlFor="featured" className="text-sm font-medium cursor-pointer text-gray-700">
                    Mark as Featured Event
                  </label>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 p-6 border-t border-gray-200 bg-gray-50/50">
              <Button
                variant="outline"
                onClick={() => setShowAddEventModal(false)}
                className="border-gray-300 text-gray-700 hover:bg-gray-100 hover:text-black"
              >
                Cancel
              </Button>
              <Button
                onClick={handleSaveEvent}
                className="bg-primary hover:bg-primary/90 text-white"
              >
                Add Event
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
