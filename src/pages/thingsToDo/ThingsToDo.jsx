import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import Navbar from '../../components/navbar/Navbar';
import SearchResultPage from '../../components/searchResult/SearchResaultPage';
import LoadingComponent from '../../components/LoadingComponent/LoadingComponent';
import InnerSearchComponent from '../../components/innerSearchComponent/InnerSearchComponent';
import { useSelector } from 'react-redux';
import { Axios } from '../../axios';

const ThingsToDo = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const queryName = params.get('queryName');
  const [filteredToDos, setFilteredToDos] = useState([]);
  const category = 'ThingsToDo';
  const innerSearchState = useSelector(
    state => state.innerSearch.initialSearchState
  );
  const cities = ['cairo', 'rome', 'lebanon', 'greece', 'dubai'];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await Axios(category, queryName);
        setFilteredToDos(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    setFilteredToDos(innerSearchState);
  }, [innerSearchState]);

  return (
    <div className="matched-hotels-component">
      <Navbar />
      <InnerSearchComponent categoryValue={queryName} category={category} />
      <div
        className="w-100"
        style={{ backgroundColor: '#F2F2F2', padding: '1px' }}
      >
        <div className="matched-hotel-section-container">
          <div className="matched-hotel-section bg-white">
            <div className="d-flex justify-content-between align-items-center matchedHeaders">
              <h5 className="fw-bolder my-0">
                {cities.includes(queryName)
                  ? `Hotels in ${queryName}`
                  : `Hotel: "${queryName}"`}
              </h5>
              <small>Is Travellia missing a place?</small>
            </div>
            {filteredToDos.length > 0 ? (
              filteredToDos.map((todo, index) => (
                <SearchResultPage
                  key={index}
                  categoryId={todo.id}
                  category={category}
                  name={todo.name}
                  rating={todo.rating}
                  reviews={todo.reviews}
                  money={todo.money}
                  image={todo.images[0]}
                  tours={todo.tours}
                  rank={todo.about}
                />
              ))
            ) : (
              <LoadingComponent />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThingsToDo;
