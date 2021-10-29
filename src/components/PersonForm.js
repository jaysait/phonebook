import React from 'react';

const PersonForm = ({ createPerson, newName, newNumber, changeName, changeNumber }) => {
  return (
    <div>
      <form onSubmit={createPerson}>
        <div>
          name: <input id='new-person-name' value={newName} onChange={changeName} />
        </div>
        <div>
          number: <input id='new-person-number' value={newNumber} onChange={changeNumber} />
        </div>
        <div>
          <button type='submit'>add</button>
        </div>
      </form>
    </div>
  );
};

export default PersonForm;
