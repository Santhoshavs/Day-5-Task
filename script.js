  //JSON iterate over all for loops
  const jsonObject = {
    "name": "Santhosh",
    "age": 21,
    "city": "Chennai"
  };
  
  for (let key in jsonObject) {
    if (jsonObject.hasOwnProperty(key)) {
      console.log(key + ": " + jsonObject[key]);
    }
  }
  const jsonArray = [
    {
      "name": "Santhosh",
      "age": 21,
      "city": "Chennai"
    },
    {
      "name": "Vignesh",
      "age": 26,
      "city": "Chennai"
    }
  ];
  
  for (let obj of jsonArray) {
    console.log(obj.name + " is " + obj.age + " years old and lives in " + obj.city);
  }
      

//Create your own resume data in json format
myResume={
    "basics": {
      "name": "Santhosh A",
      "email": "santhoshavs9823@gmail.com",
      "phone": 6383360938,
      "degree": "B.SC.cs",
      "location": {
        "address": "5/506,5th cross street,nehru nagar,MK chavadi,thoraipakkam",
        "postalCode": 600098,
        "city": "Chennai",
        "state": "Tamilnadu",
        "country": "India"
      },
      "profiles": [
        {
          "github":"https://github.com/Santhoshavs"
        }
      ]
    },
    
    "education": [
      {
        "institution": "Jeppiaar college of arts and science",
        "department": "Computer Science",
        "studyType": "fulltime",
        "batch start year": 2020,
        "batch end year": 2023,
        "percentage" : 76 
      }
    ],
    "skills": [
      {
        "name": "python,javascript",
        "level": "beginner",
      }
    ],
    "languages": [
      {
        "language": "Tamil,Enlish,Telugu",
      }
    ],
  }
  console.log(myResume);
  

