import React, { Component } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  TextInput,
} from 'react-native';

import Title from './Components/Title';
import Form from './Components/Form';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      name: '',
      password: '',
      confirm_password: '',
      fullFilled: false,
    };
  }

  componentDidMount() {
    this.checkData();
  }

  checkData() {
    console.log(
      'Just Checking if component did mount called in the first time',
    );
  }

  async handleChangeEmail(email) {
    await this.setState({
      email: email,
    });
    this.checkFullFilled();
  }

  async handleChangeName(name) {
    await this.setState({
      name: name,
    });
    this.checkFullFilled();
  }

  async handleChangePassword(password) {
    await this.setState({
      password: password,
    });
    this.checkFullFilled();
  }

  async handleChangeConfirmPassword(confirm_password) {
    await this.setState({
      confirm_password: confirm_password,
    });
    this.checkFullFilled();
  }

  checkFullFilled() {
    const email_regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const name_regex = /^[a-zA-Z ]+$/;

    if (email_regex.test(this.state.email)) {
      if (name_regex.test(this.state.name)) {
        if (
          this.state.password !== '' &&
          this.state.password === this.state.confirm_password
        ) {
          this.setState({
            fullFilled: true,
          });
        } else {
          this.setState({
            fullFilled: false,
          });
        }
      } else {
        this.setState({
          fullFilled: false,
        });
      }
    } else {
      this.setState({
        fullFilled: false,
      });
    }
  }

  submitForm() {
    console.log('Submit Form');
    console.log('Your Email ', this.state.email);
    console.log('Your Name ', this.state.name);
    console.log('Your Password ', this.state.password);
    console.log('Your Confirm Password ', this.state.confirm_password);
    console.log('Fullfilled  ', this.state.fullFilled);
    this.setState({
      fullFilled: false,
    });
  }

  registerForm() {
    console.log('Press register button');
  }

  render() {
    return (
      <View style={styles.container}>
        <Title title={'Login'} />
        <Form
          email={this.state.email}
          name={this.state.name}
          password={this.state.password}
          confirm_password={this.state.confirm_password}
          handleChangeEmail={email => this.handleChangeEmail(email)}
          handleChangeName={name => this.handleChangeName(name)}
          handleChangePassword={password => this.handleChangePassword(password)}
          handleChangeConfirmPassword={confirm_password =>
            this.handleChangeConfirmPassword(confirm_password)
          }
        />
        <TouchableOpacity
          id={'login_button'}
          onPress={() => this.submitForm()}
          disabled={!this.state.fullFilled}
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            height: 45,
            alignSelf: 'stretch',
            justifyContent: 'center',
            backgroundColor: this.state.fullFilled ? '#38ba7d' : '#DDDDDD',
            borderWidth: 1,
            margin: 15,
          }}>
          <Text
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              alignSelf: 'center',
              color: this.state.fullFilled ? '#fff' : 'black',
              fontSize: 16,
              fontWeight: '600',
            }}>
            Submit
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          id={'register_button'}
          onPress={() => this.registerForm()}
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            height: 45,
            alignSelf: 'stretch',
            justifyContent: 'center',
            backgroundColor: '#38ba7d',
            borderWidth: 1,
            marginHorizontal: 15,
            marginVertical: 5,
          }}>
          <Text
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              alignSelf: 'center',
              color: '#fff',
              fontSize: 16,
              fontWeight: '600',
            }}>
            Register
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerTitle: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  containerTextInput: {
    borderWidth: 1,
    width: '90%',
    margin: 10,
  },
});
export default Login;
