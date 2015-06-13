contract greeter {
  function greet(bytes32 input) returns(bytes32) {
    if (input == "") {
      return "Hello, World";
    }
    return input;
  }
}
