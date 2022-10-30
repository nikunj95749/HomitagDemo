
import { StyleSheet } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { WHITE } from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:WHITE
  },
  subContainer: {
    width:'100%',
    flex:1,
    paddingLeft: 15,
    backgroundColor:WHITE
  },
  nowShowingHeader:{ marginTop: 20, marginBottom: 20 },
  popularHeader:{ marginTop: 30, marginBottom: 5 },
  title:{ marginTop: 5, fontSize: RFPercentage(1.8), }

});
