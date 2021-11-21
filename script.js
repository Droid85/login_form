init();

function init() {
    const ui = new VIEW();

    ui.confirmBtnEl.addEventListener('click', onClickConfirmBtn)

    function onClickConfirmBtn(e) {
        console.log(e.target)
    }
}