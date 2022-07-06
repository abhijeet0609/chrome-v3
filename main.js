window.addEventListener('load', function () {
    const iframeEl = document.createElement('iframe');
    let src = chrome.runtime.getURL('sandbox.html');
    iframeEl.setAttribute('src', src);
    iframeEl.setAttribute('id', "sandbox1");
    iframeEl.setAttribute('sandbox', "allow-scripts");
    iframeEl.setAttribute("style", "margin: 0 auto;")

    let ele = document.querySelector(".o3j99.LLD4me.yr19Zb.LS8OJ");
    document.querySelector('div.L3eUgb').insertBefore(iframeEl, ele.nextSibling)
});