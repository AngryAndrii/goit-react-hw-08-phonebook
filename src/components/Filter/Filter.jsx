import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  const changeFilter = event => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <>
      <input
        type="text"
        placeholder="search in phonebook"
        onChange={changeFilter}
      />
    </>
  );
};
