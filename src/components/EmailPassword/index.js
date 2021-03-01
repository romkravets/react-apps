import React, {useState, useEffect} from 'react';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import './styles.scss';

import AuthWrapper from './../AuthWrapper';
import FormInput from './../forms/FormInput';
import Button from './../forms/Button';

import { auth } from './../../firebase/utils';
import { resetPassword, resetAllAuthForms } from './../../redux/User/user.actions';

const mapState = ({user}) => ({
   resetPaswordSuccess: user.resetPaswordSuccess,
   resetPaswordError: user.resetPaswordError
})

const EmailPassword = props => {
   const {resetPaswordSuccess, resetPaswordError} = useSelector(mapState);
   const dispatch = useDispatch();
   const [email, setEmail] = useState('');
   const [errors, setErrors] = useState([]);

   useEffect(() => {
      if(resetPaswordSuccess) {
         dispatch(resetAllAuthForms());
         props.history.push('/login');
      }

   }, [resetPaswordSuccess]);

   useEffect(() => {
      if(Array.isArray(resetPaswordError) && resetPaswordError.length > 0) {
          setErrors(resetPaswordError);
      }
   }, [resetPaswordError]);
   
   const handleSubmit = e => {
      e.preventDefault();
      dispatch(resetPassword({email}));
   }

      const configAuthWrapper = {
         headline: 'Email Password'
      }

      return (
         <AuthWrapper {...configAuthWrapper}>
               <div className="formWrap">

               {errors.length > 0 && (
                  <ul>
                  <li>{errors.map((e, index) => {
                     return (
                        <li key={index}>{e}</li>
                     )
                  })}</li>
                  </ul>
               )}

                  <form onSubmit={handleSubmit}>
                     <FormInput
                        type="email"
                        name="email"
                        value={email}
                        placeholder="Email"
                        handleChange={e => setEmail(e.target.value)}
                     />
                     <Button type="submit">Email Password</Button>
                  </form>
               </div>
         </AuthWrapper>
      );
}

export default withRouter(EmailPassword);