import { SortOrder } from "../../util/SortOrder";

export type MovieOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  title?: SortOrder;
  description?: SortOrder;
  releaseDate?: SortOrder;
  userId?: SortOrder;
};
