"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MapPin } from "lucide-react";
import { nowPlaying } from "@/data/movies";

export default function Showtimes() {
  const [selectedDate, setSelectedDate] = useState("today");
  const [selectedTheater, setSelectedTheater] = useState("all");

  const dates = [
    { id: "today", label: "Today", date: "Dec 15" },
    { id: "tomorrow", label: "Tomorrow", date: "Dec 16" },
    { id: "day3", label: "Sun", date: "Dec 17" },
    { id: "day4", label: "Mon", date: "Dec 18" },
  ];

  const theaters = [
    { id: "all", name: "All Theaters" },
    { id: "downtown", name: "CinemaLux Downtown" },
    { id: "mall", name: "CinemaLux Mall" },
    { id: "north", name: "CinemaLux North" },
  ];

  return (
    <div className="min-h-screen bg-gradient-hero">
      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">Showtimes</h1>
          <p className="text-muted-foreground">
            Find the perfect showtime for your movie experience
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8 space-y-4">
          {/* Date Selection */}
          <Card className="bg-gradient-card border-cinema-surface-light">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Calendar className="w-5 h-5" />
                <span>Select Date</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {dates.map((date) => (
                  <Button
                    key={date.id}
                    variant={selectedDate === date.id ? "cinema" : "outline"}
                    onClick={() => setSelectedDate(date.id)}
                    className="flex flex-col items-center p-4 h-auto"
                  >
                    <span className="font-medium">{date.label}</span>
                    <span className="text-sm opacity-80">{date.date}</span>
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Theater Selection */}
          <Card className="bg-gradient-card border-cinema-surface-light">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <MapPin className="w-5 h-5" />
                <span>Select Theater</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {theaters.map((theater) => (
                  <Button
                    key={theater.id}
                    variant={
                      selectedTheater === theater.id ? "cinema" : "outline"
                    }
                    onClick={() => setSelectedTheater(theater.id)}
                  >
                    {theater.name}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Movie Showtimes */}
        <div className="space-y-6">
          {nowPlaying.map((movie) => (
            <Card
              key={movie.id}
              className="bg-gradient-card border-cinema-surface-light hover:border-cinema-primary/30 transition-colors"
            >
              <CardContent className="p-6">
                <div className="grid md:grid-cols-4 gap-6">
                  {/* Movie Info */}
                  <div className="md:col-span-1">
                    <div className="flex md:block items-start space-x-4 md:space-x-0">
                      <img
                        src={movie.poster}
                        alt={movie.title}
                        className="w-20 h-28 md:w-full md:h-48 object-cover rounded"
                      />
                      <div className="md:mt-3">
                        <h3 className="font-bold text-lg">{movie.title}</h3>
                        <div className="flex items-center space-x-2 mt-1">
                          <Badge variant="secondary">{movie.genre}</Badge>
                          <span className="text-sm text-muted-foreground">
                            {movie.duration}
                          </span>
                        </div>
                        <div className="flex items-center space-x-1 mt-2">
                          <Clock className="w-4 h-4 text-cinema-primary" />
                          <span className="text-sm text-muted-foreground">
                            Rating: {movie.rating}/10
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Showtimes Grid */}
                  <div className="md:col-span-3">
                    <div className="space-y-4">
                      {/* Theater 1 */}
                      <div>
                        <div className="flex items-center space-x-2 mb-3">
                          <MapPin className="w-4 h-4 text-cinema-primary" />
                          <span className="font-medium">
                            CinemaLux Downtown
                          </span>
                          <Badge variant="outline" className="text-xs">
                            4K Dolby
                          </Badge>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
                          {movie.showTimes.map((time) => (
                            <Link
                              key={`downtown-${time}`}
                              href={`/booking/${movie.id}/${time}`}
                            >
                              <Button
                                variant="outline"
                                size="sm"
                                className="w-full border-cinema-primary/30 hover:border-cinema-primary hover:bg-cinema-primary/10"
                              >
                                {time}
                              </Button>
                            </Link>
                          ))}
                        </div>
                      </div>

                      {/* Theater 2 */}
                      <div>
                        <div className="flex items-center space-x-2 mb-3">
                          <MapPin className="w-4 h-4 text-cinema-primary" />
                          <span className="font-medium">CinemaLux Mall</span>
                          <Badge variant="outline" className="text-xs">
                            IMAX
                          </Badge>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
                          {movie.showTimes.slice(0, 4).map((time) => (
                            <Link
                              key={`mall-${time}`}
                              href={`/booking/${movie.id}/${time}`}
                            >
                              <Button
                                variant="outline"
                                size="sm"
                                className="w-full border-cinema-primary/30 hover:border-cinema-primary hover:bg-cinema-primary/10"
                              >
                                {time}
                              </Button>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
