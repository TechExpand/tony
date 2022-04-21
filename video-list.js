let allVideos = [
    {
      dateAdded: "4/1/22",
      title: "song title",
      artist: "artists name",
      url: "https://youtube.com/oereoruo",
      id: "1"
    },
    {
      dateAdded: "4/1",
      title: "Survival",
      artist: "LockSmith",
      url: "https://music.youtube.com/watch?v=hFc_JqMnunU",
      id: "2"
    }
  ]


 fetch("https://tony126.herokuapp.com/api/getsheet")
 .then(response => response)
 .then(data => {
   const resData = data.json().then(value =>{
    allVideos =  value;
   console.log(allVideos);
   });
 })
 .catch((err) => console.log("Can’t access " + url + " response. Blocked by browser?" + err));