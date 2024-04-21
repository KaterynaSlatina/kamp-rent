import { createSlice } from "@reduxjs/toolkit";
import { fetchKamps } from "./operations";

const kampsSlice = createSlice({
  name: "kamps",
  initialState: {
    kamps: [],
    isLoading: false,
    error: "",
    currentPage: 1,
    loadedItems: 4,
  },
  reducers: {
    setPage(state, action) {
      state.currentPage = action.payload;
    },
    incrementLoadedItems(state, action) {
      state.loadedItems += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchKamps.pending, (state) => {
        state.isLoading = true;
      })

      .addCase(fetchKamps.fulfilled, (state, action) => {
        state.error = null;
        state.kamps = action.payload;
      });
  },
});

export const { setPage, incrementLoadedItems } = kampsSlice.actions;

export const kampsReducer = kampsSlice.reducer;
