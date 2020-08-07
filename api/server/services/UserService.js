import db from '../src/models/index.js';

class UserService {
  static async getAllUsers() {
    try {
      return await db.User.findAll();
    } catch (error) {
      throw error;
    }
  }

  static async addUser(newUser) {
    try {
      return await db.User.create(newUser);
    } catch (error) {
      throw error;
    }
  }

  static async updateUser(id, updateUser) {
    try {
      const userToUpdate = await db.User.findOne({
        where: { id: Number(id) },
      });

      if (userToUpdate) {
        await db.User.update(updateUser, { where: { id: Number(id) } });
        return updateUser;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }

  static async deleteUser(id) {
    try {
      const userToDelete = await db.User.findOne({ where: { id: Number(id) } });

      if (userToDelete) {
        const deletedUser = await db.User.destroy({
          where: { id: Number(id) },
        });
        return deletedUser;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }
}

export default UserService;
