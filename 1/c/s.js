import{sfs}from"./sfs";import{setUpWindowResizeActioner}from"./sizes/setUpWindowResizeActioner";import{setUpLightboxCloser}from"./main-component/closing/setUpLightboxCloser";import{setUpScrollbarRecompensor}from"./scrollbar/setUpScrollbarRecompensor";import{setUpSourcesPointerDown}from"./sources/pointering/down/setUpSourcesPointerDown";import{st}from"./st";import{setUpSlideIndexChanger}from"./slide/setUpSlideIndexChanger";import{setUpEventsDispatcher}from"./events/setUpEventsDispatcher";import{setUpSlideChangeFacade}from"./slide/setUpSlideChangeFacade";import{setUpGlobalEventsController}from"./events/setUpGlobalEventsController";import{setUpSourceDisplayFacade}from"./sources/setUpSourceDisplayFacade";import{sws}from"./sws";export function s(o){setUpEventsDispatcher(o);sfs(o);setUpGlobalEventsController(o);setUpLightboxCloser(o);setUpScrollbarRecompensor(o);setUpSlideChangeFacade(o);setUpSlideIndexChanger(o);setUpSourcesPointerDown(o);setUpSourceDisplayFacade(o);st(o);setUpWindowResizeActioner(o);sws(o)}
