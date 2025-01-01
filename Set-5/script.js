// const insert = document.getElementById('insert')

// window.addEventListener('keydown'(e) =>  {
//     insert.innerHTML = `
//     <div class='color`></div> `

// });


const insert = document.getElementById('insert')


window.addEventListener('keydown', (e) => {
    insert.innerHTML = `
    <div class='color'>
    <table>
  <tr>
    <th>KEY</th>
    <th>KEYCODE</th>
    <th>CODE</th>
  </tr>
  <tr>
    <td>${e.key === "" ? " Space": e.key }</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
  </table>
    </div> `
})