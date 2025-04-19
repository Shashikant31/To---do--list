// Helper function to show temporary toast (optional)
function showToast(message) {
    const toast = document.createElement('div');
    toast.textContent = message;
    toast.style.position = 'fixed';
    toast.style.bottom = '30px';
    toast.style.left = '50%';
    toast.style.transform = 'translateX(-50%)';
    toast.style.background = '#333';
    toast.style.color = '#fff';
    toast.style.padding = '10px 20px';
    toast.style.borderRadius = '10px';
    toast.style.boxShadow = '0 5px 15px rgba(0,0,0,0.2)';
    toast.style.opacity = '0';
    toast.style.transition = 'opacity 0.3s ease';
  
    document.body.appendChild(toast);
    requestAnimationFrame(() => (toast.style.opacity = '1'));
  
    setTimeout(() => {
      toast.style.opacity = '0';
      setTimeout(() => toast.remove(), 500);
    }, 2000);
  }
  
  // Add task function
  function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
  
    if (taskText === '') {
      alert('Please enter a task.');
      return;
    }
  
    const li = document.createElement('li');
    li.classList.add('fade-in');
  
    const span = document.createElement('span');
    span.textContent = taskText;
  
    // Toggle completed state
    span.onclick = function () {
      li.classList.toggle('completed');
      if (li.classList.contains('completed')) {
        span.style.color = '#999';
      } else {
        span.style.color = '#000';
      }
    };
  
    // Delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '✖';
    deleteBtn.onclick = function () {
      li.classList.add('fade-out');
      setTimeout(() => {
        li.remove();
        showToast('Task deleted');
      }, 300);
    };
  
    li.appendChild(span);
    li.appendChild(deleteBtn);
    document.getElementById('taskList').appendChild(li);
  
    taskInput.value = '';
    taskInput.focus();
  }
  
  // Allow Enter key to add task
  document.getElementById('taskInput').addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
      addTask();
    }
  });
  
  