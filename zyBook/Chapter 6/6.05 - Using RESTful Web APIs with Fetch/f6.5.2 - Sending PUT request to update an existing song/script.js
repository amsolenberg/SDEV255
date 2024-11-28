addEventListener("DOMContentLoaded", async function () {
  document.querySelector("#updateBtn").addEventListener("click", updateSong);

  // Load a song into the web form
  const songId = "5fe1097caf3b173148985746";
  const response = await fetch("/api/songs/" + songId);
  if (response.ok) {
    let song = await response.json();
    document.querySelector("#songId").value = song._id;
    document.querySelector("#title").value = song.title;
    document.querySelector("#artist").value = song.artist;
    document.querySelector("#released").value = song.releaseDate.substring(
      0,
      10
    );
    document.querySelector("#popularity").value = song.popularity;
    document.querySelector("#genre").value = song.genre;
  }
});

async function updateSong() {
  // Create a song object from the form fields
  const song = {
    _id: document.querySelector("#songId").value,
    title: document.querySelector("#title").value,
    artist: document.querySelector("#artist").value,
    releaseDate: document.querySelector("#released").value,
    popularity: document.querySelector("#popularity").value,
    genre: document.querySelector("#genre").value
      ? document.querySelector("#genre").value.split(",")
      : []
  };

  // Send PUT request with JSON-encoded song to Music API
  const response = await fetch("/api/songs", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(song)
  });

  if (response.ok) {
    alert("Updated song.");
  } else {
    document.querySelector("#error").innerHTML =
      "Cannot update song".toUpperCase();
  }
}
