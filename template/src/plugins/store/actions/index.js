
// import axios
import { http } from '@/plugins';

const FETCH_TEST_DATA = function ( { commit } ){
  return new Promise( ( resolve, reject ) => {
    return setTimeout( () => {
      commit('UPDATE_TIME', new Date().getTime());
      return resolve();
    } , 2000);
  });
}
// export actions
export default {
  FETCH_TEST_DATA,
};
