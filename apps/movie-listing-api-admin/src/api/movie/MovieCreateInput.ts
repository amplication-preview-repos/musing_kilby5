import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { RatingCreateNestedManyWithoutMoviesInput } from "./RatingCreateNestedManyWithoutMoviesInput";
import { CommentCreateNestedManyWithoutMoviesInput } from "./CommentCreateNestedManyWithoutMoviesInput";

export type MovieCreateInput = {
  title?: string | null;
  description?: string | null;
  releaseDate?: Date | null;
  user?: UserWhereUniqueInput | null;
  ratings?: RatingCreateNestedManyWithoutMoviesInput;
  comments?: CommentCreateNestedManyWithoutMoviesInput;
};
