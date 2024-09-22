import { createSlice } from "@reduxjs/toolkit";
import Projectors from "./assets/addons/Projectors.jpg";
import Speakers from "./assets/addons/Speaker.jpg";
import Microphones from "./assets/addons/Microphones.jpg";
import Whiteboards from "./assets/addons/Whiteboards.png";
import Signage from "./assets/addons/Signage.jpg";
const images = {
  Projectors,
  Speakers,
  Microphones,
  Whiteboards,
  Signage,
};
export const avSlice = createSlice({
  name: "av",
  initialState: [
    {
      img: images.Projectors,
      name: "Projectors",
      cost: 200,
      quantity: 0,
    },
    {
      img: images.Speakers,
      name: "Speaker",
      cost: 35,
      quantity: 0,
    },
    {
      img: images.Microphones,
      name: "Microphones",
      cost: 45,
      quantity: 0,
    },
    {
      img: images.Whiteboards,
      name: "Whiteboards",
      cost: 80,
      quantity: 0,
    },

    {
      img: images.Signage,
      name: "Signage",
      cost: 80,
      quantity: 0,
    },
  ],

  reducers: {
    incrementAvQuantity: (state, action) => {
      const { payload: index } = action;
      if (state[index]) {
        state[index].quantity++;
      }
    },
    decrementAvQuantity: (state, action) => {
      const { payload: index } = action;
      if (state[index] && state[index].quantity > 0) {
        state[index].quantity--;
      }
    },
  },
});

export const { incrementAvQuantity, decrementAvQuantity } = avSlice.actions;

export default avSlice.reducer;
