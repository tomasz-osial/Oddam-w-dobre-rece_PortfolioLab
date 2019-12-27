import React, {Component} from 'react';

import '../../scss/main.scss';
import decoration from '../../assets/Decoration.svg';
import clothes from '../../assets/Background-Contact-Form.jpg';
import facebook from '../../assets/Facebook.svg';
import instagram from '../../assets/Instagram.svg'

const HomeFooter = ()=>{
    return(
    <div className='footerContainer' id='contact'>
        <img src={clothes} alt="clothes" className='footerBackground' />
        <div className='formColumnContainer' >
            <p className='formTitle'>Skontaktuj się z nami</p>
            <img src={decoration} alt="decoration" className='footerDecoration'/>
            <div className='formContainer'>
                <Form />
            </div>
        </div>
        <div className='footerBar'>
            <div className='copyright'>
                Copyright by Coders Lab
            </div>
            <div className='mediaContainer'>
                <img src={facebook} alt="facebook"/>
                <img src={instagram} alt="instagram"/>
            </div>
        </div>
    </div>
    )
};

class Form extends Component {

    state= {
        name:'',
        email: '',
        message: '',
        isNameValid: true,
        isEmailValid: true,
        isMessageValid: true,
        isFormClicked: false
    };

   isFormValid = () => {
       const { name, email, message} = this.state;
       const isNameValid = name.length > 0 && name.indexOf(" ") === -1;
       const validEmailRegex =
           RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
       const isEmailValid = validEmailRegex.test(email);
       const isMessageValid = message.length > 120;
       this.setState({
           isNameValid, isEmailValid, isMessageValid
       });
       return isNameValid && isEmailValid && isMessageValid
   };
   onInputChange = event => {
       this.setState ({
       [event.target.name]: event.target.value
       })
   };
   onClickSubmit = event => {
       event.preventDefault();
       if (this.isFormValid()) {
            this.sendMessage()
       } else {
           console.log("Error");
       }
   };
   sendMessage = () => {
     const URL_ADDRESS = `https://fer-api.coderslab.pl/v1/portfolio/contact`;
     fetch(URL_ADDRESS, {method: 'POST',
     headers: {
         "Content-Type": "application/json"
     },
         body: JSON.stringify(this.state)
     })
         .then(resp => resp.json())
         .then(resp => {
             console.log(resp);
             if(resp.status === 'success') {
                 this.setState({
                     isFormClicked: true
                 })
             }
         })
   };

    render() {
        const { isNameValid, isEmailValid, isMessageValid, isFormClicked } = this.state;
        return (
            <>
            {isFormClicked &&
            <div className='messageSend'>
                Wiadomość została wysłana!<br/>Wkrótce się skontaktujemy.
            </div>}
                <form
                    className='contactForm'>
                    <label>
                        Wpisz swoje imię<br/>
                        <input
                            name='name'
                            type="text"
                            placeholder='Twoje imię'
                            size='25'
                            onChange={this.onInputChange}
                        /><br/>
                        {!isNameValid && <span className='errorInfo'>
                            Podane imię jest nieprawidłowe!
                        </span>}
                    </label>
                    <label>
                        Wpisz swój email<br/>
                        <input
                            name='email'
                            type="text"
                            placeholder='Twój email np. xyz@abc.pl'
                            size='25'
                            onChange={this.onInputChange}
                        /><br/>
                        {!isEmailValid && <span className='errorInfo'>
                            Podany email jest nieprawidłowy!
                        </span>}
                    </label>
                    <label>
                        Wpisz swoją wiadomość
                        <textarea
                            name='message'
                            rows="4" cols="54"
                            placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Nulla varius placerat dolor. Sed venenatis ex aliquam dolor imperdiet placerat.
                            Curabitur ultricies sollicitudin sapien in bibendum.'
                            onChange={this.onInputChange}
                        /><br/>
                        {!isMessageValid && <span className='errorInfo'>
                            Wiadomość musi mieć conajmniej 120 znaków!
                        </span>}
                    </label>
                    <div className='submitContainer'>
                        <div className='submitBtn'
                             onClick={this.onClickSubmit}>
                            Wyślij
                        </div>
                    </div>
                </form>
            </>
        )
    }
}

export default HomeFooter;