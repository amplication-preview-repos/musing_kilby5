import { MovieWhereUniqueInput } from "../movie/MovieWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CommentCreateInput = {
  content?: string | null;
  parentComment?: string | null;
  movie?: MovieWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
