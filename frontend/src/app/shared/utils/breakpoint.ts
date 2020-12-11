export function isSmallBreakpoint():boolean {
    return window.innerWidth<768;
}

export function isMediumOrLargeBreakpoint(): boolean {
    return window.innerWidth>=768 && window.innerWidth<1280;
}