let val = [{ msg: "i am sami" }, { msg: "this is really nice" }];

let newarr = [...val, { msg: "this is another" }];
console.log(newarr);
const mapped = newarr.filter((each) => each.msg == "this is another");
console.log(mapped)