import { User } from "../user/User";
import { Rating } from "../rating/Rating";
import { Comment } from "../comment/Comment";

export type Movie = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  title: string | null;
  description: string | null;
  releaseDate: Date | null;
  user?: User | null;
  ratings?: Array<Rating>;
  comments?: Array<Comment>;
};
