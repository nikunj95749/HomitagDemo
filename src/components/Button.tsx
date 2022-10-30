import React from 'react';
import {StyleSheet, View} from 'react-native';
import {TxtBold} from './text/TxtBold';
import {TxtMedium} from './text/TxtMedium';

interface ListHeaderProps {
  title: string;
  style?: object;
  testID?: string;
}

const Button = ({title = '', style = {}, testID = ''}: ListHeaderProps) => {
  return (
    <View
    testID={testID}
      style={[{width: '100%', height: 110, justifyContent: 'center'}, style]}>
      <View
        style={{
          marginHorizontal: 30,
          height: 70,
          borderRadius: 15,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'yellow',
        }}>
        <TxtMedium title={title} />
      </View>
    </View>
  );
};

export default Button;

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  flex: {flex: 1},
  title: {color: '#110E47'},
  search: {marginRight: 10},
});
