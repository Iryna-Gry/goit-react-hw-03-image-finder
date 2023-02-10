import Button from './Button/Button';
import ImageGallery from './ImageGallery/ImageGallery';

import Loader from './Loader/Loader';
import Modal from './Modal/Modal';
import Searchbar from './Searchbar/Searchbar';
import { Container } from './Container/Container.styled';
import { Component } from 'react';
import css from './App.module.css';
import fetchAPI from 'services/fetchAPI';

export class App extends Component {
  state = {
    images: [],
    status: 'idle',
    error: {},
  };
  handleSearchSubmit = async ({ keyword }) => {
    console.log(keyword);
    const params = {
      page: 1,
      q: keyword.trim(),
      per_page: 12,
    };
    this.setState({ status: 'pending' });
    try {
      const response = await fetchAPI(params);
      this.setState({ images: response.data.hits, status: 'completed' });
    } catch (error) {
      this.setState({ error });
    }
  };
  async componentDidUpdate() {}
  render() {
    const { status, images } = this.state;
    return (
      <div className={css.App}>
        <Container>
          <Searchbar onFormSubmit={this.handleSearchSubmit}></Searchbar>
          {images.length > 0 ? (
            <ImageGallery data={images}></ImageGallery>
          ) : null}
          {status === 'pending' ? <Loader></Loader> : null}
          {status === 'completed' ? <Button></Button> : null}
        </Container>
      </div>
    );
  }
}
