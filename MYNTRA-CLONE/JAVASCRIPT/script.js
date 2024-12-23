let bagItem;
onLoad();

function onLoad(){
  let bagItemstr = localStorage.getItem('bagItem');
  bagItem = bagItemstr?JSON.parse(bagItemstr):[];
  displayHomePages();
  displayBagIcon();
}

function addToBag(itemId){
  bagItem.push(itemId);
  localStorage.setItem('bagItem',JSON.stringify(bagItem));
  displayBagIcon();
}

function displayBagIcon(){
  let bagItemCountElement = document.querySelector('.bag-item-count');
  if(bagItem.length > 0){
    bagItemCountElement.style.visibility = 'visible';
    bagItemCountElement.innerText =  bagItem.length; 
  }else{
    bagItemCountElement.style.visibility = 'hidden';

  }
}

// this is fuction for display the items onthe home pages 
function displayHomePages(){
let itemContainer = document.querySelector(".container");

if (!itemContainer ){
  return;
}
let innerHtml = '';
items.forEach(item =>{
  innerHtml+=`
  <div class="img-container">

        <img class="img-item" src="${item.image}" alt="first-image">

        <div class="rating">
          ${item.rating.stars} ★
          ${item.rating.count}
        </div>

        <div class="company-name">
         ${item.company}
        </div>

        <div class="item-name">
         ${item.item_name}
        </div>

        <div class="price">
          <span class="current-price">${item.current_price}</span>
          <span class="original-price">${item.original_price}</span>
          <span class="discount">${item.discount_percentage}</span>
        </div>

        <button class="btn-add" onclick="addToBag(${item.id})" >Add to Bag</button>


</div>
  `
});
itemContainer.innerHTML = innerHtml;
}






