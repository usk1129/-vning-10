const inputText = document.getElementById('input');
const outputText = document.getElementById('output-text');
const Button = document.getElementById('btn');


//const getJson = async () => {
//        const res = await fetch('https://www.swapi.tech/api/people', {
//            method: 'GET',
//            headers: {
//                'Accept': 'application/json'
//            }
//        });
//        const data = await res.json()
//        console.log(data);
//        console.log(data.results);
//        const results = data.results;
//        outputText.textContent = '';
//        results.forEach(repo => {
//                outputText.textContent += `Names: ${repo.name}\n`
//            })
//    }
//

const GetPerson = async () =>{
    valueinput = inputText.value
    const url = 'https://www.swapi.tech/api/people/?name=' + valueinput;
    const res = await fetch(url)
    const data = await res.json()
    console.log(data)
    const result = data.result[0].properties;
    outputText.innerHTML = '';
    outputText.innerHTML += `Name: ${result.name}\nHeight: ${result.height}\nGender: ${result.gender}\nMass: ${result.mass}\nHairColor: ${result.hair_color}\n`

}



Button.addEventListener('click', async (e) =>{
    e.preventDefault();
    GetPerson();
} )


