const obj1={
     pi:3.14,
     radius:6,
     height:12,
     common:2
}
function cylynder(){
    alert("cylinder equation")
    console.log(`volume of cylynder is ${this.pi*this.radius*this.radius*this.height}`);
    console.log(`Area of cylynder is ${this.common*this.pi*this.radius*this.height+this.common*this.pi*this.radius*this.radius}`);


}
cylynder.bind(obj1)()
