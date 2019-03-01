

export default class RandomUserService {

  _apiBase = 'https://randomuser.me/api';

  async getResource(url) {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, received ${res.status}`)
    }
    return await res.json();
  }

  async getAllPeople() {
    console.log('333333333');
    const res = await this.getResource(`/?results=12`);
    return res.results.map(this._transformUser);
  }

  _transformUser(user) {
    return {
      id: user.id,
      picture: user.picture,
      name: user.name,
      login: user.login,
      phone: user.phone,
      location: user.location
     }
    }
    
}

/*const randomuser = new RandomUserService();

randomuser.getAllPeople().then((body) => {
  console.log(body);
});*/


