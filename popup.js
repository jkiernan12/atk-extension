chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  chrome.tabs.sendMessage(tabs[0].id, {greeting: "hello from popup!"}, function(response) {
    console.log(response)
    let table = document.querySelector('#atk-data')
    response.content.forEach(el => {
      table.innerHTML += `
      <tr>
        <td>${el.brand}</td>
        <td>${el.status}</td>
        <td>${el.modelNum}</td>
        <td>${el.price}</td>
      </tr>
      `
    })
  });
});