console.log("Lest make it goooood with some scripting babyyyyyy!!!!");

async function main() {
    let a = await fetch("http://127.0.0.1:5500/Spotify/media/songs/")
    let responce = await a.text();
    console.log(responce);
    console.log(a);
}

main()
