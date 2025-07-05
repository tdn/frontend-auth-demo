import { helper } from '@ember/component/helper';

export default helper(function not([bool] /*, named*/) {
  return !bool;
});
