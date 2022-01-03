import { useLocation } from 'react-router-dom';

export default function Contact() {
  const querySearch = useLocation().search;
  console.log(querySearch);

  const queryParams = new URLSearchParams(querySearch);
  const searchName = queryParams.get('nama');
  //localhost:3000/contact/?nama=imronxz

  return (
    <div>
      <h2>Hey {searchName}, Contact Us Here..</h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis, dolore
        ea eaque quibusdam similique eveniet saepe animi assumenda ex
        dignissimos ullam officiis maiores pariatur! Perferendis necessitatibus
        architecto aliquam incidunt quam.
      </p>
    </div>
  );
}
