import User from '../models/User.js';
import { StatusCodes } from 'http-status-codes';

import { BadRequestError } from '../errors/index.js';

const register = async (req, res, next) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password)
    throw new BadRequestError('Please provide all values');

  const userAlreadyExists = await User.findOne({ email });
  if (userAlreadyExists) throw new BadRequestError('Email already exists');

  const user = await User.create({ name, email, password });
  const token = user.createJWT();
  res.status(StatusCodes.CREATED).json({
    user: {
      name: user.name,
      email: user.email,
      lastName: user.lastName,
      location: user.location,
    },
    token,
  });
};

const login = async (req, res) => {
  res.send('login user');
};

const updateUser = async (req, res) => {
  res.send('updateUser');
};

export { register, login, updateUser };
