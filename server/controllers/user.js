import { UserModel } from '../models/User.js';
import { customAlphabet } from 'nanoid';
import bcrypt from 'bcrypt';

//GET ALL USER
export const getUsers = async (req, res) => {
  try {
    const users = await UserModel.find();
    res.status(200).json({ message: 'Амжилттай', body: users });
  } catch (error) {
    console.log(error);
  }
};

//GET AN USER BY ID
export const getSingleUser = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await UserModel.findById(id);

    res.status(200).json({ message: 'Амжилттай', body: user });
  } catch (error) {
    console.log(error);
  }
};

//SIGN UP NEW USER
export const signUp = async (req, res) => {
  const {
    firstName,
    lastName,
    phone,
    email,
    password: rawPassword,
    role,
    address,
  } = req.body;

  try {
    const isPhoneExist = await UserModel.findOne({ phone });
    if (isPhoneExist)
      return res.status(400).json(`${phone} дугаар бүртгэлтэй байна.`);

    const isEmailExist = await UserModel.findOne({ email });
    if (isEmailExist)
      return res.status(400).json(`${email} хаяг бүртгэлтэй байна.`);

    const hashedPassword = await bcrypt.hash(rawPassword, 10);
    const nanoid = customAlphabet('1234567890', 5);

    const newUser = await UserModel.create({
      userId: nanoid(),
      firstName,
      lastName,
      phone,
      email,
      password: hashedPassword,
      address,
      role,
    });

    res.status(201).json({ message: 'Амжилттай бүртгэгдлээ.', body: newUser });
  } catch (error) {
    console.log(error);
  }
};

export const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await UserModel.findById(id);
    await user.deleteOne();
    res.status(201).json({ message: 'Амжилттай устлаа', id });
  } catch (error) {
    console.log(error);
  }
};

// export const updateUser = async (req, res) => {
//     const { id } = req.params;

//     }

//     try {

//     } catch (error) {

//     }
