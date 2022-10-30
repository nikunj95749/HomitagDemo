import PropTypes from 'prop-types';
import React from 'react';
import { Image } from 'react-native';
import { userIcon, postIcon, moreIcon } from '../assets';
import { NAVIGATION } from '../constants';

const tabIcon = {
  [NAVIGATION.homeNav]: userIcon,
  [NAVIGATION.Screen2]: postIcon,
  [NAVIGATION.Screen3]: moreIcon,
};

interface TabBarIcon {
  color: string;
  routeName: string;
}

export function TabBarIcon({ color, routeName }: TabBarIcon) {
  return (
    <Image
      accessibilityIgnoresInvertColors
      source={tabIcon?.[routeName]}
      style={{ tintColor:  color }}
    />
  );
}

TabBarIcon.propTypes = {
  color: PropTypes.string.isRequired,
  routeName: PropTypes.string.isRequired,
};
