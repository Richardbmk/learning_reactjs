import React, { useState } from 'react';
import data from './data';
import SomeQuestions from './Question';

function App () {
  const [questions, setQuestions] = useState(data);

  console.log(questions);

  return (
    <main>
      <div className='container'>
      <h3>Questions and answers about login</h3>
        <section className='info'>
          {questions.map((question) => {
            return (
              <SomeQuestions key={question.id} { ...question } />
            );
          })}
        </section>
      </div>
    </main>
  );

}

export default App;