import { useState } from "react";
import Icon from './at.svg?react';

const NicknameInput = ({ icon = '@'}) => {
  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      {icon && (
        <span
          style={{
            position: 'absolute',
            left: '10px',
            top: '50%',
            transform: 'translateY(-50%)',
            height: '16px',
            display: 'flex',
            alignItems: 'center',
            pointerEvents: 'none',          
          }}
        >
          {icon}
        </span>
      )}
      <input
        type="text"
        placeholder='Ник'
        style={{
          paddingLeft: icon ? '30px' : '12px',
          height: '20px',
          boxSizing: 'border-box',
          width: '100%',
        }}
      />
    </div>
  );
};

function Signup({ onSubmit }) {
  const [inputs, setInputs] = useState({});
  const [gender, setGender] = useState('');

  const handleChange = (event) => {
    setInputs(prevstate => ({
      ...prevstate, [event.target.name]: event.target.value
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(inputs);
  }

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  return (
    <>
      <form
        onChange={handleChange}
        onSubmit={handleSubmit}
      >
        <input type="name" placeholder="Имя" name="name"></input>
        <input type="name" placeholder="Ник" name="nickname" ></input>
        <NicknameInput
          type="name"
          placeholder="Ник"
          name="name"
          icon={<img src={Icon}></img>}
        />
        <div>Пол
          <label>
            <input
              type="radio"
              value="male"
              checked={gender === 'male'}
              onChange={handleGenderChange}
            />
            <span></span>
            Мужской
          </label>

          <label>
            <input
              type="radio"
              value="female"
              checked={gender === 'female'}
              onChange={handleGenderChange}
            />
            <span></span>
            Женский
          </label>
        </div>
        <input type="password" placeholder="Пароль" name="password"></input>
        <input type="password" placeholder="Повторить пароль" name="password2"></input>
        <button type="submit">Войти</button>
      </form>
    </>
  )
}

export default Signup