import React, { Component } from 'react';
import styles from '../../Style'
import { ScrollView, Text, View } from 'react-native'
import { GetElements } from './Func'


export default class ElementList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      elementData: {},
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
    return (
      <ScrollView>
        {this.state.loaded?
          <View>{
            this.state.elementData.map(element => {
              return <View style={styles.element} key={element.id}>
                <Text>{element.title}</Text>
              </View>
            })
          }</View>:
          <Text>Loading...</Text>
        }
      </ScrollView>
    )
  }

}
