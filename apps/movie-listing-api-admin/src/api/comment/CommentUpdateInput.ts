import { MovieWhereUniqueInput } from "../movie/MovieWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CommentUpdateInput = {
  content?: string | null;
  parentComment?: string | null;
  movie?: MovieWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
