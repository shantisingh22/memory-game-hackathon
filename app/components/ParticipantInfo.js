// ParticipantInfo.jsx
import React, { useState } from 'react';
const ParticipantInfo = ({ lineWidth, onNext }) => {
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [error, setError] = useState('');        

  const handleSubmit = () => {
    setError('');

    if (!age || !gender) {
      setError('Age must be filled out.');
      return;
    }
    if (Number(age) < 18) {
      setError('age must be between 18 and 99');
      return;
    }
    onNext({ age, gender });
  };

  return (
    <div className="participant-header">
      <div
        className="participant-container"
        style={{
          width: `${lineWidth}px`,
          transition: 'width 0.3s ease-in-out',
        }}
      >
        <fieldset>
          <legend><h2>Participant Information</h2></legend>
          <label>
            Age: <br />
            <input className='age-input'
              type="number"
              value={age}
              onChange={e => setAge(e.target.value)}
              style={{ backgroundColor: 'white' }}
            />
          </label>
          <br/>
          <p className='page'>What is your current gender identity?</p>
          <label className='lablediv'>
            <input className='input-radio'
              type="radio"
              name="gender"
              value="Man"
              onChange={e => setGender(e.target.value)}
            /> Man
          </label>
          <label className='lablediv'>
            <input className='input-radio'
              type="radio"
              name="gender"
              value="Woman"
              onChange={e => setGender(e.target.value)}
            /> Woman
          </label>
          <label className='lablediv'>
            <input className='input-radio'
              type="radio"
              name="gender"
              value="Other"
              onChange={e => setGender(e.target.value)}
            /> Other
          </label>
          {error && <div className="error-text">{error}</div>} 
        </fieldset>

        <button className="next-button" onClick={handleSubmit}>
          NEXT
        </button>

      </div>
    </div>
  );
};

export default ParticipantInfo;
