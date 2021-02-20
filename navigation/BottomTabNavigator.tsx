import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import { BlocksScreen } from "../screens/BlocksScreen";
import { TransactionsScreen } from "../screens/TransactionsScreen";
import {
  BottomTabParamList,
  BlocksTabParamList,
  TransactionsTabParamList,
} from "../types";

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Blocks"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}
    >
      <BottomTab.Screen
        name="Blocks"
        component={BlocksTabNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="logo-bitcoin" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Transactions"
        component={TransactionsTabNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="ios-code" color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

function TabBarIcon(props: {
  name: React.ComponentProps<typeof Ionicons>["name"];
  color: string;
}) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

const BlocksTabStack = createStackNavigator<BlocksTabParamList>();

function BlocksTabNavigator() {
  return (
    <BlocksTabStack.Navigator>
      <BlocksTabStack.Screen
        name="BlocksScreen"
        component={BlocksScreen}
        options={{ headerTitle: "Blocks" }}
      />
    </BlocksTabStack.Navigator>
  );
}

const TransactionsTabStack = createStackNavigator<TransactionsTabParamList>();

function TransactionsTabNavigator() {
  return (
    <TransactionsTabStack.Navigator>
      <TransactionsTabStack.Screen
        name="TransactionsScreen"
        component={TransactionsScreen}
        options={{ headerTitle: "Transactions" }}
      />
    </TransactionsTabStack.Navigator>
  );
}
