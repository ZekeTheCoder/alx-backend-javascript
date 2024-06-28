import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const signUpPromise = signUpUser(firstName, lastName)
    .then((data) => ({
      status: 'fulfilled',
      value: data,
    }));

  const uploadPromise = uploadPhoto(fileName)
    .catch((err) => ({
      status: 'rejected',
      value: err.toString(),
    }));

  const results = await Promise
    .all([signUpPromise, uploadPromise]);

  return results;
}
