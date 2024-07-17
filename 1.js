fetch(
  ' https://newsapi.org/v2/everything?q=Apple&language=ko&from=2024-07-12&to=2024-07-15&sortBy=popularity&apiKey=20d8cf3500954187a33e0d966b42208f'
)
  .then(function (response) {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log('에러');
  });
