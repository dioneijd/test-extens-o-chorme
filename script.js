

document.addEventListener('DOMContentLoaded', function(){

    document.querySelector('#btn').addEventListener('click', function(){

        const p = document.querySelector('#resultado')
        const input = document.querySelector('#texto')
        
        p.innerHTML = input.value

    })
})