import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { MovieWhereUniqueInput } from "../movie/MovieWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type RatingWhereInput = {
  id?: StringFilter;
  ratingValue?: IntNullableFilter;
  movie?: MovieWhereUniqueInput;
  user?: UserWhereUniqueInput;
};
