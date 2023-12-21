import { StyleSheet, Text, View, ScrollView, Image } from 'react-native'
import React from 'react'

export default function ContactList() {
    const contacts = [
        {
            uid: 1,
            name: "Mikasa Ackerman",
            status: "Attack on titens Character",
            imageUrl: "https://i.pinimg.com/1200x/ea/8c/c2/ea8cc2bcd59586bb9b2923c69aa0e13e.jpg",
        },
        {
            uid: 2,
            name: "Sarena",
            status: "Pokemon Character",
            imageUrl: "https://i.pinimg.com/1200x/fa/16/2c/fa162c1b2c73a610331d7a40cf1cbd05.jpg",
        },
        {
            uid: 3,
            name: "L",
            status: "Death Note Character",
            imageUrl: "https://i.pinimg.com/280x280_RS/9e/f3/38/9ef338b751dbc2e4e1e417c05c58ab3e.jpg",
        },
        {
            uid: 4,
            name: "Saitama",
            status: "One Punch Man Character",
            imageUrl: "https://i.pinimg.com/474x/1a/03/ff/1a03ffd5d0b2cd216a33f12f4efb6229.jpg",
        }
        
    ]
  return (
    <View>
      <Text style={styles.heading}>Contact List</Text>
      <ScrollView scrollEnabled={true} style={styles.container}>
      {
        contacts.map(({uid, name, status, imageUrl}) => (
            <View key={uid} style={styles.userCard}>
                <Image 
                source={{uri: imageUrl}}
                style={styles.image}
                />
                <View style={styles.detailContainer}>
                <Text style={styles.userName}>{name}</Text>
                <Text style={styles.userStatus}>{status}</Text>
                </View>
                
            </View>
        ))
      }
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    heading: {
        fontSize: 25,
        fontWeight: 'bold',
        padding: 10,
        color: "black",
    },
    container: {
        margin: 10,
    },
    userCard: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "white",
        margin: 3,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderRadius: 10,
        elevation: 8
    },
    image: {
        height: 60,
        width: 60,
        borderRadius: 30,
        marginRight: 12
    },
    detailContainer: {},
    userName: {
        fontSize: 18,
        color: "black",
        fontWeight: "700"
    },
    userStatus: {},
})