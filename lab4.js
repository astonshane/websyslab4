$("#site").click(function() {
  $('body').append("<div id='supercontainer'> </div>")
  var title = "<div class='container'><ul id='header'><li>Track Name</li><li>Artist</li><li>Album Name</li><li>Release Date</li><li>Genre</li><li>Website</li><li>Album Cover</li></ul></div>"
  $( "#supercontainer" ).append(title);
  $.getJSON('lab4.json', function(data) {
    songs = data.songs
    for (var i=0; i<songs.length; i++){
      console.log(songs[i].title)
      var beginHTML = "<div class='container'><ul>";
      var endHTML = "</ul></div>"
      var content = ""
      content += "<li class='track'>" + songs[i].track + "</li>"
      content += "<li class='artist'>" + songs[i].artist + "</li>"
      content += "<li class='album'>" + songs[i].album + "</li>"
      content += "<li class='date'>" + songs[i].date + "</li>"
      content += "<li class='genre'>" + songs[i].genre + "</li>"
      content += "<li class='website'><a href='" + songs[i].website + "'>" + songs[i].website + "</a></li>"
      content += "<li><img src='" + songs[i].img + "'></li>"

      $( "#supercontainer" ).append( beginHTML+content+endHTML);

    }
    $("#site").remove()
  });
});
