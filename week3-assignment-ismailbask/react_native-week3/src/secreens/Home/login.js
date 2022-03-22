import { useState } from 'react';
import { StyleSheet, Text, View,SafeAreaView, Touchable, TouchableOpacity,TextInput  } from 'react-native';
import { auth } from '../../../firebase-config';
export default function App() {
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
  const checkUser = () => {
    auth.signInWithEmailAndPassword(email, password).then((uc) => {
      if (uc.user) {
        console.log("Giriş yapıldı.");
      }
      else {
        console.log("Kullanıcı bulunamadı!");
      }
    }).catch(error => {
      console.log(error);
    });
  };
  const registerUser = () => {
    auth.createUserWithEmailAndPassword(email, password).then((uc) => {
      if (uc.user) {
        console.log("Kullanıcı yaratıldı");
      }
      else {
        console.log("Kullanıcı yaratılamadı")
      }
    }).catch((error) => {
      console.log(error);
    });
  };
  return (
    <View style={styles.container}>
      <TextInput placeholder='Email' value={email}
        onChangeText={(value) => {
          setEmail(value);
        }} style={styles.textInputStyle} />
      <TextInput
        secureTextEntry
        placeholder='Password'
        value={password}
        onChangeText={(value) => { setPassword(value); }}
        style={styles.textInputStyle} />
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        justifyContent: 'center',
        alignContent: 'center,',
        alignItems: 'center',
      }}>
        <TouchableOpacity onPress={() => checkUser()} style={styles.touchStyleL}>
          <Text style={styles.textStyle}>Giriş</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => registerUser()} style={styles.touchStyleR}>
          <Text style={styles.textStyle}>Kayıt</Text>
        </TouchableOpacity>
      </View>
    </View>

  );
};
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center,',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#313552'
  },
  textStyle: {
    color: '#2EB086',
    textAlign: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    fontSize: 24,
    fontWeight: 'bold'
  },
  touchStyleR: {
    width: 150,
    height: 60,
    alignItems: 'center',
    left: 17,
    padding: 15,
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#2EB086'
  },
  touchStyleL: {
    width: 150,
    height: 60,
    alignItems: 'center',
    backgroundColor: '#',
    padding: 15,
    marginTop: 10,
    right: 17,
    borderWidth: 1,
    borderColor: '#2EB086',
  },
  textInputStyle: {
    borderColor: '#2EB086',
    borderWidth: 1,
    width: '90%',
    padding: 15,
    marginTop: 15,
    color: '#fff',
    fontSize: 24
  }
});

