'use strict'

// array of objects with {name and price}
const listing =
  (name, price) => ({
    name,
    price
  })

  // array of {name of customer with an array of their items}
const cart =
  (customer, ...items) => ({
    customer,
    items
  })

  // checks that the price of item matches with a listed price? returns price if does, returns 0 if doesn't
const listedPrice =
  listing =>
    name =>
      name === listing.name
        ? listing.price
        : 0

/**
 * transform carts into an array of { customer, total }
 */
const calculateTotals =
  listings =>
    carts => {
      return carts.map((cTotal) => list(cTotal.customer , cTotal.items.reduce((a, b) => a + itemPrice(listings, b), 0)) )
      //return cArray.map((subArray) => listing())
      //return carts.map((cTotal) => [cTotal.customer , cTotal.items.reduce((a, b) => a + itemPrice(listings, b), 0)] )
      
    }

// returns the price an item given the listing array 
const itemPrice = (listingArray, Item) => {
      let a = listingArray.map((i) => listing(Item, listedPrice(i)(Item)))
      return (a.map((p) => p = p.price)).reduce((total, next) => total + next, 0)    
}
     
const list = (customer, total) =>({
  customer, 
  total
})
    

const regularListings = [
  listing('detergent', 10),
  listing('hennessey', 100),
  listing('carlo rozzi', 20),
  listing('coffee', 5),
  listing('cookies', 6),
  listing('mountain dew', 2)
]

const saleListings = [
  listing('detergent', 5),
  listing('hennessey', 50),
  listing('carlo rozzi', 10),
  listing('coffee', 2.5),
  listing('cookies', 3),
  listing('mountain dew', 1)
]
const carts = [
  cart(
    'adam',
    'carlo rozzi',
    'carlo rozzi',
    'carlo rozzi',
    'carlo rozzi',
    'carlo rozzi',
    'carlo rozzi'
  ),
  cart(
    'david',
    'detergent',
    'hennessey',
    'coffee'
  ),
  cart(
    'michael',
    'coffee',
    'hennessey',
    'coffee',
    'hennessey',
    'coffee',
    'hennessey'
  ),
  cart(
    'dillon',
    'cookies',
    'cookies',
    'cookies',
    'mountain dew',
    'mountain dew',
    'mountain dew'
  )
]

// test
console.log(calculateTotals(regularListings)(carts))
console.log(calculateTotals(saleListings)(carts))

// output
/*[ [ 'adam', 120 ],
[ 'david', 115 ],
[ 'michael', 315 ],
[ 'dillon', 24 ] ]
[ [ 'adam', 60 ],
[ 'david', 57.5 ],
[ 'michael', 157.5 ],
[ 'dillon', 12 ] ]*/

module.exports = {
  listing,
  cart,
  calculateTotals
}
