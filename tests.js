// Let's write tests here

describe("When registration", function(){

  it("ends in 15 days, then a countdown message is displayed", function(){
    expect(registrationMsg(15)).toBe("You have 15 days left to register");
  });

  it("ends in 3 days, then a countdown message is displayed", function(){
    expect(registrationMsg(3)).toBe("You have 3 days left to register");
  });

  it("ends in 1 day, then a countdown message is displayed", function(){
    expect(registrationMsg(1)).toBe("You have 1 day left to register");
  });

  it("is over, then nothing is displayed", function(){
    expect(registrationMsg(0)).toBe("");
  });

  it("is not open yet, then opens soon message is displayed", function(){
    expect(registrationMsg(16)).toBe("Registration opens soon");
  });

});
