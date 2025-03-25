async function getData() {
  return 'Data er hentet!';
}

async function dataRecived() {
  const data = await getData();
  console.log(data);
}

//dataRecived();
setTimeout(dataRecived, 3000);

console.log('Vi venter.....');

// Oppgave 1:
// Sett opp en async funksjon som retunerer en string
// Sett opp en async funskjon som tar i mot den første funksjonen
// Sett opp en setTimeout som bruker 5 sekunder på å vise dataen

//
//

async function displayUser() {
  try {
    const user = await new Promise((resolve) => {
      setTimeout(function () {
        resolve('Brukerdata er lastet inn!'), 3000;
      });
    });
    console.log(user);
    const viewUser = document.createElement('h1');
    viewUser.textContent = user;
    document.body.prepend(viewUser);
  } catch (error) {
    console.error('Error lasting av brukerdata:' + error);
  }
}
displayUser();
//oppgave 2
async function RadioUser() {
  try {
    const user = await new Promise((resolve) => {
      setTimeout(function () {
        resolve(' bruker data er lastet inn'), 5000;
      });
    });
    console.log(user);
  } catch (error) {
    console.error('Error lasting av brukerdata:' + error);
  }
}
