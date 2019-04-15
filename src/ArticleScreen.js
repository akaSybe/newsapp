import React, { Component } from "react";
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  TouchableHighlight,
} from "react-native";
import { HeaderBackButton } from "react-navigation";

export default class extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "Article",
      headerLeft: (
        <HeaderBackButton
          onPress={() => {
            navigation.navigate("Feed");
          }}
        />
      ),
    };
  };

  handlePress = () => {
    const { navigation } = this.props;
    navigation.navigate("Comments");
  };

  render() {
    return (
      <TouchableHighlight style={styles.button} onPress={this.handlePress}>
        <Text>Go to Comments Screen</Text>
      </TouchableHighlight>
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
