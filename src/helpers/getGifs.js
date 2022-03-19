

export const getGifs = async( category )=> {

    //Peticion Http en Javascript Actual
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category ) }&api_key=M1n7HIlIvMrFcnGmftUM8sBIlXsc5YmN&limit=10`;
    const resp = await fetch( url );
    const { data } = await resp.json(); //Me interesa la data que viene dentro de esta data

    //Recuerda que el map transforma
    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url : img.images?.downsized_medium.url
        }
    })
        
    return gifs;    
}