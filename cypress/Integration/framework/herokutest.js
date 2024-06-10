import LoginPage from "../../support/PageObjects/heroku/Login"; 



describe('Heroku tests', () => {

    const login = new LoginPage(); // object of LoginPage class.

    // we create objects when we want to access the methods in that class.

    it('Login Test', () => {
        
        login.visiturl();// calling my methods from Page class.
        login.Login();
        

    });
});