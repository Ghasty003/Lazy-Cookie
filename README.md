# Lazy-Cookie
Easy to use JavaScript/TypeScript library that makes working with cookies on client side less of a pain.


## Installation

```
npm i lazycookie
```


## Usage
<p> <i>It has same methods as localStorage & sessionStorage</i> </p>

```js
import cookie from "lazycookie";

cookie.getItem("foo") // returns a string which is the value of the provided parameter.

cookie.setItem("foo", "bar", options) // sets item with key of "foo" and value of "bar".

cookie.deleteItem("foo") // deletes item with key of "foo".

cookie.clear()  // clears all key/value pair.

cookie.length // returns the total number of key/value pair
```

### Optional parameters

<table>
<tbody>
<tr>
<th> Name </th>
<th> Value </th>
<th> Description </th>
</tr>
<tr>
<th> expires </th>
<th> Date </th>
<th> When cookie should expire in Date format. </th>
</tr>
<tr>
<th> maxAge </th>
<th> number </th>
<th> When cookie should expire in millisecond. </th>
</tr>
</tbody>
</table>
