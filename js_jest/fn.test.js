const fn = require('./fn');

test('객체 people이 기영이와 20을 가진다', ()=>{
    expect(fn.people("기영이", 20)).toEqual({name:"기영이", age:20})
})