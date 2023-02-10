import { Component } from 'react';
import css from './Searchbar.module.css';
import { AiOutlineSearch } from 'react-icons/ai';

class Searchbar extends Component {
  state = {
    keyword: '',
  };
  handleInputChange = event => {
    const { value } = event.target;
    this.setState({ keyword: value });
  };
  handleSubmit = event => {
    event.preventDefault();

    this.props.onFormSubmit(this.state);
    this.reset();
  };
  reset = () => {
    this.setState({ keyword: '' });
  };
  render() {
    return (
      <header className={css.Searchbar}>
        <form className={css.SearchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={css.SearchFormButton}>
            <span className={css.SearchFormButtonLabel}>Search</span>
            <AiOutlineSearch size="35px" />
          </button>
          <input
            className={css.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            onChange={this.handleInputChange}
            placeholder="Search images and photos"
            value={this.state.keyword}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
