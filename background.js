function scrapeContent(){
  let sectionTitle = document.querySelector('h1');
  sectionTitle.textContent = "poo"
  console.log('title', sectionTitle)
  // chrome.tabs.create({ url: chrome.runtime.getURL("index.html") })
  // .then( () => {
  //   let content = document.querySelector('#new-atk-title-here')
  //   content.textContent = 'ble'
  // })
}

chrome.browserAction.onClicked.addListener(scrapeContent)