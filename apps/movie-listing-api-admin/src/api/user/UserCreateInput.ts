import { InputJsonValue } from "../../types";
import { MovieCreateNestedManyWithoutUsersInput } from "./MovieCreateNestedManyWithoutUsersInput";
import { RatingCreateNestedManyWithoutUsersInput } from "./RatingCreateNestedManyWithoutUsersInput";
import { CommentCreateNestedManyWithoutUsersInput } from "./CommentCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username: string;
  email?: string | null;
  password: string;
  roles: InputJsonValue;
  movies?: MovieCreateNestedManyWithoutUsersInput;
  ratings?: RatingCreateNestedManyWithoutUsersInput;
  comments?: CommentCreateNestedManyWithoutUsersInput;
};
