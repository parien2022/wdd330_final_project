import {creatHeaderAndFooter} from './Functions.mjs';
import {renderWishListData} from './WishItems.mjs';

const header = '/wdd330_final_project/snippets/header.html';
const footer = '/wdd330_final_project/snippets/footer.html';

creatHeaderAndFooter(header, footer);

//This is for displaying wish list
renderWishListData("wishList", ".movieWishListContainer");


