import { setUpFullscreenToggler } from "./fullscreen/setUpFullscreenToggler";
import { setUpWindowResizeActioner } from "./sizes/setUpWindowResizeActioner";
import { setUpLightboxCloser } from "./main-component/closing/setUpLightboxCloser";
import { setUpScrollbarRecompensor } from "./scrollbar/setUpScrollbarRecompensor";
import { setUpSourcesPointerDown } from "./sources/pointering/down/setUpSourcesPointerDown";
import { setUpStageManager } from "./stage/setUpStageManager";
import { setUpSlideIndexChanger } from "./slide/setUpSlideIndexChanger";
import { setUpEventsDispatcher } from "./events/setUpEventsDispatcher";
import { setUpSlideChangeFacade } from "./slide/setUpSlideChangeFacade";
import { setUpClassFacade } from "./elements/setUpClassFacade";
import { setUpGlobalEventsController } from "./events/setUpGlobalEventsController";
import { setUpLightboxOpenActioner } from "./main-component/opening/setUpLightboxOpenActioner";
import { setUpSourceDisplayFacade } from "./sources/setUpSourceDisplayFacade";

export function setUpCore(fsLightbox) {
    setUpClassFacade(fsLightbox);
    setUpEventsDispatcher(fsLightbox);
    setUpFullscreenToggler(fsLightbox);
    setUpGlobalEventsController(fsLightbox);
    setUpLightboxCloser(fsLightbox);
    setUpLightboxOpenActioner(fsLightbox);
    setUpScrollbarRecompensor(fsLightbox);
    setUpSlideChangeFacade(fsLightbox);
    setUpSlideIndexChanger(fsLightbox);
    setUpSourcesPointerDown(fsLightbox);
    setUpSourceDisplayFacade(fsLightbox);
    setUpStageManager(fsLightbox);
    setUpWindowResizeActioner(fsLightbox);
}

