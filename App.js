import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

class MyFuckingIP extends React.Component {
  state = {
    ip: "localhost"
  }

  componentDidMount() {
    const that = this
    fetch('https://wtfismyip.com/json')
    .then(function(response) {
      return response.json()
    }).then(function(json) {
      that.setState({ip: json.YourFuckingIPAddress})
    }).catch(function(ex) {
      console.log('parsing failed', ex)
    })
  }

  render() {
    const {ip} = this.state

    return (
      <Text style={{fontSize: this.props.size}}>
        {ip}
      </Text>
    )
  }
}

class Counter extends React.Component {
  state = {
    count: 0
  }

  constructor(props) {
    super()
    console.log(props)
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({count: this.state.count + 1})
    }, 1000)
  }

  render() {
    const {count} = this.state

    return (
      <Text style={{fontSize: this.props.size}}>
        {count}
      </Text>
    )
  }
}

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image 
          style={{width: 250, height: 182}}
          source={{uri: 'https://media.giphy.com/media/bcKmIWkUMCjVm/giphy.gif'}} />
        <Text>HELLO KHANHICETEA !!!</Text>
        <Counter size={150} />
        <Text>I am come from</Text>
        <MyFuckingIP size={50} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
