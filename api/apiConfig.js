const apiConfig = {
    baseUrl: '/3/movie/11',
    apikey: '79c40e61e2e0398f72eadfe7d610ab8b',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500${imgPath}`
}

export default apiConfig;