export function KeyboardController({ core: { lightboxCloser, fullscreenToggler, slideChangeFacade } }) {
    this.listener = (e) => {
        switch (e.keyCode) {
            case 27:
                lightboxCloser.close();
                break;
            case 37:
                slideChangeFacade.changeToPrevious();
                break;
            case 39:
                slideChangeFacade.changeToNext();
                break;
            case 122:
                e.preventDefault();
                fullscreenToggler.enterFullscreen();
                break;
        }
    };
}
