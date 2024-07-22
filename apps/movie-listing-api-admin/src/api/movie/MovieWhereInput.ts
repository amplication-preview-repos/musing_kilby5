import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { RatingListRelationFilter } from "../rating/RatingListRelationFilter";
import { CommentListRelationFilter } from "../comment/CommentListRelationFilter";

export type MovieWhereInput = {
  id?: StringFilter;
  title?: StringNullableFilter;
  description?: StringNullableFilter;
  releaseDate?: DateTimeNullableFilter;
  user?: UserWhereUniqueInput;
  ratings?: RatingListRelationFilter;
  comments?: CommentListRelationFilter;
};
