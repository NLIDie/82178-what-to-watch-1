import * as React from 'react';
import { create } from 'react-test-renderer';

// Components
import { VideoPlayer } from './video-player';

describe('Components/VideoPlayer', () => {
  it('Correct renderer the component', () => {
    const tree = create(
      <VideoPlayer
        muted
        poster="img/poster"
        src="video/src"
        onMouseOut={jest.fn()}
        onMouseOver={jest.fn()}
      />
    );

    expect(tree).toMatchSnapshot();
  })
})
