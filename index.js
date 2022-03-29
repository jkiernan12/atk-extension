//query selectors
let sectionTitle = document.querySelector('h1');
let atkContent = document.querySelector('#new-atk-title-here')
let content = document.querySelectorAll('.reviewable-detail__reviewables > .accordion-content-wrapper')

console.log(content)

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
    status: status,
    secondaryStatus: secondaryStatus ? secondaryStatus : null,
    modelNum: modelNum,
    price: price
  }
})
console.log(items)

// console.log(sectionTitle.textContent)
// atkContent.textContent = sectionTitle.textContent

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(items)
    sendResponse({content: sectionTitle.textContent});
  }
); 