import { Movie } from "../movie/Movie";
import { User } from "../user/User";

export type Comment = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  content: string | null;
  parentComment: string | null;
  movie?: Movie | null;
  user?: User | null;
};
