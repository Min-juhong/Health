import React, {useState, useEffect} from 'react';
import {ActivityIndicator, View, StyleSheet, Image} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import AsyncStorage from '@react-native-community/async-storage';

function SplashScreen({navigation}) {
  //State for ActivityIndicator animation
  const [animating, setAnimating] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setAnimating(false);
      //로컬 저장소에서 로그인 정보가 없다면 Auth로 이동함
      AsyncStorage.getItem('user_id').then(value =>
        navigation.push(value === null ? 'Auth' : 'MainTab'),
      );
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require('../src/Splash.png')}
        style={{width: wp(55), resizeMode: 'contain', margin: 30}}
      />
      <ActivityIndicator
        animating={animating}
        color="#6990F7"
        size="large"
        style={styles.activityIndicator}
      />
    </View>
  );
}

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue',
  },
  activityIndicator: {
    alignItems: 'center',
    height: 80,
  },
});
