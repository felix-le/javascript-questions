function hello(name) {
  return function innerFn(hey) {
    console.log(hey, name);
  };
}

const h = hello("viet Anh");
h("hello");
