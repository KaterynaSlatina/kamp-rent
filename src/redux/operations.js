import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://661ffd793bf790e070aea539.mockapi.io/catalog";

export const fetchKamps = createAsyncThunk(
  "catalog/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/catalog");
      console.log(response);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
