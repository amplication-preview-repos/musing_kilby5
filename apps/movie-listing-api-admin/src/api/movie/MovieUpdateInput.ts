import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { RatingUpdateManyWithoutMoviesInput } from "./RatingUpdateManyWithoutMoviesInput";
import { CommentUpdateManyWithoutMoviesInput } from "./CommentUpdateManyWithoutMoviesInput";

export type MovieUpdateInput = {
  title?: string | null;
  description?: string | null;
  releaseDate?: Date | null;
  user?: UserWhereUniqueInput | null;
  ratings?: RatingUpdateManyWithoutMoviesInput;
  comments?: CommentUpdateManyWithoutMoviesInput;
};
