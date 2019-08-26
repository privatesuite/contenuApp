import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native'

export default function LinksScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.welcomeContainer}>
        <Text>
          Content will go here
        </Text>
      </View>
    </ScrollView>
  );
}

LinksScreen.navigationOptions = {
  title: 'Elements',
};

const styles = StyleSheet.create({
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
