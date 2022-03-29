let table = document.querySelector('#atk-data')
let title = document.querySelector('#atk-product-data-title')

chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  chrome.tabs.sendMessage(tabs[0].id, null, function(response) {
    console.log(response)
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
    title.textContent = response.title + " Data"
  });
});

new ClipboardJS('#get-data-submit');