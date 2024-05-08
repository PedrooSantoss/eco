import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    backgroundColor: '#69B752',
    paddingTop: 50,
    justifyContent: 'flex-start', 
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 10,
    alignSelf: 'center',
  },
  title: {
    fontSize: 24,
    fontFamily: 'Jomolhari',
    marginBottom: 20,
    textDecorationLine: 'underline',
    textDecorationColor: '#000000',
    textDecorationThickness: '1px', 
    alignSelf: 'center',
    color : '#FFFDFD',
  },
  subContainer: {
    height: '60%', 
    marginLeft: 20, 
    marginRight: 20, 
    backgroundColor: '#F5F5DC',
  },
  largeInput: {
    height: 150,
    width: '90%',
    marginLeft: 20,
    borderColor: 'gray',
    borderWidth: 0, 
    marginBottom: 10,
    paddingLeft: 8,
    backgroundColor: 'white',
  },
  input: {
    height: 40,
    width: '90%',
    marginLeft: 20,
    borderColor: 'gray',
    borderWidth: 0, 
    marginBottom: 10,
    paddingLeft: 8,
    backgroundColor: 'white',
  },
  button: {
    height: 30, 
    width: 100, 
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#69B752',
    marginLeft: 120, 
    marginRight: 120, 
  },
  buttonText: {
    color: 'white', 
  },
  label: {
    fontSize: 18,
    fontFamily: 'Jomolhari',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    marginLeft: 20, 
  },
  confirmationText: {
    color: 'green',
    textAlign: 'center',
    marginTop: 10,
  }
});