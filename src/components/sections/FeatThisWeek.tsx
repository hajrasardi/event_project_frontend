"use client";

import { featThisWeek } from "@/data/movies";
import MovieCard from "@/components/MovieCard";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function FeatThisWeek() {
  return (
    <section className="py-16 bg-cinema-surface/20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured This Week
          </h2>
          <p className="text-muted-foreground">
            Don't miss these blockbuster experiences
          </p>
        </div>

        {/* Movie Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featThisWeek.map((movie, index) => (
            <div
              key={movie.id}
              className="animate-scale-in"
              style={{
                animationDelay: `${index * 100}ms`,
                animationFillMode: "both",
              }}
            >
              <MovieCard {...movie} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
