/**
 * @author Dylan Teixeira Batista
 * @since 2025.04.09
 */

'use strict';
// Déclaration des données
const personnes = [
    {
        nom: 'Doe',
        prenom: 'John',
        age: 25,
        localite: 'New York',
    },
    {
        nom: 'Ré',
        prenom: 'Jane',
        age: 30,
        localite: 'Los Angeles',
    },
    {
        nom: 'Mi',
        prenom: 'Jack',
        age: 28,
        localite: 'Chicago',
    },
    {
        nom: 'Fa',
        prenom: 'Jill',
        age: 35,
        localite: 'Miami',
    },
    {
        nom: 'Sol',
        prenom: 'Jim',
        age: 40,
        localite: 'San Francisco',
    }
];

// Récupération des éléments HTML
const tableBodyPersonnes = document.querySelector('.personnes'); // Corps du tableau
const formulaire = document.querySelector('form'); // Formulaire
const champPrenom = document.getElementById('prenom');
const champNom = document.getElementById('nom');
const champAge = document.getElementById('age');
const champLocalite = document.getElementById('localite');

// Déclaration des fonctions
// Fonction qui affiche les personnes dans le tableau HTML
function affichePersonnes () {
    // Vider le tableau
    tableBodyPersonnes.innerHTML = '';
    // Créer une ligne pour chaque personne
    for (let pers of personnes) {
        tableBodyPersonnes.innerHTML += `
            <tr>
                <td>${pers.prenom}</td>
                <td>${pers.nom}</td>
                <td>${pers.age}</td>
                <td>${pers.localite}</td>
            </tr>`;
    }
}
function ajouterNouvellePersonne (event) {
    event.preventDefault(); // Stoppe l'envoi du formulaire

// Ajoute une nouvelle personne à la fin du tableau
    personnes.push({
        prenom: champPrenom.value,
        nom: champNom.value,
        age: champAge.value,
        localite: champLocalite.value
    });

// Réafficher le tableau avec la nouvelle personne
    affichePersonnes();
}

// Gestion des événements
formulaire.addEventListener('submit', ajouterNouvellePersonne);

// Initialisation de l'application
affichePersonnes();
