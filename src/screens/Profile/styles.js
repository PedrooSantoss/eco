import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  header: {
    width: 400,
    backgroundColor: "#69B752"
  },
  user: {
    flex: 1,
    alignItems: "center",
    marginTop: 50
  },
  userInfo: {
    flexDirection: "row",
    marginBottom: 10,
  },
  img: {
    width: 85,
    height: 85,
    borderRadius: 50
  },
  name: {
    fontSize: 35,
  },
  userData: {
    flexDirection: "row"
  },
  coluna: {
    marginRight: 50
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
