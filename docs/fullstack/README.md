## javascript vs java
从java developer视角那看两者的不同
### functions and methods
- javascript中的function实际是一个被Function constructor创建的对象，Function也是一个对象
- 当function是一个对象的属性时，它是一个method,所以可以说一个method是一个function,反之不是如此
- 因为a function是一个对象，它是有属性和方法的，那么对象是否是函数，答案是确定的
    ```
    var workout = function () {};
    console.log(workout instanceof Function); // true
    ```
- 在js里函数和对象有什么不同
    - 函数由构造器生成
    - 函数可被调用，其他对象不可被调用
    - 函数有prototype属性，其他对象没有
    - 函数可作为构造器创建对象
    ```
    function User(){
    }
    var user=new User();
    ```

