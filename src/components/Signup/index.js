import React, {useState, useEffect} from 'react';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './styles.scss';
import FormInput from './../forms/FormInput';
import Button from './../forms/Button';
import AuthWrapper from './../AuthWrapper';

import { signUpUserStart } from './../../redux/User/user.actions';
//import { signUpUser, resetAllAuthForms } from './../../redux/User/user.actions';

const mapState = ({user}) => ({
   currentUser: user.currentUser,
   userErr: user.userErr
})


const Signup = props => {
   const {currentUser, userErr} = useSelector(mapState);
   const dispatch = useDispatch();
   const [displayName, setDisplayName] = useState('');
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [confirmPassword, setConfirmPassword] = useState('');
   const [errors, setErrors] = useState([]);

   const reset = () => {
      setDisplayName('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      setErrors('');
   }

   useEffect(() => {
      if (currentUser) {
         reset();
         //dispatch(resetAllAuthForms());
         props.history.push('/');
      }
   }, [currentUser]);

   useEffect(() => {
      if(Array.isArray(userErr) && userErr.length > 0) {
         setErrors(userErr);
      }
   }, [userErr]);


   const handleFormSubmit = e => {
      e.preventDefault();
      dispatch(signUpUserStart({
         displayName,
         email,
         password,
         confirmPassword
      }))

      // if(password !== confirmPassword) {
      //    const err = ['Passworrd Don\'t match'];
      //    setErrors(err);
      //    return;
      // }

      // try {
      //   const { user } = await auth.createUserWithEmailAndPassword(email, password);

      //    await handleUserProfile(user, {displayName});
      //    props.history.push('/');

      //    reset();
      // } catch(err) {
      //    //console.log(err)
      // }
   }

      const configAuthWrapper = {
         headline: 'Registration'
      }

       return (
        <AuthWrapper {...configAuthWrapper}>
      
               <div className="formWrap">
                  {errors.length > 0 && (
                     <ul>
                        {errors.map((err, index) =>{
                           return (
                              <li key={index}>{err}</li>
                           )
                        })}
                     </ul>
                  )}

                  <form onSubmit={handleFormSubmit}>

                     <FormInput
                        type="text"
                        name="displayName"
                        value={displayName}
                        placeholder="Full name"
                        handleChange={e => setDisplayName(e.target.value)}
                     />

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
                     <FormInput
                        type="password"
                        name="confirmPassword"
                        value={confirmPassword}
                        placeholder="Confirm Password"
                        handleChange={e => setConfirmPassword(e.target.value)}
                     />

                     <Button type="submit">Register</Button>

                  </form>

               </div>
         </AuthWrapper>
      );
}

export default withRouter(Signup);