import {useState, useEffect, useRef} from 'react';
import { Text, View,TextInput,TouchableOpacity } from 'react-native';
import  Header  from './components/Header';
import {styleapp,styles} from './assets/styles/miStyle'
import { FlatList } from 'react-native-web';

export default function App() {
  const [nombre, setNombre] = useState('');
  const [mpres, setMpres] = useState('')
  const [cuotas, setCuotas] = useState('')
  const [vcuota, setVcuota] = useState('')
  const [fecha, setFecha] = useState('')
  const [tpres, setTpres] = useState('')
  const [tdeuda, setTdeuda] = useState('')
  const [listCreditos,setListCreditos] = useState([]);
  // Referencias a elementos
  let refNombre = useRef()
  // const table = ()=>{
  //   const item = ({item})=>{
  //     return(
  //       <View style={{flexDirection:'row'}}>
  //         <View style={{width:50,backgroundColor:'yellow'}}>
  //           <Text>{item.nombre}</Text>
  //         </View>
  //         <View style={{width:50,backgroundColor:'yellow'}}>
  //           <Text>{item.montoPrestamo}</Text>
  //         </View>
  //         <View style={{width:50,backgroundColor:'yellow'}}>
  //           <Text>{item.cuotas}</Text>
  //         </View>
  //       </View>
  //     )
  //   }
  //   if(listCreditos.length>0){
  //     return (<View style={{flex:1,justifyContent:'center',alignItems:'center',marginTop:'10%'}}>
  //      <View style={{flexDirection:'row'}}>
  //         <View style={{width:60,backgroundColor:'white'}}>
  //           <Text>Nombre</Text>
  //         </View>
  //         <View style={{width:60,backgroundColor:'white'}}>
  //           <Text>Monto Prestamo</Text>
  //         </View>
  //         <View style={{width:60,backgroundColor:'white'}}>
  //           <Text>Cuotas</Text>
  //         </View>
  //       </View>
  //     <FlatList
  //     data={listCreditos}
  //     renderItem={item}
  //     KerExtractor={(item,index)=>index.toString()}
  //     />
  //   </View>
  // )
  //   }
  //   }
  const mapa = () =>{
    return listCreditos.map((element) => {
      return (
        <View key={element.nombre} style={{flexDirection:'row'}}>
          <View style={{width:80,backgroundColor:'transparent'}}>
            <Text style={{border:'solid 1px',width:80}}>{element.nombre}</Text>
          </View>
          <View style={{width:60,backgroundColor:'transparent'}}>
            <Text style={{border:'solid 1px',width:60}}>{element.montoPrestamo}</Text>
          </View>
          <View style={{width:60,backgroundColor:'transparent'}}>
            <Text style={{border:'solid 1px',width:60}}>{element.cuotas}</Text>
          </View>
          <View style={{width:80,backgroundColor:'transparent'}}>
          <Text style={{border:'solid 1px',width:80}}>{element.valorCouta}</Text>
          </View>
          <View style={{width:75,backgroundColor:'transparent'}}>
            <Text style={{border:'solid 1px',width:75}}>{element.fecha}</Text>
          </View>
          <View style={{width:90,backgroundColor:'transparent'}}>
            <Text style={{border:'solid 1px',width:90}}>{element.tipoPrestamo}</Text>
          </View>
          <View style={{width:90,backgroundColor:'transparent'}}>
            <Text style={{border:'solid 1px',width:90}}>{element.totalDeuda}</Text>
          </View>
        </View>
      );
      });
  }
   const list = () => {
    
      if(listCreditos.length>0){
        return (<View style={{flex:1,justifyContent:'center',alignItems:'center',marginTop:'10%',backgroundColor:'#808080'}}>
                <View style={{flexDirection:'row'}}>
                  <View style={{width:80,backgroundColor:'transparent'}}>
                    <Text style={{border:'solid 1px',width:80}}>Nombre</Text>
                  </View>
                  <View style={{width:60,backgroundColor:'transparent'}}>
                    <Text style={{border:'solid 1px',width:60}}>Monto </Text>
                  </View>
                  <View style={{width:60,backgroundColor:'transparent'}}>
                    <Text style={{border:'solid 1px',width:60}}>Cuotas</Text>
                  </View>
                  <View style={{width:80,backgroundColor:'transparent'}}>
                    <Text style={{border:'solid 1px',width:80}}>cuota</Text>
                  </View>
                  <View style={{width:75,backgroundColor:'transparent'}}>
                    <Text style={{border:'solid 1px',width:75}}>fecha</Text>
                  </View>
                  <View style={{width:90,backgroundColor:'transparent'}}>
                    <Text style={{border:'solid 1px',width:90}}>Tipo</Text>
                  </View>
                  <View style={{width:90,backgroundColor:'transparent'}}>
                    <Text style={{border:'solid 1px',width:90}}>total</Text>
                  </View>
                </View>
                <View >{mapa()}</View>

                </View>
                 
        )
      }
   }
  const guardar = () => {
    //Agregar datos al array a través del método setSalarios para el array salarios
    const credito={
       nombre:nombre,
       montoPrestamo:mpres,
       cuotas:cuotas,
       valorCouta:vcuota,
       fecha:fecha,
       tipoPrestamo:tpres,
       totalDeuda:tdeuda,
    }
    setListCreditos(listCreditos => [...listCreditos,credito] );
    //console.log(salarios);
    console.log(listCreditos)
    setNombre('');
    setCuotas('');
    setFecha('');
    setMpres('');
    setTdeuda('');
    setVcuota('');
    setTpres('');
    refNombre.current.focus();
  }
  const valtipocredito = ()=>{
    return (
        <Text style={{color:'red'}}>
          Error en el tipo de credito
          debe ingresarlo en minuscula
        </Text>
    )
  }
  const CALCULAR = (tpres) => {
    let taza=0
                let interes=0
                if(tpres=='vivienda'){
                  taza=0.015             
                }else if(tpres=='educativo'){
                  taza=0.01      
                }else if(tpres=='libreinversion'){
                  taza=0.02 
                }else{valtipocredito()}
                interes = parseInt(mpres)*taza*parseInt(cuotas)
                 let todeuda=parseInt(mpres)+parseInt(interes)
                let valcuota=parseInt(todeuda/cuotas)
                setTpres(tpres)
                setVcuota(valcuota)
                setTdeuda(todeuda)

  }
  
  
  let buscar = (nombuscar) =>{
    let nomenc = salarios.find(sal => sal.nombre == nombre);
    if (nomenc != undefined){
      setSalario(nomenc.salario);
    }
    else{
      alert("Nombre no hallado");
    }
  }

  return (

    <View style={styles.container}>
      <Header/>
      <View style={styleapp.containerb}>
        <View style={styleapp.container}>
          <View style={styleapp.columna1}>
          <View style={styleapp.containers}>
          <Text style={styleapp.textBody}>Nombre: </Text> 
          <TextInput 
            placeholder='Ingrese Nombre' 
            style={{borderBottom:'solid 1px',width:100}}
            onChangeText={nombre => setNombre(nombre)}
            value={nombre}
            ref={refNombre}/>
          </View>
          <View style={styleapp.containers}>
            <Text style={styleapp.textBody}>Monto Préstamo: </Text>
            <TextInput keyboardType = 'numeric'
              onChangeText={mpres => {
                //if (parseFloat(mpres)>=12000000&&parseFloat(mpres)<=100000000){
                  setMpres(mpres)
                // }else{
                  
                // }
                }
                }
              value={mpres}
              style={{borderBottom:'solid 1px'}}
              placeholder='Entre 1 a 100 millones' />
          </View>
          <View style={styleapp.containers}>
          <Text style={styleapp.textBody}>Número de cuotas: </Text>
            <TextInput keyboardType = 'numeric'
              onChangeText={cuotas => {
                
                setCuotas(cuotas)
              }}
              value={cuotas}
              style={{borderBottom:'solid 1px'}}
              placeholder='entre 12 y 36 cuotas' />
          </View>
          <View style={styleapp.containers}>
            
              <Text style={styleapp.textBody}>Fecha: </Text>
              <TextInput keyboardType = 'numeric'
              placeholder='ejemplo 13/09/2022'
              onChangeText={fecha => setFecha(fecha)}
              value={fecha}
              style={{borderBottom:'solid 1px'}}
                />
          </View>
              
          </View>

          <View style={styleapp.columna2}>
            <View style={styleapp.containers}>
              
              <Text style={styleapp.textBody}>Tipo Préstamo: </Text>
              <TextInput 
              onChangeText={tpres => CALCULAR(tpres)}
              value={tpres}
              style={{borderBottom:'solid 1px'}}
              placeholder='vivienda,educativo o libre inversion'
              />

            </View>
            <View style={styleapp.containers}>
              <Text style={styleapp.textBody}>Valor de Cuota: </Text>
            <TextInput keyboardType = 'numeric'
              onChangeText={vcuota => setVcuota(vcuota)}
              value={vcuota}
              style={{borderBottom:'solid 1px'}}
               />
            </View>
            <View style={styleapp.containers}>
              <Text style={{marginTop:50}}>Total Deuda: </Text>
              
              <TextInput keyboardType = 'numeric'
              onChangeText={tdeuda => setTdeuda(tdeuda)}
              value={tdeuda}
              style={{borderBottom:'solid 1px',marginTop:50}}
              />
              {/* <ul>{listCreditos.map((credito)=>{
                <Text>{credito.nombre} oeoe</Text>
              })}</ul> */}    
            </View>
          </View>
          <View style={styleapp.columna3} >
          <TouchableOpacity View style={styleapp.styleboton} onPress={()=>guardar()}>
              <Text >Calcular/Guardar</Text>
            </TouchableOpacity>
            <TouchableOpacity
            View style={styleapp.styleboton}    
            >
              <Text >Buscar</Text>
            </TouchableOpacity>
            <TouchableOpacity
            View style={styleapp.styleboton}     
            >
              <Text >Limpiar</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styleapp.columna2}>{list()}</View>
       
      </View>
      
    </View>
  );
}