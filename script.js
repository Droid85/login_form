init();

function init() {
    const ui = new VIEW();
    const http = new HTTP;

    ui.confirmBtnEl.addEventListener('click', onClickConfirmBtn);

    function onClickConfirmBtn(e) {
        let login = ui.userLogin.value.trim();
        let pass = ui.userPassword.value
        let userLogData = {
            login: login,
            password: pass,
        }
        if (login && pass) {
            http.send(ENVIRONMENT.USERS.getUsers, userLogData)
            .then(res => console.log('success', res))
            .catch(error => console.log('ERROR!', error))
            ui.clearForm();
        } else {
            alert('Enter Login and Password!');
            ui.clearForm();
        }
    }
}
