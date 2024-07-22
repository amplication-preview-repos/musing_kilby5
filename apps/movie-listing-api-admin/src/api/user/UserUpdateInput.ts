import { InputJsonValue } from "../../types";
import { MovieUpdateManyWithoutUsersInput } from "./MovieUpdateManyWithoutUsersInput";
import { RatingUpdateManyWithoutUsersInput } from "./RatingUpdateManyWithoutUsersInput";
import { CommentUpdateManyWithoutUsersInput } from "./CommentUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username?: string;
  email?: string | null;
  password?: string;
  roles?: InputJsonValue;
  movies?: MovieUpdateManyWithoutUsersInput;
  ratings?: RatingUpdateManyWithoutUsersInput;
  comments?: CommentUpdateManyWithoutUsersInput;
};
