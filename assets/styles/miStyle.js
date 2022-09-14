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
        
        width:'90%',
        height:40,
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor: '#fff7eb',
        border:'solid 1px'
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
        
    },
    container:{
        flex:1,
        width:'90%',
        backgroundColor:'#f1fcf1',
        flexDirection:'row',
        marginTop:10
        
    },
    containerb:{
        flex:2,
        width:'90%',
        backgroundColor:'#f1fcf1',
        marginTop:10
    },
    columna1:{
        flex:1,
        marginLeft:10
        

    },
    columna2:{
        flex:1,
        alignItems:'center',
        justifyContent:'left'
        
    },
    columna3:{
        flex:1,
        alignItems:'center',
        marginTop: 30
    },
    textBody:{
        
        alignSelf:'left'
        
    }, 
    // inputb:{
    //     borderBottom:'solid'
    // },
    styleboton:{
        marginTop:20,
        backgroundColor:'green',
        padding:10,
        marginRight:5,
        width:125,
        height:25,
        alignItems:'center',
        justifyContent:'center'
    }
}) 


export{styleheader,styleapp,styles}