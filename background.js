let currentTabId = null;
let currentDomain = null;
let startTime = null;

function getDomain(url) {
  try {
    return new URL(url).hostname;
  } catch {
    return null;
  }
}

function saveTime(domain, duration) {
  chrome.storage.local.get("timeData", (result) => {
    let data = result.timeData || {};
    data[domain] = (data[domain] || 0) + duration;
    chrome.storage.local.set({ timeData: data });
  });
}

function handleTabSwitch(tabId) {
  if (startTime && currentDomain) {
    const duration = Math.floor((Date.now() - startTime) / 1000); // seconds
    saveTime(currentDomain, duration);
  }

  chrome.tabs.get(tabId, (tab) => {
    if (chrome.runtime.lastError || !tab.url) return;
    currentTabId = tabId;
    currentDomain = getDomain(tab.url);
    startTime = Date.now();
  });
}

chrome.tabs.onActivated.addListener((activeInfo) => {
  handleTabSwitch(activeInfo.tabId);
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (tab.active && changeInfo.status === "complete") {
    handleTabSwitch(tabId);
  }
});

chrome.windows.onFocusChanged.addListener((windowId) => {
  if (windowId === chrome.windows.WINDOW_ID_NONE) {
    if (startTime && currentDomain) {
      const duration = Math.floor((Date.now() - startTime) / 1000);
      saveTime(currentDomain, duration);
    }
    currentTabId = null;
    startTime = null;
    currentDomain = null;
  } else {
    chrome.tabs.query({ active: true, windowId }, (tabs) => {
      if (tabs.length > 0) {
        handleTabSwitch(tabs[0].id);
      }
    });
  }
});

chrome.runtime.onStartup.addListener(() => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    if (tabs.length > 0) {
      handleTabSwitch(tabs[0].id);
    }
  });
});
