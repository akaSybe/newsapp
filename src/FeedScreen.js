import React, { Component } from "react";
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  TouchableHighlight,
} from "react-native";

export default class extends Component {
  handlePress = () => {
    const { navigation } = this.props;
    navigation.navigate("Article");
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <TouchableHighlight style={styles.button} onPress={this.handlePress}>
          <Text>Go to Article Screen</Text>
        </TouchableHighlight>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
  },
});
