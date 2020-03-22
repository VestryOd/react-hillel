import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Loading from "./Loading";
import "./UserCard.component.css";

class UserCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      isFetching: false,
      userId: ""
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.userId !== this.props.userId) {
      this.setState({ isFetching: true, userId: this.props.userId });
      const userId = this.props.userId;

      fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then(response => response.json())
        .then(json => {
          const user = json;
          console.log(user);
          this.setState({ user, isFetching: false });
        });
    }
  }

  render() {
    const { isFetching } = this.state;
    if (isFetching)
      return (
        <div className="user-card-wrapper">
          <Loading />
        </div>
      );
    const user = this.state.user;
    const address = this.state.user.address;
    const company = this.state.user.company;
    return (
      <div className="user-card-wrapper">
        <h3 className="user-info-header">Authors info</h3>
        <form noValidate autoComplete="off">
          <fieldset>
            <legend>General information</legend>
            <div className="form-section">
              <TextField
                id="outlined-read-only-input"
                label="Name"
                defaultValue={this.state.user === "" ? "" : user.name}
                InputProps={{
                  readOnly: true
                }}
                variant="outlined"
              />
              <TextField
                id="outlined-read-only-input"
                label="Username"
                defaultValue={this.state.user === "" ? "" : user.username}
                InputProps={{
                  readOnly: true
                }}
                variant="outlined"
              />
              <TextField
                id="outlined-read-only-input"
                label="Email"
                defaultValue={this.state.user === "" ? "" : user.email}
                InputProps={{
                  readOnly: true
                }}
                variant="outlined"
              />
              <TextField
                id="outlined-read-only-input"
                label="Phone"
                defaultValue={this.state.user === "" ? "" : user.phone}
                InputProps={{
                  readOnly: true
                }}
                variant="outlined"
              />
              <TextField
                id="outlined-read-only-input"
                label="Website"
                defaultValue={this.state.user === "" ? "" : user.website}
                InputProps={{
                  readOnly: true
                }}
                variant="outlined"
              />
            </div>
          </fieldset>

          <fieldset>
            <legend>Address</legend>
            <div className="form-section">
              <TextField
                id="filled-read-only-input"
                label="Street"
                defaultValue={this.state.user === "" ? "" : address.street}
                InputProps={{
                  readOnly: true
                }}
                variant="filled"
              />
              <TextField
                id="filled-read-only-input"
                label="Suit"
                defaultValue={this.state.user === "" ? "" : address.suit}
                InputProps={{
                  readOnly: true
                }}
                variant="filled"
              />
              <TextField
                id="filled-read-only-input"
                label="City"
                defaultValue={this.state.user === "" ? "" : address.city}
                InputProps={{
                  readOnly: true
                }}
                variant="filled"
              />
              <TextField
                id="filled-read-only-input"
                label="Zipcode"
                defaultValue={this.state.user === "" ? "" : address.zipcode}
                InputProps={{
                  readOnly: true
                }}
                variant="filled"
              />
              <TextField
                id="filled-read-only-input"
                label="Geo lat"
                defaultValue={this.state.user === "" ? "" : address.geo.lat}
                InputProps={{
                  readOnly: true
                }}
                variant="filled"
              />
              <TextField
                id="filled-read-only-input"
                label="Geo lng"
                defaultValue={this.state.user === "" ? "" : address.geo.lng}
                InputProps={{
                  readOnly: true
                }}
                variant="filled"
              />
            </div>
          </fieldset>

          <fieldset>
            <legend>Company</legend>
            <div className="form-section">
              <TextField
                id="filled-read-only-input"
                label="Company name"
                defaultValue={this.state.user === "" ? "" : company.name}
                InputProps={{
                  readOnly: true
                }}
                variant="filled"
              />
              <TextField
                id="filled-read-only-input"
                label="Company catchphrase"
                defaultValue={this.state.user === "" ? "" : company.catchPhrase}
                InputProps={{
                  readOnly: true
                }}
                variant="filled"
              />
              <TextField
                id="filled-read-only-input"
                label="Company activities"
                defaultValue={this.state.user === "" ? "" : company.bs}
                InputProps={{
                  readOnly: true
                }}
                variant="filled"
              />
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
}
export default UserCard;
