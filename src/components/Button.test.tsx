import React from 'react';
import {act, create} from 'react-test-renderer';
import Button from './Button';

describe('Button Component', () => {
  const mockedParams = {
    testID: 'buttonTestId',
    style: {},
    title: 'buttonTitle',
  };
  jest.useFakeTimers();
  const tree = create(<Button {...mockedParams} />);

  test('Button component render without crash.', () => {
    const res = tree.root.children;
    expect(res).toBeTruthy();
  });
  test('Button component render with testId buttonTestId without crash.', () => {
    const button = tree.root.findByProps({
      testID: 'buttonTestId',
    }).props;
    expect(button.testID).toBe('buttonTestId');
  });
});
