import React from 'react';
import DocItem from '@theme-original/DocItem'; 
import FeedbackComponent from '../../components/Feedback';

export default function CustomDocItem(props) {
  return (
    <>
      <DocItem {...props} />
      <FeedbackComponent />
    </>
  );
}
