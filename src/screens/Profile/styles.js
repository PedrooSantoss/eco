import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  user: {
    flex: 1,
    alignItems: "center",
  },
  userInfo: {
    flexDirection: "row",
    marginBottom: 10,
  },
  img: {
    width: 50,
    height: 50
  },
  label: {
    fontWeight: "bold",
    marginRight: 5,
  },
  info: {
    flex: 1,
  },
});

export default styles;
