document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
});

document.addEventListener('keydown', function(event) {
    if (event.keyCode === 123) {
        event.preventDefault();
    }

    if (event.ctrlKey && event.shiftKey && event.keyCode === 73) {
        event.preventDefault();
    }

    if (event.ctrlKey && event.keyCode === 85) {
        event.preventDefault();
    }
});

document.querySelector('.search-form').addEventListener('submit', function(event) {
    event.preventDefault();

    var searchInput = document.querySelector('.search-input').value.trim();

    var urlPattern = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/;

    if (urlPattern.test(searchInput)) {
        if (!searchInput.startsWith('http://') && !searchInput.startsWith('https://')) {
            searchInput = 'http://' + searchInput;
        }
        window.location.href = searchInput;
    } else {
        this.submit(); 
    }
});

function updateDateTime() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var day = now.getDate();
    var month = now.toLocaleString('tr-TR', { month: 'long' });
    var year = now.getFullYear();

    if (minutes < 10) {
        minutes = '0' + minutes;
    }

    var timeString = hours + ':' + minutes;
    var dateString = day + ' ' + month + ' ' + year;

    document.getElementById('datetime').innerHTML = '<span class="time">' + timeString + '</span>' + '<span class="date" style="margin-left: 10px;">' + dateString + '</span>';
}

setInterval(updateDateTime, 1000);

updateDateTime();

window.addEventListener('load', function() {
    document.querySelector('.search-input').value = '';
});

document.getElementById('menu-button').addEventListener('click', function(event) {
    event.stopPropagation();
    var dropdownMenu = document.getElementById('dropdown-menu');
    dropdownMenu.classList.toggle('active');
});

document.addEventListener('click', function(event) {
    var dropdownMenu = document.getElementById('dropdown-menu');
    if (dropdownMenu.classList.contains('active')) {
        dropdownMenu.classList.remove('active');
    }
});

document.getElementById('dropdown-menu').addEventListener('click', function(event) {
    event.stopPropagation();
});
