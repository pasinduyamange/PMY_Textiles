import { environment } from "src/environments/environment";

const BASE_URL = environment.production? '' : 'http://localhost:5000';

export const ALLITEMS_URL = BASE_URL + '/api/allitems';
export const ALLITEMS_TAGS_URL = ALLITEMS_URL + '/tags';
export const ALLITEMS_BY_SEARCH_URL = ALLITEMS_URL + '/search/';
export const ALLITEMS_BY_TAG_URL = ALLITEMS_URL + '/tag/';
export const ALLITEMS_BY_ID_URL = ALLITEMS_URL + '/';


export const USER_LOGIN_URL = BASE_URL + '/api/users/login';
export const USER_REGISTER_URL = BASE_URL + '/api/users/register';
export const USERS_URL = BASE_URL + '/api/users';


export const ORDERS_URL = BASE_URL + '/api/orders';
export const ORDERS_LIST = BASE_URL + '/api/orderlist';
export const ORDER_CREATE_URL = ORDERS_URL + '/create';
export const ORDER_NEW_FOR_CURRENT_USER_URL = ORDERS_URL + '/newOrderForCurrentUser';
export const ORDER_PAY_URL = ORDERS_URL + '/pay';
export const ORDER_TRACK_URL = ORDERS_URL + '/track/';

export const ITEM_ADD_URL = BASE_URL + '/api/items/additem';
export const ITEM_UPDATE_URL = BASE_URL + '/api/items/updateitem';
export const ITEMS_URL = BASE_URL + '/api/items';
export const ITEMS_BY_SEARCH_URL = ITEMS_URL + '/search/';
export const ITEM_BY_ID_URL = ITEMS_URL + '/';
export const QUESTIONS_URL = BASE_URL + '/api/questions';

export const SELLERS_URL = BASE_URL + '/api/sellers';

export const QUESTION_ADD_URL = BASE_URL + '/api/questions/addquestion';
