// Let's write tests here

describe("Given a registration and a number of days remaining,", function(){

  it("when registration ends in 15 days, then generated countdown message is 'You have 15 days to register'", function(){
    expect(registrationMsg(15)).toBe("You have 15 days left to register");
  });

  it("when registration ends in 3 days, then generated countdown message is 'You have 3 days to register'", function(){
    expect(registrationMsg(3)).toBe("You have 3 days left to register");
  });

  it("when registration ends in 1 day, then generated countdown message is 'You have 1 day to register'", function(){
    expect(registrationMsg(1)).toBe("You have 1 day left to register");
  });

  it("when registration is over, then generated countdown message is empty", function(){
    expect(registrationMsg(0)).toBe("");
  });

  it("when registration is not open yet, generated countdown message is 'Registration opens soon'", function(){
    expect(registrationMsg(16)).toBe("Registration opens soon");
  });

});
