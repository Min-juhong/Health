import React, {Component} from 'react';
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';

function HealthInfo(props) {
  return (
    <View style={[styles.container, props.style]}>
      <TouchableOpacity style={styles.button}>
        <View style={styles.rect}>
          <Text style={styles.text}>{props.title}</Text>
          <View style={styles.group}>
            <View style={styles.graph}></View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    shadowColor: 'rgba(0,0,0,1)',
    shadowOffset: {
      width: '10%',
      height: '10%',
    },
    elevation: 10,
    shadowOpacity: 1,
    shadowRadius: 17,
  },
  text: {
    fontFamily: 'roboto-regular',
    color: 'rgba(255,255,255,1)',
    marginTop: '3%',
    marginBottom: '2%',
    marginLeft: '5%',
  },
  group: {
    marginTop: '2%',
    marginLeft: '5%',
    marginRight: '5%',
  },
  graph: {
    width: '100%',
    height: '50%',
    backgroundColor: 'gray',
    borderRadius: 12,
  },
});

export default HealthInfo;
