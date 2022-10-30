import React from 'react';
import { StyleSheet, View } from 'react-native';
import { TxtBold } from './text/TxtBold';

interface ListHeaderProps {
  title: string;
  testID?: string;
  style?: object;
}

const ListHeader = ({ title = '', style = {},testID = '' }: ListHeaderProps) => {
  return (
    <View testID={testID} style={[styles.container, { ...style }]}>
      <TxtBold title={title} style={styles.title} />
      <View style={styles.flex}></View>
    </View>
  );
};

export default ListHeader;

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  flex: { flex: 1 },
  title: { color: '#110E47' },
  search: { marginRight: 10 },
});
