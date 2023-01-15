// Pattern object page pro stranku objednavka

class ObjednavkaPage {

    // gettery selectoru
    get nadpis1()             { return $('body > div.main_wrap > header > div > h1'); }

    get ico()                 { return $('#ico'); }                 //hledani dle ID
    get odberatel()           { return $('#client'); }
    get adresa()              { return $('#address'); }
    get zastoupen()           { return $('#substitute'); }
    get jmeno()               { return $('#contact_name'); }
    get telefon()             { return $('#contact_tel'); }
    get email()               { return $('#contact_mail'); }
    get termin1zacatek()      { return $('#start_date_1'); }
    get termin1konec()        { return $('#end_date_1'); }
    get termin2zacatek()      { return $('#start_date_2'); }
    get termin2konec()        { return $('#end_date_2'); }
    get termin3zacatek()      { return $('#start_date_3'); }
    get termin3konec()        { return $('#end_date_3'); }

    get sluzbaTabor()         { return $('#nav-home-tab'); }
    get sluzbaSkola()         { return $('#nav-profile-tab'); }
    
    get taborKurz()           { return $('#camp-date_part'); }        
    get taborPocetDeti()      { return $('#camp-students'); } 
    get taborVeVeku()         { return $('#camp-age'); }
    get taborPocetPedagogu()  { return $('#camp-adults'); }

    get skolaPocetDeti()      { return $('#nature-students'); } 
    get skolaVeVeku()         { return $('#nature-age'); }
    get skolaPocetPedagogu()  { return $('#nature-adults'); }
    get skolaNastup()         { return $('#nature-start_time'); }
    get skolaStravaZacina()   { return $('#nature-start_food'); }  
    get skolaUkonceni()       { return $('#nature-end_time'); }
    get skolaStravaKonci()    { return $('#nature-end_food'); }

    get btnUlozitObjednavku() { return $('[name="camp"]'); }    //hledani dle jmena
    get infoNacteni()         { return $('.toast-message'); }   //hledani dle tridy
    get infoStav()            { return $('body > div > div > div > div > div > div > h3'); } 
    

    constructor() {
        this.url = '/objednavka/pridat';
    }
    
    open() {
        browser.reloadSession();
        browser.url(this.url);
    }
}

module.exports = new ObjednavkaPage();