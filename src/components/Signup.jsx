import React from "react";
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

export default class Signup extends React.Component {
    state = {
        open: true,
    };

    onOpenModal = () => {
        this.setState({ open: true });
    };

    onCloseModal = () => {
        this.setState({ open: false });
    };

    render() {
        const { open } = this.state;
        return (
            <div>
                <Modal open={open} center>
                    <div className="signup">
                        <div class="container">
                            <form action="action_page.php">
                                <div class="form-container">
                                    <h1>Sign Up</h1>
                                    <p>Fill out your email to receive 15% off!</p>
                                    <label for="email"><b>Email: </b></label>
                                    <input type="text" placeholder="Enter Email" name="email" required />
                                    <div class="clearfix">
                                        <button type="button" class="cancelbtn">Cancel</button>
                                        <button type="submit" class="signupbtn" onClick={this.onCloseModal}>Sign Up</button>
                                    </div>
                                </div>
                            </form>
                        </div >
                    </div >
                </Modal>
            </div >
        );
    }
}
