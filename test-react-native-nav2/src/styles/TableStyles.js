import { StyleSheet, Dimensions } from "react-native";

// const { width, height } = Dimensions.get("window");

export const TableStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'red',
    height: 75,
  },
  column: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: 'black'
  }
})