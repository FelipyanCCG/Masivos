import { useContext, useState, useEffect } from 'react';
import { MasivosContext } from '../../Context';

/**
 * Generates a custom hook for handling sign-in functionality.
 *
 * @return {Object} An object containing various functions and state variables related to sign-in.
 */
const useSignIn = () => {

    const context = useContext(MasivosContext);
    const [showPassword, setShowPassword] = useState(false);
    const [paramsJson, setParamsJson] = useState({});

    /**
     * Handles the change event for the email input field.
     *
     * @param {Event} e - The change event object.
     * @return {void} This function does not return anything.
     */
    const handleEmailChange = (e) => {
      context.setEmail(e.target.value);
    };
  
    /**
     * Handles the change event of the password input.
     *
     * @param {Event} e - The change event object.
     */
    const handlePasswordChange = (e) => {
      context.setPassword(e.target.value);
    };
  
    /**
     * Submits the form when triggered by an event.
     *
     * @param {Event} e - The event that triggered the form submission.
     * @return {void} This function does not return a value.
     */
    const handleSubmit = (e) => {
      e.preventDefault();
      context.setSubmitButtonClicked(true);
    };
  
    /**
     * Toggles the visibility of the password.
     *
     * @return {void} 
     */
    const toggleShowPassword = () => {
      setShowPassword(!showPassword);
    };
  
    useEffect(() => {
      const queryParams = new URLSearchParams(window.location.search) || {};
      
      queryParams.forEach((value, key) => {
        paramsJson[key] = value;
        setParamsJson(paramsJson);
      });
  
      if (queryParams.toString()) {
        context.setShowResetPassword(true);
      }
    }, []);
  
    /**
     * Reset the user's password.
     *
     * @param {} - No parameters required.
     * @return {} - No return value.
     */
    const handleResetPassword = () => {
      context.setShowResetPassword(true)
    }
  
    return { 
      handleEmailChange, 
      handlePasswordChange, 
      handleSubmit, 
      showPassword, 
      toggleShowPassword, 
      handleResetPassword, 
      paramsJson 
    }
  }

  export { useSignIn }