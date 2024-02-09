import React from "react";
import { View, Dimensions } from "react-native";

// import HomeMap from '../../components/HomeMap';
import HomeSearch from '../components/HomeSearch';

const HomeScreen = ( {navigation} ) => {
  return (
    <View>
      <View style={{height: Dimensions.get('window').height - 400}}>
        {/*карта*/}
      </View>

      {/*  Bottom Comp*/}
      <HomeSearch />
    </View>
  );
};

export default HomeScreen;
