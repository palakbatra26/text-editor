function execCommand(command) {
    document.execCommand(command, false, null);
  }
  
  function execCommandWithValue(command, value) {
    document.execCommand(command, false, value);
  }
  
  // Initialize editor with placeholder text
  document.getElementById('editor').addEventListener('focus', function() {
    if (this.textContent === 'Start typing here...') {
      this.textContent = '';
    }
  });
  document.getElementById('editor').addEventListener('blur', function() {
    if (this.textContent === '') {
      this.textContent = 'Start typing here...';
    }
  });
  