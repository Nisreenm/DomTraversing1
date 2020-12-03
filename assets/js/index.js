//* Select the `header` that is the closest to the first `h1` heading.
// Give the `header` a solid border of 5px. ![alt text](assets/images/header.png "Header")
let h1 = document.querySelector('.heading');
let header = h1.closest('header')
header.style.border = '5px solid gray'



//select all `package-title`s and give the title's previous element a border.
// ![alt text](assets/images/packages.png "Packages")

 let info = document.querySelector('.info-package');
 let packageTitle = document.querySelectorAll('.package-title');
 if (info.matches('.info-package')) { 
    Array.from(packageTitle).forEach(el => 
        el.previousElementSibling.style.border = '3px solid red');
 }

//  Check if the label's class matches "mild". If so, 
//  give the label a yellow solid border. 
//  If the label's class matches "intense", give the label an orange solid border. 
//  If the class does not match either, give the label a red solid border. 
//  ![alt text](assets/images/packages.png "Packages")
let labels = document.getElementsByTagName('label');
Array.from(labels).forEach(label =>  {
    if (label.matches(".mild")) { 
        label.style.border = '2px solid yellow'
    } else if (label.matches(".intense")) {
    label.style.border = '2px solid orange'
    } else { 
    label.style.border = '2px solid red'} 
})
  
//Add all the children of the `.nav-list` to the footer's unordered list, `.site-map`.
// Note: the `.nav-list` should still contain its children. ![alt text](assets/images/footer.png "Footer")

let navList = document.querySelector('.nav-list');
let footerUl = document.querySelector('.site-map');
footerUl.innerHTML = navList.innerHTML;