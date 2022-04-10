import React, { useState } from 'react';
import {
  Animated,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';

interface tabBarProps {
  state: any;
  navigation: any;
  descriptors: any;
  position?: 'Fixed' | 'Float';
  tabBarStyle?: ViewStyle;
  activeContainerStyle?: ViewStyle;
  labelStyle?: TextStyle;
  reverseLabelSelection?: Boolean;
}

const TabBar: React.FC<tabBarProps> = ({
  state,
  navigation,
  descriptors,
  position,
  tabBarStyle,
  activeContainerStyle,
  reverseLabelSelection,
  labelStyle,
}) => {
  const { routes } = state;
  const [selected, setSelected] = useState(routes[0].name);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [y, setY] = useState(0);
  const [transAnimation] = useState(new Animated.Value(0));

  const animate = (x: number) => {
    Animated.spring(transAnimation, {
      toValue: x,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View
      style={[position === 'Fixed' ? styles.fixed : styles.float, tabBarStyle]}
    >
      <Animated.View
        style={[
          styles.animatedContainer,
          activeContainerStyle,
          {
            width: width,
            height: height,
            transform: [{ translateX: transAnimation }, { translateY: y }],
          },
        ]}
      />
      {routes.map((item: any, index: number) => {
        const { options } = descriptors[item.key];

        return (
          <TouchableOpacity
            onLayout={(event) => {
              const params = event.nativeEvent.layout;
              if (item.name === selected) {
                setWidth(params.width);
                setHeight(params.height);
                animate(params.x);
                setY(params.y);
              }
            }}
            style={styles.activeContainer}
            onPress={() => {
              setSelected(item.name);
              if (state.index !== index) navigation.navigate(item.name);
            }}
            key={item.key}
          >
            {!reverseLabelSelection &&
              item.name !== selected &&
              options.tabBarIcon !== undefined &&
              options.tabBarIcon()}
            {reverseLabelSelection &&
              item.name === selected &&
              options.tabBarIcon !== undefined &&
              options.tabBarIcon()}

            {reverseLabelSelection && item.name !== selected && (
              <Text style={[styles.label, labelStyle]}>{item.name}</Text>
            )}
            {!reverseLabelSelection && item.name === selected && (
              <Text style={[styles.label, labelStyle]}>{item.name}</Text>
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default TabBar;

const styles = StyleSheet.create({
  float: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'black',
    marginHorizontal: 20,
    borderRadius: 15,
    paddingVertical: 10,
    paddingHorizontal: 10,
    position: 'absolute',
    alignSelf: 'center',
    bottom: 10,
    left: 0,
    right: 0,
  },

  fixed: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'black',
    paddingVertical: 10,
    paddingHorizontal: 10,
  },

  animatedContainer: {
    backgroundColor: '#FDB813',
    borderRadius: 15,
    position: 'absolute',
  },
  activeContainer: {
    flexDirection: 'row',
    borderRadius: 15,
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  label: {
    color: 'white',
    marginLeft: 5,
    fontWeight: '700',
  },
});
