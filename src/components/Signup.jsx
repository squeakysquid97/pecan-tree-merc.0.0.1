import React from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import axios from "axios";

export default class Signup extends React.Component {
  userData; 

  constructor(props) {
    super(props);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      open: true,
      email: "",
    };
  }

  onChangeEmail(e) {
    this.setState({ email: e.target.value });
  }

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  onSubmit(e) {
    const data = {
      user: this.state.user,
    }; 
  //console.log(res.status);
    e.preventDefault();
    this.onCloseModal();
    console.log(localStorage);
    axios
      .post("https://web103.dnchosting.com:2083/cpsess6523868015/3rdparty/phpMyAdmin/sql.php?server=1&db=teenfif4_PTMmailist&table=ptmmaillist&pos=0", data)
      //.then((res) => console.log(res))
      //.catch((err) => console.log(err));
  }

  componentDidMount() {
    this.userData = JSON.parse(localStorage.getItem("user"));

    if (localStorage.getItem("user")) {
      this.setState({
        email: this.userData.email,
      });
    } else {
      this.setState({
        email: "",
      });
    }
  }

  componentDidUpdate(nextProps, nextState) {
    localStorage.setItem("user", JSON.stringify(nextState));
  }

  render() {
    const { open } = this.state;
    return (
      <div>
        <Modal
          open={open}
          center
          onClose={this.onCloseModal}
          classNames={{
            overlay: "customOverlay",
            modal: "customModal",
          }}
        >
          <div className="signup">
            <div className="container">
              <form>
                <div className="form-container">
                  <h1>Sign Up</h1>
                  <p>Fill out your email to receive 15% off!</p>
                  <label htmlFor="email">
                    <b>Email: </b>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Email"
                    name="email"
                    value={this.state.email}
                    onChange={this.onChangeEmail}
                    required
                  />
                  <div className="clearfix">
                    <button type="button" className="cancelbtn">
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="signupbtn"
                      onClick={this.onSubmit}
                    >
                      Sign Up
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}
