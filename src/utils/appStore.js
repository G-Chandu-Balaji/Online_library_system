import { configureStore } from "@reduxjs/toolkit";
import BookListReducer from "../utils/bookListSlice";
const appStore = configureStore({
  reducer: {
    BookList: BookListReducer,
  },
});

export default appStore;
