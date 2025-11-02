- var ya to function ke andar hai ya global hai. beech me kuch nahi block scope wagerah.
- object ko destructure karte time either the variable names have to be the same as the key or we need to explicitly give a new name for the local variable.
    - array destructure me koi scene nahi hai, apne ko local naam dena hi hoga.


- normal function inside function variables ko apne closure me lapet lega lekin *this* variable of the outer function ko nahi lapet paata. 
- lekin ES6 wala arrow function lapet leta hai outer function ke *this* ko bhi. (Aur baaki normal variable to lapet hi lega)

- getter setter ka call site looks like property access/reassignment. Isliye argument has to be a single value. 
    - call site for setter looks like object.prop = someValue.
        - ye someValue can be a primitive 



