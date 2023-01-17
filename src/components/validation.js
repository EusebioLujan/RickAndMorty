


export function validateUsername(username) {
  const emailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return (
    emailRegex.test(username) && username.length > 0 && username.length <= 35
  );
}

export function validatePassword(password) {
  const passwordRegex = /^(?=.*\d)[A-Za-z\d]{6,10}$/;
  return passwordRegex.test(password);
}

