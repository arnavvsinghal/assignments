/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  let result = [];
  for(let i=0;i<transactions.length;++i){
    const currentObj = transactions[i];
    let present = false;
    let idx = -1;
    for(let j=0;j<result.length;++j){
      if(currentObj.category == result[j].category) {
        present = true;
        idx = j;
      }
    }
    if(present) result[idx].totalSpent += currentObj.price;
    else result.push({
      category : currentObj.category,
      totalSpent : currentObj.price
    });
  }
  return result;
}

module.exports = calculateTotalSpentByCategory;
