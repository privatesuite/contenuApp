import React from 'react';
import { ScrollView, View } from 'react-native'
import styles from './Style';
import ElementList from './components/ElementsList/ElementList'

export default function LinksScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.welcomeContainer}>
        <ElementList/>
      </View>
    </ScrollView>
  );
}

LinksScreen.navigationOptions = {
  title: 'Elements',
};
