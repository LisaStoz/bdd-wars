// Let's write tests here

describe("When a registration", function(){

  it("ends in 15 days, the output is 'You have 15 days left to register'", function(){
    expect(countdownMessage(15)).toBe("You have 15 days left to register");
  });

  it("ends in 3 days, the output is 'You have 3 days left to register'", function(){
    expect(countdownMessage(3)).toBe("You have 3 days left to register");
  });

  it("ends in 1 day, the output is 'You have 1 day left to register'", function(){
    expect(countdownMessage(1)).toBe("You have 1 day left to register");
  });

  it("ends the output is 'Registation is closed'", function(){
    expect(countdownMessage(0)).toBe("Registation is closed");
  });

  it("is not open yet - nothing is displayed", function(){
    expect(countdownMessage(16)).toBe("");
  });

});
