import Button from './Button/Button';
import ImageGallery from './ImageGallery/ImageGallery';

import Loader from './Loader/Loader';

import Searchbar from './Searchbar/Searchbar';
import { Container } from './Container/Container.styled';
import { Component } from 'react';
import css from './App.module.css';
import fetchAPI from 'services/fetchAPI';

export class App extends Component {
  state = {
    images: [],
    status: 'idle',
    error: null,
    params: {
      page: null,
      q: '',
      per_page: 12,
    },
  };
  async componentDidUpdate(_, prevState) {
    if (
      prevState.params.page !== this.state.params.page ||
      prevState.params.q !== this.state.params.q
    ) {
      this.setState({ status: 'pending' });
      try {
        const response = await fetchAPI(this.state.params);
        this.setState(prevState => ({
          images: [...prevState.images, ...response.data.hits],
          status: 'completed',
        }));
      } catch (error) {
        this.setState({ error });
      }
    }
  }

  handleSearchSubmit = async ({ keyword }) => {
    const params = {
      page: 1,
      q: keyword.trim(),
      per_page: 12,
    };
    this.setState({
      params: params,
    });
  };
  handleButtonLoadMore = async () => {
    this.setState(prevState => ({
      params: {
        ...prevState.params,
        page: prevState.params.page + 1,
      },
    }));
  };
  render() {
    const { status, images, error, showModal } = this.state;

    return (
      <div className={css.App}>
        <Container>
          <Searchbar onFormSubmit={this.handleSearchSubmit}></Searchbar>
          {error && <p>Something went wrong. Please, refresh the page</p>}
          {images.length > 0 ? (
            <ImageGallery
              data={images}
              onImageClick={this.onToggleModal}
            ></ImageGallery>
          ) : null}
          {status === 'pending' ? <Loader></Loader> : null}
          {status === 'completed' ? (
            <Button onButtonClick={this.handleButtonLoadMore}></Button>
          ) : null}
        </Container>
      </div>
    );
  }
}
