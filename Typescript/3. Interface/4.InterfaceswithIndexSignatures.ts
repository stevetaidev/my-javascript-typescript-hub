// Index Signature với số nguyên: Sử dụng khi chỉ mục là số nguyên.
interface NumberDictionary {
    [index: number]: number;
  }
  
  let numDict: NumberDictionary = {
    0: 10,
    1: 20,
    2: 30,
  };
  
  let value: number = numDict[1]; // Giá trị là 20


// Index Signature với chuỗi: Sử dụng khi chỉ mục là chuỗi.
interface StringDictionary {
    [index: string]: string;
  }
  
  let strDict: StringDictionary = {
    "name": "John",
    "age": "30",
    "city": "New York",
  };
  
  let personName: string = strDict["name"]; // Giá trị là "John"
  