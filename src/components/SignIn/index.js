import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Buttons from './../forms/Button';
import './styles.scss';
import { signInWithGoogle, auth } from './../../firebase/utils';
import FormInput from './../forms/FormInput';
import AuthWrapper from './../AuthWrapper';

const initialState = {
   email: '',
   password: ''
};


class SignIn extends Component  {
   constructor(props){
      super(props);
      this.state = {
         ...initialState
      };
      this.handleChange = this.handleChange.bind(this);
   }

   handleSubmit = async e => {
      e.preventDefault();
      const {email, password} = this.state;

      try{
         await auth.signInWithEmailAndPassword(email, password);
         this.setState({
            ...initialState
         })
      } catch(err) {
         //console.log(err);
      }

   }

   handleChange(e) {
      const {name, value} = e.target;
      this.setState({
         [name]: value
      })
   }

   render() {
      const {email, password} = this.state;

      const configAuthWrapper = {
         headline: 'LogIn'
      }

      return (
        <AuthWrapper {...configAuthWrapper}>
               <div className="formWrap">

                  <form onSubmit={this.handleSubmit}>
                     <FormInput
                        type="email"
                        name="email"
                        value={email}
                        placeholder="Email"
                        handleChange={this.handleChange}
                     />

                     <FormInput
                        type="password"
                        name="password"
                        value={password}
                        placeholder="Password"
                        handleChange={this.handleChange}
                     />
                     <Buttons type="submit">LogIn</Buttons>

                     <div className="socialSignin">
                        <div className="row">
                           <Buttons onClick={signInWithGoogle}>Sign in whith  Google</Buttons>
                        </div>
                     </div>
                     <div className="links">
                        <Link to="recovery">Reset Password</Link>
                     </div>
                  </form>
               </div>
        </AuthWrapper>
      )
   }
}

export default SignIn;