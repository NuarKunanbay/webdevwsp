// get fin element
const fin = document.getElementsByClassName('fin')[0]
window.onload = () => {
    console.log(fin);
    console.log(fin.style.position);
}

fin.addEventListener('mouseover', () => {
    console.log(fin.style.position)
})