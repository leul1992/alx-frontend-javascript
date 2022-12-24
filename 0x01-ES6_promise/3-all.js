import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const p = uploadPhoto();
  const c = createUser();
  return Promise.all([p, c]).then((values) => {
    console.log(`${values[0].body} ${values[1].firstName} ${values[1].lastName}`);
  }).catch(() => {
    console.log('Signup system offline');
  });
}