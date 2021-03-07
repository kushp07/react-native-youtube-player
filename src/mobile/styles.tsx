import { StyleSheet } from "react-native";
import { VideoSize } from "./Utils";

const styles = StyleSheet.create({
  inline: {
  },
  fullScreen: {
    ...StyleSheet.absoluteFillObject,
    marginTop: 0,
    flex: 1,
    zIndex: 999,
    elevation: 999,
    alignContent: "center",
    justifyContent: "center",
    backgroundColor: "#000"
  },
  button: {
    borderColor: "#000",
    borderWidth: 1,
    margin: 5,
    justifyContent: "center",
    alignItems: "center",
    height: 30,
    borderRadius: 15
  },
  wrapper: {
    height: 0,
    width: 0,

    //paddingTop: 30,
    backgroundColor: "#000"
  }
});

export default styles;
