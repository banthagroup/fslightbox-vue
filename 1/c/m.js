import{gsw}from"./scrollbar/gsw";import{injectStylesIfNotInDom}from"./styles/injectStylesIfNotInDom";export function m(o){var{data,props:{openOnMount}}=o;injectStylesIfNotInDom();data.scrollbarWidth=gsw();if(openOnMount){o.i()}}
