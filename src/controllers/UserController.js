import UserService from '../services/UserService.js';
import Util from '../utils/Utils.js';
import bcrypt, { hash } from 'bcrypt';

const saltRounds = 10;

const util = new Util();

class UserController {
  static async getAllUsers(req, res) {
    try {
      const allUsers = await UserService.getAllUsers();

      if (allUsers.length > 0) {
        res.status(200).send(allUsers);
      } else {
        res.status(200).send(['No user found']);
      }

      return util.send(res);
    } catch (error) {
      util.setError(400, 'Can not connect to database');
      return util.send(res);
    }
  }

  static async addUser(req, res) {
    if (!req.body.name || !req.body.email || !req.body.password) {
      util.setError(400, 'Please provide complete details');
      return util.send(res);
    }

    bcrypt.hash(req.body.password, saltRounds, async (err, hash) => {
      if (err) {
        console.error(err);
        return;
      }
      const newUser = {
        name: req.body.name,
        email: req.body.email,
        password: hash,
      };
      try {
        const createdUser = await UserService.addUser(newUser);
        util.setSuccess(201, 'User Added!', createdUser);

        return util.send(res);
      } catch (error) {
        util.setError(400, error.message);
        return util.send(res);
      }
    });
  }

  static async signInUser(req, res) {
    if (!req.body.email || !req.body.password) {
      util.setError(400, 'Please provide complete details');
      return util.send(res);
    }
    const signInData = req.body;
    try {
      const userToSignIn = await UserService.signInUser(signInData);
      bcrypt.compare(req.body.password, userToSignIn.password, function (
        err,
        result
      ) {
        if (err) {
          console.error(err);
          return;
        }
        console.log(result);
      });
    } catch (error) {
      util.setError(400, error.message);
      return util.send(res);
    }
  }

  static async updatedUser(req, res) {
    const alteredUser = req.body;
    const { id } = req.params;
    if (!Number(id)) {
      util.setError(400, 'Please input a valid numeric value');
      return util.send(res);
    }
    try {
      const updateUser = await UserService.updateUser(id, alteredUser);
      if (!updateUser) {
        util.setError(404, `Cannot find user with the id: ${id}`);
      } else {
        util.setSuccess(200, 'User updated', updateUser);
      }
      return util.send(res);
    } catch (error) {
      util.setError(404, error);
      return util.send(res);
    }
  }

  static async deleteUser(req, res) {
    const { id } = req.params;

    if (!Number(id)) {
      util.setError(400, 'Please provide a numeric value');
      return util.send(res);
    }

    try {
      const userToDelete = await UserService.deleteUser(id);

      if (userToDelete) {
        util.setSuccess(200, 'User deleted');
      } else {
        util.setError(404, `User with the id ${id} cannot be found`);
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }
}

export default UserController;
