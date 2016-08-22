// Saves options to chrome.storage
function save_options() {
  var url = document.getElementById('url').value;
  var key="prefSite";
  var obj = {};
  obj[key] = url;
  //this looks like
  //Object {
  //  'prefSite': url
  //}
  // var key = prefSite;
  chrome.storage.sync.set(obj, function() {
    console.log('Saved ', key, url);
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

document.getElementById('save').addEventListener('click',
    save_options);