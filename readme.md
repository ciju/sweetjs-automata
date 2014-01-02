# Automata Syntax with Sweet.js #

Its just an exercise at understand Sweet.js, while reading
[Automata via Macros - Shriram Krishnamurthi](http://cs.brown.edu/~sk/Publications/Papers/Published/sk-automata-macros/)

Defines syntax for `automata`. Ex: Below is a definition for automata
accepting `c[ab]*r`. The `init` right after `automata` keyword, is the
initial/starting state.

```
automata init {
    init (
        'c' => more
    )
    more (
        'a' => more,
        'd' => more,
        'r' => end
    )
    end (accept)
}
```

## Usage ##

Install [Sweet.js](http://sweetjs.org). Ex:

```
npm install -g sweet.js
```
Compile the file. Ex:

```
sjs automata.sjs -o output.js
```
