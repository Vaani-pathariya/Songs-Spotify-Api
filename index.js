getsong=()=>{
    let song=document.getElementById("song").value;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'c2519cdf9dmshf53154747d84da6p1d6880jsne78ad6bc93c9',
            'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
        }
    };
    
    fetch(`https://spotify23.p.rapidapi.com/search/?q=${song}&type=tracks&offset=0&limit=10&numberOfTopResults=5`, options)
        .then(response => response.json())
        .then((response) =>{ 
            document.getElementById("name").innerText=(response.tracks.items[0].data.albumOfTrack.name);
            document.getElementById("banner").src=response.tracks.items[0].data.albumOfTrack.coverArt.sources[0].url;
            document.getElementById("singer").innerText=response.tracks.items[0].data.artists.items[0].profile.name;
        })
        .catch(err => console.error(err));
}