import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login';
import renderer from 'react-test-renderer';

describe('Login', () => {
  const wrapper = shallow(<Login />);
  const instaceOf = wrapper.instance();

  it('renders correctly', () => {
    const rendered = renderer.create(<Login />).toJSON();
    expect(rendered).toBeTruthy();
  });

  it('should check `componentDidMount()`', () => {
    jest.spyOn(instaceOf, 'checkData');
    instaceOf.componentDidMount();
    expect(instaceOf.checkData).toHaveBeenCalledTimes(1);
  });

  it('should render the Title Component', () => {
    expect(wrapper.find('Title')).toHaveLength(1);
  });

  it('should render the Title Props', () => {
    expect(wrapper.find('Title').props()).toEqual({
      title: 'Login',
    });
  });

  it('should render the Form Props', () => {
    expect(wrapper.find('Form').props()).toEqual({
      email: instaceOf.state.email,
      name: instaceOf.state.name,
      password: instaceOf.state.password,
      confirm_password: instaceOf.state.confirm_password,
      handleChangeEmail: expect.any(Function),
      handleChangeName: expect.any(Function),
      handleChangePassword: expect.any(Function),
      handleChangeConfirmPassword: expect.any(Function),
    });
  });

  // it('should render the Email', () => {
  //   let form = wrapper.find('Form');
  //   expect(form.find('[id="email"]')).toHaveLength(1);
  // });

  // it('should render the Text Element', () => {
  //   expect(wrapper.find('Text')).toHaveLength(2);
  // });

  // it('should render the Text Input Element', () => {
  //   expect(wrapper.find('TextInput')).toHaveLength(4);
  // });

  it('should render the TouchableOpacity Element', () => {
    expect(wrapper.find('TouchableOpacity')).toHaveLength(2);
  });

  // it('should render text input email', () => {
  //   expect(wrapper.find('[id="email"]')).toHaveLength(1);
  // });

  // it('should render text input name', () => {
  //   expect(wrapper.find('[id="name"]')).toHaveLength(1);
  // });

  // it('should render text input password', () => {
  //   expect(wrapper.find('[id="password"]')).toHaveLength(1);
  // });

  // it('should render text input confirm password', () => {
  //   expect(wrapper.find('[id="confirm_password"]')).toHaveLength(1);
  // });

  it('email should like email format', async () => {
    await instaceOf.handleChangeEmail('gandarainpanjaitan@gmail.com');
    expect(instaceOf.state.email).toEqual('gandarainpanjaitan@gmail.com');
  });

  it('name should not have special character', async () => {
    await instaceOf.handleChangeName('Ganda');
    expect(instaceOf.state.name).toEqual('Ganda');
  });

  it('should change state if password is entered', async () => {
    await instaceOf.handleChangePassword('panjaitan12');
    expect(instaceOf.state.password).toEqual('panjaitan12');
  });

  it('should change state if confirm_password is entered', async () => {
    await instaceOf.handleChangeConfirmPassword('panjaitan12');
    expect(instaceOf.state.confirm_password).toEqual(instaceOf.state.password);
  });

  it('should set full filled is true if all state is ready', () => {
    expect(instaceOf.state.fullFilled).toEqual(true);
  });

  it('calls the submitForm method', () => {
    const spy = jest.spyOn(instaceOf, 'submitForm');

    instaceOf.forceUpdate();
    wrapper
      .find('[id="login_button"]')
      .first()
      .props()
      .onPress();

    expect(spy).toHaveBeenCalledTimes(1);
    expect(instaceOf.state.fullFilled).toEqual(false);
  });

  it('calls the registerForm method', () => {
    const spy = jest.spyOn(instaceOf, 'registerForm');

    instaceOf.forceUpdate();
    wrapper
      .find('[id="register_button"]')
      .first()
      .props()
      .onPress();

    expect(spy).toHaveBeenCalledTimes(1);
  });
});
