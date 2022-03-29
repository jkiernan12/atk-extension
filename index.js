//query selectors
let sectionTitle = document.querySelector('h1');
let atkContent = document.querySelector('#new-atk-title-here')
let content = document.querySelectorAll('.reviewable-detail__reviewables > .accordion-content-wrapper')
let title = document.querySelector('h1').textContent

// convert content to array of objects w/ data
let items = Array.from(content).map(item => {
  let price = null
  let modelNum = null
  item.querySelectorAll('div').forEach(el => {
    if (el.innerHTML.includes('Price at Time of Testing')) {
      price = el.textContent.replace('Price at Time of Testing: ', '')
    } else if (el.innerHTML.includes('Model Number:')) {
      modelNum = el.textContent.replace('Model Number: ', '')
    }
  })
  let status = item.parentNode.childNodes[0].textContent
  let secondaryStatus = Array.from(item.childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes).find(el => el.classList.contains('reviewable-sticker-wrapper'))?.childNodes[0].textContent
  return {
    brand: Array.from(item.childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes).find(el => el.nodeName === 'H3').textContent,
    status: secondaryStatus ? `${status}: ${secondaryStatus}` : status,
    modelNum: modelNum,
    price: price
  }
})

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    sendResponse({content: items, title});
  }
); 