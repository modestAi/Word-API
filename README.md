##Information:

This API will provide you with commonly used English nouns. Usage is described below.

## Usage

### The basic syntax of a URL request to the API for all available words is shown below:

`https://arcane-brushlands-62039.herokuapp.com/api/all`

### The basic syntax for getting one random word from the API is shown below:

`https://arcane-brushlands-62039.herokuapp.com/api/random`

### Syntax for getting desired number of random words from the API is shown below:

e.g. `https://arcane-brushlands-62039.herokuapp.com/api/random?number=23`

Note: `number` can only be a positive number here.

###Sample code:
`curl https://arcane-brushlands-62039.herokuapp.com/api/random?number=10`

####Response:

```json
{
  "data": [
    "backbone",
    "mandate",
    "chateau",
    "underestimate",
    "pool",
    "success",
    "pliers",
    "co-producer",
    "macrofauna",
    "fanny"
  ]
}
```

### When `number` has an invalid value:

###Sample code:

`$ curl https://arcane-brushlands-62039.herokuapp.com/api/random?number=abcd`

or

`$ curl https://arcane-brushlands-62039.herokuapp.com/api/random?number=-1`

####Response:

```json
{
  "error": " An error has occurred!"
}
```
