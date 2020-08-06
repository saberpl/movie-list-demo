import React, { Fragment, useState } from 'react';

import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import Pagination from '@material-ui/lab/Pagination';
import './ListPage.scss';

import Banner from '../Banner';
import Images from '../../constants/images';

const GET_MOVIES_INFO = gql`
  {
    nowPlaying {
      movies {
        id
        title
        poster_path
      }
      count
      total
      page
      totalPage
    }
  }
`;

const ListPage = () => {
  const { data, loading, error } = useQuery(GET_MOVIES_INFO);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  return (
    <Fragment>
      <Banner title='Movies List 🎉' backgroundUrl={Images.BLUE_BG} />

      <div className='container-list'>
        {data.nowPlaying.movies.map((movie, index) => (
          <div key={index} className='card'>
            <Link to={'/info/' + movie.id}>
              <img className='image' src={movie.poster_path} alt='' />
            </Link>
            <div class='card-body'>
              <p>{movie.title}</p>
            </div>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default ListPage;
