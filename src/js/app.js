// ES Modulesという仕様
import $ from 'jquery';
import add from './module/add';
import tax from './module/tax';

const item1Price = 400;
const item2Price = 600;
const totalPrice = add(item1Price, item2Price);
const salesTax = 1.08;
const priceIncludeTax = tax(totalPrice, salesTax);

$('body').text(priceIncludeTax);
