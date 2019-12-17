// 布尔类型
// let bool: boolean = false;
let bool: boolean
bool = true  // 定义好类型后不能改变值的类型

// 数字类型
let num:number
num = 12345

// 字符串类型
let str:string
str = 'abc'
str = `数值是${num}`
// console.log(str)

// 数组类型
// 写法一
let arr: number[]  // 定义数组中的每一项都是number类型
arr = [2,3]
// 写法二
let arr2: Array<number | string>
//let arr3: (string | number)[]
arr2 = [1,'20']

// 元祖类型
let tuple: [string, number, boolean]
// 元祖类型是一个数组 是一个特殊的  长度固定 类型一一对应的;当你指定了length,长度就不能换了
tuple= ['1',3,false]


// 枚举类型
enum Roles {
  SUPER_ADMIN,  // 0
  ADMIN,   // 1
  USER  // 2
}
// console.log(Roles.SUPER_ADMIN) // 打印 0  // 每一个都有一个默认的序列号
// console.log(Roles[0]) // 打印出 SUPER_ADMIN


// any类型   可以为任何类型的值
let  value: any
value = [2]
value = '1'
value = false


// void类型
const consoleText= (text:string):void => {
  console.log(text)
}
// consoleText('343434')


// null和undefined类型
let u: undefined
u = undefined
let n = null
n = null


// never类型
const errorFunc = (message: string): never => {
  throw new Error(message)
}

// object 类型
let obj = {
  name: 'hero'
}
console.log(obj.name)


// 类型断言
const getLength = (target: string | number): number => {
  if((<string>target).length || (target as string).length === 0) {
    return (<string>target).length
  } else {
    return target.toString().length 
  }
}
// let num2: number
// num2 = getLength("area")
// console.log(num2)