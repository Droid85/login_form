class VIEW {
    confirmBtnEl = document.querySelector('#login-btn');
    userLogin = document.querySelector('#login');
    userPassword = document.querySelector('#password');

    clearForm() {
        this.userLogin.value = '';
        this.userPassword.value = '';
    }
}
