"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Clock, Calendar, ArrowLeft, Users, Award } from "lucide-react";
import { nowPlaying } from "@/data/movies";

export default function MovieDetails() {
  const params = useParams();
  const id = params?.id as string;
  const movie = nowPlaying.find((m) => m.id === id);

  if (!movie) {
    return (
      <div className="min-h-screen bg-gradient-hero">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold">Movie not found</h1>
            <Link href="/">
              <Button variant="cinema" className="mt-4">
                Back to Movies
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-hero">
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Link href="/">
          <Button variant="ghost" className="mb-6 group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Movies
          </Button>
        </Link>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Movie Poster */}
          <div className="lg:col-span-1">
            <Card className="overflow-hidden bg-gradient-card border-cinema-surface-light">
              <img
                src={movie.poster}
                alt={movie.title}
                className="w-full h-auto object-cover"
              />
            </Card>
          </div>

          {/* Movie Information */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <div className="flex items-center space-x-3 mb-3">
                <h1 className="text-4xl font-bold text-foreground">
                  {movie.title}
                </h1>
                <Badge
                  variant="secondary"
                  className="bg-cinema-primary/20 text-cinema-primary"
                >
                  {movie.genre}
                </Badge>
              </div>

              <div className="flex items-center space-x-6 text-muted-foreground mb-4">
                <div className="flex items-center space-x-1">
                  <Star className="w-5 h-5 fill-cinema-primary text-cinema-primary" />
                  <span className="font-medium">{movie.rating}/10</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="w-5 h-5" />
                  <span>{movie.duration}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Calendar className="w-5 h-5" />
                  <span>{movie.releaseDate}</span>
                </div>
              </div>

              <p className="text-lg text-foreground leading-relaxed">
                {movie.description}
              </p>
            </div>

            {/* Cast & Crew */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-gradient-card border-cinema-surface-light">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Users className="w-5 h-5" />
                    <span>Cast</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {movie.cast.map((actor, index) => (
                      <li key={index} className="text-muted-foreground">
                        {actor}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card border-cinema-surface-light">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Award className="w-5 h-5" />
                    <span>Director</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{movie.director}</p>
                </CardContent>
              </Card>
            </div>

            {/* Showtimes */}
            <Card className="bg-gradient-card border-cinema-primary/30">
              <CardHeader>
                <CardTitle>Today's Showtimes</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
                  {movie.showTimes.map((time) => (
                    <Link key={time} href={`/booking/${movie.id}/${time}`}>
                      <Button
                        variant="default"
                        className="w-full text-center hover:scale-105"
                      >
                        {time}
                      </Button>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
