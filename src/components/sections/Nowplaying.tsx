"use client";

import MovieCard from "@/components/MovieCard";
import { nowPlaying } from "@/data/movies";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NowPlaying() {
  return (
    <section className="py-16 bg-cinema-surface/20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Now Playing
          </h2>
          <p className="text-muted-foreground">
            Don't miss these blockbuster experiences
          </p>
        </div>

        {/* Movie Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {nowPlaying.map((movie, index) => (
            <div
              key={movie.id}
              className="animate-scale-ins"
              style={{
                animationDelay: `${index * 100}ms`,
                animationFillMode: "both",
              }}
            >
              <MovieCard {...movie} />
            </div>
          ))}
        </div>

        {/* Optional: View More Button */}
        <div className="text-center mt-12 animate-fade-in">
          <Link href="/showtimes">
            <Button
              variant="cinema"
              size="lg"
              className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg hover:opacity-90 hover:shadow-xl transition-all"
            >
              View Upcoming Movies
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
