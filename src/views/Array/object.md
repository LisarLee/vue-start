#  Array
##  方法
>  let arr = ['one','two','three','four','five']
*  Array.splice(start[, deleteCount[, item1[, item2[, ...]]]])
   *  方法通过删除或替换现有元素或者原地添加新的元素来修改数组,并以数组形式返回被修改的内容。此方法会改变原数组。   
   *  eg:`let newArr = arr.splice[0,3]`//从0开始，截取3位==>newArr=['one','two','three'];arr=['four','five'];
   *  eg:`let newArr = arr.splice[0,1,'first']`//从0开始，截取2位,插入‘first’==>newArr=['one'];arr=['first','two','three','four','five'];
***
*  Array.slice([begin[, end]])
   *  方法返回一个新的数组对象，这一对象是一个由 begin 和 end 决定的原数组的浅拷贝（包括 begin，不包括end）。原始数组不会被改变。
   *  eg：`let newArr = arr.slice[0,3]`//从0开始，截取到3位==>newArr=['one','two','three','four'];arr不改变;
   *  slice 方法可以用来将一个类数组（Array-like）对象/集合转换成一个新数组。你只需将该方法绑定到这个对象上`Array.prototype.slice.call(arguments)`
***
*  Array.from()
   *  方法从一个类似数组或可迭代对象创建一个新的，浅拷贝的数组实例。
   *  `Array.from([1, 2, 3], x => x + x)`==>Array [2, 4, 6]
   *  `function f() {return Array.from(arguments)} f(1, 2, 3) `从类数组对象（arguments）生成数组==>[1,2,3]
#  String
***
#  Object
***