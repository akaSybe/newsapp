import React, { Component } from "react";
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  TouchableHighlight,
  ActivityIndicator,
  Dimensions,
  Alert,
} from "react-native";
import { WebView } from "react-native-webview";
import { HeaderBackButton } from "react-navigation";

const width = Dimensions.get("window").width;

export default class extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "Comments",
      headerLeft: (
        <HeaderBackButton
          onPress={() => {
            navigation.navigate("Article");
          }}
        />
      ),
    };
  };

  state = {
    date: null,
  };

  componentDidMount() {
    this.setState({
      date: new Date(),
    });
  }

  handleLoadEnd = event => {
    // Alert.alert("Hey", "Hello");
    // console.log("load end", new Date().toTimeString(), event);
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Component mounted at:</Text>
        {this.state.date && <Text>{this.state.date.toISOString()}</Text>}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
  },
});
