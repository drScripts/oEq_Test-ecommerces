import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [
    {
      id: "2",
      titles: "Philosophy That Addresses Topics Such As Goodness",
      description: "Agar tetap kinclong, bodi motor ten...",
      image:
        "https://awsimages.detik.net.id/community/media/visual/2019/11/20/00b91aa6-26e3-4c8b-ad2d-054c3c1a268b_169.jpeg?w=700&q=90",
      created_at: "13 Jan 2021",
    },
  ],
  loading: false,
  error: "",
};

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    setNewsState: (state, action) => {
      if ("data" in action.payload) {
        state.data = action.payload.data;
      }
      if ("loading" in action.payload) {
        state.loading = action.payload.loading;
      }
      if ("error" in action.payload) {
        state.error = action.payload.error;
      }
    },
  },
});

export const newsActions = newsSlice.actions;
export const newsReducer = newsSlice.reducer;
