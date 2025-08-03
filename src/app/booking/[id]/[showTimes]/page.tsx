"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Clock, Calendar, MapPin, CreditCard } from "lucide-react";
import { nowPlaying } from "@/data/movies";
import SeatSelection from "@/components/SeatSelection";
import { useToast } from "@/hooks/use-toast";

interface Seat {
  id: string;
  row: string;
  number: number;
  isAvailable: boolean;
  isSelected: boolean;
  isPremium?: boolean;
}

export default function Booking() {
  const params = useParams();
  const router = useRouter();
  const movieId = params?.Id as string;
  const time = params?.time as string;

  const [selectedSeats, setSelectedSeats] = useState<Seat[]>([]);
  const [currentStep, setCurrentStep] = useState<"seats" | "payment">("seats");
  const { toast } = useToast();

  const movie = nowPlaying.find((m) => m.id === movieId);

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

  const handleSeatsChange = (seats: Seat[]) => {
    setSelectedSeats(seats);
  };

  const handleProceedToPayment = () => {
    if (selectedSeats.length === 0) {
      toast({
        title: "No seats selected",
        description: "Please select at least one seat to continue.",
        variant: "destructive",
      });
      return;
    }
    setCurrentStep("payment");
  };

  const handleCompleteBooking = () => {
    toast({
      title: "Booking Confirmed!",
      description: `Your tickets for ${movie.title} have been confirmed. Enjoy the show!`,
    });

    // Simulate redirect to home page after 2 seconds
    setTimeout(() => {
      router.push("/");
    }, 2000);
  };

  const totalPrice = selectedSeats.reduce((total, seat) => {
    return total + (seat.isPremium ? 15 : 12);
  }, 0);

  return (
    <div className="min-h-screen bg-gradient-hero">
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Link href={`/movie/${movieId}`}>
          <Button variant="ghost" className="mb-6 group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Movie
          </Button>
        </Link>

        {/* Booking Header */}
        <Card className="mb-8 bg-gradient-card border-cinema-primary/30">
          <CardHeader>
            <CardTitle className="text-2xl">Book Your Tickets</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="flex items-center space-x-2">
                <div className="w-16 h-20 rounded overflow-hidden">
                  <img
                    src={movie.poster}
                    alt={movie.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold">{movie.title}</h3>
                  <Badge variant="secondary" className="mt-1">
                    {movie.genre}
                  </Badge>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-cinema-primary" />
                <div>
                  <p className="font-medium">{time}</p>
                  <p className="text-sm text-muted-foreground">Today</p>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5 text-cinema-primary" />
                <div>
                  <p className="font-medium">Theater 1</p>
                  <p className="text-sm text-muted-foreground">
                    CinemaLux Downtown
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Calendar className="w-5 h-5 text-cinema-primary" />
                <div>
                  <p className="font-medium">{movie.duration}</p>
                  <p className="text-sm text-muted-foreground">Duration</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Booking Steps */}
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {currentStep === "seats" ? (
              <SeatSelection onSeatsChange={handleSeatsChange} />
            ) : (
              <Card className="bg-gradient-card border-cinema-surface-light">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <CreditCard className="w-5 h-5" />
                    <span>Payment Details</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center py-8">
                    <CreditCard className="w-16 h-16 mx-auto text-cinema-primary mb-4" />
                    <h3 className="text-xl font-bold mb-2">
                      Payment Integration
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      This is where you would integrate with a payment processor
                      like Stripe
                    </p>
                    <Button
                      variant="cinema"
                      onClick={handleCompleteBooking}
                      className="w-full max-w-md"
                    >
                      Complete Booking (${totalPrice})
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Booking Summary */}
          <div className="lg:col-span-1">
            <Card className="bg-gradient-card border-cinema-primary/30 sticky top-24">
              <CardHeader>
                <CardTitle>Booking Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Movie Details</h4>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <p>{movie.title}</p>
                    <p>{time} - Today</p>
                    <p>Theater 1, CinemaLux Downtown</p>
                  </div>
                </div>

                {selectedSeats.length > 0 && (
                  <div>
                    <h4 className="font-medium mb-2">Selected Seats</h4>
                    <div className="space-y-1 text-sm">
                      {selectedSeats.map((seat) => (
                        <div key={seat.id} className="flex justify-between">
                          <span>
                            Seat {seat.id} {seat.isPremium && "(Premium)"}
                          </span>
                          <span>${seat.isPremium ? 15 : 12}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="border-t border-cinema-surface-light pt-4">
                  <div className="flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span className="text-cinema-primary">${totalPrice}</span>
                  </div>
                </div>

                {currentStep === "seats" ? (
                  <Button
                    variant="cinema"
                    className="w-full"
                    onClick={handleProceedToPayment}
                    disabled={selectedSeats.length === 0}
                  >
                    Proceed to Payment
                  </Button>
                ) : (
                  <Button
                    variant="ghost"
                    className="w-full"
                    onClick={() => setCurrentStep("seats")}
                  >
                    Back to Seat Selection
                  </Button>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
