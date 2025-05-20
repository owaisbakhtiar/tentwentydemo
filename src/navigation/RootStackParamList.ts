export type RootStackParamList = {
  MainTabs: undefined;
  GetTickets: { movieId: number; title: string; releaseDate: string };
  SelectSeats: {
    movieId: number;
    title: string;
    date: string;
    time: string;
    hall: string;
    price: number;
  };
};
