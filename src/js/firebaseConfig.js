export const firebaseConfig = {
  databaseURL:
    'https://team-13-project-413be-default-rtdb.europe-west1.firebasedatabase.app/',
  apiKey: 'AIzaSyCvkX26L4YS0lizKeJhcLE5fJdRdrZp4B8',
  authDomain: 'team-13-project-413be.firebaseapp.com',
  projectId: 'team-13-project-413be',
  storageBucket: 'team-13-project-413be.appspot.com',
  messagingSenderId: '849787238311',
  appId: '1:849787238311:web:9cb6055cfc3ae801272882',
};

// function creatUser(user) {
//   return fetch(
//     'https://team-13-project-413be-default-rtdb.europe-west1.firebasedatabase.app/users.json',
//     {
//       method: 'POST',
//       body: JSON.stringify(user),
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     }
//   ).then(response => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }
//     return response.json();
//   });
// }
