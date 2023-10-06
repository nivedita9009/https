const link = document.getElementById('link')
const btn = document.getElementById('btn')


btn.addEventListener('click', async()=>{
    const response = await fetch('http://localhost:5000/api/get')
    const data = await response.json()
    link.innerHTML = data.message
    console.log(data.message)
})