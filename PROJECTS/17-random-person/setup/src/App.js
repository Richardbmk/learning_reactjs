import React, { useState, useEffect } from 'react';
import {
  FaEnvelopeOpen,
  FaUser,
  FaCalendarTimes,
  FaMap,
  FaPhone,
  FaLock,
} from 'react-icons/fa';

const url = 'https://randomuser.me/api/';
const defaultImage = 'https://randomuser.me/api/portraits/men/75.jpg';

function App() {
  const [loading, setLoading] = useState(true);
  const [person, setPerson] = useState(null);
  const [value, setValue] = useState('random person');
  const [title, setTitle] = useState('name');

  const getPerson = async () => {
    setLoading(true);
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    const person = data.results[0];
    const { phone, email } = person;
    const { large: image } = person.picture;
    const { password } = person.login;
    const { first, last } = person.name;
    const {
      dob: { age },
    } = person;
    const {
      street: { number, name },
    } = person.location;
    const newPerson = {
      image,
      phone,
      email,
      password,
      age,
      street: `${number} ${name}`,
      name: `${first} ${last}`,
    };

    setPerson(newPerson);
    setLoading(false);
    setTitle('name');
    setValue(newPerson.name);
  };

  useEffect(() => {
    getPerson();
  }, []);

  const handleValue = (e) => {
    if (e.target.classList.contains('icon')) {
      const newValue = e.target.dataset.label;
      console.log(newValue);
      setTitle(newValue);
      setValue(person[newValue]);
    }
  };

  return (
    <main>
      <div className='block bcg-black'>
        <div className='block'>
          <div className=''>
            <img
              src={(person && person.image) || defaultImage}
              alt='random user'
              // className='user-img'
            />
            <p>My {title} is</p>
            <p>{value}</p>
            <div>
              <button className='' data-label='name' onMouseOver={handleValue}>
                <FaUser />
              </button>
              <button className='' data-label='email' onMouseOver={handleValue}>
                <FaEnvelopeOpen />
              </button>
              <button className='' data-label='age' onMouseOver={handleValue}>
                <FaCalendarTimes />
              </button>
              <button
                className=''
                data-label='street'
                onMouseOver={handleValue}
              >
                <FaMap />
              </button>
              <button className='' data-label='phone' onMouseOver={handleValue}>
                <FaPhone />
              </button>
              <button
                className=''
                data-label='password'
                onMouseOver={handleValue}
              >
                <FaLock />
              </button>
            </div>
            <button className='' type='button' onClick={getPerson}>
              {loading ? 'loading...' : 'random user'}
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
