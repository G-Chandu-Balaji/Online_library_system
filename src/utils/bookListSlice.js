import { createSlice } from "@reduxjs/toolkit";
import { Books } from "./data";

const bookListSlice = createSlice({
  name: "BookList",
  initialState: {
    Books: Books,
  },
  reducers: {
    addBook: (state, action) => {
      console.log("inside reducer action details", state);
      state.Books.push(action.payload);
      console.log("added new item", state.Books);
    },
  },
});

export const { addBook } = bookListSlice.actions;
export default bookListSlice.reducer;
