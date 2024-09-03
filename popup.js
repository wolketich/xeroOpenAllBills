document.getElementById('open-links').addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        function: openBillLinks
      });
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