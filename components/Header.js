import {Text,View,Image} from "react-native";
import {styleheader} from '../assets/styles/miStyle'

export default function Header(){
    return(
        <View style={styleheader.container}>
            <Image style= {styleheader.himagen} source={{uri:'https://es.dreamstime.com/icono-en-l%C3%ADnea-del-cr%C3%A9dito-dinero-estilo-esquema-vector-para-el-dise%C3%B1o-web-aislado-fondo-blanco-image152757358'}}/>
            <Text style={styleheader.htext}> APP DE CREDITOS</Text>
        </View>
    )
}