import { createSlice } from "@reduxjs/toolkit";
import { Books } from "./data";

const bookListSlice = createSlice({
  name: "BookList",
  initialState: {
    Books: Books,
  },
  reducers: {
    addBook: (state, action) => {
      state.Books.unshift(action.payload);
    },
  },
});

export const { addBook } = bookListSlice.actions;
export default bookListSlice.reducer;
