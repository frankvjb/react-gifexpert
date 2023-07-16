export const getGifs = async( category ) => { 
   
    const url = `https://api.giphy.com/v1/gifs/search?q=${ category }=hola&api_key=Juk1VOrQ8BXeV7sS16sjvr3NfwfvXmdp&limit=10`;
    const resp = await fetch( url );

    const { data } = await resp.json();

    const gifs = data.map( img => ({ 
        
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url

    }));

    //console.log(gifs);

    return gifs;

 };