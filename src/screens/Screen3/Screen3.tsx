import React, {useEffect} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  useWindowDimensions,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import ListHeader from '../../components/ListHeader';

import {styles} from './Screen3.styles';
import TopBar from '../../components/TopBar';
import {
  getAccessToken,
  getTrackInfo,
} from '../../redux/selectors/DashBoardSelectors';
import {TxtMedium} from '../../components/text/TxtMedium';

export function Screen3() {
  const access_token = useSelector(getAccessToken);

  const {width} = useWindowDimensions();

  const track_info = useSelector(getTrackInfo);

  function millisToMinutesAndSeconds(millis: number) {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
  }

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.container}>
        <TopBar onMenuPress={() => {}} onBellShow={() => {}} />
        <View style={styles.subContainer}>
          <ListHeader title="Screen 3" style={styles.popularHeader} />
          <ScrollView>
            <TxtMedium
              title={'Name : ' + track_info?.album?.name ?? ''}
              style={styles.title}
            />

            <TxtMedium
              title={'Artist name : ' + track_info?.artists?.[0]?.name ?? ''}
              style={styles.title}
            />
            <TxtMedium
              title={'Total Tracks : ' + track_info?.album?.total_tracks ?? ''}
              style={styles.title}
            />

            <Image
              source={{uri: track_info?.album?.images?.[2]?.url}}
              style={{width: width - 30, height: width - 30, marginTop: 20}}
            />

            <TxtMedium
              title={
                'Durations - ' +
                millisToMinutesAndSeconds(track_info?.duration_ms ?? 0)
              }
              style={styles.title}
            />
          </ScrollView>
          {/* <AllUserList arrUserList={arrUserList} /> */}
        </View>
      </SafeAreaView>
    </View>
  );
}
