const initialState = {
  danhSachGheDangDat: [],
};

export const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case "DAT_GHE": {
      let danhSachGheDangDatUpdate = [...state.danhSachGheDangDat];
      let index = danhSachGheDangDatUpdate.findIndex(
        (gheDangDat) => gheDangDat.soGhe === action.payload.soGhe
      );
      if (index !== -1) {
        danhSachGheDangDatUpdate.splice(index, 1);
      } else {
        danhSachGheDangDatUpdate.push(action.payload);
      }

      state.danhSachGheDangDat = danhSachGheDangDatUpdate;

      return { ...state };
    }
    case "HUY_GHE": {
      let danhSachGheDangDatUpdate = [...state.danhSachGheDangDat];

      let index = danhSachGheDangDatUpdate.findIndex(
        (gheDangDat) => gheDangDat.soGhe === action.payload
      );
      if (index !== 1) {
        danhSachGheDangDatUpdate.splice(index, 1);
      }

      state.danhSachGheDangDat = danhSachGheDangDatUpdate;
      return { ...state };
    }
    default:
      return { ...state };
  }
};
