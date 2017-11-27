fetch(
  'https://list.screenlife.com/recordings/getpart/e8029385-a4f9-1fd8-f6d3-3aa4b21073b3/e8029385-a4f9-1fd8-f6d3-3aa4b21073b3-0-1.json'
).then(async res => {
  const json = await res.json();
  document.body.innerHTML = json._keyframe.html;
  setTimeout(() => {
    setInterval(() => {
      document.scrollingElement.scrollTop += 10;
    }, 20);  
  }, 20000);
});