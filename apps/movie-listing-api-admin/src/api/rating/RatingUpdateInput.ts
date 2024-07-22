import { MovieWhereUniqueInput } from "../movie/MovieWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type RatingUpdateInput = {
  ratingValue?: number | null;
  movie?: MovieWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
