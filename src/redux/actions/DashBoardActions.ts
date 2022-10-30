interface defaultTypesProps {
  ACCESS_TOKEN: string;
  TRACK_DETAILS: string;
}

export const TYPES: defaultTypesProps = {
  ACCESS_TOKEN: 'ACCESS_TOKEN',
  TRACK_DETAILS: 'TRACK_DETAILS',
};

export const setTrackDetailsToStore = (data: Array<any>) => ({
  type: TYPES.TRACK_DETAILS,
  payload: data,
});

export const setAccessTokenToStore = (data: string) => ({
  type: TYPES.ACCESS_TOKEN,
  payload: data,
});
