import { Text, View } from "react-native";

export default function Tabla({ notas }) {
  return notas.map((element, index) => (
    <View
      key={`${element.identificacion}-${index}`}
      style={{ flexDirection: "row" }}
    >
      <View style={{ width: 80, backgroundColor: "transparent" }}>
        <Text style={{ border: "solid 1px", width: 80 }}>{element.nombre}</Text>
      </View>
      <View style={{ width: 80, backgroundColor: "transparent" }}>
        <Text style={{ border: "solid 1px", width: 60 }}>
          {element.asignatura}
        </Text>
      </View>
      <View style={{ width: 80, backgroundColor: "transparent" }}>
        <Text style={{ border: "solid 1px", width: 60 }}>
          {element.momentoUno}
        </Text>
      </View>
      <View style={{ width: 80, backgroundColor: "transparent" }}>
        <Text style={{ border: "solid 1px", width: 80 }}>
          {element.momentoDos}
        </Text>
      </View>
      <View style={{ width: 80, backgroundColor: "transparent" }}>
        <Text style={{ border: "solid 1px", width: 75 }}>
          {element.momentoTres}
        </Text>
      </View>
      <View style={{ width: 80, backgroundColor: "transparent" }}>
        <Text style={{ border: "solid 1px", width: 75 }}>
          {element.definitiva}
        </Text>
      </View>
      <View style={{ width: 80, backgroundColor: "transparent" }}>
        <Text style={{ border: "solid 1px", width: 75 }}>
          {element.observaciones}
        </Text>
      </View>
    </View>
  ));
}
