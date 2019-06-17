import * as React from 'react';
import { create } from 'react-test-renderer';

// Components
import { FilmsGenresNavList } from './films-genres-nav-list';

describe('Components/MovieGenresNavList', () => {
  it('Correct renderer the component', () => {
    const tree = create(
      <FilmsGenresNavList genres={['All genres', 'Crime']} onChange={jest.fn()} />
    );

    expect(tree).toMatchSnapshot();
  })
})
