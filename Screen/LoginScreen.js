import React, {useState, useRef} from 'react';
import {TextInput, View, StyleSheet} from 'react-native';

function LoginScreen() {
  const [userId, setUserId] = useState('');
  const [userPasswd, setUserPasswd] = useState('');
  const [loading, setLoading] = useState(false);
  const [errtxt, seterrtxt] = useState('');

  const passwdRef = useRef();

  return (
    <View style={styles.form}>
      <TextInput
        style={styles.textinput}
        placeholder={'아이디를 입력하세요...'}
        onChangeText={userId => setUserId(userId)}
        autoCapitalize="none"
        returnKeyType="next"
        onSubmitEditing={() => passwdRef.current.focus()}
        underlineColorAndroid="#f000"
        blurOnSubmit={false}
      />
      <TextInput
        style={styles.textinput}
        placeholder={'비밀번호를 입력하세요...'}
        onChangeText={userPasswd => setUserPasswd(userPasswd)}
        secureTextEntry
        autoCapitalize="none"
        returnKeyType="next"
        ref={passwdRef}
        //onSubmitEditing={}
        underlineColorAndroid="#f000"
        blurOnSubmit={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  textinput: {},
  form: {
    marginTop: 64,
    width: '100%',
    paddingHorizontal: 16,
  },
});

export default LoginScreen;
