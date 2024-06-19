const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com' },
  ];
  
  const getUsers = (req, res) => {
    res.json(users);
  };
  
  const getUserProfile = (req, res) => {
    const { id } = req.params;
    const user = users.find((u) => u.id === parseInt(id));
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(user);
  };
  
  const createUser = (req, res) => {
    const { name, email } = req.body;
    const newUser = { id: users.length + 1, name, email };
    users.push(newUser);
    res.status(201).json(newUser);
  };
  
  const updateUser = (req, res) => {
    const { id } = req.params;
    const { name, email } = req.body;
    const userIndex = users.findIndex((u) => u.id === parseInt(id));
    if (userIndex === -1) {
      return res.status(404).json({ error: 'User not found' });
    }
    users[userIndex] = { id: parseInt(id), name, email };
    res.json(users[userIndex]);
  };
  
  const deleteUser = (req, res) => {
    const { id } = req.params;
    const userIndex = users.findIndex((u) => u.id === parseInt(id));
    if (userIndex === -1) {
      return res.status(404).json({ error: 'User not found' });
    }
    const deletedUser = users.splice(userIndex, 1)[0];
    res.json(deletedUser);
  };
  
  module.exports = {
    getUsers,
    getUserProfile,
    createUser,
    updateUser,
    deleteUser,
  };