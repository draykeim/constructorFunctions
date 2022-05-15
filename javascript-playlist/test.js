var links = document.getElementByTageName('a')

for (i = 0; i < links.length; i++){
    links[i].className = "Link " + i;
}