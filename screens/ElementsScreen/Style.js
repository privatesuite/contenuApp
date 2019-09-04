import { StyleSheet } from 'react-native'

export default styles = StyleSheet.create({
  welcomeContainer: {
    alignItems: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  elementBody: {
    borderBottomColor: "#bbb",
    borderBottomWidth: StyleSheet.hairlineWidth,
    paddingTop: 10,
    paddingBottom: 10,
    alignSelf: 'stretch'
  },
  elementHeader: {
    alignItems: 'center',
    borderBottomColor: '#bbb',
    borderBottomWidth: StyleSheet.hairlineWidth,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: 'white'
  },
  elementHeaderText: {
    fontWeight: 'bold',
  },
  elementBodyText: {
    paddingLeft: 10
  },
  loadingText: {
    padding: 10,
    alignSelf: 'center'
  }
});
