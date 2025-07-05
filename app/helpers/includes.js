import { helper } from '@ember/component/helper';

export default helper(function includes([list, item] /*, named*/) {
  if( list ) {
    return [...list].find( (li) => li.id === item.id ) && true;
  } else {
    return false;
  }
});
