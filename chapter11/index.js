const people = [1,1,2,3,5,8,13]
const allBudget = people.
filter(person => person.budget > 2000).reduce((acc, person) => {
    acc += person.budget
    return acc 
},0)
console.log(allBudget)
delete people[5]
console.log(people)


