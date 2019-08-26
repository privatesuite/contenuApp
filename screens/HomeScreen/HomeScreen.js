import React from 'react';
import { Image, ScrollView, Text, View, } from 'react-native';

import { MonoText } from '../../components/StyledText';
import { DevelopmentModeNotice } from './Func'
import styles from './Style'

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}>
        <View style={styles.welcomeContainer}>
          <Image
            source={require('../../assets/images/logo.png')}
            style={styles.welcomeImage}
          />
          <Text style={styles.header}>Private Suite: Contenu</Text>
        </View>
        <View style={styles.getStartedContainer}>
          <Text style={styles.getStartedText}>Content will go here</Text>
          <MonoText>Mono Test 123</MonoText>
        </View>
      </ScrollView>

      <DevelopmentModeNotice />
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};
