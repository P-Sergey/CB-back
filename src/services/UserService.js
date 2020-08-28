import db from '../models/index';

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
      const userExists = await db.User.findOne({
        where: { email: newUser.email },
      });
      if (userExists) {
        throw new Error('User already registered');
      }
      return await db.User.create(newUser);
    } catch (error) {
      throw error;
    }
  }

  static async signInUser(signInData) {
    try {
      const userToSignIn = await db.User.findOne({
        where: { email: signInData.email },
      });

      if (userToSignIn) {
        return userToSignIn;
      }
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
