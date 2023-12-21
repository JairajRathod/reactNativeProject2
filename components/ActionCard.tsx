import { Linking, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function ActionCard() {
    function openWebsite(webSiteLink: string){
        Linking.openURL(webSiteLink)
    }
  return (
    <View>
      <Text style={styles.heading}>Action Card</Text>
      <View style={styles.cardContainer}>
        <View style={[styles.card, styles.elevatedCard]}>
          <View style={styles.headingContainer}>
            <Text style={styles.headingText}>What's new in JavaScript 21 - ES6</Text>
          </View>
          <View style={styles.imageContainer}>
            <Image 
            source={{uri: "https://cdn.vox-cdn.com/thumbor/s7-kTe85akra1LluOyd_s_2d9Ss=/0x0:2040x1360/1400x788/filters:focal(1020x680:1021x681)/cdn.vox-cdn.com/uploads/chorus_asset/file/23935561/acastro_STK103__04.jpg"}}
            style={styles.image}
            />
          </View>
          <View style={styles.descriptionContainer}>
            <Text numberOfLines={3} style={styles.description}>Amazon.com, Inc. is an American multinational technology company focusing on e-commerce, cloud computing, online advertising, digital streaming, and artificial intelligence. It is considered one of the Big Five American technology companies, alongside Alphabet, Apple, Meta and Microsoft.</Text>
          </View>
          <View style={styles.footerContainer}>
            <TouchableOpacity
            onPress={() => openWebsite("https://www.amazon.in/")}
            >
              <Text style={styles.links}>Read More</Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={() => openWebsite("https://www.amazon.in/")}
            >
              <Text style={styles.links}>Follow Me</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    heading: {
      padding: 10,
      fontSize: 25,
      fontWeight: "bold",
      color: "black",
    },
    cardContainer: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      width: "100%",
      marginVertical: 10
    },
    card: {
      width: 350,
      height: 390,
      borderRadius: 10,
      backgroundColor: "orange"
    },
    elevatedCard: {},
    headingContainer: {
      padding: 8,
      paddingVertical: 14,
    },
    headingText: {
      textAlign: "center",
      fontSize: 18,
      fontWeight: "bold",
      color: "black"
    },
    imageContainer: {},
    image: {
      height: 200
    },
    descriptionContainer: {
      paddingHorizontal: 16,
      paddingVertical: 10,
    },
    description: {
      color: "black",
      fontSize: 16,
    },  
    footerContainer: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-evenly",
      marginVertical: 10
    },
    links: {
      backgroundColor: "white",
      paddingHorizontal: 15,
      paddingVertical: 5,
      borderRadius: 10,
      fontSize: 18,
      color: "black",
      fontWeight: "700",
    },
})