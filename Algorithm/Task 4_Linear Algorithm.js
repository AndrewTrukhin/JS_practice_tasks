/*З клавіатури вводиться вік дитини. Вивести на екран через скільки років вона буде відвідувати садочок, 
піде у школу, закінчить школу, вступить і закінчить*/

const childAge = parseFloat(prompt('Enter your \child`s\ age'));

const kindergardenAge = 2;

const whenEnterToKindergarden = kindergardenAge - childAge;

alert(`Your child will be able to go to kindergarden in ${whenEnterToKindergarden}` + ' year');

const schoolAge = 7;

const whenEnterToSchool = schoolAge - childAge;

alert(`Your child will be able to go school in ${whenEnterToSchool}` + ' year(s)');

const schoolGraduationAge = 16;

const graduateSchool = schoolGraduationAge - childAge;

alert(`Your child will graduate school in ${graduateSchool}` + ' year(s)');

const enterUniversityAge = 16;

const whenEnterUniversity = enterUniversityAge - childAge;

alert(`Your child will be able to enter the university in ${whenEnterUniversity}` + ' year(s)');

const universityGraduationAge = 21;

const universityGraduate = universityGraduationAge - childAge;

alert(`Your child will graduate the university in ${universityGraduate}` + ' year(s)');