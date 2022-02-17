class Valid {
  constructor(email, password, isValid) {
    this.email = email;
    typeof password === "string"
      ? (this.password = password)
      : (this.password = JSON.stringify(password));
    isValid = false;
    this.isValid = isValid;
  }
  validate() {
    if (this.password.length > 6) 
    return (this.isValid = true);
  }
}
