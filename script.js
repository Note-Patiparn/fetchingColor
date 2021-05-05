
// fetch 

async function getColor () {
    let response = await fetch('https://apis.scrimba.com/hexcolors?count=10')
    let data = await response.json();
    let colorData = data.colors
    console.log(colorData)
    displayColor(colorData)
}


function displayColor(data) {
    let colorHtml = data.map(color => {
        return `
            <div class="all">
                <div class="colors" style="background-color: ${color.value}"></div>
                <div class="text-containter"><p>${color.value}</p>
                <p class="brand">#WTWTD</p>
                </div>
            </div>
                `
    }).join('')
    document.body.innerHTML = `
        <h1 class="title">What color to wear today</h1>
        <div class="color-container">
            ${colorHtml}
        </div>
    `
}

getColor()



// getColor()
//     .then(colors => {
//         document.body.innerHTML = ` 
//         <div class="colors">
//             ${colors.value}
//         </div>
//         `
//     })

