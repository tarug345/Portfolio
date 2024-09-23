let footer = document.getElementById("footer");

let h6 = document.createElement('h6');
h6.textContent = 'tariqzinn10@gmail.com';
h6.style.fontFamily='Verdana, Geneva, Tahoma, sans-serif';
h6.style.color = 'white';

footer.appendChild(h6.textContent);
footer.style.flexDirection = 'row-reverse';
footer.style.alignItems = 'center';
footer.style.justifyContent = 'space-around';