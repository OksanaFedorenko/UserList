

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

  _transformUser = (user) => {
    return {
      gender: `${user.gender}`,
      firstName: `${user.name.first}`,
      lastName: `${user.name.last}`,
      username: `${user.login.username}`,
      registered: `${this._formatDate(user.registered.date)}`,
      email: `${user.email}`,
      street: `${user.location.street.name} ${user.location.street.number}`,
      city: `${user.location.city}`,
      postcode: `${user.location.postcode}`,
      state: `${user.location.state}`,
      birthday: `${this._formatDate(user.dob.date)}`,
      phone: `${user.phone}`,
      cell: `${user.cell}`,
      pictureSmall: `${user.picture.thumbnail}`,
      pictureLarge: `${user.picture.large}`
     }
    }

    _formatDate(date) {

      const fullDate = new Date(date);

      let day = fullDate.getDate();
      if (day < 10) day = '0' + day;

      let month = fullDate.getMonth() + 1;
      if (month < 10) month = '0' + month;
    
      let year = fullDate.getFullYear();
 
      return day + '/' + month + '/' + year;
    }
    
    
}




