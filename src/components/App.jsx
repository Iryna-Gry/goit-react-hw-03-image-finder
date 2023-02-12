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
    totalPages: null,
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
          totalPages: Math.ceil(response.data.totalHits / 12),
          status: 'completed',
        }));
      } catch (error) {
        this.setState({ error });
      }
    }
  }
  handleSearchSubmit = keyword => {
    if (keyword === '') {
      alert('Searchfield is empty. Please, specify your search request.');
      return;
    } else {
      const params = {
        page: 1,
        q: keyword,
        per_page: 12,
      };
      this.setState({ images: [], params: params });
    }
  };
  handleButtonLoadMore = () => {
    this.setState(prevState => ({
      params: {
        ...prevState.params,
        page: prevState.params.page + 1,
      },
    }));
  };
  render() {
    const {
      status,
      images,
      error,
      totalPages,
      params: { page },
    } = this.state;

    return (
      <div className={css.App}>
        <Container>
          <Searchbar onFormSubmit={this.handleSearchSubmit}></Searchbar>
          {error && <p>Something went wrong. Please, refresh the page</p>}
          {images.length > 0 ? (
            <ImageGallery data={images}></ImageGallery>
          ) : null}
          {status === 'pending' ? <Loader></Loader> : null}
          {status === 'completed' && totalPages !== page ? (
            <Button onButtonClick={this.handleButtonLoadMore}></Button>
          ) : null}
        </Container>
      </div>
    );
  }
}
