import { Comment as TComment } from "../api/comment/Comment";

export const COMMENT_TITLE_FIELD = "parentComment";

export const CommentTitle = (record: TComment): string => {
  return record.parentComment?.toString() || String(record.id);
};
