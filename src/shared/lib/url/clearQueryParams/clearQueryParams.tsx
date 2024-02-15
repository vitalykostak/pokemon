export const clearQueryParams = () => {
    const urlWithoutSearchParams = window.location.origin + window.location.pathname
    window.history.replaceState({}, document.title, urlWithoutSearchParams)
}
