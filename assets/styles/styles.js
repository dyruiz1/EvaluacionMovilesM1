import { StyleSheet } from "react-native-web";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

const styleheader = StyleSheet.create({
  container: {
    width: "90%",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff7eb",
    border: "solid 1px",
  },
  htext: {
    fontSize: 40,
    fontWeight: "bold",
    color: "green",
  },
});
const styleapp = StyleSheet.create({
  containers: {
    marginTop: 30,
    flexDirection: "row",
    alignItems: "center",
  },
});

const styleform = StyleSheet.create({
  container: {},
  definitivaYObservaciones: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    margin: "10px",
  },
});

const styleInputRow = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    gap: "20px",
    margin: "10px",
    justifyContent: "space-between",
  },
  input: {
    padding: "5px",
  },
  errorMessage: {
    color: "red",
  },
});

const formButtons = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    gap: "20px",
    margin: "10px",
    justifyContent: "space-around",
  },
  button: {
    border: "1px solid",
    padding: "10px",
    borderRadius: "5px",
    backgroundColor: "green",
    color: "white",
    fontWeight: "bold",
  },
});

export { styleheader, styleapp, styleform, styleInputRow, formButtons, styles };
