// Snack 1
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal
// BONUS: inserire una arrow function che preso in input l'array di bici ritorni l'oggetto con bici più leggera

// const pensilina = [
//     {
//         nome: prompt('Nome bici'),
//         peso: parseInt(prompt('Peso bici')),
//     },
//     {
//         nome: prompt('Nome bici'),
//         peso: parseInt(prompt('Peso bici')),
//     },
//     {
//         nome: prompt('Nome bici'),
//         peso: parseInt(prompt('Peso bici')),
//     }
// ];

// let biciLeggera = pensilina[0];

// for (let i = 1; i < pensilina.length; i++) {
//     if ( biciLeggera.peso > pensilina[i].peso) {
//         biciLeggera = pensilina[i]
//     }
// };

// console.log(biciLeggera);

// ---------------------------------------------------------------------------------------------------------------------

// Snack2
// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà:
// Punti fatti e falli subiti.
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

const campionato = [
    {nome: 'Juve', punti: 0, falliSubiti: 0},
    {nome: 'Milan', punti: 0, falliSubiti: 0},
    {nome: 'Inter', punti: 0, falliSubiti: 0},
    {nome: 'Atalanta', punti: 0, falliSubiti: 0},
    {nome: 'Napoli', punti: 0, falliSubiti: 0},
    {nome: 'Roma', punti: 0, falliSubiti: 0},
    {nome: 'Sassuolo', punti: 0, falliSubiti: 0},
    {nome: 'Lazio', punti: 0, falliSubiti: 0}
]

for (let i = 0; i < campionato.length; i++) {
    if (campionato[i].punti == 0 || campionato[i].falliSubiti == 0) {
        campionato[i].punti = Math.floor(Math.random() * 60) + 1;
        campionato[i].falliSubiti = Math.floor(Math.random() * 100) + 1;
    }
}
console.log(campionato)

