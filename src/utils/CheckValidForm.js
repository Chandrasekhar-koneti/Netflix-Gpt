export const checkValidForm = (email, password) => {
  const isEmail =
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(\.[a-zA-Z]{2,})?$/.test(
      email
    );

  const isPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password);

  if (!isEmail) return "Email is not valid";
  if (!isPassword) return "Password is not valid";

  return null;
};
