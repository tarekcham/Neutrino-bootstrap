import $ from 'jquery';
import productCardTemplate from './templates/product-card.html';


function mkProductCard(product) {
  const $card = $(productCardTemplate);
  $card.find('.card-title').text(product.name);
  $card.find('.card-img-top').attr('src', `${product.img}`);
  $card.find('.card-text').html(`<strong>Price</strong>: ${product.price}€`);
  return $card;
}


export default function mkProductsGrid(products) {
  const $containerEl = $('<div class="container-fluid"></div>');

  const $rowEl = $('<div class="row"></div>');
  $containerEl.append($rowEl);
  products
    .filter(product => product.highlight)
    .forEach((product) => {
      const $colEl = $('<div class="col-12 col-md-3"></div>');
      $colEl.append(mkProductCard(product));
      $rowEl.append($colEl);
    });

  return $containerEl;
}
