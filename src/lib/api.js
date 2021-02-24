export default {
    author:"Pedro Antonio",
    greetings( name ){
        console.log( `hola ${name}` )
    },
    getPost(postId){
        //AQUI se coloca la URL de la BD que hemos estado utilizando
        fetch( `${postId}`.json ).then( response => response.json())
        .then( json => {
            //console.log( "el json", json )
            return json
        })
        return data
    }
}