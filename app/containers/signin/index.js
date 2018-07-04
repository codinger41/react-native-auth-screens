import React from 'react'
import { View, StatusBar, Image, TextInput, Text, TouchableOpacity } from 'react-native'
import { Form, Item, Button, Input } from 'native-base'
import Icon from 'react-native-vector-icons/Entypo'
import styles from './styles'

export default class SignIn extends React.Component {
  constructor(props){
    super(props)
  }
  static navigationOptions = {
    header: null
  }
  render(){
    StatusBar.setBarStyle('light-content', true)
    return (
      <View
        style={styles.container}
      >
        <View style={styles.logoContainer}>
          <Image 
            source={require('../../assets/musicmatch.png')}
            style={styles.logo}
          />
        </View>
        <View style={styles.formContainer}>
          <Item underline style={styles.itememail}>
            <Icon name='email' color='white' size={27} />
            <Input
              placeholderTextColor={'#fff'}
              textAlign={'left'}
              placeholder='Email'
              returnKeyLabel={'next'}
              returnKeyType={'next'}
              style={styles.inputUsername}
              onSubmitEditing={() => {this.PasswordInputRef._root.focus()}}
              autoFocus = {true}
              onChangeText={text => {
                this.setState({ username: text })
              }}
            />
          </Item>
          <Item underline style={styles.itememail}>
            <Icon name='lock' color='white' size={27} />
            <Input
              placeholderTextColor={'#fff'}
              textAlign={'left'}
              placeholder='Password'
              style={styles.inputUsername}
              ref={input => {this.PasswordInputRef = input}}
              onChangeText={text => {
                this.setState({ email: text })
              }}
            />
          </Item>
            <TouchableOpacity
              info
              style={styles.button}
            >
              <Text autoCapitalize='words' style={styles.buttonText}>
                Sign In
              </Text>
            </TouchableOpacity>
            <View>
              <Text 
                style={styles.signup}
                onPress={() => this.props.navigation.navigate('signup')}
              > 
              Don't have an account? SignUp </Text>
            </View>
        </View>
      </View>
    )
  }
}