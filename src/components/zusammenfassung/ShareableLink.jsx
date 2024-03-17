import React from 'react';

const ShareableLink = ({url}) => {
    const copyToClipboard = () => {
        navigator.clipboard.writeText(url)
          .then(() => alert('URL copied to clipboard!'))
          .catch(err => console.error('Could not copy URL: ', err));
      };
  return (
    <div style={{ marginTop: '20px' }}>
      <p>Ihr Link zum Teilen: <a href={url} target="_blank" rel="noopener noreferrer">{url}</a></p>
      <button onClick={copyToClipboard} style={{ cursor: 'pointer' }}>Copy URL</button>
    </div>
  )
}

export default ShareableLink