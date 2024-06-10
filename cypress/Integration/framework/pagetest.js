import Login_po from "../../support/PageObjects/orangehrm/loginPage";
import Link_po from "../../support/PageObjects/orangehrm/link_po";
import Logout_po from "../../support/PageObjects/orangehrm/logout_po";
import { it } from "mocha";


describe('', () => {

    const login_po = new Login_po();
    const link_po = new Link_po();
    const logout_po = new Logout_po();

    it('', () => {

        login_po.EnterURl();
        login_po.Login();
        link_po.linkclick('Admin');
        logout_po.logout();


    });



    it('', () => {
        
    });
});