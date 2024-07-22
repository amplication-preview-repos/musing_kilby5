import { Movie } from "../movie/Movie";
import { User } from "../user/User";

export type Rating = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  ratingValue: number | null;
  movie?: Movie | null;
  user?: User | null;
};
