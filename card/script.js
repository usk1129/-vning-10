const form = document.getElementById('myForm');
const output = document.getElementById('output');

const getJson = async () => {
        const res = await fetch('https://deckofcardsapi.com/api/deck/new/draw/?count=1', {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            }
        });
        const data = await res.json()
        console.log(data);
        const image = data.cards[0].image;
        const img = document.createElement('img');
        img.src += image
        output.appendChild(img);
}


function outputtext(){
    const value = input.value;
    output.textContent += value;
}

form.addEventListener('submit',function(event){
    event.preventDefault();
    getJson();
    outputtext();
    form.reset();

});