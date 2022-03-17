import React, {useState, useRef} from 'react';
import {
  TextInput,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import CustomButton from '../Components/CustomButton';

function LoginScreen() {
  const [userId, setUserId] = useState('');
  const [userPasswd, setUserPasswd] = useState('');
  const [loading, setLoading] = useState(false);
  const [errtxt, seterrtxt] = useState('');

  const passwdRef = useRef();

  return (
    <View style={styles.form}>
      <Text style={styles.title}> 로그인 </Text>
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
      <CustomButton />
    </View>
  );
}

const styles = StyleSheet.create({
  textinput: {
    width: '100%',
    height: '10%',
    backgroundColor: 'white',
  },
  form: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 16,
    backgroundColor: 'green',
  },
  title: {
    marginTop: 64,
    fontSize: 32,
    backgroundColor: 'red',
  },
  button: {
    height: '30%',
    backgroundColor: 'violet',
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  text: {},
});

export default LoginScreen;
