import React from 'react';
import './signin.scss';
import FromInput from '../from-input/from-input';
import CustomBtn from '../../components/customBtn/customBtn';
import { signInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        }
    }
    submitHandler = (event) => {
        console.log('bbbbbbbbb')
        event.preventDefault();
        this.setState({
            email: '',
            password: ''
        })

    }
    handlerChange = (event) => {
        console.log(event.target.name, '========ffffffffff', event)
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    render() {
        return (
            <div className='sign-in'>
                <h2>I allready have a account</h2>
                <span>Sign with with your creds</span>
                <form onSubmit={this.submitHandler}>
                    <FromInput type='email'
                        label='email'
                        name="email"
                        handlerChange={this.handlerChange}
                        value={this.state.email}
                        required />
                    <FromInput
                        label='password'
                        type='password'
                        name='password'
                        handlerChange={this.handlerChange}
                        value={this.state.password}
                        required />
                    <div className='buttons'>
                        <CustomBtn type='submit' value='Submit form'>SignIn</CustomBtn>
                        <CustomBtn isGoogleSignIn onClick={signInWithGoogle} value='Submit form'>SignIn</CustomBtn>
                    </div>

                </form>



            </div>
        )
    }
}

export default SignIn;