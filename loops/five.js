const coding = ["js", "ruby", "java", "python", "cpp"];
//forEach loop
coding.forEach((element) => {
  console.log(element);
});

//forEach loop with function
coding.forEach((item, index, array) => {
  console.log(item, index, array);
});

//forEach loop with objects
const myCoding = [
  {
    languageName: "javascript",
    languageFileName: "js",
  },
  {
    languageName: "python",
    languageFileName: "py",
  },
  {
    languageName: "cpp",
    languageFileName: "cpp",
  },
  {
    languageName: "java",
    languageFileName: "java",
  },
  {
    languageName: "ruby",
    languageFileName: "rb",
  },
  {
    languageName: "php",
    languageFileName: "php",
  },
  {
    languageName: "c#",
    languageFileName: "c#",
  },
  {
    languageName: "c++",
    languageFileName: "cpp",
  },
];
myCoding.forEach((item) => {
  console.log(item.languageName);//forEach loop with objects
});
