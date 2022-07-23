/*Задача 3. 
На роботу компаніє приймає працівників від 32 до 45 років. 
З клавіатури вводиться вік претендента. З’ясувати, чи може він бути прийнятим на роботу.*/

const candidateMinAge = 32;

const candidateMaxAge = 45;

const newCandidateAge = parseInt(prompt('Enter \candidate`s\ age'));

if (newCandidateAge < candidateMinAge || newCandidateAge > candidateMaxAge) {
    console.log('A candidate has an inappropriate age')
}
    else {
        console.log('A candidate has a proper age')
    }