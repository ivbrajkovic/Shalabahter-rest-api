/**
 * Post
 */

import { h } from 'preact';
import { useState, useEffect, useRef } from 'preact/hooks';

// Components
import Textarea from '../Textarea';

// Button styles
const btn = 'px-4 py-3 text-gray-100 duration-200 cursor-pointer';

// Dummy data
const dummy = () => ({ id: '', pitanje: '', odgovori: [] });

const Post = ({ data, admin, insertOdgovor, updateOdgovor, deleteOdgovor }) => {
  const firstRunRef = useRef(true);
  const [state, setState] = useState(data || dummy());

  // Refresh DOM on new data
  useEffect(() => {
    if (!firstRunRef.current) setState(data);
    else firstRunRef.current = false;
  }, [data]);

  const inputPitanje = e => {
    const value = e.target.value;
    setState(data => {
      const tmp = { ...data };
      tmp.pitanje = value;
      return tmp;
    });
  };

  const inputOdgovori = e => {
    const value = e.target.value;
    const index = e.target.getAttribute('data-key');
    setState(data => {
      const tmp = { ...data };
      tmp.odgovori[index] = value;
      return tmp;
    });
  };

  const plusClick = e => {
    const value = e.target.value;
    setState(data => {
      const tmp = { ...data };
      tmp.odgovori.push(value);
      return tmp;
    });
  };

  const minusClick = e => {
    const index = e.target.getAttribute('data-key');
    setState(data => {
      const temp = { ...data };
      temp.odgovori.splice(index, 1);
      return temp;
    });
  };

  const insertClick = () => {
    insertOdgovor(state);
    setState(dummy());
    // ({ id: 'empty', pitanje: 'empty', odgovori: ['emty'] });
  };
  const updateClick = () => updateOdgovor(state);
  const deleteClick = () => deleteOdgovor(state.id);

  const adminClass = admin ? 'pl-2 border' : 'resize-none';

  return (
    <div className='flex flex-col p-4 bg-white shadow-md sm:shadow-lg'>
      {/* Header */}
      <div className='flex pb-1 mb-3 border-b'>
        <div className='inline-block text-lg leading-8'>{`${state.id}.`}</div>
        &nbsp;
        <input
          type='text'
          readonly={!admin}
          className={`flex-1 inline-block h-8 text-lg ${adminClass}`}
          value={state.pitanje}
          onInput={inputPitanje}
          placeholder='Unesite pitanje...'
        />
      </div>

      {/* Body */}
      <div className={`flex-1 ${admin ? 'border-b mb-4' : ''}`}>
        {state.odgovori.map((el, index) => (
          <div key={index} className='flex'>
            {admin && (
              <div
                data-key={index}
                className='inline-block w-8 h-8 p-1 mr-2 text-center rounded-full cursor-pointer lin hover:bg-gray-200'
                onClick={minusClick}
              >
                &#8722;
              </div>
            )}
            <Textarea
              data-key={index}
              readonly={!admin}
              className={`min-h-full flex-1 mb-2 leading-tight ${adminClass}`}
              value={el}
              onInput={inputOdgovori}
              placeholder='Unesite odgovor...'
            />
          </div>
        ))}

        {admin && (
          <div
            className='inline-block w-8 h-8 p-1 text-center rounded-full cursor-pointer lin hover:bg-gray-200'
            onClick={plusClick}
          >
            &#43;
          </div>
        )}
      </div>

      {/* Footer */}
      {admin &&
        ((insertOdgovor && (
          <div className='ml-auto '>
            <button
              className={`${btn} bg-red-500 hover:bg-teal-600`}
              onClick={insertClick}
            >
              Add
            </button>
          </div>
        )) || (
          <div className='ml-auto '>
            <button
              className={`${btn} bg-red-500 hover:bg-red-600`}
              onClick={deleteClick}
            >
              Delete
            </button>
            <button
              className={`${btn} ml-4 bg-teal-500 hover:bg-teal-600`}
              onClick={updateClick}
            >
              Update
            </button>
          </div>
        ))}
    </div>
  );
};

export default Post;
