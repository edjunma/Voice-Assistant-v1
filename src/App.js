import React, {useEffect } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';

const alanKey = '';

const App = () => {

  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command }) => {
        if(command === 'testCommand') {
          alert('This code was executed');
        }
      }
    })
  }, [])

  return (
    <div>
      <h1>Alan AI News Application</h1>
    </div>)
}