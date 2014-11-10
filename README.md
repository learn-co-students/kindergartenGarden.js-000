---
languages: javascript
tags: hard, oo, dynamic methods
---

# Kindergarten Garden
## The Garten Garden
Meet your new class!

Alice, Bob, Charlie, David, Eve, Fred, Ginny, Harriet, Ileana, Joseph, Kincaid, and Larry.

Here at the Flatiron School, we're starting garden with our kindergarten class. To track which patch belongs to which student, we're writing an app to track them.

We're supporting 4 kinds of crops: Grass, Violets, Radishes, and Clover. In our app, we'll reference them as G, V, R, and C respectively.

We'll be assigning a column of our garden to each student in alphabetical order. The string "VVCGGV\nVVRCCR" can be interpreted as:

| Alice  | Bob  | Charlie  |
|--------|------|----------|
|Violets, Violets|Clover, Grass|Grass, Violets|
|Violets, Violets|Radishes, Clover|Clover, Radishes|

The following code:
`new Garden("VVCGGV\nVVRCCR").bob` should return `['clover', 'grass', 'radishes', 'clover']`
