interface dashBoard {
  dashBoard: userAllList;
}

interface userAllList {
  userAllList: Array<any>;
  access_token: string;
  track_details: string;
}

export const getAccessToken = (state: dashBoard) => {
  return state.dashBoard?.access_token ?? '';
};

export const getTrackInfo = (state: dashBoard) => {
  return state.dashBoard?.track_details ?? '';
};
