import CommonMenu from '../pages/commonMenu.page';              //page object pattern obsahuje hlavne predpisy selectoru pro menu


//-----------------------------------------------------------------------------------
// NOTE: zde by byly testy stejnych operaci na ruzdnych strankach, 
//       ale to zatim neumim, proto kod zopakuji
//
describe("Navigace memu na strance index", () => {

    beforeEach(() => {
        browser.reloadSession();
        browser.url('');
    });

    it("Test vychoziho stau - menu ma existovat", () => {

        // test ze jsou zobrazeny polozky menu a polozky submenu nejsou zobrazeny
        expect(CommonMenu.domu).toBeDisplayed();

        expect(CommonMenu.proUcitele).toBeDisplayed();
        expect(CommonMenu.proUcitele_Navod).not.toBeDisplayed();
        expect(CommonMenu.proUcitele_Objednavka).not.toBeDisplayed();

        expect(CommonMenu.proRodice).toBeDisplayed();
        expect(CommonMenu.proRodice_Navod).not.toBeDisplayed();
        expect(CommonMenu.proRodice_Prihlaska).not.toBeDisplayed();

        expect(CommonMenu.kontakt).toBeDisplayed();
    });

    it("Test klepnuti na menu 'Domu' - ma se prejit na stranku domu", () => {

        // click na menu 'Domu' a test ze se prepne na stranku https://team8-2022brno.herokuapp.com/
        CommonMenu.domu.click();
        expect(browser).toHaveUrl(browser.options.baseUrl);
    });

    it.skip("Test klepnuti na menu 'Pro Rodice/Navody' - ma se prejit na stranku pro-rodice", () => {
        // NOTE: pro uplnost, neni predmetem zadani, TBD
    });

    it.skip("Test klepnuti na menu 'Pro Rodice/Prihlasku' - ma se prejit na stranku prihlaseni", () => {
        // NOTE: pro uplnost, neni predmetem zadani, TBD
    });

    it("Test klepnuti na menu 'Pro ucitele/Objednavka' - ma se prejit na stranku objednavky", () => {

        // click na menu 'Pro ucitele' a test ze se zobrazi menu 'Pro ucitele/Objednavka'
        CommonMenu.proUcitele.click();
        expect(CommonMenu.proUcitele_Navod).toBeDisplayed();
        expect(CommonMenu.proUcitele_Objednavka).toBeDisplayed();  

        // click na submenu 'Objednavka' a test ze se prepne na stranku https://team8-2022brno.herokuapp.com/objednavka/pridat
        CommonMenu.proUcitele_Objednavka.click();
        expect(browser).toHaveUrlContaining('/objednavka/pridat');
    });

    it("Test klepnuti na menu 'Kontakt' - ma se prejit na stranku kontakt", () => {

        // click na menu 'Kontakt' a test ze se prepne na stranku https://team8-2022brno.herokuapp.com/kontakt
        CommonMenu.kontakt.click();
        expect(browser).toHaveUrlContaining('/kontakt');
    });
});
