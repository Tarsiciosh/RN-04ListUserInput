import React from 'react'
import {SectionList, Text} from 'react-native'

import PropTypes from 'prop-types'
import Row from './Row'

//before: renderItem = obj => <Row {...obj.item} /> 
const renderItem = ({item}) => <Row {...item} />
//actual: it de-structure the object and only takes what it is needed 

const renderSectionHeader = obj => <Text> {obj.section.title} </Text> 

const ContactsList = props => {

  const contactsByLetter = props.contacts.reduce((obj,contact) => {
    const firstLetter = contact.name[0].toUpperCase()
    return {
      ...obj,
      [firstLetter]: [...(obj[firstLetter] || [] ), contact], 
      //it overrides the value of this key (firstLetter) 
    }
  },{}) 

  // || [] - for the first case, otherwise it will evaluate to undifined

  //Objects.keys return an array with the keys of the object
  const sections = Object.keys(contactsByLetter).sort().map(letter=>({
    title: letter,
    data: contactsByLetter[letter]
  }))

  return (
    <SectionList 
      renderItem = {renderItem}
      renderSectionHeader={renderSectionHeader}
      sections={sections}
    />
  )
}

ContactsList.propTypes = {
  contacts: PropTypes.array,
} 

export default ContactsList

/*
ContactsList.propTypes = {
  renderItem: PropTypes.func,
  renderSectionHeader: PropTypes.func,
  contacts: PropTypes.array,
}*/



 
 