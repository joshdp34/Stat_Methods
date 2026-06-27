document.addEventListener('click', (event) => {
      if (event.target.tagName === 'BLANK') {
        event.target.classList.add('clicked'); 
      }
    });