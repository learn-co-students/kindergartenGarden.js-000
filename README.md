---
languages: javascript
tags: hard, oo, dynamic methods
---

# Kindergarten Garden
## The Garten Garden
Meet your new class!

Alice, Bob, Charlie, David, Eve, Fred, Ginny, Harriet, Ileana, Joseph, Kincaid, and Larry.

Here at the Flatiron School, we're starting a garden with our kindergarten class. To track which patch belongs to which student, we're writing an app to track them.

We're supporting 4 kinds of crops: Grass, Violets, Radishes, and Clover. In our app, we'll reference them as G, V, R, and C respectively.

We'll be assigning a column of our garden to each student in alphabetical order. The string 'VVCGGV\nVVRCCR' can be interpreted as:

| Alice  | Bob  | Charlie  |
|--------|------|----------|
|Violets, Violets|Clover, Grass|Grass, Violets|
|Violets, Violets|Radishes, Clover|Clover, Radishes|

Your `Garden` constructor should be able to do the following:
* accept two arguments,
  * the first is the string of crops
  * the second is the list of students
* it should create a property with each student's name by downcasing their name
* that student name property stores an array of their assigned crops

ex.
```javascript
var students = ['Alice', 'Bob', 'Charlie'];
var garden = new Garden('VVCGGV\nVVRCCR', students)

garden.bob
// -> ['clover', 'grass', 'radishes', 'clover']
```


## Tests
To run the specs follow these commands:
```shell
# first install the new gem to run the tests
gem sources -a http://flatiron:33west26@gems.flatironschool.com
gem install ironboard

# to run in the command line run
ironboard

#to run in the browser
ironboard -b
```
When you finish passing a test, remove the `x` from `xit` to convert it to a runnable test.