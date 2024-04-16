import { View, Text, Pressable } from 'react-native';
import React from 'react';
import { COLORS } from '../constants';

const Header = (props) => {
  return (
    <View style={{ flexDirection: 'row', margin: 15 }}>
      <Text style={{ fontWeight: 'bold', fontSize: 30, color: COLORS.white }}>
        {props.name}
      </Text>
    </View>
  );
};

export default Header;
