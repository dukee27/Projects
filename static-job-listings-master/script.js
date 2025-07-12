let list = "";
fetch('data.json')

.then(response => response.json())
.then(data => {
    data.forEach(comp => {
        list += `<li>${comp.company}</li>`;
        document.querySelector(".cards").innerHTML = list;
    });
    
})