import { Dimensions, StyleSheet } from 'react-native'

// get the height and width of current device
const { height, width } = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00001a',
    alignItems: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: height * 0.5,
    marginBottom: 50
  },
  logo: {
    width: 150,
    height: 150,
  },
  formContainer: {
    justifyContent: 'center',
    height: height * 0.5,
    width: width * 0.8,
    alignItems: 'center',
    paddingBottom: 100
  },
  inputUsername: {
    color: '#fff'
  },
  itememail: {
    alignSelf: 'center',
    width: width * 0.8,
    height: height * 0.08
  },
  button: {
    backgroundColor: '#ff0e83',
    alignSelf: 'center',
    marginTop: height * 0.07,
    borderRadius: 40,
    width: width * 0.65,
    height: height * 0.07,
    justifyContent: 'center'
  },
  buttonText: {
    alignSelf: 'center',
    color: '#fff'
  },
  signup: {
    color: '#fff',
    fontSize: 20,
    paddingTop: 100
  }
})

export default styles