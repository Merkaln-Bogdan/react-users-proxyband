import axios from "axios";

class UsersDataService {
  public async getAllUsers() {
    try {
      return await axios.get(`${process.env.REACT_APP_BASE_URL}/users`);
    } catch (err) {
      throw err;
    }
  }
}

const usersDataService = new UsersDataService();

export { usersDataService };
