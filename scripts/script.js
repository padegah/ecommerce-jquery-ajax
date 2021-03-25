/*product 1 details*/
window.localStorage.setItem('pdt1-name','sweater');
window.localStorage.setItem('pdt1-description','long sweater');
window.localStorage.setItem('pdt1-price','120');
window.localStorage.setItem('pdt1-path1','assets/images/img1.PNG');
window.localStorage.setItem('pdt1-path2','assets/images/img1.PNG');
window.localStorage.setItem('pdt1-path3','assets/images/img1.PNG');
window.localStorage.setItem('pdt1-red','assets/images/img1.PNG');
window.localStorage.setItem('pdt1-blue','assets/images/img1.PNG');
window.localStorage.setItem('pdt1-black','assets/images/img1.PNG');

/*product 1 reviews*/
window.localStorage.setItem('pdt1-rev1','sweater');
window.localStorage.setItem('pdt1-rev2','sweater');z
window.localStorage.setItem('pdt1-rev3','sweater');
window.localStorage.setItem('pdt1-rev4','sweater');



/*product 2 details*/
window.localStorage.setItem('pdt2-name','sweater');
window.localStorage.setItem('pdt2-description','long sweater');
window.localStorage.setItem('pdt2-price','120');
window.localStorage.setItem('pdt2-path','assets/images/img2.PNG');

/*product 2 reviews*/
window.localStorage.setItem('pdt2-rev1','sweater');
window.localStorage.setItem('pdt2-rev2','sweater');
window.localStorage.setItem('pdt2-rev3','sweater');
window.localStorage.setItem('pdt2-rev4','sweater');



/*product 3 details*/
window.localStorage.setItem('pdt3-name','sweater');
window.localStorage.setItem('pdt3-description','long sweater');
window.localStorage.setItem('pdt3-price','120');
window.localStorage.setItem('pdt3-path','assets/images/img3.PNG');

/*product 3 reviews*/
window.localStorage.setItem('pdt3-rev1','sweater');
window.localStorage.setItem('pdt3-rev2','sweater');
window.localStorage.setItem('pdt3-rev3','sweater');
window.localStorage.setItem('pdt3-rev4','sweater');



/*product 4 details*/
window.localStorage.setItem('pdt4-name','sweater');
window.localStorage.setItem('pdt4-description','long sweater');
window.localStorage.setItem('pdt4-price','120');
window.localStorage.setItem('pdt4-path','assets/images/img4.PNG');

/*product 4 reviews*/
window.localStorage.setItem('pdt4-rev1','sweater');
window.localStorage.setItem('pdt4-rev2','sweater');
window.localStorage.setItem('pdt4-rev3','sweater');
window.localStorage.setItem('pdt4-rev4','sweater');



document.getElementById('pdt').src = window.localStorage.getItem('pdt1-path');
document.getElementById('description').innerHTML = window.localStorage.getItem('pdt1-description');
document.getElementById('price').innerHTML = window.localStorage.getItem('pdt1-price');


/*
Functions for counter
*/

var click = Number(document.getElementById('item-nbr').innerText)
var minimum = 1;

function decSize()
{
    click -= 1;
    if(click < 1)
    {
        click = minimum;
        return document.getElementById('item-nbr').innerText = minmum;
    }
    
    document.getElementById('item-nbr').innerText = click;
}

function incSize()
{
    click += 1;
    document.getElementById('item-nbr').innerText = click;
}