
document.querySelector('.cross').style.display = 'none';
document.querySelector('.hamburger').addEventListener("click", () => {
    document.querySelector('.sidebar').classList.toggle('sidebarGo');
    if (document.querySelector('.sidebar').classList.contains('sidebarGo')) {
        document.querySelector('.ham').style.display = 'inline'
        document.querySelector('.cross').style.display = 'none'
    }
    else {
        document.querySelector('.ham').style.display = 'none'
        setTimeout(() => { document.querySelector('.cross').style.display = 'inline' }, 300);

    }
})

let button = document.querySelector(".btn1");
button.addEventListener("click", () => {
    const span = document.querySelector(".btn1");
    setTimeout(() => {
        button.style.transition = ".03s ease-in-out";
    }, 3000);
})