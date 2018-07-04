document.addEventListener('DOMContentLoaded', function() {
    var button = document.getElementById('enable');
    button.addEventListener('click', function () {
        var request = new XMLHttpRequest();
        request.open('GET', 'https://raw.githubusercontent.com/morgompx/smartfireJS/master/smartfire.js');
        request.responseType = 'text';

        request.onload = function() {
            chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
                chrome.tabs.sendMessage(tabs[0].id, {data: request.response}, function(response) {
                    document.getElementById('enable').innerText = 'Enabled';
                    document.getElementById('enable').setAttribute('disabled', 'disabled');
                    document.getElementById('enable').classList.remove('btn-primary');
                    document.getElementById('enable').classList.add('btn-success');
                });
            });
        };
        request.send();

        
    });
});

