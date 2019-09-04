import React, { Component } from 'react';
import styles from '../../Style'
import { SectionList, Text, View } from 'react-native'
import { GetElements } from './Func'
import config from '../../../../constants/Config'


export default class ElementList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      elementData: {},
      templates: [],
      loaded: false
    }
  }

  async componentWillMount (): void {
    this.setState({
      elementData: await GetElements()
    })
  }

  componentDidUpdate (): void {
    if(!this.state.loaded) {
      this.setState({
        loaded: true
      })
    }
  }

  render () {
    // My IDE is telling me <SectionList/> wont render but it does ¯\_(ツ)_/¯
    // noinspection RequiredAttributes
    return (
      <View>
        {this.state.loaded?
          <SectionList
            sections={this.state.elementData}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => <View style={styles.elementBody} key={item.id}><Text style={styles.elementBodyText}>{item.title?item.title:config.noTitle}</Text></View>}
            renderSectionHeader={({section: {title}}) => <View key={title} style={styles.elementHeader}><Text style={styles.elementHeaderText}>{title}</Text></View>}
          />
          :
          <Text style={styles.loadingText}>Loading...</Text>
        }
      </View>
    )
  }

}
