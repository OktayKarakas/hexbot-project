document.getElementById('btn').addEventListener('click', () => {
  getColor(colors)
})

function displayColors(colors) {
  const myColorsHtml = colors
    .map((item) => {
      return `<div class="my-color" style="background-color:${item.value}"></div>`
    }) //"item" array'ı temsil ediyor.
    .join(' ')

  document.getElementById('container').innerHTML = `
  <div class="my-colors">
  ${myColorsHtml}
  </div>
  `
}

const colors = 100
async function getColor(color) {
  const res = await fetch(`https://apis.scrimba.com/hexcolors/?count=${color}`)
  const data = await res.json()
  const colors = data.colors
  displayColors(colors)
}

getColor(colors)
