import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Svg, {Ellipse} from 'react-native-svg';
import HealthInfo from '../components/HealthInfo';

function HealthScreen(props) {
  return (
    <ScrollView style={styles.scrollform}>
      <View style={styles.container}>
        <View style={styles.form1}>
          <View style={styles.ellipse2Stack}>
            <Svg viewBox="0 0 192 192" style={styles.ellipse2}>
              <Ellipse
                stroke="rgba(74,74,74,1)"
                strokeWidth={14}
                fill="rgba(230, 230, 230,0)"
                cx={96}
                cy={96}
                rx={89}
                ry={89}></Ellipse>
            </Svg>
            <Svg viewBox="0 0 192 192" style={styles.ellipse}>
              <Ellipse
                stroke="rgba(0,0,0,1)"
                strokeWidth={14}
                fill="rgba(230, 230, 230,0)"
                cx={96}
                cy={96}
                rx={89}
                ry={89}></Ellipse>
            </Svg>
            <Svg viewBox="0 0 192 192" style={styles.ellipse1}>
              <Ellipse
                stroke="rgba(55,139,236,1)"
                strokeWidth={14}
                fill="rgba(230, 230, 230,0)"
                cx={96}
                cy={96}
                rx={89}
                ry={89}></Ellipse>
            </Svg>
          </View>
        </View>
        <View style={styles.form2}>
          <HealthInfo style={styles.healthInfo} title={'SCREEN TIME'} />
          <HealthInfo style={styles.healthInfo} title={'RUNNING TIME'} />
          <HealthInfo style={styles.healthInfo} title={'CALORIE CONSUMPTION'} />
          <HealthInfo style={styles.healthInfo} title={'STRESS DEFREE'} />
          <HealthInfo style={styles.healthInfo} title={'PLAN ADHERENCE'} />
        </View>
        <View style={styles.group14}>
          <TouchableOpacity style={styles.button5}>
            <View style={styles.rect24}>
              <Text style={styles.text_spot}>추천 운동 스팟</Text>
              <View style={styles.rect25Row}>
                <View style={styles.rect25}></View>
                <View style={styles.group15}>
                  <Text style={styles.중앙공원산책}>중앙 공원 산책~</Text>
                  <Text style={styles.예상걸음수1400}>예상 걸음수 : 1400</Text>
                  <Text style={styles.소모칼로리1521}>소모칼로리 : 1521</Text>
                  <Text style={styles.위치정보약14Km}>
                    위치 정보 : 약 1.4km
                  </Text>
                </View>
              </View>
              <View style={styles.group16}>
                <View style={styles.button6Stack}>
                  <TouchableOpacity style={styles.button6}></TouchableOpacity>
                  <View style={styles.rect27}>
                    <View style={styles.rect28}></View>
                    <Text style={styles.더보기}>더보기 ...</Text>
                  </View>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(48,47,47,1)',
    borderWidth: 0,
    borderColor: '#000000',
  },
  scrollform: {
    flex: 1,
  },
  form1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    marginTop: '4%',
    marginBottom: '3%',
  },
  ellipse2: {
    width: 192,
    height: 192,
    position: 'absolute',
  },
  ellipse: {
    width: 192,
    height: 192,
    position: 'absolute',
  },
  ellipse1: {
    width: 192,
    height: 192,
    position: 'absolute',
  },
  ellipse2Stack: {
    width: 196,
    height: 196,
  },
  form2: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
    height: 600,
  },
  healthInfo: {
    marginTop: '3%',
    marginBottom: '3%',
  },
  group14: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
  button5: {
    width: 312,
    height: 250,
    backgroundColor: '#E6E6E6',
    opacity: 1,
    borderRadius: 17,
  },
  rect24: {
    width: 312,
    height: 250,
    backgroundColor: 'rgba(0,0,0,1)',
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 17,
    shadowColor: 'rgba(24,24,24,1)',
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 5,
    shadowOpacity: 1,
    shadowRadius: 0,
  },
  text_spot: {
    fontFamily: 'roboto-700',
    color: 'rgba(255,255,255,1)',
    fontSize: 18,
    marginTop: 15,
    marginLeft: 28,
  },
  rect25: {
    width: 142,
    height: 142,
    backgroundColor: '#E6E6E6',
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 14,
  },
  group15: {
    width: 117,
    height: 19,
    marginLeft: 11,
  },
  중앙공원산책: {
    fontFamily: 'roboto-700',
    color: 'rgba(255,255,255,1)',
  },
  예상걸음수1400: {
    fontFamily: 'roboto-700',
    color: 'rgba(255,255,255,1)',
    marginTop: 33,
    marginLeft: 1,
  },
  소모칼로리1521: {
    fontFamily: 'roboto-700',
    color: 'rgba(255,255,255,1)',
    marginTop: 10,
  },
  위치정보약14Km: {
    fontFamily: 'roboto-700',
    color: 'rgba(255,255,255,1)',
    marginTop: 10,
  },
  rect25Row: {
    height: 142,
    flexDirection: 'row',
    marginTop: 13,
    marginLeft: 15,
    marginRight: 27,
  },
  group16: {
    width: 312,
    height: 48,
    marginTop: 7,
  },
  button6: {
    top: 0,
    left: 1,
    width: 310,
    height: 48,
    position: 'absolute',
    backgroundColor: 'rgba(230,230, 230,0)',
  },
  rect27: {
    top: 0,
    left: 0,
    width: 312,
    height: 48,
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,1)',
    borderRadius: 24,
  },
  rect28: {
    width: 302,
    height: 4,
    backgroundColor: 'rgba(35,35,35,1)',
    borderRadius: 70,
    marginLeft: 6,
  },
  더보기: {
    fontFamily: 'roboto-700',
    color: 'rgba(255,255,255,1)',
    marginTop: 12,
    marginLeft: 129,
  },
  button6Stack: {
    width: 312,
    height: 48,
  },
});

export default HealthScreen;
