import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../contexts/AuthProvider';

const Register = () => {
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const [error, setError] = useState('');
    const [accepted, setAccepted] = useState(false);
    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);
        handleUpdateUserProfile(name, photoURL);
        form.reset();
        createUser(email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user);
                setError('');
            })
            .catch((error) => {
                console.error(error);
                setError(error.message);
            });

    }
    const handleAccepted = e => {
        setAccepted(e.target.checked);
    }
    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUserProfile(profile)
            .then(() => {
                // Profile updated!
                // ...
            }).catch((error) => {
                console.error(error);
            });
    }
    return (
        <Form onSubmit={handleRegister}>
            <h1 className='text-primary text-center mb-5'>Register</h1>
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Your Name</Form.Label>
                <Form.Control name='name' type="text" placeholder="Enter name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPhotoURL">
                <Form.Label>Upload Photo</Form.Label>
                <Form.Control name='photoURL' type="text" placeholder="Upload Photo" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name='email' type="email" placeholder="Enter email" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name='password' type="password" placeholder="Password" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check onClick={handleAccepted} type="checkbox" label="Check me out" />
            </Form.Group>
            <Button disabled={!accepted} variant="primary" type="submit">
                Register
            </Button>
            <Form.Text className="ms-3">
                {error}
            </Form.Text>
        </Form>
    );
};

export default Register;