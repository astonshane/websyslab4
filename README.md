Shane Aston - Websys - Lab 4
Part 1)
I formatted my JSON file with the base being a list called "songs". This list
contains four objects that contain each song's information: "track", "artist",
"album", "date", "genre", "website", and "img". This format is nice because the
list name tells you that each item is a song, and each song's information is then
contained inside the object. This is a much more lightweight way to store information,
as opposed to XML.
Part 2)
For Part 2, I started by adding an onclick event listener on the #site link. In the function that is called by this, I first took the HTML from my Lab 2 HTML for the header (the part that says "Track", "Artist", "Album", ...) and appended that to the #supercontainer div that I added to lab4.html. Next, I load the json file that I created for Part 1. I am then able to pull out the list of songs, and loop through them. Inside this loop, I construct HTML that matches the HTML that I created in Lab 2, filled with the data from each of the song objects. I am able to construct individualized HTML for each song in this way. At the end of each iteration of the for loop, I append the HTML that I crreated to the #supercontainer div.
To style Part 2, I just took my CSS file from Lab 2, and added it with a <link>. Because I used the same tags and attributes when constructing the html, the CSS worked the same too.
