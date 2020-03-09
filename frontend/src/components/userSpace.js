import {extendObservable} from 'mobx';

class userSpace{
    constructor(){

        extendObservable(this,{
loading:true,
isLoggedIn:false,
username: ''
        })
    }
}
export default new userSpace();