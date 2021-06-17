import {testtest} from './main';
test("test",async ()=>{
    try{
    expect(testtest(1,2)).toBe(3);
    }
    catch (e){
    fail(e);
    }
});