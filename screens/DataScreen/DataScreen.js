import React from 'react';
import { ScrollView, Text, View } from 'react-native'
import styles from './Style';

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
  title: 'Data',
};
