import React from 'react';
import {act, create} from 'react-test-renderer';
import Button from './Button';

describe('ListHeader Component', () => {
  const mockedParams = {
    testID: 'ListHeaderTestId',
    style: {},
    title: 'ListHeaderTitle',
  };
  jest.useFakeTimers();
  const tree = create(<Button {...mockedParams} />);

  test('ListHeader component render without crash.', () => {
    const res = tree.root.children;
    expect(res).toBeTruthy();
  });
  test('ListHeader component render with testId ListHeaderTestId without crash.', () => {
    const button = tree.root.findByProps({
      testID: 'ListHeaderTestId',
    }).props;
    expect(button.testID).toBe('ListHeaderTestId');
  });
});
