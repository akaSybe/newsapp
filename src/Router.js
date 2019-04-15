import {
  createAppContainer,
  createStackNavigator,
  createMaterialTopTabNavigator,
} from "react-navigation";

import Article from "./ArticleScreen";
import Feed from "./FeedScreen";
import Comments from "./CommentsScreen";

const ArticleScreenStack = createStackNavigator({
  Article: {
    screen: Article,
  },
});

const CommentsScreenStack = createStackNavigator({
  Comments: {
    screen: Comments,
  },
});

const Tabs = createMaterialTopTabNavigator(
  {
    ArticleTab: {
      screen: ArticleScreenStack,
      navigationOptions: {
        tabBarVisible: false,
      },
    },
    CommentsTab: {
      screen: CommentsScreenStack,
      navigationOptions: {
        tabBarVisible: false,
      },
    },
  },
  {
    animationEnabled: true,
  },
);

const AppNavigator = createStackNavigator(
  {
    Feed: {
      screen: Feed,
      navigationOptions: {
        header: null,
      },
    },
    Tabs: {
      screen: Tabs,
      navigationOptions: {
        header: null,
      },
    },
  },
  {
    initialRouteName: "Feed",
  },
);

export default createAppContainer(AppNavigator);
