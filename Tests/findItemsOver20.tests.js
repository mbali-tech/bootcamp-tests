var itemList = [
    {name : 'apples', qty : 10},
    {name : 'pears', qty : 37},
    {name : 'bananas', qty : 27},
    {name : 'apples', qty : 3},
  ];
  
  var results = [
    {name : 'pears', qty : 37},
    {name : 'bananas', qty : 27},
  ];
  
  var itemList2 = [
    {name : 'apples', qty : 10},
    {name : 'pears', qty : 19},
    {name : 'bananas', qty : 17},
    {name : 'apples', qty : 3},
  ];
  
  var results2 = [];
  
  var itemList3 = [
    {name : 'apples', qty : 40},
    {name : 'pears', qty : 20},
    {name : 'bananas', qty : 23},
    {name : 'apples', qty : 37}
  ];
  
  var results3 = [
    {name : 'apples', qty : 40},
    {name : 'bananas', qty : 23},
    {name : 'apples', qty : 37}
  ];

describe('test findItemsOver20 function', function () {
    it('should return all the products quantity higher that 20', function () {
        assert.deepEqual(results, findItemsOver20(itemList));
    });
    it('should return an empty list if there are no items less than 20', function () {
        assert.deepEqual(results2, findItemsOver20(itemList2));
    });
    it('should return all the products quantity higher that 20 ', function () {
        assert.deepEqual(results3, findItemsOver20(itemList3));  
    });

    });