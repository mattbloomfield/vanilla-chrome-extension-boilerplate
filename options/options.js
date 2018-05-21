function save_options() {
  var option = document.getElementById('option').checked;
  chrome.storage.sync.set({ //THIS IS THE WAY YOU SAVE STUFF TO THE USERS'S CHROME STORAGE
    option: option
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  chrome.storage.sync.get({
    option: {}
  }, function(items) {
    document.getElementById('option').checked = items.option;
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);
document.getElementById('Wrapper').addEventListener('change',
    save_options);