import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.heading}>Trending Places</Text>
      <View style={styles.cardOuter}>
        <View style={[styles.card, styles.cardElevated]}>
          <View style={styles.imageBox}>
            <Image 
            source={{uri: "https://images.moneycontrol.com/static-mcnews/2023/04/pexels-ankur-bagai-6440428-770x433.jpg"}}
            style={styles.cardImage}
            />
          </View>
        
          <View style={styles.cardBottom}>
            <Text style={styles.cardTitle}>Hawa Mahal</Text>
            <Text style={styles.cardLabel}>Pink City, Jaypur</Text>
            <Text style={styles.cardDescription}>The Hawa Mahal is a five-storey building, and it is the tallest building in the world that has been built without a foundation. It has a curved architecture that leans at an 87 degree angle, and a pyramidal shape which has helped it stay erect for centuries. The Hawa Mahal is dedicated to Lord Krishna.</Text>
            <Text style={styles.cardFooter}>12 min away</Text>
          </View>
        </View>
      </View>
      
    </View>
  )
}

const styles = StyleSheet.create({
    heading: {
        fontSize: 25,
        fontWeight: "bold",
        padding: 8,
        color: "black"
    },
    cardOuter: {
        display: "flex",
        width: "100%",
        alignItems: "center",
        marginVertical: 10
    },
    card: {
        flex: 1,
        width: 350,
        height: 450,
        borderRadius: 10,
    },
    cardElevated: {
        shadowColor: "black",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowRadius: 6,
        shadowOpacity: 0.26,
        elevation: 8,
        backgroundColor: "white"
    },
    imageBox: {},
    cardImage: {
        
        height: 200,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    cardBottom: {
        paddingHorizontal: 16,
        paddingVertical: 8
    },
    cardTitle: {
        color: "black",
        fontSize: 22,
        fontWeight: "bold",
        marginBottom: 6
    },
    cardLabel: {
        color: "black",
        fontSize: 18,
        marginBottom: 8
    },
    cardDescription: {
        fontSize: 15,
        marginBottom: 8
    },
    cardFooter: {
        color: "black",
        fontSize: 18
    },
})