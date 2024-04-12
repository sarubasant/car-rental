import { create } from 'zustand';
let nextId = 2;
const useUserStore = create((set) => ({
  users: [
    { id: 1, email: 'user@example.com', password: 'password' },

    // Add more users here
  ],
  currentUser: null, //Store the currently logged-in user's email
  setUser: (user) =>
    set((state) => ({
      users: [...state.users, { id: nextId++, ...user }],
    })),
  setCurrentUser: (email) =>
    set(() => ({
      currentUser: email,
    }))
}));

export default useUserStore;
