class LoginPage{

     /**
   * @param {import('@playwright/test').Page} page
   */
    constructor(page) {
        this.page = page;
        this.userName = page.locator('#user-name');
        this.password = page.locator('#password');
        this.loginBtn = page.locator('#login-button');
        this.error = page.locator('h3');
    }

    async login(username, pass) {
        await this.userName.fill(username);
        await this.password.fill(pass);
        await this.loginBtn.click();
    }

    async getErrMsg() {
        let errMsg = await this.error.textContent();
        return errMsg;
    }
}

module.exports = {LoginPage};