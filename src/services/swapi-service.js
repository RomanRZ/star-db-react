export default class SwapiService {
  _apiBase = `https://swapi.co/api`;

  async getResource(url) {
    let response = await fetch(`${this._apiBase}${url}`);
    if (!response.ok) {
      throw new Error("Wrong request..");
    }
    let body = await response.json();
    return body;
  }

  async getAllPeople() {
    const res = await this.getResource(`/people/`);
    return res.results;
  }

  getPerson(id) {
    return this.getResource(`/people/${id}/`);
  }

  async getAllStarships() {
    let starships = await this.getResource(`/starships/`);
    return starships.results;
  }

  getStarship(id) {
    return this.getResource(`/starships/${id}/`);
  }
}
