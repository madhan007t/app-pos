function filterOrders(status) {
     var cards = document.querySelectorAll('.order-card');
     
     cards.forEach(function(card) {
         if (status === 'all') {
             card.style.display = 'block';
         } else {
             if (card.getAttribute('data-status') === status) {
                 card.style.display = 'block';
             } else {
                 card.style.display = 'none';
             }
         }
     });
 
     // Update the active class on the navigation options
     var options = document.querySelectorAll('.nav-option');
     options.forEach(function(option) {
         if (option.innerText.toLowerCase() === status) {
             option.classList.add('active');
         } else {
             option.classList.remove('active');
         }
     });
 }
 