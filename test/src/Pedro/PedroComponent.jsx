import React, {useEffect, useState} from 'react';

export const PedroComponent = () => {
  const [htmlContent, setHtmlContent] = useState('');

  useEffect(() => {
    fetch('pedro.html')
    .then(response => response.text())
    .then(data => {
      setHtmlContent(data);
    });
  }, []);
  return <div dangerouslySetInnerHTML={{__html: htmlContent}}/>;

}
export default PedroComponent;