/**
 * Home page
 */

// Preact
import { h } from 'preact';
import { useEffect, useState, useContext, useRef, useMemo } from 'preact/hooks';

// Reducer actions
import { errorAction } from '../../containers/App/actions';

// Dispatcher
import { Dispatcher } from '../../containers/App';

// Components
import SearchInput from '../../components/SearchInput';
import Post from '../../components/Post';

// Setings
import settings from '../../settings/settings.json';

import filter from '../../lib/filterFncNew';

// Get data from service fnc
import {
  getAllPostsApi,
  insertPostApi,
  updatePostApi,
  deletePostApi
} from '../../lib/fetchApi';

/**
 * Filter data array of object by given value
 * @param {*} data Data to filter
 * @param {*} value Value to filter by
 */
// const filterData = (data, value) => {
//   // If value is empty retrn data
//   if (!value) return data;
//   if (!data.length > 0) return data;

//   // Create regex object, case insensitive
//   const regex = new RegExp(value, 'i');

//   //  Filter data object array
//   return data.filter(d => {
//     const { pitanje, odgovori } = d;
//     if (regex.test(pitanje)) return true;

//     for (let i = 0; i < odgovori.length; i++)
//       if (regex.test(odgovori[i])) return true;

//     return false;
//   });
// };

const Home = ({ admin }) => {
  // console.log('Home -> component');

  const firstRunRef = useRef(true);
  const dispatch = useContext(Dispatcher);
  const [state, setState] = useState([]);
  // const [input, setInput] = useState('');

  // const memoizedData = useMemo(() => filterData(state, input), [state, input]);

  useEffect(() => {
    !admin && state.length > 0 && filter({ DEBUG: false });
  }, [state]);

  useEffect(() => {
    (firstRunRef.current || !admin) &&
      getAllPostsApi(settings.urls.data, dispatch, data => {
        // Check if fetched data is a valid array
        if (data && Array.isArray(data) && data.length > 0) {
          setState(data);

          // const filter = async () => {
          //   await import(/* webpackChunkName: "filter" */ '../../lib/filter');
          // };
          // filter({ DEBUG: true });
        }
        // dispatch(loginAction());
      });

    firstRunRef.current && (firstRunRef.current = false);
  }, [admin]);

  // const onInput = e => {
  //   const value = e.target.value;
  //   setInput(value);
  // };

  const insertOdgovor = post => {
    insertPostApi(`${settings.urls.insert}`, post, dispatch, data => {
      if (data && data.id) {
        dispatch(errorAction(`Post with id ${data.id} created uccessfully`));

        setState(state => {
          const temp = [...state];
          temp.push({
            id: data.id,
            pitanje: post.pitanje,
            odgovori: [...post.odgovori]
          });
          return temp;
        });
      } else dispatch(errorAction(`Error creating post`));
    });
  };

  const updateOdgovor = data => {
    updatePostApi(settings.urls.update, data, dispatch, data => {
      if (data && data.id)
        dispatch(errorAction(`Post with id ${data.id} updated uccessfully`));
      else dispatch(errorAction(`Error updating post`));
    });
  };

  const deleteOdgovor = id => {
    deletePostApi(`${settings.urls.update}/${id}`, dispatch, data => {
      if (data && data.id) {
        dispatch(errorAction(`Post with id ${data.id} deleted uccessfully`));
        setState(state => {
          let temp = [...state];
          const index = temp.findIndex(el => el.id === id);
          if (index > -1) {
            temp.splice(index, 1);
            return temp;
          } else return state;
        });
      } else dispatch(errorAction(`Error deleting post`));
    });
  };

  return (
    <div className='mb-8 text-blue-700'>
      <div className='max-w-sm p-4 mx-auto mb-4 bg-white shadow-md sm:mb-8 sm:shadow-lg'>
        <SearchInput
          id='input-filter'
          // value={input}
          // onInput={onInput}
          class='w-full px-4 py-2'
          placeholder='Search for ...'
          borderClasses='bg-blue-700'
          iconClasses='mx-2 h-6 w-6'
        />
      </div>
      <div className='grid gap-4 sm:gap-8 grid-cols-posts'>
        {/* {memoizedData.map((el, index) => ( */}
        {state.map((el, index) => (
          <Post
            key={index}
            data={el}
            admin={admin}
            updateOdgovor={updateOdgovor}
            deleteOdgovor={deleteOdgovor}
          />
        ))}
        {admin && <Post admin={admin} insertOdgovor={insertOdgovor} />}
      </div>
    </div>
  );
};

export default Home;
