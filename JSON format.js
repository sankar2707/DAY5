let MyResume = {
    "Basics": {
      "Name": "Sankar R",
      "Email": "sankar.r2707@gmail.com",
      "Phone": "7010668974",
      "Location": "chennai"
    },
    "Work": [
      {
        "Company": "Access Healthcare",
        "Position": "AR Caller",
        "Start": "2019",
        "End": "2023",
      }
    ],
    "Education": [
      {
        "Institution": "Jeppiaar Engineering College",
        "Degree": "B.Tech",
        "Field": "Information Tecnology",
        "StartDate": "2012",
        "EndDate": "2015"
      }
    ]
  }
  let {Basics, ...remaining} = MyResume
  console.log(MyResume.Basics)
  console.log(MyResume.Work)
  console.log(MyResume.Education)