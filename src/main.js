 // Theme toggling functionality
 const themeBtn = document.getElementById('theme-btn');
 themeBtn.addEventListener('click', () => {
     document.body.dataset.theme = document.body.dataset.theme === 'dark' ? 'light' : 'dark';
     themeBtn.innerHTML = document.body.dataset.theme === 'dark' ? 
         '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
 });

 // Location button functionality
 document.getElementById('location-btn').addEventListener('click', () => {
     if (navigator.geolocation) {
         navigator.geolocation.getCurrentPosition(
             position => {
                 alert(`Location accessed!\nLat: ${position.coords.latitude}\nLong: ${position.coords.longitude}`);
             },
             error => {
                 alert('Error accessing location: ' + error.message);
             }
         );
     } else {
         alert('Geolocation is not supported by this browser.');
     }
 });

 // Alerts button functionality
 const alertsBtn = document.getElementById('alerts-btn');
 let alertsEnabled = false;
 alertsBtn.addEventListener('click', () => {
     alertsEnabled = !alertsEnabled;
     alertsBtn.textContent = alertsEnabled ? 'Disable Alerts' : 'Enable Alerts';
 });

 // Reset button functionality
 document.getElementById('reset-btn').addEventListener('click', () => {
     document.querySelectorAll('.weather-value').forEach(el => {
         el.textContent = '--';
     });
 });