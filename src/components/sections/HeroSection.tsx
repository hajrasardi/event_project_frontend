"use client";

import { Button } from "@/components/ui/button";
import { Film, Play, Ticket } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden py-20 bg-gradient-hero">
      <div className="container mx-auto px-4 text-center space-y-6 animate-fade-in">
        {/* Badge */}
        <div className="inline-flex items-center space-x-2 bg-cinema-surface/50 backdrop-blur-sm rounded-full px-4 py-2 border border-cinema-primary/30">
          <Film className="w-4 h-4 text-cinema-primary" />
          <span className="text-sm text-cinema-primary font-medium">
            Premium Cinema Experience
          </span>
        </div>

        {/* Title */}
        <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
          Welcome to{" "}
          <span className="bg-gradient-primary bg-clip-text text-orange-400">
            Bo-box
          </span>
        </h1>

        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Discover the latest blockbusters, reserve your perfect seats, and
          experience movies like never before in our state-of-the-art theaters.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Link href="/showtimes">
            <Button variant="cinema" size="lg" className="group">
              <Ticket className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Book Tickets Now
            </Button>
          </Link>
          <Button variant="cinema" size="lg" className="group">
            <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
            Watch Trailers
          </Button>
        </div>
      </div>

      {/* Floating effects */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-cinema-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-cinema-secondary/10 rounded-full blur-3xl animate-pulse delay-1000" />
    </section>
  );
}
