import React, {useEffect} from 'react';
import {Image, SafeAreaView, useWindowDimensions, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import ListHeader from '../../components/ListHeader';

import AllUserList from './AllUserList';
import {styles} from './Home.styles';
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

export function Home() {
  const dispatch = useDispatch();

  const access_token = useSelector(getAccessToken);

  const {width} = useWindowDimensions();

  const track_info = useSelector(getTrackInfo);

  const setUserDetails = async () => {
    try {
      // const res = await getUserAllListData();
      const resUser = await getUserDetails();
      const resTrackDetails = await getTrackDetails(
        resUser?.data?.access_token,
      );
      dispatch(setAccessTokenToStore(resUser?.data?.access_token));
      dispatch(setTrackDetailsToStore(resTrackDetails?.data));
    } catch (error) {
      console.log(
        '[Home] setUserAllListData error: ',
        error.response.status === 400,
      );
    }
  };

  useEffect(() => {
    setUserDetails();
  }, []);

  useEffect(() => {
    console.log('track_info====== ', track_info);
  }, [track_info]);

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.container}>
        <TopBar onMenuPress={() => {}} onBellShow={() => {}} />
        <View style={styles.subContainer}>
          <ListHeader title="Home" style={styles.popularHeader} />

          <TxtMedium
            title={'Title : ' + track_info?.name}
            style={styles.title}
          />

          <TxtMedium
            title={'Track Number : ' + track_info?.track_number}
            style={styles.title}
          />

          <Image
            source={{uri: track_info?.album?.images?.[2]?.url}}
            style={{width: width - 30, height: width - 30, marginTop: 20}}
          />

          {/* <AllUserList arrUserList={arrUserList} /> */}
        </View>
      </SafeAreaView>
    </View>
  );
}
