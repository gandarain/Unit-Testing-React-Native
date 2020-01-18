import React, { Component } from 'react';
import { StyleSheet, View, TextInput } from 'react-native';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.containerTextInput}>
          <TextInput
            id={'email'}
            placeholder={'Your Email'}
            value={this.props.email}
            onChangeText={email => this.props.handleChangeEmail(email)}
          />
        </View>
        <View style={styles.containerTextInput}>
          <TextInput
            id={'name'}
            placeholder={'Your Name'}
            value={this.props.name}
            onChangeText={name => this.props.handleChangeName(name)}
          />
        </View>
        <View style={styles.containerTextInput}>
          <TextInput
            id={'password'}
            placeholder={'Your Password'}
            value={this.props.password}
            onChangeText={password => this.props.handleChangePassword(password)}
          />
        </View>
        <View style={styles.containerTextInput}>
          <TextInput
            id={'confirm_password'}
            placeholder={'Confirm Your Password'}
            value={this.props.confirm_password}
            onChangeText={confirm_password =>
              this.props.handleChangeConfirmPassword(confirm_password)
            }
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '90%',
  },
  containerTextInput: {
    borderWidth: 1,
    width: '90%',
    margin: 10,
  },
});
export default Form;
