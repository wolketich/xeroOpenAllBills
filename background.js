chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: openBillLinks
    });
  });
  
  function openBillLinks() {
    const links = document.querySelectorAll('.xui-readonlytablerow a');
    links.forEach(link => {
      if (link.textContent.trim() === 'Bill') {
        window.open(link.href, '_blank');
      }
    });
  }