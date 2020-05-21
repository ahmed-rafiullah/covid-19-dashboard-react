export function delay(ms){
    return new Promise((resolve) => {
        setTimeout(() => resolve(1),ms)
    })
}