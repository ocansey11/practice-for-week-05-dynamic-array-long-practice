class DynamicArray {

  constructor(defaultSize = 4) {
    // Your code here
    this.data = new Array(defaultSize)
    this.length = 0
    this.capacity =  defaultSize

  }

  read(index) {
    // Your code here
    return this.data[index]

  }

  push(val) {
    // Your code here
    if(this.length == this.capacity){
      this.resize()
      this.data.push(val)
    }

    this.data = this.data.filter(el => el)
    this.data.push(val)
    this.length++
  }

  pop() {
    // Your code here
    // this.data = this.data.filter(el => el)
    let pop =  this.data.pop()
    if(pop == undefined){
      this.length == 0
      return undefined
    }
    else{
      this.length--
      return pop
    }
  }

  shift() {
    // Your code here
    let shift =  this.data.shift()
    if(shift == undefined){
      this.length == 0
      return undefined
    }
    else{
      this.length--
      return shift
    }
  }

  unshift(val) {
    // Your code here
    if(this.length == this.capacity){
      this.resize()
      this.data.unshift(val)
    }
    this.data = this.data.filter(el => el)
    this.data.unshift(val)
    this.length++


  }

  indexOf(val) {
    // Your code here
    return this.data.indexOf(val)
  }

  resize() {

    // Your code here
    // create new array to hold items temporarily
    let newArr = []
    for(let i = this.length - 1; i >= 0; i--){
      newArr.push(this.data[i])
    }

    // change capacity and create new slots with same capacity of previous this.data, in addition to length of previous data
    this.capacity *= 2
    this.data = new Array(this.capacity/2)

    // arrange old items at the beginning of new this.data
    for(let i = 0; i < newArr.length; i++){
      this.data.unshift(newArr[i])
    }
  }
}


module.exports = DynamicArray;
