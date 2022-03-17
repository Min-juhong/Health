import React, {Component} from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import HealthInfo from '../components/HealthInfo';
import RecommendForm from '../components/RecommendForm';

function HealthScreen(props) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.form1}>
        <View style={styles.circlegraph}>
          <View style={styles.ex}></View>
        </View>
      </View>
      <View style={styles.form2}>
        <HealthInfo style={styles.healthInfo} title={'SCREEN TIME'} />
        <HealthInfo style={styles.healthInfo} title={'RUNNING TIME'} />
        <HealthInfo style={styles.healthInfo} title={'CALORIE CONSUMPTION'} />
        <HealthInfo style={styles.healthInfo} title={'STRESS DEFREE'} />
        <HealthInfo style={styles.healthInfo} title={'PLAN ADHERENCE'} />
      </View>
      <View style={styles.form3}>
        <RecommendForm />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(48,47,47,1)',
    borderColor: '#000000',
  },
  form1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '4%',
    marginBottom: '3%',
  },
  circlegraph: {
    width: '100%',
    height: 200,
    backgroundColor: 'rgba(48,47,47,47)',
  },
  ex: {
    flex: 1,
    backgroundColor: 'black',
  },
  form2: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    height: 600,
  },
  healthInfo: {
    marginTop: '3%',
    marginBottom: '3%',
  },
  form3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 300,
  },
});

export default HealthScreen;
