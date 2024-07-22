import { JsonValue } from "type-fest";
import { Movie } from "../movie/Movie";
import { Rating } from "../rating/Rating";
import { Comment } from "../comment/Comment";

export type User = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  username: string;
  email: string | null;
  roles: JsonValue;
  movies?: Array<Movie>;
  ratings?: Array<Rating>;
  comments?: Array<Comment>;
};
