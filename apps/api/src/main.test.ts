import {testtest} from './test';
test("test", ()=>{
    try{
    expect(testtest(1,2)).toBe(3);
    }
    catch (e){
    fail(e);
    }
});