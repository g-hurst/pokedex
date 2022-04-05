function PokiApiHook(url) {
    function handleError(error) {
        console.log(error)
        return null
    }

    return fetch(url).then((response) => response.json()).then((poki) => { return poki; }).catch(handleError);
}

export default PokiApiHook