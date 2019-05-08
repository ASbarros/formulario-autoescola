function createDiv(_pad, _class, _id) {
    let div = document.createElement('div');
    div.setAttribute('class', 'div');
    div.setAttribute('class', _class);
    div.setAttribute('id', _id);
    document.getElementById(_pad).appendChild(div);
}
function createTitle(){

}
document.body.onload = () => {
    createTitle();
}