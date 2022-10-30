import React, {useEffect} from 'react';
import {Image, SafeAreaView, useWindowDimensions, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import ListHeader from '../../components/ListHeader';

import {styles} from './Screen2.styles';
import TopBar from '../../components/TopBar';
import {
  getAccessToken,
  getTrackInfo,
} from '../../redux/selectors/DashBoardSelectors';
import {
  setAccessTokenToStore,
  setTrackDetailsToStore,
} from '../../redux/actions/DashBoardActions';
import {
  getTrackDetails,
  getUserDetails,
} from '../../resources/baseServices/users';
import {TxtMedium} from '../../components/text/TxtMedium';

export function Screen2() {
  const dispatch = useDispatch();

  const access_token = useSelector(getAccessToken);

  const {width} = useWindowDimensions();

  const track_info = useSelector(getTrackInfo);

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.container}>
        <TopBar onMenuPress={() => {}} onBellShow={() => {}} />
        <View style={styles.subContainer}>
          <ListHeader title="Screen 2" style={styles.popularHeader} />

          <TxtMedium
            title={'Name : ' + track_info?.name ?? ''}
            style={styles.title}
          />

          <TxtMedium
            title={'Artist name : ' + track_info?.artists?.[0]?.name ?? ''}
            style={styles.title}
          />

          <Image
            source={{uri: track_info?.album?.images?.[2]?.url}}
            style={{width: width - 30, height: width - 30, marginTop: 20}}
          />

          <TxtMedium
            title={'Popularity : ' + track_info?.popularity ?? ''}
            style={styles.title}
          />

          {/* <AllUserList arrUserList={arrUserList} /> */}
        </View>
      </SafeAreaView>
    </View>
  );
}
