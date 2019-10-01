

export default class RandomUserService {

  _apiBase = 'https://randomuser.me/api';

  async getResource(url) {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, received ${res.status}`)
    }
    return await res.json();
  }

   getAllPeople = async () => {
    
    const res = await this.getResource(`/?results=12`);
    console.log(res);
    return res.results.map(this._transformUser);
    
  }

  _transformUser(user) {
    return {
      /*id: user.id,
      picture: user.picture,
      name: user.name,
      login: user.login,
      phone: user.phone,
      location: user.location*/
      gender: `${user.gender}`,
      firstName: `${user.name.first}`,
      lastName: `${user.name.last}`,
      username: `${user.login.username}`,
      registered: `${user.registered.date}`,
      email: `${user.email}`,
      street: `${user.location.street}`,
      city: `${user.location.city}`,
      postcode: `${user.location.postcode}`,
      state: `${user.location.state}`,
      birthday: `${user.dob.date}`,
      phone: `${user.phone}`,
      cell: `${user.cell}`,
      pictureSmall: `${user.picture.thumbnail}`,
      pictureLarge: `${user.picture.large}`
     }
    }
    
}




