import axios from "axios";

class UsersDataService {
  public async getAllUsers() {
    try {
      return await axios.get(`${process.env.REACT_APP_BASE_URL}/users`);
    } catch (err) {
      throw err;
    }
  }

  public async getUserPosts(id: string) {
    try {
      return await axios.get(
        `${process.env.REACT_APP_BASE_URL}/users/${id}/posts`
      );
    } catch (err) {
      throw err;
    }
  }

  public async getUserAlbums(id: string) {
    try {
      return await axios.get(
        `${process.env.REACT_APP_BASE_URL}/users/${id}/albums`
      );
    } catch (err) {
      throw err;
    }
  }
}

const usersDataService = new UsersDataService();

export { usersDataService };
