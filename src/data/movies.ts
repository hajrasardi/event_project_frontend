export interface Movie {
  id: string;
  title: string;
  poster: string;
  rating: number;
  duration: string;
  genre: string;
  showTimes: string[];
  description: string;
  cast: string[];
  director: string;
  releaseDate: string;
  trailer?: string;
}

export const nowPlaying: Movie[] = [
  {
    id: "1",
    title: "Comic 8",
    poster: "/images/comic8.jpg", // public/images/avengers.jpg
    rating: 8.5,
    duration: "3h 2m",
    genre: "Action",
    showTimes: ["10:00 AM", "1:30 PM", "5:00 PM", "8:30 PM"],
    description:
      "The Avengers assemble once more to undo the damage caused by Thanos and restore balance to the universe.",
    cast: ["Alex Thompson", "Sarah Chen", "Marcus Rodriguez", "Elena Volkov"],
    director: "James Cameron",
    releaseDate: "2024-03-15",
  },
  {
    id: "2",
    title: "Captain Marvel",
    poster: "/images/captainmarvel.jpg",
    rating: 8.3,
    duration: "2h 55m",
    genre: "Thriller",
    showTimes: ["11:00 AM", "2:30 PM", "6:00 PM", "9:30 PM"],
    description:
      "Batman uncovers corruption in Gotham City while facing the Riddler, a sadistic serial killer.",
    cast: ["Alex Thompson", "Sarah Chen", "Marcus Rodriguez", "Elena Volkov"],
    director: "James Cameron",
    releaseDate: "2024-03-15",
  },
  {
    id: "3",
    title: "Lala Land",
    poster: "/images/lalaland.jpg",
    rating: 8.7,
    duration: "2h 45m",
    genre: "Sci-Fi",
    showTimes: ["12:00 PM", "3:30 PM", "7:00 PM"],
    description:
      "Paul Atreides unites with the Fremen to avenge his family and prevent a terrible future.",
    cast: ["Alex Thompson", "Sarah Chen", "Marcus Rodriguez", "Elena Volkov"],
    director: "James Cameron",
    releaseDate: "2024-03-15",
  },
  {
    id: "4",
    title: "Monster",
    poster: "/images/monster.jpg", // public/images/avengers.jpg
    rating: 8.5,
    duration: "3h 2m",
    genre: "Action",
    showTimes: ["10:00 AM", "1:30 PM", "5:00 PM", "8:30 PM"],
    description:
      "The Avengers assemble once more to undo the damage caused by Thanos and restore balance to the universe.",
    cast: ["Alex Thompson", "Sarah Chen", "Marcus Rodriguez", "Elena Volkov"],
    director: "James Cameron",
    releaseDate: "2024-03-15",
  },
  {
    id: "5",
    title: "Past Lives",
    poster: "/images/pastlives.jpg",
    rating: 8.3,
    duration: "2h 55m",
    genre: "Thriller",
    showTimes: ["11:00 AM", "2:30 PM", "6:00 PM", "9:30 PM"],
    description:
      "Batman uncovers corruption in Gotham City while facing the Riddler, a sadistic serial killer.",
    cast: ["Alex Thompson", "Sarah Chen", "Marcus Rodriguez", "Elena Volkov"],
    director: "James Cameron",
    releaseDate: "2024-03-15",
  },
  {
    id: "6",
    title: "Rush Hour",
    poster: "/images/rushhour.jpg",
    rating: 8.7,
    duration: "2h 45m",
    genre: "Sci-Fi",
    showTimes: ["12:00 PM", "3:30 PM", "7:00 PM"],
    description:
      "Paul Atreides unites with the Fremen to avenge his family and prevent a terrible future.",
    cast: ["Alex Thompson", "Sarah Chen", "Marcus Rodriguez", "Elena Volkov"],
    director: "James Cameron",
    releaseDate: "2024-03-15",
  },
];

export const featThisWeek = [
  {
    id: "1",
    title: "Comic 8",
    poster: "/images/comic8.jpg", // public/images/avengers.jpg
    rating: 8.5,
    duration: "3h 2m",
    genre: "Action",
    showTimes: ["10:00 AM", "1:30 PM", "5:00 PM", "8:30 PM"],
    description:
      "The Avengers assemble once more to undo the damage caused by Thanos and restore balance to the universe.",
    cast: ["Alex Thompson", "Sarah Chen", "Marcus Rodriguez", "Elena Volkov"],
    director: "James Cameron",
    releaseDate: "2024-03-15",
  },
  {
    id: "2",
    title: "Captain Marvel",
    poster: "/images/captainmarvel.jpg",
    rating: 8.3,
    duration: "2h 55m",
    genre: "Thriller",
    showTimes: ["11:00 AM", "2:30 PM", "6:00 PM", "9:30 PM"],
    description:
      "Batman uncovers corruption in Gotham City while facing the Riddler, a sadistic serial killer.",
    cast: ["Alex Thompson", "Sarah Chen", "Marcus Rodriguez", "Elena Volkov"],
    director: "James Cameron",
    releaseDate: "2024-03-15",
  },
  {
    id: "3",
    title: "Lala Land",
    poster: "/images/lalaland.jpg",
    rating: 8.7,
    duration: "2h 45m",
    genre: "Sci-Fi",
    showTimes: ["12:00 PM", "3:30 PM", "7:00 PM"],
    description:
      "Paul Atreides unites with the Fremen to avenge his family and prevent a terrible future.",
    cast: ["Alex Thompson", "Sarah Chen", "Marcus Rodriguez", "Elena Volkov"],
    director: "James Cameron",
    releaseDate: "2024-03-15",
  },
];
