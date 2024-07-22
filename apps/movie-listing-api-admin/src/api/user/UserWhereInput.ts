import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { MovieListRelationFilter } from "../movie/MovieListRelationFilter";
import { RatingListRelationFilter } from "../rating/RatingListRelationFilter";
import { CommentListRelationFilter } from "../comment/CommentListRelationFilter";

export type UserWhereInput = {
  id?: StringFilter;
  firstName?: StringNullableFilter;
  lastName?: StringNullableFilter;
  username?: StringFilter;
  email?: StringNullableFilter;
  movies?: MovieListRelationFilter;
  ratings?: RatingListRelationFilter;
  comments?: CommentListRelationFilter;
};
