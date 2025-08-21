import { LoginPageLocators } from '@src/pageLocators/loginPageLocators';

export class LoginPage{

     constructor(page) {
        this.page = page;
        this.loginPageLocators = LoginPageLocators(page);
       
    }

    async login(username, pass) {
        await this.loginPageLocators.userName.fill(username);
        await this.loginPageLocators.password.fill(pass);
        await this.loginPageLocators.loginBtn.click();
        return await this.page.url();
    
    }

    getErrMsgLocator() {
        return this.loginPageLocators.errorMsgLocator;
    }
    
}