// venueSlice.js
import { createSlice } from "@reduxjs/toolkit";
import ConferenceRoom from "./assets/venue/ConferenceRoom.jpg";
import AuditoriumHall from "./assets/venue/AuditoriumHall.jpg";
import PresentationRoom from "./assets/venue/PresentationRoom.jpg";
import LargeMeetingRoom from "./assets/venue/LargeMeetingRoom.jpg";
import SmallMeetingRoom from "./assets/venue/SmallMeetingRoom.jpg";

const images = {
  ConferenceRoom,
  AuditoriumHall,
  PresentationRoom,
  LargeMeetingRoom,
  SmallMeetingRoom,
};

export const venueSlice = createSlice({
  name: "venue",
  initialState: [
    {
      img: images.ConferenceRoom,
      name: "Conference Room (Capacity:15)",
      cost: 3500,
      quantity: 0,
    },
    {
      img: images.AuditoriumHall,
      name: "Auditorium Hall (Capacity:200)",
      cost: 5500,
      quantity: 0,
    },
    {
      img: images.PresentationRoom,
      name: "Presentation Room (Capacity:50)",
      cost: 700,
      quantity: 0,
    },
    {
      img: images.LargeMeetingRoom,
      name: "Large Meeting Room (Capacity:10)",
      cost: 900,
      quantity: 0,
    },
    {
      img: images.SmallMeetingRoom,
      name: "Small Meeting Room (Capacity:5)",
      cost: 1100,
      quantity: 0,
    },
  ],
  reducers: {
    incrementQuantity: (state, action) => {
      const { payload: index } = action;
      if (state[index]) {
        if (
          state[index].name === " Auditorium Hall (Capacity:200)" &&
          state[index].quantity >= 3
        ) {
          return;
        }
        state[index].quantity++;
      }
    },
    decrementQuantity: (state, action) => {
      const { payload: index } = action;
      if (state[index] && state[index].quantity > 0) {
        state[index].quantity--;
      }
    },
  },
});

export const { incrementQuantity, decrementQuantity } = venueSlice.actions;

export default venueSlice.reducer;
