console.log("Write a “person” class to hold all the details");
  class Person {
    constructor(firstName, lastName, age, country, city) {
      this.firstName = firstName
      this.lastName = lastName
      this.age = age
      this.country = country
      this.city = city
      this.score = 0
      this.skills = []
    }
    getFullName() {
      const fullName = this.firstName + ' ' + this.lastName
      return fullName
    }
    get getScore() {
      return this.score
    }
    get getSkills() {
      return this.skills
    }
    set setScore(score) {
      this.score += score
    }
    set setSkill(skill) {
      this.skills.push(skill)
    }
    getPersonInfo() {
      let fullName = this.getFullName()
      let skills =
        this.skills.length > 0 &&
        this.skills.slice(0, this.skills.length - 1).join(', ') +
          ` and ${this.skills[this.skills.length - 1]}`
      let formattedSkills = skills ? `He knows ${skills}` : ''
  
      let info = `${fullName} is ${this.age}. He lives ${this.city}, ${this.country}. ${formattedSkills}`
      return info
    }
  }
  
  const person1 = new Person('Ruvetha', 'S', 21, 'India', 'Erode')
  const person2 = new Person('Ruve', 'S', 22, 'India', 'Chennai')
  const person3 = new Person('Ruve1', 'S', 23, 'India', 'Coimbatore')
  
  person1.setScore = 1
  person1.setSkill = 'HTML'
  person1.setSkill = 'CSS'
  person1.setSkill = 'JavaScript'
  
  person2.setScore = 2
  person2.setSkill = 'Planning'
  person2.setSkill = 'Managing'
  person2.setSkill = 'Organizing'
  
  console.log(person1.getScore)
  console.log(person2.getScore)
  
  console.log(person1.getSkills)
  console.log(person2.getSkills)
  console.log(person3.getSkills)
  
  console.log(person1.getPersonInfo())
  console.log(person2.getPersonInfo())
  console.log(person3.getPersonInfo())
  
