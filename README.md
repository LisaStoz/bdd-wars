# Katas

**Copyright note:
tasks are taken from Codewars and slightly modified**
**You can find lots fun katas on http://www.codewars.com/!**

1. Greet me
2. Trolls
3. Boiled Eggs
4. The Missing Element
5. Who likes it?

## Greet me

Write a method called `greet` that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.

Examples:

```
greet("maya") // returns "Hello Maya!"
greet("JACK") // returns "Hello Jack!"
```

## Trolls

Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

Your task is to write a function called `neutralize` that takes a string and returns a new string with all vowels removed.

For example, the string `"This website is for losers LOL!"` would become `"Ths wbst s fr lsrs LL!"`.


## Boiled Eggs

You are the greatest chef on earth. No one boils eggs like you! Your restaurant is always full of guests, who love your boiled eggs. But when there is a greater order of boiled eggs, you need some time, because you have only one pot for your job. How much time do you need?

Implement a function called `cookingTime`, which takes a non-negative integer, representing the number of eggs to boil. It must return the time in minutes (integer), which it takes to have all the eggs boiled.

Rules:

* you can put at most 8 eggs into the pot at once
* it takes 5 minutes to boil an egg
* we assume, that the water is boiling all the time (no time to heat up)
* for simplicity we also don't consider the time it takes to put eggs into the pot or get them out of it

Examples:

* You need 0 minutes to cook 0 eggs
* You need 5 minutes to cook 3 eggs
* You need 10 minutes to cook 9 eggs


## The Missing Element

Fellow code warrior, we need your help! We seem to have lost one of our array elements, and we need your help to retrieve it! Our array, super important array, was supposed to contain all of the integers from 0 to 9 (in no particular order), but one of them seems to be missing.

Write a function called `getMissingElement` that accepts an array of unique integers between 0 and 9 (inclusive), and returns the missing element.

Examples:

* In array `[0, 5, 1, 3, 2, 9, 7, 6, 4]` the missing element is `8`
* In `[9, 2, 4, 5, 7, 0, 8, 6, 1]` the missing element is `5`

## Who likes it?

You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

Implement a function called `likes`, which must take in input array, containing the names of people who like an item. It must return the display text as shown in the rules below.

Rules:
* For an empty array the result is "no one likes this".
* When only Peter likes an item the result is "Peter likes this".
* When two people, Jacob and Alex like an item the result is "Jacob and Alex like this"
* When 3 people, e.g. Max, John and Mark like an item the result is "Max, John and Mark like this"
* When 4 people, e.g. Alex, Jacob, Mark and Max like this the result is "Alex, Jacob and 2 others like this"
* For more than 4 names, the number in ‘and 2 others’ simply increases.
* Each name in the array is treated as a different person, so if 2 elements in the array are the same, you should still treat them as 2 different people.
