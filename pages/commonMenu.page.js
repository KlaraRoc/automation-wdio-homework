// Pattern object page pro spolecne casti stranek (menu, ...)

class CommonMenu {

    // gettery selectoru
    get domu()                  { return $('#navbarSupportedContent > div:nth-child(1) > a:nth-child(1)'); }
    get proRodice()             { return $('#navbarSupportedContent > div:nth-child(1) > div:nth-child(2) > a'); }
    get proRodice_Navod()       { return $('#navbarSupportedContent > div:nth-child(1) > div.nav-item.dropdown.show > div > a:nth-child(1)'); }
    get proRodice_Prihlaska()   { return $('#navbarSupportedContent > div:nth-child(1) > div.nav-item.dropdown.show > div > a:nth-child(2)'); }
    get proUcitele()            { return $('#navbarSupportedContent > div:nth-child(1) > div:nth-child(3) > a'); }
    get proUcitele_Navod()      { return $('#navbarSupportedContent > div:nth-child(1) > div.nav-item.dropdown.show > div > a:nth-child(1)'); }
    get proUcitele_Objednavka() { return $('#navbarSupportedContent > div:nth-child(1) > div.nav-item.dropdown.show > div > a:nth-child(2)'); }
    get kontakt()               { return $('#navbarSupportedContent > div:nth-child(1) > a:nth-child(4)'); }
}

module.exports = new CommonMenu();