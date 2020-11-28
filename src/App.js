import React from "react";
import "./styles.css";

export default function App() {
  function showProtoChain(obj) {
    let curPrototype = obj.__proto__;
    console.log("proto chain start***************************");
    while (curPrototype !== null) {
      console.log(curPrototype);
      curPrototype = curPrototype.__proto__;
    }
    console.log("proto chain end*****************************");
  }

  function showPrototypeChain(obj) {
    let curPrototype = obj.prototype;
    console.log("prototype chain start***************************");
    while (curPrototype) {
      console.log(curPrototype);
      curPrototype = curPrototype.prototype;
    }
    console.log("prototype chain end*****************************");
  }

  function ClassA() {
    this.name = "A";
  }

  function ClassB() {
    this.name = "B";
  }

  ClassB.prototype = new ClassA();

  console.log("show prototpye chain: ");
  showPrototypeChain(ClassB);

  return (
    <div className="App">
      <button onClick={() => showPrototypeChain(ClassB)}>Show Prototype</button>
      <button onClick={() => showProtoChain(ClassB)}>Show __proto__</button>
    </div>
  );
}
