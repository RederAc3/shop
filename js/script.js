var prince = document.querySelectorAll('.prince');
var buy = document.querySelectorAll('.buy');
var title = document.querySelectorAll('.title');
var modal = document.getElementById('modal');

var getPrince = function() {
    for ( var i = 0; i <= buy.length; i++) {
        var i = i;
        buy[i].addEventListener('click', function() {
            // console.log(title[i].innerText);
            var addPrince = this.previousElementSibling.innerText.replace('zł', '');
            var addTitle = this.nextElementSibling.innerText.trim();

            console.log(this.previousElementSibling.innerText.replace('zł', ''));
            console.log(this.nextElementSibling.innerText.trim());

            modal.classList.remove('none');
            modal.innerHTML = '<div id="exit"></div>' + '<p>Dodano do koszyka: ' + addTitle + '</p>' + '<p> Cena: ' + addPrince + '</p>';
            
            var exitModal = document.getElementById('exit');

            exitModal.addEventListener('click', function() {
                modal.classList.add('none');
            });

        });
    }
};
getPrince();

