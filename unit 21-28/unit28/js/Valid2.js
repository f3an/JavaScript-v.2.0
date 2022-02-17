class Valid2 extends Valid {
  constructor(email, password, isValid, emailError = "", passwordError = "") {
    super();
    this.email = email;
    typeof password === "string"
      ? (this.password = password)
      : (this.password = JSON.stringify(password));
    isValid = false;
    this.isValid = isValid;
    this.emailError = emailError;
    this.passwordError = passwordError;
  }
  validate() {
    if (super.validate() === true) {
      if (this.email === "") {
        this.emailError = "‘email empty’";
        console.error(this.emailError);
        return (this.isValid = false);
      }
      console.log(this);
      return (this.isValid = true);
    } else {
      this.passwordError = "‘min length 6’";
      console.error(this.passwordError);
      if (this.email === "") {
        this.emailError = "‘email empty’";
        console.error(this.emailError);
      }
      return (this.isValid = false);
    }
  }
}
