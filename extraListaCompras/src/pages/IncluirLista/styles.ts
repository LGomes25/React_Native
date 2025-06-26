import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'stretch',
    },
    lista:{
        flex:1,
        margin: 5,
    },
    linhaLista:{
        flexDirection:'row',
        justifyContent:"center",
        alignItems:"flex-start",
        paddingHorizontal: 5,
        alignContent:"center",
        borderWidth:1,
        borderBottomColor:"gray",
        borderRadius:5,
    },
    formulario:{
        flex:15,
        alignItems:"stretch",
        alignContent: 'flex-start',
        justifyContent: 'center',
        marginHorizontal: 2,
    },
    fomrEntryData:{
            flex:1,
            borderWidth: 2,
            borderColor: 'gray',
            borderRadius: 10,
            padding: 5,
            marginVertical: 15,
    },
    formularioFill:{
        borderWidth:1,
        borderColor:'gray',
        borderRadius:10,
        marginHorizontal:3,

    },
    textoLista:{
        fontSize:20,
    },
    textoForm:{
        fontSize:15,
        fontWeight:'bold',
        color:'blue',
        paddingHorizontal:3,
    },
    textoIncluir:{
        fontSize:30,
        fontWeight:'bold',
        color:'blue',
    }
})