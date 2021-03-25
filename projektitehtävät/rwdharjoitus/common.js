// Hakee id:llä oikeat elementit html-tiedostosta 
var header = document.querySelector('header');
var menuBtn = document.getElementById('menuBtn');
var menu = document.getElementById('menu');
var closeMenuBtn = document.getElementById('closeMenuBtn');
var modal = document.getElementById('modal');
var openModalBtn = document.getElementById('openModalBtn');
var closeModalBtn = document.getElementById('closeModalBtn');
var lastScrollTop = 0;

// Lisätään menu-buttonille class 'show', jotta kun nappulaa klikkaa niin se tuo navigointikentän näkyviin
menuBtn.onclick = function() {
    menu.classList.add('show');
    this.classList.add('hide'); // this sijasta voi myös käyttää menu Btn
    this.blur(); // poistaa/piilottaa focus rinkulan ympäriltä kun nappulaa klikkaa
};

// Kun Close menu-nappulaa painetaan, navigaatiokenttä sulkeutuu
closeMenuBtn.onclick = function() {
    menu.classList.remove('show');
    menuBtn.classList.remove('hide'); // menuBtn tulee takaisin näkyviin kun klikkaa Sulje menu-nappulaa
};

// Avaa modaali-nappulan toiminto
openModalBtn.onclick = function() {
    modal.classList.add('show');
};


// Sulje modaali-nappulan toiminto
closeModalBtn.onclick = function() {
    modal.classList.remove('show');
};

// scrollaaminen
window.onscroll = function() {
    // console.log('scrollTop: ' + document.documentElement.scrollTop);
    var currentScrollTop = document.documentElement.scrollTop;
    var threshold = 150;

    // tarkista scrollauksen suunta
    if (currentScrollTop > lastScrollTop && currentScrollTop > threshold) {
        header.classList.add('hide'); // header menee piiloon alaspäin scrollatessa ja kun threshold on ohitettu
    } else if (currentScrollTop < lastScrollTop) {
        header.classList.add('condensed');
        header.classList.remove('hide'); // header tulee näkyviin ylöspäin scrollatessa
    }

    // kun scrollataan sivua tarpeeksi ylös niin logo tulee myös takaisin näkyviin sivun yläreunaan
    if (currentScrollTop <= threshold) {
        header.classList.remove('condensed');
    }

    // updeittaa lastScrollTopin tämänhetkiseen scrollausarvoon
    lastScrollTop = currentScrollTop;
};