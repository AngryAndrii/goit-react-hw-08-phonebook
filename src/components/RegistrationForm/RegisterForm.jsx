import { useDispatch } from 'react-redux';
import { signup } from 'redux/Auth/operations';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const newUser = {
      name: event.target.name.value,
      mail: event.target.email.value,
      password: event.target.password.value,
    };
    dispatch(signup(newUser));
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <label>
        Username
        <input type="text" name="name" />
      </label>
      <label>
        Email
        <input type="email" name="email" />
      </label>
      <label>
        Password
        <input type="password" name="password" />
      </label>
      <button type="submit">Register</button>
    </form>
  );
};
