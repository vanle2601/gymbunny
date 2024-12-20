export const exerciseOptions = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': 'b710e8e0dcmsh90bbd0b6dec32acp17f635jsn09e8f31ac557',
		'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
    }
};

export const youtubeOptions = {
    method: 'GET',
    headers: {
      'x-rapidapi-host': 'youtube-search-and-download.p.rapidapi.com',
      'x-rapidapi-key': 'f0021db587msh781fb1cbef39856p11c183jsn45521d5d1c85',
    },
  };
  

export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
}


  
