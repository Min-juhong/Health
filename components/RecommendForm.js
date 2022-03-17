import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

function RecommendForm() {
  // onPress 등 함수 and 운동데이터 추가 예정
  return (
    <View style={styles.recommend}>
      <TouchableOpacity style={styles.top_touch}>
        <View style={styles.border}>
          <Text style={styles.title}>추천 운동 스팟</Text>
          <View style={styles.topform}>
            <View style={styles.image}></View>
            <View style={styles.textgroup}>
              <Text style={styles.rec_title}>중앙 공원 산책~</Text>
              <Text style={styles.rec_text}>예상 걸음수 : 1400</Text>
              <Text style={styles.rec_text}>소모칼로리 : 1521</Text>
              <Text style={styles.rec_text}>위치 정보 : 약 1.4km</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
      <View style={styles.line} />
      <TouchableOpacity style={styles.bottom_touch}>
        <Text style={styles.more}> 더보기 ...</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  recommend: {
    width: '90%',
    height: '90%',
    backgroundColor: '#E6E6E6',
    opacity: 1,
    borderRadius: 17,
  },
  top_touch: {
    height: '80%',
  },
  border: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,1)',
    borderWidth: 1,
    borderColor: '#000000',
    borderTopRightRadius: 17,
    borderTopLeftRadius: 17,
    shadowColor: 'rgba(24,24,24,1)',
    shadowOffset: {
      width: '5%',
      height: '5%',
    },
    elevation: 5,
    shadowOpacity: 0.7,
    shadowRadius: 0,
  },
  title: {
    fontFamily: 'roboto-700',
    color: 'rgba(255,255,255,1)',
    fontSize: 18,
    marginTop: '5%',
    marginLeft: '5%',
  },
  topform: {
    height: '66%',
    flexDirection: 'row',
    marginTop: '3%',
    marginLeft: '5%',
    marginRight: '5%',
  },
  image: {
    width: '45%',
    height: '100%',
    backgroundColor: '#E6E6E6',
    borderRadius: 14,
  },
  textgroup: {
    width: '50%',
    height: '100%',
    marginLeft: '4%',
  },
  rec_title: {
    fontFamily: 'roboto-700',
    color: 'rgba(255,255,255,1)',
    marginBottom: '20%',
  },
  rec_text: {
    fontFamily: 'roboto-700',
    color: 'rgba(255,255,255,1)',
    marginBottom: '4%',
  },
  line: {
    height: 4,
    backgroundColor: 'rgba(35,35,35,1)',
  },
  bottom_touch: {
    height: '20%',
    borderBottomRightRadius: 17,
    borderBottomLeftRadius: 17,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  more: {
    fontFamily: 'roboto-700',
    color: 'rgba(255,255,255,1)',
  },
});

export default RecommendForm;
