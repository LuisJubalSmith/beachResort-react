import React from 'react';
import { useContext } from 'react';
import { RoomContext } from '../context';
import Title from '../components/Title';
// get all unique values
const getUnique = (items, value) => {
  return [...new Set(items.map(item => item[value]))];
};

export default function RoomsFilter({ rooms }) {
  const context = useContext(RoomContext);
  const {
    handleChange,
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    breakfast,
    pets
  } = context;

  //   getUnique tyeps
  let types = getUnique(rooms, 'type');
  // add all
  types = ['All', ...types];
  // map to jx
  types = types.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });

  let people = getUnique(rooms, 'capacity');
  people = people.map((item, index) => {
    return (
      <option key={index} value={item}>
        {item}
      </option>
    );
  });
  return (
    <section className='filter-container'>
      <Title title='search rooms' />
      <form className='filter-form'>
        {/*select type */}
        <div className='form-group'>
          <label htmlFor='type'>Room type</label>
          <select
            name='type'
            id='type'
            value={type}
            className='form-control'
            onChange={handleChange}
          >
            {types}
          </select>
        </div>
        {/*end select type */}
        {/*select Guests */}
        <div className='form-group'>
          <label htmlFor='capacity'>Guests</label>
          <select
            name='capacity'
            id='capacity'
            value={capacity}
            className='form-control'
            onChange={handleChange}
          >
            {people}
          </select>
        </div>
        {/*end select Guests */}
        {/* room price */}
        <div className='form-group'>
          <label htmlFor='price'>
            Room price ${price}
          </label>
          <input 
          type="range" 
          name="price" 
          min={minPrice} 
          max={maxPrice} 
          id="price" 
          value={price}
          onChange={handleChange}
          className="form-control" />
        </div>
        {/* end of room price */}
        {/* size */}
        <div className='form-group'>
          <label className='size'>room size</label>
            <div className='size-inputs'>
              <input className='size-input' type='number' name='minSize' id='size' value={minSize} onChange={handleChange} />
              <input className='size-input' type='number' name='maxSize' id='size' value={maxSize} onChange={handleChange} />
            </div>
          
        </div>
        {/* end of size */}
        {/*extra*/}
        <div className='form-group'>
          <div className="single-extra">
            <input type="checkbox" name='breakfast' id='breakfast' check={breakfast} onChange={handleChange} />
            <label htmlFor='breakfast'>breakfast</label>
          </div>
          <div className="single-extra">
            <input type="checkbox" name='pets' id='pets' check={pets} onChange={handleChange} />
            <label htmlFor='pets'>pets</label>
          </div>
        </div>
        {/* end of extra */}

      </form>
    </section>
  );
}
