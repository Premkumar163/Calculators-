

let store='' //1

let cal=(value)=>{ 
    let show=document.querySelector("#display")
    store=store+value
    show.innerHTML=store
}
let result=()=>{
    let show=document.querySelector("#display")
    store = eval(store)
    store.toString()
    show.innerHTML=store
}

let del=()=>{

    let show=document.querySelector("#display")
    store = store.slice(0,-1)
    show.innerHTML=store
}

let ac=()=>{

    let show=document.querySelector("#display")
    store = document.querySelector("#display").value=""
    show.innerHTML=store
}
