import {TYPES} from '../actions/DashBoardActions';

interface ActionObject {
  type: string;
  payload?: any;
}

interface defaultStateProps {
  userAllList?: Array<any>;
  access_token?: '';
  track_details?: '';
}

const defaultState: defaultStateProps = {
  userAllList: [],
  access_token: '',
  track_details: ''
};
export const dashBoardReducer = (
  state = defaultState,
  {payload, type}: ActionObject,
) => {
  switch (type) {
    case TYPES.ACCESS_TOKEN:
      return {...state, access_token: payload};
    case TYPES.TRACK_DETAILS:
      return {...state, track_details: payload};
    default:
      return state;
  }
};
