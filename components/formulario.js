import React, {Component} from 'react';
import {
    View, 
    Text, 
    TextInput,
    Keyboard, 
    Button,
    Alert,
} from 'react-native';

import calcularLetraDNI from '../esborrar';

export default class Nif extends Component {
    constructor(props){
        super(props);
    
        this.state = {
          DNIintroducido: undefined,
          letraDNI: undefined,
          nombre: undefined,
          apellidos: undefined,
          direccion: undefined, 
          telefono: undefined,
          email: undefined, 
          comprobarTodo: false, 
        }
    }
    
    guardarDNI(valor){
        if(valor.length === 8){ //mientras el dni sea igual a 8 podremos actualizar el estado 
          this.setState({DNIintroducido: valor});
          let letra = calcularLetraDNI(valor);
          this.setState({letraDNI: letra}); 
          //asignamos la letra q llama a la funcion que calcula la letra dni a la letraDNI declara como undefined 
          //this.props.devuelveNif({dni: this.state.DNIintroducido, letraDNI: letra})
        }
      } 

    comprobarDatos = () => {
    
        var msg = "";
        var valor = 0;
        if(this.state.DNIintroducido === undefined){
          msg += "DNI\n";
          valor+=1;
        }
    
        if(this.state.nombre === undefined){
          msg += "nombre\n";
          valor+=1;
        }
    
        if(this.state.apellidos === undefined){
          msg += "apellidos\n";
          valor+=1;
        }
    
        if(this.state.direccion === undefined){
          msg += "dirección\n";
          valor+=1;
        }
    
        if(this.state.telefono === undefined){
          msg += "telefono\n";
          valor+=1;
        }
    
        if(this.state.email === undefined){
          msg += "email\n";
          valor+=1;
        }
    
        if(valor > 0 ){
          Alert.alert("Te falta poner: ",msg);
        }
        else{
          fetch('http://localhost:3000/usuaris', {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              DNIintroducido: this.state.DNIintroducido + this.state.letraDNI,
              nombre: this.state.nombre,
              apellido:this.state.apellido,
              telefono:this.state.telefono,
              direccion:this.state.direccion,
              email:this.state.email,
            }),
          }); 
        }
    }

    render(){
        return(
          <View>
              <Text>DATOS PERSONALES</Text>
            <View>
                <TextInput placeholder="DNI" maxLength={8} keyboardType={"number-pad"} //limitamos el caracter de numeros en textinput y tb modificamos para q aparezca el teclado numéricop `por defecto con keytype
                  placeholderTextColor='#FF0000'
                  onChangeText={(DNIintroducido)=> this.guardarDNI(DNIintroducido)}
                />
                <TextInput placeholder="LETRA" editable={false} style={{color: 'blue'}}
                  placeholderTextColor='#FF0000'
                  value = {this.state.letraDNI} //propiedad de textinput que permite mostrar un valor
                />
                <TextInput placeholder="Nom" maxLength={8} //limitamos el caracter de numeros en textinput y tb modificamos para q aparezca el teclado numéricop `por defecto con keytype
                  placeholderTextColor='#FF0000'
                  onChangeText={(text)=> this.setState({nombre: text})}
                />
                <TextInput placeholder="Apellidos"
                  placeholderTextColor='#FF0000'
                  onChangeText={(text)=> this.setState({apellidos: text})} //propiedad de textinput que permite mostrar un valor
                />
                <TextInput placeholder="Dirección" maxLength={8} //limitamos el caracter de numeros en textinput y tb modificamos para q aparezca el teclado numéricop `por defecto con keytype
                  placeholderTextColor='#FF0000'
                  onChangeText={(text)=> this.setState({direccion: text})}
                />
                <TextInput placeholder="Teléfono" keyboardType={"number-pad"}
                  placeholderTextColor='#FF0000'
                  onChangeText={(text)=> this.setState({telefono: text})} //propiedad de textinput que permite mostrar un valor
                />
                <TextInput placeholder="Email"
                  placeholderTextColor='#FF0000'
                  onChangeText={(text)=> this.setState({email: text})} //propiedad de textinput que permite mostrar un valor
                />
            <View>
              <Button
                  title="AÑADIR"
                  onPress={this.comprobarDatos}
              />
            </View>
          </View>
          </View>
        )
    }
}