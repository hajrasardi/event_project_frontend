"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Monitor } from "lucide-react";

interface Seat {
  id: string;
  row: string;
  number: number;
  isAvailable: boolean;
  isSelected: boolean;
  isPremium?: boolean;
}

interface SeatSelectionProps {
  onSeatsChange: (selectedSeats: Seat[]) => void;
}

const SeatSelection = ({ onSeatsChange }: SeatSelectionProps) => {
  // Generate initial seat map
  const [seats, setSeats] = useState<Seat[]>(() => {
    const seatData: Seat[] = [];
    const rows = ["A", "B", "C", "D", "E", "F", "G", "H"];

    rows.forEach((row, rowIndex) => {
      const seatsPerRow = 12;
      for (let i = 1; i <= seatsPerRow; i++) {
        const isPremium = rowIndex >= 4; // Last 4 rows are premium
        const isAvailable = Math.random() > 0.2; // 80% chance available

        seatData.push({
          id: `${row}${i}`,
          row,
          number: i,
          isAvailable,
          isSelected: false,
          isPremium,
        });
      }
    });

    return seatData;
  });

  // Toggle seat selection
  const toggleSeat = (seatId: string) => {
    const updatedSeats = seats.map((seat) => {
      if (seat.id === seatId && seat.isAvailable) {
        return { ...seat, isSelected: !seat.isSelected };
      }
      return seat;
    });

    setSeats(updatedSeats);

    // Notify parent
    const selectedSeats = updatedSeats.filter((seat) => seat.isSelected);
    onSeatsChange(selectedSeats);
  };

  // Dynamic seat styling
  const getSeatClass = (seat: Seat) => {
    if (!seat.isAvailable)
      return "bg-gray-300 text-gray-500 cursor-not-allowed";
    if (seat.isSelected) return "bg-cinema-primary text-white";
    return "bg-gray-100 hover:bg-gray-200 text-gray-900";
  };

  // Selected seats and total price
  const selectedSeats = seats.filter((seat) => seat.isSelected);
  const totalPrice = selectedSeats.reduce(
    (total, seat) => total + (seat.isPremium ? 15 : 12),
    0
  );

  // Group seats by row
  const groupedSeats = seats.reduce((acc, seat) => {
    if (!acc[seat.row]) acc[seat.row] = [];
    acc[seat.row].push(seat);
    return acc;
  }, {} as Record<string, Seat[]>);

  return (
    <div className="space-y-6">
      {/* Screen */}
      <div className="flex flex-col items-center space-y-4">
        <div className="w-full max-w-md h-2 bg-gradient-to-r from-cinema-primary to-cinema-accent rounded-full shadow-glow" />
        <div className="flex items-center space-x-2 text-muted-foreground">
          <Monitor className="w-5 h-5" />
          <span className="text-sm">SCREEN</span>
        </div>
      </div>

      {/* Seat Map */}
      <Card className="bg-gradient-card border-cinema-surface-light">
        <CardHeader>
          <CardTitle className="text-center">Select Your Seats</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Legend */}
          <div className="flex justify-center space-x-6 text-sm">
            <div className="flex items-center space-x-2">
              <Button className="h-8 w-8 rounded bg-gray-100 text-gray-900 cursor-default" />
              <span>Available</span>
            </div>
            <div className="flex items-center space-x-2">
              <Button className="h-8 w-8 rounded bg-cinema-primary text-white cursor-default" />
              <span>Selected</span>
            </div>
            <div className="flex items-center space-x-2">
              <Button className="h-8 w-8 rounded bg-gray-300 text-gray-500 cursor-default" />
              <span>Taken</span>
            </div>
          </div>

          {/* Seats Grid */}
          <div className="space-y-3">
            {Object.entries(groupedSeats).map(([row, rowSeats]) => (
              <div
                key={row}
                className="flex items-center justify-center space-x-2"
              >
                <span className="w-6 text-center text-muted-foreground font-medium">
                  {row}
                </span>

                {/* Left half of row */}
                <div className="flex space-x-1">
                  {rowSeats.slice(0, 6).map((seat) => (
                    <Button
                      key={seat.id}
                      className={`h-8 w-8 text-xs rounded ${getSeatClass(
                        seat
                      )} ${
                        seat.isPremium ? "border border-cinema-accent/50" : ""
                      }`}
                      onClick={() => toggleSeat(seat.id)}
                      disabled={!seat.isAvailable}
                    >
                      {seat.number}
                    </Button>
                  ))}
                </div>

                {/* Aisle */}
                <div className="w-6" />

                {/* Right half of row */}
                <div className="flex space-x-1">
                  {rowSeats.slice(6).map((seat) => (
                    <Button
                      key={seat.id}
                      className={`h-8 w-8 text-xs rounded ${getSeatClass(
                        seat
                      )} ${
                        seat.isPremium ? "border border-cinema-accent/50" : ""
                      }`}
                      onClick={() => toggleSeat(seat.id)}
                      disabled={!seat.isAvailable}
                    >
                      {seat.number}
                    </Button>
                  ))}
                </div>

                <span className="w-6 text-center text-muted-foreground font-medium">
                  {row}
                </span>
              </div>
            ))}
          </div>

          {/* Premium Section Label */}
          <div className="flex justify-center pt-4">
            <Badge
              variant="secondary"
              className="bg-cinema-accent/20 text-cinema-accent border-cinema-accent/30"
            >
              Premium Seats (+$3)
            </Badge>
          </div>
        </CardContent>
      </Card>

      {/* Selection Summary */}
      {selectedSeats.length > 0 && (
        <Card className="bg-gradient-card border-cinema-primary/30">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">
                  Selected Seats:{" "}
                  {selectedSeats.map((seat) => seat.id).join(", ")}
                </p>
                <p className="text-sm text-muted-foreground">
                  {selectedSeats.length} seat
                  {selectedSeats.length > 1 ? "s" : ""}
                </p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-cinema-primary">
                  ${totalPrice}
                </p>
                <p className="text-sm text-muted-foreground">Total</p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default SeatSelection;
