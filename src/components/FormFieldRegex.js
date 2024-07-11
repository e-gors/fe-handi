function FormFieldRegex(data, type) {
  const number = new RegExp("^09[0-9]{9}$", "i");
  //   const address = new RegExp(
  //     "^[0-9]+(?:[ -][a-zA-Z0-9]+)*(?:[ ]*(?:Apt|Unit)[ ]*[0-9]+)?,[ ]*[a-zA-Z0-9 ]+,[ ]*[a-zA-Z0-9 ]+,[ ]*[a-zA-Z ]+,[ ]*[A-Z]{2}$",
  //     "i"
  //   );
  //   const email = new RegExp("^[^s@]+@[^s@]+.[^s@]+@gmail.com$", "i");

  //   if (type === "number") {
  //     return number.test(data);
  //   } else if (type === "address") {
  //     return address.test(data);
  //   } else {
  //     return email.test(data);
  //   }
  
  if (type === "number") {
    return number.test(data);
  }
}

export default FormFieldRegex;
