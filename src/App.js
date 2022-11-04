import { useEffect, useState } from 'react';
import Select from './components/Select.jsx';
import { mathGen } from './untils/scripts.js';
import Button from './components/Button.jsx';
import ListActiveSquares from './components/ListActiveSquares.jsx';
import FieldSquare from './components/FieldSquare.jsx';

function App() {
  const [selectMode, setSelectMode] = useState(0);
  const [stateMode, setStateMode] = useState(null);
  const [variantGames, setVariantGames] = useState([]);
  const [listField, setListField] = useState([]);

  useEffect(() => {
    fetch('https://demo7919674.mockable.io/')
      .then((request) => request.json())
      .then((result) => {
        setVariantGames(result);
      });
  }, []);

  useEffect(() => {
    setListField(Array(stateMode ** 2).fill(false));
  }, [stateMode]);

  const onStart = () => {
    setStateMode(selectMode);
  };
  const onGenerateGame = () => {
    setListField((listField) => [...listField.map(() => mathGen())]);
  };

  const onHoverChange = (index) => {
    setListField((listField) => {
      const array = [...listField];
      array[index] = !array[index];

      return array;
    });
  };

  return (
    <div className="app">
      <div className="interface">
        <div className="interface__top">
          <Select
            list={variantGames}
            onSelect={setSelectMode}
            state={selectMode}
            placeholder="Pick mode"
          />
          <Button onClick={onStart} text="START" />
          <Button onClick={onGenerateGame} text="GAME" />
        </div>
        {!!stateMode && (
          <FieldSquare listField={listField} stateMode={stateMode} onHoverChange={onHoverChange} />
        )}
      </div>
      <ListActiveSquares listField={listField} stateMode={stateMode} />
    </div>
  );
}

export default App;
