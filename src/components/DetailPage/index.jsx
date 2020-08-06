import React, { Component } from 'react';

import gql from 'graphql-tag';
import { Query, graphql } from 'react-apollo';
import { Link } from 'react-router-dom';
import './DetailPage.scss';

const query = gql`
  query Movie($id: ID!) {
    details(movieId: $id) {
      title
      poster_path
      overview
      release_date
      vote_average
      adult
      vote_count
      popularity
      video
    }
  }
`;

class DetailPage extends Component {
  constructor() {
    super();
    this.state = {
      video: null,
    };
  }
  render() {
    const id = this.props.match.params.id;
    return (
      <Query query={query} variables={{ id }}>
        {({ loading, err, data }) => {
          if (loading) return <div>loading</div>;
          return (
            <div>
              <Link id='home_btn' to='/'>
                Home
              </Link>
              <header
                className='header-detail'
                style={{
                  backgroundImage: 'url(' + data.details.poster_path + ')',
                }}
              ></header>
              <article className='wrapper'>
                <h2 className='description'>{data.details.title}</h2>
                <p className='description'>{data.details.overview}</p>
                <div className='sidebar'>
                  <img
                    src={data.details.poster_path}
                    className='cover_image'
                    alt=''
                  />
                  <ul>
                    <li>
                      <strong>Released:</strong>
                      {data.details.release_date}
                    </li>
                    <li>
                      <strong>Rated:</strong> {data.details.vote_average}
                    </li>
                    <li>
                      <strong>Vote count:</strong> {data.details.vote_count}
                    </li>
                    <li>
                      <strong>Popularity:</strong> {data.details.popularity}
                    </li>
                  </ul>
                </div>
              </article>
            </div>
          );
        }}
      </Query>
    );
  }
}

export default graphql(query)(DetailPage);
