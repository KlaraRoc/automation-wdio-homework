import {
     ICO,
     clientName,
     address,
     substituteName,
     contactName,
     contactPhone,
     contactEmail,
     startDate,
     endDate
} from './fixtures.js'

const stavOtevreno = 'Objednávka akce';                     //status stranky pred prijmutim dat
const stavPrijato  = 'Děkujeme za objednávku';              //status stranky po prijmuti dat

import CommonMenu from '../pages/commonMenu.page';          //page object pattern obsahuje hlavne predpisy selectoru pro menu
import ObjednavkaPage from '../pages/objednavka.page';      //page object pattern obsahuje hlavne predpisy selectoru pro stranku objednavky



//-----------------------------------------------------------------------------------
// NOTE: zde by byly testy stejnych operaci na ruzdnych strankach, 
//       ale to zatim neumim, proto kod zopakuji
//
describe("Navigace memu na strance objednavka", () => {

    beforeEach(() => {
        browser.reloadSession();
        browser.url('/objednavka/pridat');
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



//-----------------------------------------------------------------------------------
describe('Objednávka pro MŠ/ZŠ', () => {

    beforeEach(() => {
        ObjednavkaPage.open();
    });

    
    it("Test vychozi nacteni stranky - predepsana pole se maji zobrazit", () => {
        
        expect(ObjednavkaPage.nadpis1).toBeDisplayed();

        expect(ObjednavkaPage.infoStav).toBeDisplayed();
        expect(ObjednavkaPage.infoStav).toHaveText(stavOtevreno);        

        expect(ObjednavkaPage.ico).toBeDisplayed();
        expect(ObjednavkaPage.odberatel).toBeDisplayed();
        expect(ObjednavkaPage.adresa).toBeDisplayed();
        expect(ObjednavkaPage.zastoupen).toBeDisplayed();
        expect(ObjednavkaPage.jmeno).toBeDisplayed();
        expect(ObjednavkaPage.telefon).toBeDisplayed();
        expect(ObjednavkaPage.email).toBeDisplayed();
        expect(ObjednavkaPage.termin1zacatek).toBeDisplayed();
        expect(ObjednavkaPage.termin1konec).toBeDisplayed();
        expect(ObjednavkaPage.termin2zacatek).toBeDisplayed();
        expect(ObjednavkaPage.termin2konec).toBeDisplayed();
        expect(ObjednavkaPage.termin3zacatek).toBeDisplayed();
        expect(ObjednavkaPage.termin3konec).toBeDisplayed();
        expect(ObjednavkaPage.sluzbaTabor).toBeDisplayed();
        expect(ObjednavkaPage.sluzbaSkola).toBeDisplayed();

        expect(ObjednavkaPage.taborKurz).not.toBeDisplayed(); 
        expect(ObjednavkaPage.taborPocetDeti).not.toBeDisplayed(); 
        expect(ObjednavkaPage.taborVeVeku).not.toBeDisplayed(); 
        expect(ObjednavkaPage.taborPocetPedagogu).not.toBeDisplayed();

        expect(ObjednavkaPage.skolaPocetDeti).not.toBeDisplayed(); 
        expect(ObjednavkaPage.skolaVeVeku).not.toBeDisplayed(); 
        expect(ObjednavkaPage.skolaPocetPedagogu).not.toBeDisplayed(); 
        expect(ObjednavkaPage.skolaNastup).not.toBeDisplayed(); 
        expect(ObjednavkaPage.skolaStravaZacina).not.toBeDisplayed();
        expect(ObjednavkaPage.skolaUkonceni).not.toBeDisplayed();
        expect(ObjednavkaPage.skolaStravaKonci).not.toBeDisplayed();

        expect(ObjednavkaPage.btnUlozitObjednavku).not.toBeDisplayed();     
    });

    
    it("Test klepnuti na 'Primestsky tabor' - predepsana pole se maji zobrazit", () => {

        // klepnuti na zalozku 'Primestsky tabor'
        ObjednavkaPage.sluzbaTabor.click();

        // co ma byt videt
        expect(ObjednavkaPage.taborKurz).toBeDisplayed(); 
        expect(ObjednavkaPage.taborPocetDeti).toBeDisplayed(); 
        expect(ObjednavkaPage.taborVeVeku).toBeDisplayed(); 
        expect(ObjednavkaPage.taborPocetPedagogu).toBeDisplayed();

        // co nema byt videt
        expect(ObjednavkaPage.skolaPocetDeti).not.toBeDisplayed(); 
        expect(ObjednavkaPage.skolaVeVeku).not.toBeDisplayed(); 
        expect(ObjednavkaPage.skolaPocetPedagogu).not.toBeDisplayed(); 
        expect(ObjednavkaPage.skolaNastup).not.toBeDisplayed(); 
        expect(ObjednavkaPage.skolaStravaZacina).not.toBeDisplayed();
        expect(ObjednavkaPage.skolaUkonceni).not.toBeDisplayed();
        expect(ObjednavkaPage.skolaStravaKonci).not.toBeDisplayed();
    }); 


    it("Test klepnuti na 'Skola v prirode' - predepsana pole se maji zobrazit" , () => {

        // klepnuti na zalozku 'Skola v prirode'
        ObjednavkaPage.sluzbaSkola.click();

        // co ma byt videt        
        expect(ObjednavkaPage.taborKurz).not.toBeDisplayed(); 
        expect(ObjednavkaPage.taborPocetDeti).not.toBeDisplayed(); 
        expect(ObjednavkaPage.taborVeVeku).not.toBeDisplayed(); 
        expect(ObjednavkaPage.taborPocetPedagogu).not.toBeDisplayed();

        // co nema byt videt
        expect(ObjednavkaPage.skolaPocetDeti).toBeDisplayed(); 
        expect(ObjednavkaPage.skolaVeVeku).toBeDisplayed(); 
        expect(ObjednavkaPage.skolaPocetPedagogu).toBeDisplayed(); 
        expect(ObjednavkaPage.skolaNastup).toBeDisplayed(); 
        expect(ObjednavkaPage.skolaStravaZacina).toBeDisplayed();
        expect(ObjednavkaPage.skolaUkonceni).toBeDisplayed();
        expect(ObjednavkaPage.skolaStravaKonci).toBeDisplayed();    
    });     


    it("Test vlozeni existujiciho ICO - ma precist nalezenou organizaci", () => {

        // vlozit ICO dle konstanty a stisknout Enter
        ObjednavkaPage.ico.setValue(ICO);
        browser.keys('Enter');
    
        // cekat az se nactou data - zobrazi se hlaseni o nacteni
        ObjednavkaPage.infoNacteni.waitForExist();
    
        // zkontrolovat zda se nacetlo spravne info z Aresu 
        expect(ObjednavkaPage.odberatel.getValue()).toBe(clientName);
        expect(ObjednavkaPage.adresa.getValue()).toBe(address);
    });


    it("Test vyplneni objednavky na tabor s korektnimi daty - ma se odeslat", () => {

        // vlozit ICO a stisknout Enter
        ObjednavkaPage.ico.setValue(ICO);
        browser.keys('Enter');

        // cekat az se nactou data - zobrazi se hlaseni o nacteni
        ObjednavkaPage.infoNacteni.waitForExist();

        // vlozit dalsi info a klepnout na primestsky tabor
        ObjednavkaPage.zastoupen.setValue(substituteName);
        ObjednavkaPage.jmeno.setValue(contactName);
        ObjednavkaPage.telefon.setValue(contactPhone);
        ObjednavkaPage.email.setValue(contactEmail);
        ObjednavkaPage.termin1zacatek.setValue(startDate);
        ObjednavkaPage.termin1konec.setValue(endDate);
        ObjednavkaPage.sluzbaTabor.click();

        // vlozit udaje to zobrazene casti primestskeho taboru
        ObjednavkaPage.taborPocetDeti.setValue(10);
        ObjednavkaPage.taborVeVeku.setValue(8);
        ObjednavkaPage.taborPocetPedagogu.setValue(2);

        // odeslat objednavku a cekat az se nactou data - zobrazi se hlaseni o nacteni
        ObjednavkaPage.btnUlozitObjednavku.click();
        ObjednavkaPage.infoNacteni.waitForExist();
        expect(ObjednavkaPage.infoStav).toHaveText(stavPrijato);
    });

    
    it("Test vyplneni objednavky na tabor s chybejicimi daty - nema se odeslat", () => {

        // klepnout na primestsky tabor
        ObjednavkaPage.sluzbaTabor.click();

        // odeslat objednavku a zkontrolovat ze se stav objednavky nezmenil - neodeslala se
        ObjednavkaPage.btnUlozitObjednavku.click();
        expect(ObjednavkaPage.infoStav).toHaveText(stavOtevreno);
    });

});
