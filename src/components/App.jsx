import { Component } from 'react';

import { fetch } from '../utils/fetch';

import AuthorTitle from './AuthorTitle';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import ImageGalleryItem from './ImageGalleryItem';
import Loader from './Loader';
import Button from './Button';
import Modal from './Modal';
import Message from './Message';

export class App extends Component {
  state = {
    photos: [],
    query: null,
    page: 1,
    pages: null,
    status: 'idle', // idle, resolved, rejected
    loading: false,
    modal: false,
    large: null,
  };

  onSubmit = async event => {
    event.preventDefault();

    const { page } = this.state;
    const query = event.target.elements.input.value;

    if (query.trim() === '') {
      alert('Type your query!');
      return;
    }

    this.setState({
      photos: [],
      loading: true,
      status: 'idle',
    });

    const data = await fetch(query, page);

    if (data.pictures.length !== 0) {
      this.setState({
        photos: data.pictures,
        pages: data.pages,
        status: 'resolved',
        page: 1,
        query,
        loading: false,
      });
    }

    if (data.pictures.length === 0) {
      this.setState({
        status: 'rejected',
        loading: false,
      });
    }
  };

  onLoadMore = async () => {
    this.setState({
      loading: true,
    });

    const { query, page } = this.state;

    const nextPage = page + 1;

    const data = await fetch(query, nextPage);

    this.setState(prevState => ({
      photos: [...prevState.photos, ...data.pictures],
      page: nextPage,
      loading: false,
    }));
  };

  modalHandler = event => {
    this.setState({ modal: true });

    const { photos } = this.state;
    const id = event.target.name;
    const { large } = photos.find(photo => photo.id === +id);

    this.setState({ large });
  };

  closeModal = event => {
    if (event.target === event.currentTarget) {
      this.setState({ modal: false });
    }
  };

  closeModalByEsc = () => {
    this.setState({ modal: false });
  };

  render() {
    const { photos, status, modal, page, pages, loading, large } = this.state;
    const { onSubmit, onLoadMore, modalHandler, closeModal, closeModalByEsc } =
      this;

    return (
      <>
        <AuthorTitle title="React-HW03_02 @nickgric" />

        <Searchbar onSubmit={onSubmit} />

        {status === 'resolved' && (
          <ImageGallery>
            {photos.map(({ small, id }) => {
              return (
                <ImageGalleryItem
                  modalHandler={modalHandler}
                  photo={small}
                  key={id}
                  id={id}
                />
              );
            })}
          </ImageGallery>
        )}
        {status === 'resolved' && page < pages && (
          <Button title="Load more" onClick={onLoadMore} />
        )}

        {loading && <Loader />}

        {status === 'rejected' && <Message message="Nothing found" />}

        {modal && (
          <Modal
            closeModal={closeModal}
            closeModalByEsc={closeModalByEsc}
            large={large}
          />
        )}
      </>
    );
  }
}
