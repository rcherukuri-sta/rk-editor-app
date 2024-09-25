import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import Container from './Container';

function App() {
  const [data, setData] = useState([]);

  const add = () => {
    console.log(data);
    setData([...data, "Text content"]);
  }

  const remove = () => {
    console.log(data);

    setData(data.slice(0, data.length - 1));
  }
  return (
    <>
      <div style={{ margin: '10px' }}>
        <p>This is a test site for ckeditor</p>
        <div style={{ margin: '10px' }}>
          <Button style={{ margin: '10px' }} onClick={() => add()}>Add</Button>
          <Button style={{ margin: '10px' }} onClick={() => remove()}>Remove</Button>
          <hr />
        </div>
        <Container data={data}></Container>
      </div>
    </>
  );
}

export default App;