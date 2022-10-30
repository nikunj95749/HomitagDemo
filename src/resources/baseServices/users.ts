import {callApiGet, callApiPost} from './baseApi';
import API, {BASE_URL} from '../../constants/baseApi';
import {store} from '../../redux/store';
// const StringBuffer = require("stringbuffer");

var Buffer = require('@craftzdog/react-native-buffer').Buffer;

var client_id = 'aec31d0010454f7db07d2323367d2297';
var client_secret = 'f5995ca1a9324ac99985c14417b63023';

export const getUserAllListData = () => callApiPost({url: API.USER_ALL_LIST});

export const getUserDetails = () =>
  callApiPost({
    url: API.ACCOUNT,
    data: {grant_type: 'client_credentials'},
    customHeaders: {
      Authorization:
        'Basic ' +
        Buffer.from(client_id + ':' + client_secret, 'utf-8').toString(
          'base64',
        ),
      'content-type': 'application/x-www-form-urlencoded',
    },
  });

export const getTrackDetails = (access_token: string) =>
  callApiGet({
    url: API.TRACKS,
    customHeaders: {
      Authorization: 'Bearer ' + access_token ,
    },
  });

