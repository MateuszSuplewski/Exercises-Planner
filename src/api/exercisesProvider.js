class ExercisesAPI {
  constructor (API_URL, API_KEY) {
    this.API_URL = API_URL
    this.API_KEY = API_KEY
  }

    getExercises = async () => {
      return await this._fetch('/exercises')
    };

    _fetch = async (additionalPath = '') => {
      const fullUrl = this.API_URL + additionalPath

      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': this.API_KEY,
          'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
        }
      }

      const response = await fetch(fullUrl, options)
      const data = await response.json()
      if (data.message) throw data.message

      return data
    };
}

export default ExercisesAPI
