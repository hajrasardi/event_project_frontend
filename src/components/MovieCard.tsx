"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Clock, Calendar } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface MovieCardProps {
  id: string;
  title: string;
  poster: string;
  rating: number;
  duration: string;
  genre: string;
  showTimes: string[];
  description: string;
}

const MovieCard = ({
  id,
  title,
  poster,
  rating,
  duration,
  genre,
  showTimes,
  description,
}: MovieCardProps) => {
  return (
    <Card className="group overflow-hidden bg-gradient-card border-cinema-surface-light hover:border-cinema-primary/30 transition-all duration-300 hover:scale-105 hover:shadow-glow">
      <div className="relative aspect-[2/3] bg-black flex items-center justify-center overflow-hidden">
        <Image
          src={poster}
          alt={title}
          width={400}
          height={600}
          className="max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-105"
        />
        {/* Overlay gradient on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Genre Badge */}
        <div className="absolute top-3 right-3">
          <Badge variant="secondary" className="bg-black/50 text-white">
            {genre}
          </Badge>
        </div>

        {/* Rating */}
        <div className="absolute bottom-3 left-3 flex items-center space-x-1 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Star className="w-4 h-4 fill-cinema-primary text-cinema-primary" />
          <span className="text-sm font-medium">{rating}</span>
        </div>
      </div>

      <CardContent className="p-4">
        <div className="space-y-3">
          {/* Title & Description */}
          <div>
            <h3 className="font-bold text-lg text-foreground group-hover:text-cinema-primary transition-colors">
              {title}
            </h3>
            <p className="text-sm text-muted-foreground line-clamp-2">
              {description}
            </p>
          </div>

          {/* Duration & Rating */}
          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
            <div className="flex items-center space-x-1">
              <Clock className="w-4 h-4" />
              <span>{duration}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Star className="w-4 h-4 fill-cinema-primary text-cinema-primary" />
              <span>{rating}/10</span>
            </div>
          </div>

          {/* Showtimes */}
          <div className="space-y-2">
            <div className="flex items-center space-x-1 text-sm text-muted-foreground">
              <Calendar className="w-4 h-4" />
              <span>Today's Shows:</span>
            </div>
            <div className="flex flex-wrap gap-1">
              {showTimes.slice(0, 3).map((time) => (
                <Button
                  key={time}
                  variant="outline"
                  size="sm"
                  className="text-xs h-7 border-cinema-primary/30 hover:border-cinema-primary hover:bg-cinema-primary/10"
                >
                  {time}
                </Button>
              ))}
              {showTimes.length > 3 && (
                <Button variant="ghost" size="sm" className="text-xs h-7">
                  +{showTimes.length - 3} more
                </Button>
              )}
            </div>
          </div>

          {/* Book Button */}
          <div className="pt-2">
            <Link href={`/movie-details/${id}`}>
              <Button className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:opacity-90">
                Book Tickets
              </Button>
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MovieCard;
