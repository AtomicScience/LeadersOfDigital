const htmlCode = cashForm.innerHTML

elem.onclick = () => {
    const newElem = document.createElement("div");
    newElem.innerHTML = htmlCode;
    formcash.appendChild(newElem);
}

elemback.onclick = () => {
    const formcashElements = $($(formcash).children())
    const lastElement = formcashElements.length - 1
    formcash.removeChild(formcashElements[lastElement])
}





const htmlCode1 = cashForm1.innerHTML

elem1.onclick = () => {
    const newElem = document.createElement("div");
    newElem.innerHTML = htmlCode1;
    formcash1.appendChild(newElem);
}

elemback1.onclick = () => {
    const formcashElements = $($(formcash1).children())
    const lastElement = formcashElements.length - 1
    formcash1.removeChild(formcashElements[lastElement])
}





const htmlCode2 = cashForm2.innerHTML

elem2.onclick = () => {
    const newElem = document.createElement("div");
    newElem.innerHTML = htmlCode2;
    formcash2.appendChild(newElem);
}

elemback2.onclick = () => {
    const formcashElements = $($(formcash2).children())
    const lastElement = formcashElements.length - 1
    formcash2.removeChild(formcashElements[lastElement])
}





const htmlCode3 = cashForm3.innerHTML

elem3.onclick = () => {
    const newElem = document.createElement("div");
    newElem.innerHTML = htmlCode3;
    formcash3.appendChild(newElem);
}

elemback3.onclick = () => {
    const formcashElements = $($(formcash3).children())
    const lastElement = formcashElements.length - 1
    formcash3.removeChild(formcashElements[lastElement])
}