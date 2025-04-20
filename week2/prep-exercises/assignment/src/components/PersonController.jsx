import { useEffect, useState } from 'react';
import Person from './Person';

const PersonController = () => {
  const [people, setPeople] = useState([]);

  const getPeople = async () => {
    try {
      const response = await fetch('https://randomuser.me/api?results=10');
      const data = await response.json();

      const formattedPeople = data.results.map(user => ({
        firstName: user.name.first,
        lastName: user.name.last,
        email: user.email,
        phone: user.phone,
        picture: user.picture.medium,
      }));

      setPeople(formattedPeople);
    } catch (error) {
      console.error('Failed to fetch people:', error);
    }
  };


  useEffect(() => {
    getPeople();
  }, []);

  return (
    <div>
      <button onClick={getPeople}>Generate New People</button>
      {people.map((person, index) => (
        <Person key={index} person={person} />
      ))}
    </div>
  );
};

export default PersonController;
