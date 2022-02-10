// Complete Day 1 goals here
let songs = ["Brittle Bones Nicky", "By the Sword", "Rock Parade", "Devil Trigger", "Enemy"];
let images = ["https://images.genius.com/b7773a5bbb51172925d4174fce8aae48.500x500x1.jpg", 
              "https://images.genius.com/5f2866daec88246edf668a0e00c40afe.1000x1000x1.jpg",
              "https://i.ytimg.com/vi/MA6iuIKRzPY/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCmSHnDBjljyfzoLFtcZJltD7k_WQ",
              "https://static.wikia.nocookie.net/devilmaycry/images/0/0a/DMC5_Devil_Trigger.jpg/revision/latest?cb=20190424163453",
              "https://upload.wikimedia.org/wikipedia/en/5/5c/Enemy_Imagine_Dragons.jpg",
             ];
let artists = ["Rare Americans", "iamjakehill", "NAOKI, Arc System Works", "Casey Edwards", "Imagine Dragons"];
let lengths = ["3:23", "2:06", "4:09", "6:46", "2:54"];
let links = ["https://open.spotify.com/album/3dNESOkTfBWV7R3bf1GPcS", 
             "https://open.spotify.com/album/3kdQLkOoQY2TtZflmtlyRa",
             "https://open.spotify.com/track/7rjWCCv5bO49a99nsLNhfu",
             "https://open.spotify.com/track/7I8MCiM3A4xvnM6zIiuMZn",
             "https://open.spotify.com/track/1r9xUipOqoNwggBpENDsvJ"];
function displaySongInfo() {
  // Complete the Day 2 goals inside this function
}

function emptySongInfo() {
  /* this function empties the divs each time the button is 
  clicked so that your playlist does not repeatedly add the data
  too many times. Try commenting out this function call to see 
  what happens without it! */
  $(".songs").empty();
  $(".images").empty();
  $(".artists").empty();
  $(".lengths").empty();
  $(".links").empty();
}

function addSongInfo() {
  // Complete Day 3 goals inside this function
}
for(let i = 0; i < songs.length; i++) {
  
}
$("#add").click(function () {
  emptySongInfo();
  addSongInfo();
  displaySongInfo();
});

displaySongInfo();
