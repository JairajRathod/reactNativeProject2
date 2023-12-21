import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import FlateCards from './components/FlateCards'
import ScrollCards from './components/ScrollCards'
import FancyCard from './components/FancyCard'
import ActionCard from './components/ActionCard'
import ContactList from './components/ContactList'

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlateCards />
        <ScrollCards />
        <FancyCard />
        <ContactList />
        <ActionCard />
      </ScrollView>
    </SafeAreaView>    
  )
}

export default App