// function scrapeContent(){
//   chrome.browserAction.setPopup(
//     {
//       popup: 'index.html'
//     },
//     getPage
//   )
// }

// function getPage() {
//   chrome.runtime.getBackgroundPage((window) => {
//     scrapePage(window.document)
//   })
// }

// // chrome.runtime.onMessage.addListener(
// //   (request, sender, sendResponse) => {
// //     console.log(request)
// //     chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
// //       chrome.tabs.sendMessage(tabs[0].id, {greeting: "hello from background!"}, function(response) {
// //         console.log(response)
// //         sendResponse({content: 'sent from background'});
// //       });
// //     });
// //   }
// // );

// chrome.browserAction.onClicked.addListener(scrapeContent)