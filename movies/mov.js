function getInputValue() {
    
    let inputVal = document.getElementById("inputId").value;
    const result = inputVal;
    fetch(`https://online-movie-database.p.rapidapi.com/auto-complete?q=${result}`, {
        "method": "GET",
        "headers": {
            'X-RapidAPI-Key': '47e8884e4fmsh726953739cfe4cdp157c84jsn33f06552c83a',
            'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
        }
    }).then(response => response.json())
        .then(data => {
            const list = data.d;

            list.map((item) => {
                const name = item.l;
                const poster = item.i.imageUrl;
                const movie = `<li><img src="${poster}"><h2>${name}</h2></li>`
                document.querySelector('.movies').innerHTML += movie;
            })
        })
        .catch(err => {
            console.log(err);
        });
    
  }