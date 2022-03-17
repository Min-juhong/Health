import React, {Component} from 'react';
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';

function HealthInfo(props) {
  return (
    <View style={[styles.container, props.style]}>
      <TouchableOpacity style={styles.button}>
        <View style={styles.rect}>
          <Text style={styles.screenTime}>{props.title}</Text>
          <View style={styles.group7}>
            <View style={styles.rect5}>
              <View style={styles.rect7}>
                <View style={styles.rect6}></View>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    width: '90%',
    borderRadius: 17,
  },
  button: {
    flex: 1,
    backgroundColor: '#E6E6E6',
    opacity: 1,
    borderRadius: 17,
  },
  rect: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,1)',
    borderRadius: 17,
    shadowColor: 'rgba(5,5,5,5)',
    shadowOffset: {
      width: '1%',
      height: '1%',
    },
    elevation: 5,
    shadowOpacity: 0.4,
    shadowRadius: 0,
  },
  screenTime: {
    fontFamily: 'roboto-regular',
    color: 'rgba(255,255,255,1)',
    marginTop: 11,
    marginLeft: 16,
  },
  group7: {
    width: 285,
    height: 20,
    marginTop: 9,
    marginLeft: 14,
  },
  rect5: {
    width: 285,
    height: 20,
    backgroundColor: 'rgba(74,74,74,1)',
    borderRadius: 12,
  },
  rect7: {
    width: 252,
    height: 20,
    backgroundColor: 'rgba(0,59,128,1)',
    borderRadius: 12,
  },
  rect6: {
    width: 216,
    height: 20,
    backgroundColor: 'rgba(74,144,226,1)',
    borderRadius: 12,
  },
});

export default HealthInfo;
