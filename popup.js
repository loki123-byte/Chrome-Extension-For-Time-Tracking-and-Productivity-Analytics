function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}m ${secs}s`;
}

function renderData(data) {
  const list = document.getElementById("data-list");
  list.innerHTML = "";
  Object.entries(data).forEach(([domain, time]) => {
    const li = document.createElement("li");
    li.textContent = `${domain}: ${formatTime(time)}`;
    list.appendChild(li);
  });
}

chrome.storage.local.get("timeData", (result) => {
  const data = result.timeData || {};
  renderData(data);
});

document.getElementById("reset").addEventListener("click", () => {
  chrome.storage.local.set({ timeData: {} }, () => {
    renderData({});
  });
});
