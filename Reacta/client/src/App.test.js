const {
  addToList
  
// eslint-disable-next-line no-undef
} = require('./pages/StudentList');

const {
  deleteFromList
} = require('./pages/TeacherList');

// eslint-disable-next-line no-undef
describe ('test the addition to the list', ()=>{
  // eslint-disable-next-line no-undef
  test('should the element be string',()=>{
      const list={
          liste:[],
      };
      const element =5;

      // eslint-disable-next-line no-undef
      expect(()=>addToList(list,element)).toThrowError(/string/gi);

      
  });

  // eslint-disable-next-line no-undef
  test('should return a list with the new element', ()=> {
      const list={
          liste:[]
      };
      const element = 'mariem amor';
      const expected={
          list:[element]
      };

      // eslint-disable-next-line no-undef
      expect((addToList(list,element))).toStringEqual(expected);
  });
});

// eslint-disable-next-line no-undef
describe ('test the delete from the list', ()=>{
 // eslint-disable-next-line no-undef
  test('should return a list without an element', ()=> {
      const list={
          liste:['mariem amor','mayssa kchaou']
      };
      const element = 'mariem amor';
      const expected={
          list:['mayssa kchaou']
      };

      // eslint-disable-next-line no-undef
      expect((deleteFromList(list,element))).toStringEqual(expected);
  });
});