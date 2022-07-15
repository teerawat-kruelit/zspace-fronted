import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  visible: false,
  content: <></>,
  data: null,
};
const reducers = {
  setModalVisible: (
    state,
    { payload: { visible = false, content = <></>, data = null } }
  ) => {
    return { visible, content, data };
  },
};

export const modal = createSlice({
  name: "modal",
  initialState,
  reducers,
});

export const { setModalVisible } = modal.actions;
export default modal.reducer;
