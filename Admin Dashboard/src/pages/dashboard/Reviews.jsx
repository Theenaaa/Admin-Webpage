import React, { useState } from 'react';
import {
    Search,
    Star,
    MapPin,
    TrendingUp
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const placesRatings = [
    {
        id: 1,
        name: 'Taj Mahal',
        location: 'Agra, India',
        averageRating: 4.8,
        totalReviews: 12450,
        ratingDistribution: {
            5: 8500,
            4: 2500,
            3: 1000,
            2: 300,
            1: 150
        }
    },
    {
        id: 2,
        name: 'Red Fort',
        location: 'Delhi, India',
        averageRating: 4.5,
        totalReviews: 8900,
        ratingDistribution: {
            5: 5000,
            4: 2500,
            3: 1000,
            2: 300,
            1: 100
        }
    },
    {
        id: 3,
        name: 'Jaipur City Palace',
        location: 'Jaipur, Rajasthan',
        averageRating: 4.6,
        totalReviews: 6700,
        ratingDistribution: {
            5: 4000,
            4: 2000,
            3: 500,
            2: 150,
            1: 50
        }
    },
    {
        id: 4,
        name: 'Goa Beaches',
        location: 'Goa, India',
        averageRating: 4.7,
        totalReviews: 15200,
        ratingDistribution: {
            5: 10000,
            4: 4000,
            3: 800,
            2: 300,
            1: 100
        }
    },
    {
        id: 5,
        name: 'Kerala Backwaters',
        location: 'Kerala, India',
        averageRating: 4.9,
        totalReviews: 9800,
        ratingDistribution: {
            5: 8000,
            4: 1500,
            3: 200,
            2: 80,
            1: 20
        }
    }
];

export default function Reviews() {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredPlaces = placesRatings.filter(place =>
        place.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        place.location.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const getPercentage = (count, total) => {
        return Math.round((count / total) * 100);
    };

    return (
        <div className="space-y-8">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-foreground">Reviews & Ratings</h1>
                    <p className="text-muted-foreground mt-2">Overview of tourist sentiment by location</p>
                </div>
            </div>

            {/* Search */}
            <Card className="glass-card border-border">
                <CardContent className="p-6">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                        <input
                            type="text"
                            placeholder="Search places..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-10 pr-4 py-3 bg-muted/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-foreground placeholder:text-muted-foreground"
                        />
                    </div>
                </CardContent>
            </Card>

            {/* Places Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {filteredPlaces.map((place) => (
                    <Card key={place.id} className="glass-card border-border hover:shadow-xl transition-all duration-300">
                        <CardContent className="p-6">
                            <div className="flex items-start justify-between mb-6">
                                <div>
                                    <h3 className="text-xl font-bold text-foreground mb-1">{place.name}</h3>
                                    <div className="flex items-center gap-1 text-muted-foreground text-sm">
                                        <MapPin className="w-4 h-4" />
                                        <span>{place.location}</span>
                                    </div>
                                </div>
                                <Badge variant="outline" className="flex items-center gap-1">
                                    <TrendingUp className="w-3 h-3 text-green-500" />
                                    <span>Trending</span>
                                </Badge>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {/* Overall Rating */}
                                <div className="text-center md:text-left">
                                    <div className="text-5xl font-bold text-foreground mb-2">{place.averageRating}</div>
                                    <div className="flex items-center justify-center md:justify-start gap-1 mb-2">
                                        {[...Array(5)].map((_, i) => (
                                            <Star
                                                key={i}
                                                className={`w-5 h-5 ${i < Math.floor(place.averageRating) ? 'fill-yellow-400 text-yellow-400' : 'text-muted'}`}
                                            />
                                        ))}
                                    </div>
                                    <p className="text-sm text-muted-foreground">{place.totalReviews.toLocaleString()} reviews</p>
                                </div>

                                {/* Rating Distribution */}
                                <div className="md:col-span-2 space-y-2">
                                    {[5, 4, 3, 2, 1].map((star) => {
                                        const count = place.ratingDistribution[star];
                                        const percentage = getPercentage(count, place.totalReviews);
                                        return (
                                            <div key={star} className="flex items-center gap-3 text-sm">
                                                <div className="flex items-center gap-1 w-12 flex-shrink-0">
                                                    <span className="font-medium text-foreground">{star}</span>
                                                    <Star className="w-3 h-3 text-muted-foreground" />
                                                </div>
                                                <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                                                    <div
                                                        className="h-full bg-yellow-400 rounded-full"
                                                        style={{ width: `${percentage}%` }}
                                                    />
                                                </div>
                                                <div className="w-12 text-right text-muted-foreground text-xs">
                                                    {percentage}%
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}
