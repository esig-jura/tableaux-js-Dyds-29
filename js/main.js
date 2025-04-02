/**
 * @author Steve Fallet
 * @since 2022.09.06
 */

'use strict';

const personnes = [
    {
        nom: 'Doe',
        prenom: 'John',
        age: 25,
        localite: 'New York',
    },
    {
        nom: 'Doe',
        prenom: 'Jane',
        age: 30,
        localite: 'Los Angeles',
    },
    {
        nom: 'Doe',
        prenom: 'Jack',
        age: 28,
        localite: 'Chicago',
    },
    {
        nom: 'Doe',
        prenom: 'Jill',
        age: 35,
        localite: 'Miami',
    },
    {
        nom: 'Doe',
        prenom: 'Jim',
        age: 40,
        localite: 'San Francisco',
    },
    {
        nom: 'Gasser',
        prenom: 'Morgan',
        age: 56,
        localite: 'Miami',
    }
];

const affichePersonne = document.querySelector('#affichePersonne');

personnes.forEach(personne =>
{
    const tr = document.createElement('tr');

    tr.innerHTML =
        `
    <td>${personne.prenom}</td>
    <td>${personne.nom}</td>
    <td>${personne.age}</td>
    <td>${personne.localite}</td>
`;

    affichePersonne.appendChild(tr);
});