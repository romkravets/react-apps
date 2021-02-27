import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Buttons from './../forms/Button';
import './styles.scss';
import { signInWithGoogle } from './../../firebase/utils';


class SignIn extends Component  {

   handleSubmit = async e => {
      e.preventDefault();
   }

   render() {
      return (
        <div className="signin">
            <div className="wrap">
               <h2>LogIn</h2>
               <div className="formWrap">
                  <form action="" onSubmit={this.handleSubmit}>
                     <div className="socialSignin">
                        <div className="row">
                           <Buttons onClick={signInWithGoogle}>Sign in whith  Google</Buttons>
                        </div>
                     </div>
                  </form>
               </div>
            </div>
        </div>
      )
   }
}

export default SignIn;