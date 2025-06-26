import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"stretch",
    },
    lista:{
        flex:1,
        marginHorizontal: 5,
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
    texto:{
        fontSize:15,
    }
})