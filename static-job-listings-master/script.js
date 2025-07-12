let list = "";
fetch('data.json')

.then(response => response.json())
.then(json => {
    json.forEach(comp => {
        list += `<li>${comp.company}</li>`;
    });
    document.querySelector("ul").innerHTML = list;
})