chrome.runtime.onMessage.addListener( function(request, sender, sendResponse) {

    console.log('prepare to be invaded!');

    var jsElement = document.createElement('script');
    jsElement.innerHTML = request.data;
    document.getElementsByTagName('head')[0].appendChild(jsElement);

    var data = request.data || {};
    sendResponse({data: data, success: true});
});
