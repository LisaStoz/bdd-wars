// Let's write tests here

describe("Given a need to greet a person,", function(){

  it("when greeter is supplied with correctly spelled name 'Lisa', then greeter creates a message 'Hello Lisa!'", function(){
    expect(greet("Lisa")).toBe("Hello Lisa!");
  });

  it("when greeter is supplied with the name spelled in mixed case 'liSA', greeter creates a message and correctly formats the name 'Hello Lisa!'", function(){
    expect(greet("liSA")).toBe("Hello Lisa!");
  });

});

describe("Given a troll attacking the site", function(){

  it("when a troll submits a message 'Hi, I am TrOLL', then it gets neutralised by removing all vowels resulting in 'H,  m TrLL'", function(){
    expect(neutralise("Hi, I am TrOLL")).toBe("H,  m TrLL");
  });

  it("when a troll submits a message 'mnopqrstuvwxyz', then it gets neutralised by removing all vowels resulting in 'mnpqrstvwxz'", function(){
    expect(neutralise("mnopqrstuvwxyz")).toBe("mnpqrstvwxz");
  });

  it("when a troll submits a message 'MNOPQRSTUVWXYZ', then it gets neutralised by removing all vowels resulting in 'MNPQRSTVWXZ'", function(){
    expect(neutralise("MNOPQRSTUVWXYZ")).toBe("MNPQRSTVWXZ");
  });




});

describe("Given 5min cooking time and 1 pot that can fit up to 8 eggs", function(){

  it("when there is 0 eggs ordered and waiting time is requested, then cooking time calculator responds with 0min", function(){
    expect(cookingTime(0)).toBe(0);
  });

  it("when there is 3 eggs ordered and waiting time is requested, then cooking time calculator responds with 5min", function(){
    expect(cookingTime(3)).toBe(5);
  });

  it("when there is 20 eggs ordered and waiting time is requested, then cooking time calculator responds with 15min", function(){
    expect(cookingTime(20)).toBe(15);
  });

});

describe("Given a requirement to have all numbers from 0 to 9", function(){

  it("when 0 element is missing, element finder responds with 0", function(){
    expect(getMissingElement( [8, 5, 1, 3, 2, 9, 7, 6, 4] )).toBe(0);
  });

  it("when 8 element is missing, element finder responds with 8", function(){
    expect(getMissingElement( [5, 1, 3, 2, 0, 9, 7, 6, 4] )).toBe(8);
  });

  it("when 5 element is missing, element finder responds with 5", function(){
    expect(getMissingElement( [1, 3, 2, 0, 8, 9, 7, 6, 4] )).toBe(5);
  });

});

describe("Given an item with like counter", function(){

  it("when no one has liked the item before, then like message is 'no one likes this'", function(){
    expect(likes([])).toBe("no one likes this");
  });

  it("when Peter has liked the item, then like message is 'Peter likes this'", function(){
    expect(likes(['Peter'])).toBe("Peter likes this");
  });

  it("when Jacob and Alex have liked the item, then like message is 'Jacob and Alex like this'", function(){
    expect(likes(['Jacob', 'Alex'])).toBe("Jacob and Alex like this");
  });

  it("when Max, John and Mark have liked the item, then like message is 'Max, John and Mark like this'", function(){
    expect(likes(['Max', 'John', 'Mark'])).toBe('Max, John and Mark like this');
  });

  it("when Max, John, Mark and Alex have liked the item, then like message is 'Max, John and 2 others like this'", function(){
    expect(likes(['Max', 'John', 'Mark', 'Alex'])).toBe('Max, John and 2 others like this');
  });

  it("when Max, John, Mark, Alex and Lisa have liked the item, then like message is ''Max, John and 3 others like this'", function(){
    expect(likes(['Max', 'John', 'Mark', 'Alex', 'Lisa'])).toBe('Max, John and 3 others like this');
  });

  it("when Max, John, Mark, Alex, Mark and Lisa have liked the item, then like message is ''Max, John and 4 others like this'", function(){
    expect(likes(['Max', 'John', 'Mark', 'Alex', 'Mark', 'Lisa'])).toBe('Max, John and 4 others like this');
  });


});
