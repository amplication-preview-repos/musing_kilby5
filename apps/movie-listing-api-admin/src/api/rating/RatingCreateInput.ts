import { MovieWhereUniqueInput } from "../movie/MovieWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type RatingCreateInput = {
  ratingValue?: number | null;
  movie?: MovieWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
