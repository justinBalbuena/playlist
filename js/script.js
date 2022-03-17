// Complete Day 1 goals here
let playList = [
  //firstsong
  {
    name: "Brittle Bones Nicky",
    image: "https://images.genius.com/b7773a5bbb51172925d4174fce8aae48.500x500x1.jpg",
    artist: "Rare Americans",
    length: "3:23",
    link: "https://open.spotify.com/album/3dNESOkTfBWV7R3bf1GPcS",
  },
  
  //secondsong
  {
    name: "By the Sword",
    image: "https://images.genius.com/5f2866daec88246edf668a0e00c40afe.1000x1000x1.jpg",
    artist: "iamjakehill",
    length: "2:06",
    link: "https://open.spotify.com/album/3kdQLkOoQY2TtZflmtlyRa",
  },
  
  //thirdsong
  {
    name: "Rock Parade",
    image: "https://i.ytimg.com/vi/MA6iuIKRzPY/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCmSHnDBjljyfzoLFtcZJltD7k_WQ",
    artist: "NAOKI, Arc System Works",
    length: "4:09",
    link: "https://open.spotify.com/track/7rjWCCv5bO49a99nsLNhfu",
  },
  
  //fourthsong
  {
    name: "Devil Trigger",
    image: "http://pm1.narvii.com/6953/2b8485fcc08ef4375c1a0314933ed7780c145c0dr1-400-400v2_00.jpg",
    artist: "Casey Edwards",
    length: "6:46",
    link: "https://open.spotify.com/track/7I8MCiM3A4xvnM6zIiuMZn",
  },
  
  //fifthsong
  {
    name: "Enemy",
    image: "https://upload.wikimedia.org/wikipedia/en/5/5c/Enemy_Imagine_Dragons.jpg",
    artist: "Imagine Dragons",
    length: "2:54",
    link: "https://open.spotify.com/track/1r9xUipOqoNwggBpENDsvJ",
  },
];


  // Complete the Day 2 goals inside this function
function originalList() {
  playList.forEach(function(song) {
    $(".songs").append(`<p>${song.name}</p>`);
    $(".images").append(`<img src="${song.image}">`);
    $(".artists").append(`<p>${song.artist}</p>`);
    $(".lengths").append(`<p>${song.length}</p>`);
    $(".links").append(`<p> <a href = "${song.link}">${song.link}</a> </p>`);
  });
 
}

function emptySongInfo() {
  /* this function empties the divs each time the button is 
  clicked so that your playlist does not repeatedly add the data
  too many times. Try commenting out this function call to see 
  what happens without it! */
  $(".songs").text("");
  $(".artists").text("");
  $(".images").text("");
  $(".lengths").text("");
  $(".links").text("");
} 

function addSongInfo() {
  emptySongInfo();
  // Complete Day 3 goals inside this function
  
  
  let songInput = $(".title").val();
  //songs.push(songInput);
  
  let imageInput = $(".image").val();
  //images.push(imageInput);
  
  let artistInput = $(".artist").val();
  //artists.push(artistInput);
  
  let lengthInput = $(".length").val();
  //lengths.push(lengthInput);
  
  let linkInput = $(".link").val();
  //links.push(linkInput);
  
  //if statement to prevent blank spaces soon
  if (
    $(".title").val() != "" &&
    $(".image").val() != "" &&
    $(".artist").val() != "" &&
    $(".length").val() != "" &&
    $(".link").val() != ""
  ) {
    let newSong = {
      name: songInput,
      image: imageInput,
      artist: artistInput,
      length: lengthInput,
      link: linkInput,
    }
    playList.push(newSong);


    originalList();
  }
  originalList();
};

originalList();
$(".add").click(function () {

  addSongInfo();

});

