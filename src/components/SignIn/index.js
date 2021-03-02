import React, { useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Buttons from './../forms/Button';

import './styles.scss';
// import { signInWithGoogle } from './../../firebase/utils';
import { emailSignInStart, signInWithGoogle, resetAllAuthForms, setCurrentUser } from './../../redux/User/user.actions';
import FormInput from './../forms/FormInput';
import AuthWrapper from './../AuthWrapper';

const mapState = ({user}) => ({
   currentUser: user.currentUser
})


const SignIn = props =>  {
   const {currentUser} = useSelector(mapState);
   const dispatch = useDispatch();
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('')

   useEffect(() => {
      if(currentUser) {
         resetForm();
         //dispatch(resetAllAuthForms())
         props.history.push('/');
      }
   }, [currentUser]);

   const resetForm = () => {
      setEmail('');
      setPassword('');
   }

   const handleSubmit = e => {
      e.preventDefault();
      dispatch(emailSignInStart({email, password}));

   }

   const handleGoogleSignIn = () => {
      dispatch(signInWithGoogle())
   }

      const configAuthWrapper = {
         headline: 'LogIn'
      }

      return (
        <AuthWrapper {...configAuthWrapper}>
               <div className="formWrap">

                  <form onSubmit={handleSubmit}>
                     <FormInput
                        type="email"
                        name="email"
                        value={email}
                        placeholder="Email"
                        handleChange={e => setEmail(e.target.value)}
                     />

                     <FormInput
                        type="password"
                        name="password"
                        value={password}
                        placeholder="Password"
                        handleChange={e => setPassword(e.target.value)}
                     />
                     <Buttons type="submit">LogIn</Buttons>

                     <div className="socialSignin">
                        <div className="row">
                           <Buttons onClick={handleGoogleSignIn}>Sign in whith  Google</Buttons>
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

export default withRouter(SignIn);