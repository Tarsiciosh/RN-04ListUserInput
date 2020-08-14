import React from 'react';
import { Button, StyleSheet, View} from 'react-native';
import Constants from 'expo-constants'

import contacts, {compareNames} from './contacts'
import ContactsList from './ContactsList'
import AddContactForm from './AddContactForm'


export default class App extends React.Component {
  state = {
    showContacts: true,
    showForm: false,
    contacts: contacts,
  }

  addContact = newContact => {
    this.setState (prevState => ({
      showForm: false,
      contacts: [...prevState.contacts, newContact]
    }))     
  }

  toggleContacts = () => {
    this.setState(prevState => ({showContacts: !prevState.showContacts}))
    console.log( `showContacts: ${this.state.showContacts}`)
  }

  toggleForm = () => {
    this.setState(prevState => ({showForm: !prevState.showForm}))
  }

  // previusly: {contacts: prevState.contacts.sort(compareNames), :
  // it does not apply the changes inmediately because the
  // sort function does not return a new array, but with this yes: 
  sort = () => {
    this.setState(prevState => (
      {contacts: [...prevState.contacts].sort(compareNames),
    }))
  }

  render() {
    if (this.state.showForm) 
      return <AddContactForm onSubmit={this.addContact} />

    return (
      <View style={styles.container}>  
        <Button title="toggle contacts" onPress={this.toggleContacts} />      
        <Button title="add" onPress={this.toggleForm} />
        {this.state.showContacts && 
          <ContactsList contacts = {this.state.contacts}  /> 
        } 
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Constants.statusBarHeight,
  },
});

// 






// FlatList:

/* 
import React from 'react';
import { Button, FlatList, StyleSheet, View } from 'react-native';
import Constants from 'expo-constants'

import contacts, {compareNames} from './contacts'
import Row from './Row' 

export default class App extends React.Component {
  state = {
    showContacts: false,
    contacts: contacts,
  }

  toggleContacts = () => {
    this.setState(prevState => ({showContacts: !prevState.showContacts}))
    console.log( `showContacts: ${this.state.showContacts}`)
  }

  sort = () => {
    this.setState(prevState => (
      {contacts: [...prevState.contacts].sort(compareNames),
    }))
  }

// {contacts: prevState.contacts.sort(compareNames),
// it does not apply the changes inmediately because the
// sort function does not return a new array 

  // renderItem = obj => <Row {...obj.item} /> - could be replace by:
  // it de-structure the object and only takes what it is needed 
  renderItem = ({item}) => <Row {...item} />
  // item: {name:String, phone: String, key: Number }

  render() {
    return (
      <View style={styles.container}>
        <Button title="toggle contacts" onPress={this.toggleContacts} />
        <Button title="sort" onPress={this.sort} />
        {this.state.showContacts &&
          <FlatList
            renderItem={this.renderItem}
            data={this.state.contacts} 
          />
        } 
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Constants.statusBarHeight,
  },
});
*/


//ScrollView:

/*
import React from 'react';
import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants'

import contacts from './contacts'

import Row from './Row' 

export default class App extends React.Component {
  state = {
    showContacts: false,
  }

  toggleContacts = () => {
    this.setState(prevState => ({showContacts: !prevState.showContacts}))
    
    
    console.log( `showContacts: ${this.state.showContacts}`)
  }

  render() {
    return (
      <View style={styles.container}>
        <Button title="toggle contacts" onPress={this.toggleContacts} />
        {this.state.showContacts &&
          <ScrollView>
            {contacts.map(contact => <Row {...contact} /> ) } 
          </ScrollView>
        } 
      </View>
    )
  }
}

//...contact - pases all the keys of the contact object
// same as:
// <Row {key=contact.key name=contact.name phone=contact.phone }/>

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Constants.statusBarHeight,
  },
});
*/


/* the code above is replace with this:
constructor (props) {
  super(props)
  this.state = {
    showContacts: false,
  }
  this.toggleContacts = () => {
    this.setState(prevState=>({ showContacts: !prevState.showContacts}))
  }
}*/

/* anothe way of doing &&
  {this.state.showContacts ? (
    <ScrollView>
      {contacts.map(contact => <Row {...contact} /> ) } 
    </ScrollView>
    ) : null
  } 
*/