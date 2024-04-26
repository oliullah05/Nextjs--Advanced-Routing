export default async function wait(miliseconds){
return new Promise(resolve=>{
    setTimeout(() => {
        resolve()
    }, miliseconds);
})
}