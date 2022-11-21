import React, { useState } from 'react';

let idCount = 0;

export default function InsertWord() {
const [word, setWord] = useState('');
const [wordsList, setWordsList] = useState([]);

    return (
    <div>
      <input 
        placeholder="Add word to dictionary" 
        value={word} 
        onChange={e => setWord(e.target.value)}>
      </input>
      <button onClick={() => {
        setWord('');
        setWordsList([
          ...wordsList,
          {
            id: ++idCount,
            word: word
          }
        ]);          
      }}>Add</button>
      <h3>
        Words:
      </h3>
      <ul>
        {wordsList.map(words => (
          <li 
            key={words.id}>
              {words.word}{"  "}
              <button onClick={() => {
              setWordsList(
                wordsList.filter(a =>
                  a.id !== words.id
                )
              );
            }}>
              Delete
            </button>
          </li>

        ))}
      </ul>
    </div>
  )
}
