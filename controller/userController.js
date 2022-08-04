const getUsers = (req, res, next) => {
  const users = [
    {
      name: "ankit",
      company: "innovate",
    },
    {
      name: "bishal",
      company: "islington",
    },
  ];
  res.status(200).json(users);
};

const postUser = (req, res, next) => {
  console.log(req.body);
  //write
  const users = [
    {
      name: "ankit",
      company: "innovate",
    },
    {
      name: "bishal",
      company: "islington",
    },
  ];
  res.status(201).json([...users, req.body]);
};

const deleteUser = (req, res, next) => {
  res.status(200).json({ message: "deleted" });
};

module.exports = {
  getUsers,
  postUser,
  deleteUser,
};
