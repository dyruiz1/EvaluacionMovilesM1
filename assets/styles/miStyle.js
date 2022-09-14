import { StyleSheet } from "react-native-web"

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

const styleheader = StyleSheet.create({
    container:{
        flex:1,
        width:'90%',
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor: 'orange'
    },
    
    himagen:{
        with:100,
        height:100
    },
    htext:{
        fontSize:40,
        fontWeight:'bold',
        color:'Green'
    }
})
const styleapp = StyleSheet.create({
    containers:{
        marginTop:30,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'left',
    },
    container:{
        flex:1,
        width:'90%',
        backgroundColor:'#808080',
        flexDirection:'row',
        marginTop:10
        
    },
    containerb:{
        flex:3,
        width:'90%',
        backgroundColor:'#808080',
        marginTop:10
    },
    column1:{
        flex:1,
        alignItems:'center',
        justifyContent: 'center',
        marginLeft:10
        

    },
    columna2:{
        flex:1,
        alignItems:'left',
        justifyContent:'left',
        marginLeft:20
    },
    columna3:{
        flex:1,
        alignItems:'center'
    },
    textBody:{
        
        alignSelf:'left'
        
    }, 
    // inputb:{
    //     borderBottom:'solid'
    // },
    styleboton:{
        marginTop:30,
        backgroundColor:'green',
        padding:10,
        borderRadius:10,
        marginRight:5,
        width:125,
        alignItems:'center'
    }
}) 


export{styleheader,styleapp,styles}