// chrome.runtime.sendMessage({greeting: "hello from popup!"},  function(response) {
//   console.log(response)
//   let title = document.querySelector('#new-atk-title-here')
//   title.textContent = response.content
// });

chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  chrome.tabs.sendMessage(tabs[0].id, {greeting: "hello from popup!"}, function(response) {
    console.log(response)
    let title = document.querySelector('#new-atk-title-here')
    title.textContent = response.content
  });
});