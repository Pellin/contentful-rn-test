import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#efefef',
    flex: 1,
    justifyContent: 'center',
    width: '100%',
  },
  inputContainer: {
    width: '80%',
  },
  nameInputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  input: {
    backgroundColor: 'white',
    borderColor: '#777',
    borderWidth: 1,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginTop: 10,
    width: '100%',
  },
  nameInput: {
    width: '49%',
  },
  termsAndConditions: {
    flexDirection: 'row',
    paddingVertical: 15,
  },
  checkbox: {
    marginRight: 5,
  },
  button: {
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: '#D80A7A',
    width: '60%',
    paddingVertical: 12,
    borderRadius: 25,
    marginTop: 20,
  },
  buttonDisabled: {
    backgroundColor: '#dedede',
  },
  buttontext: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
})
