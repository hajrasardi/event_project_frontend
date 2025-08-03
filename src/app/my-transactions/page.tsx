"use client";

import { useState } from "react";
import { nowPlaying } from "@/data/movies";
import Link from "next/link";
import { Star } from "lucide-react";

interface Transaction {
  id: string;
  movieId: string;
  movieTitle: string;
  showTime: string; // e.g. "10:00 AM"
  date: string; // ISO date string
  seats: string[];
  isRated: boolean;
  rating?: number;
  review?: string;
}

// Dummy transactions
const initialTransactions: Transaction[] = [
  {
    id: "trx1",
    movieId: "1",
    movieTitle: "Comic 8",
    showTime: "10:00 AM",
    date: "2025-08-01",
    seats: ["A1", "A2"],
    isRated: false,
  },
  // Add more transactions as needed
];

// Helper to check if movie time has ended
function hasMovieEnded(date: string, showTime: string) {
  const [hour, minute, period] = showTime.match(/(\d+):(\d+) (\w+)/)!.slice(1);
  let h = parseInt(hour, 10);
  if (period === "PM" && h !== 12) h += 12;
  if (period === "AM" && h === 12) h = 0;
  const movieDate = new Date(date);
  movieDate.setHours(h, parseInt(minute, 10), 0, 0);
  return new Date() > movieDate;
}

export default function MyTransactions() {
  const [transactions, setTransactions] =
    useState<Transaction[]>(initialTransactions);
  const [selectedTrx, setSelectedTrx] = useState<Transaction | null>(null);
  const [rating, setRating] = useState<number>(0);
  const [review, setReview] = useState<string>("");

  // Handle submit rating & review
  const handleSubmitReview = () => {
    if (!selectedTrx) return;
    setTransactions((prev) =>
      prev.map((trx) =>
        trx.id === selectedTrx.id
          ? { ...trx, isRated: true, rating, review }
          : trx
      )
    );
    setSelectedTrx(null);
    setRating(0);
    setReview("");
  };

  // Star rating component
  const StarRating = ({
    value,
    onChange,
    max = 10,
  }: {
    value: number;
    onChange: (val: number) => void;
    max?: number;
  }) => (
    <div className="flex gap-1">
      {Array.from({ length: max }).map((_, i) => (
        <button
          key={i}
          type="button"
          onClick={() => onChange(i + 1)}
          className="focus:outline-none"
        >
          <Star
            size={28}
            className={
              i < value ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
            }
            fill={i < value ? "#facc15" : "none"}
          />
        </button>
      ))}
    </div>
  );

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6 text-cinema-primary">
        My Transactions
      </h1>
      <div className="space-y-6">
        {transactions.map((trx) => (
          <div
            key={trx.id}
            className="border border-cinema-primary/40 bg-gradient-card p-4 rounded-lg shadow transition hover:shadow-lg"
          >
            <div className="flex items-center justify-between">
              <div>
                <strong className="text-lg">{trx.movieTitle}</strong>
                <span className="ml-2 text-sm text-muted-foreground">
                  ({trx.showTime}, {trx.date})
                </span>
              </div>
              <Link href={`/movie/${trx.movieId}`}>
                <button className="px-3 py-1 rounded bg-cinema-primary text-white text-xs hover:bg-cinema-primary/80 transition">
                  View Movie
                </button>
              </Link>
            </div>
            <div className="mt-2 text-sm">
              Seats:{" "}
              <span className="font-semibold">{trx.seats.join(", ")}</span>
            </div>
            {hasMovieEnded(trx.date, trx.showTime) && !trx.isRated ? (
              <button
                className="btn btn-primary mt-4 w-full"
                onClick={() => setSelectedTrx(trx)}
              >
                Give Rating & Review
              </button>
            ) : trx.isRated ? (
              <div className="mt-4 bg-cinema-surface-light p-3 rounded">
                <span className="font-semibold">Rating:</span> {trx.rating} ⭐
                <p className="mt-1 text-muted-foreground">
                  <span className="font-semibold">Review:</span> {trx.review}
                </p>
              </div>
            ) : (
              <div className="mt-4 text-muted-foreground text-xs">
                Waiting for movie to end...
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Modal for rating & review */}
      {selectedTrx && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-lg w-full max-w-md relative">
            <h2 className="text-xl font-bold mb-4 text-cinema-primary">
              Rate & Review: {selectedTrx.movieTitle}
            </h2>
            <div className="mb-4">
              <label className="block mb-2 font-medium">Rating:</label>
              <StarRating value={rating} onChange={setRating} />
            </div>
            <div className="mb-4">
              <label className="block mb-2 font-medium">Review:</label>
              <textarea
                value={review}
                onChange={(e) => setReview(e.target.value)}
                className="border rounded px-2 py-1 w-full focus:outline-cinema-primary"
                rows={3}
              />
            </div>
            <div className="flex gap-2">
              <button
                className="btn btn-primary flex-1"
                onClick={handleSubmitReview}
                disabled={rating < 1 || rating > 10 || review.length < 3}
              >
                Submit
              </button>
              <button
                className="btn btn-secondary flex-1"
                onClick={() => setSelectedTrx(null)}
              >
                Back to Transactions
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
