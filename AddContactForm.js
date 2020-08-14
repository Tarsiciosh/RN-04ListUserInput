import React from 'react'
import {TextInput, KeyboardAvoidingView, StyleSheet, View, Button} from 'react-native'
import PropTypes from 'prop-types'
import Constants from 'expo-constants';

const styles = StyleSheet.create ({
  container:{
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Constants.statusBarHeight,
    justifyContent: 'center',
  },
  input:{
    borderWidth: 1,
    borderColor: 'black',
    minWidth: 100,
    marginTop: 20,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 3,
  }, 
})

export default class AddContactForm extends React.Component {
  static propTypes = {
    onSubmit: PropTypes.func,
  }

  state = {
    name: '',
    phone: '',
    isFormValid: false,
  }

  // (2) Doing the validation here is another way - both ways are good 
  componentDidUpdate(prevProps, prevStates) {
    if (this.state.name !== prevStates.name || 
    this.state.phone !== prevStates.phone)
      this.validateForm()
  }

  // (3) Make a generic handler for the inputs
  getHandler = key => val => {
    this.setState({[key]: val})
  } //(4) this is not efficient like the previous way

  /*
  // (1) Do the validation on each handler:
  // second argument is a callback that is executed after state changes
  handleNameChange = name => {
    this.setState ({name})  //,this.validateForm)
  }

  handlePhoneChange = phone => {
    if (+phone >=0 && phone.length <= 10) {
      this.setState ({phone})
    }
  }
  */

  validateForm = () => {
    const names = this.state.name.split(" ")

    if (+this.state.phone >=0 && 
    this.state.phone.length === 10 && 
    this.state.name.length >=3 &&
    names.length >= 2 &&
    names[0] && //no leading spaces
    names[1]) { //no trailing spaces
      this.setState({isFormValid: true})
    } else {
      this.setState({isFormValid:false})
    }
  }

  // pass the info of the form to the handler function that "lives" in App.js
  handleSubmit = () => {  
    this.props.onSubmit(this.state) 
  }

  //padding margin move?

  render() {
    //(5) console.error("this is a full page alert")
    //(6) throw new Error("this is also an error") 
    //(7) console.warn("this is a yellow warning")

    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <TextInput 
          style={styles.input} 
          value={this.state.name}
          onChangeText={this.getHandler("name")}
          placeholder="Name" 
        />
        <TextInput 
          keyboardType='numeric'
          style={styles.input} 
          value={this.state.phone} 
          onChangeText={this.getHandler("phone")}
          placeholder="Phone"
        />
        <Button 
          title="Submit" 
          onPress={this.handleSubmit}
          disabled={!this.state.isFormValid}
        />
      </KeyboardAvoidingView>
    )
  }  
}