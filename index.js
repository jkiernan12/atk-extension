//query selectors
let sectionTitle = document.querySelector('h1');
let atkContent = document.querySelector('#new-atk-title-here')
let items = document.querySelectorAll('.reviewable-title > h3')

// console.log(sectionTitle.textContent)
// atkContent.textContent = sectionTitle.textContent

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(items)
    sendResponse({content: sectionTitle.textContent});
  }
); 