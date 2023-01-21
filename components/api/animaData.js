import { clientCredentials } from '../../utils/client';

const dbUrl = clientCredentials.databaseURL;

// GET All Anima
const getMember = (uid) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/anima.json?orderBy="uid"&equalTo="${uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        resolve(Object.values(data));
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});
// CREATE Anima
const createMember = (payload) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/anima.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});
// GET Single Anima
const getSingleMember = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/anima/${firebaseKey}.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

// DELETE Anima
const deleteMember = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/anima/${firebaseKey}.json`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});
// UPDATE Anima
const updateMember = (payload) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/anima/${payload.firebaseKey}.json`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});
// Filter Anima By Favorite
const favMember = (uid) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/anima.json?orderBy="uid"&equalTo="${uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const favorites = Object.values(data).filter((item) => item.favorite);
      resolve(favorites);
    })
    .catch(reject);
});
export {
  getMember, createMember, getSingleMember, deleteMember, updateMember, favMember,
};
