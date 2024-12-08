const SUBSCRIBE = "SUBSCRIBE";
const UNSUBSCRIBE = "UNSUBSCRIBE";
const SET_USERS = "SET-USERS";

let initialState = {
  users: [
    // {
    //   id: 1, 
    //   followed: false,
    //   fullName: "Sasha",
    //   photoUrl: "https://i.pinimg.com/564x/ac/00/f3/ac00f3c6e79e6cd3108b4ca3057df33d.jpg",
    //   status: "Hi, my name is Sasha",
    //   location: { city: "Minsk", country: "Belarus" },
    // },
    // {
    //   id: 2,
    //   followed: true,
    //   fullName: "Nikita",
    //   photoUrl: "https://i.pinimg.com/564x/ac/00/f3/ac00f3c6e79e6cd3108b4ca3057df33d.jpg",
    //   status: "Hi, my name is Nikita",
    //   location: { city: "Brest", country: "Belarus" },
    // },
    // {
    //   id: 3,
    //   followed: true,
    //   fullName: "Leon",
    //   photoUrl: "https://i.pinimg.com/564x/ac/00/f3/ac00f3c6e79e6cd3108b4ca3057df33d.jpg",
    //   status: "Hi, my name is Leon",
    //   location: { city: "Moscow", country: "Russia" },
    // },
    // {
    //   id: 4,
    //   followed: false,
    //   fullName: "Alexei",
    //   photoUrl: "https://i.pinimg.com/564x/ac/00/f3/ac00f3c6e79e6cd3108b4ca3057df33d.jpg",
    //   status: "Hi, my name is Alexei",
    //   location: { city: "New York", country: "USA" },
    // },
  ],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUBSCRIBE: {
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return { ...u, followed: true }
          } return u
        }),
      };
    }
    case UNSUBSCRIBE: {
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return { ...u, followed: false }
          } return u
        }),
      };
    }
    case SET_USERS: {
      return {...state, users: [ ...state.users, ...action.users ]};
    }

    default:
      return state;
  }
};

export const subscribeAC = (userId) => ({ type: SUBSCRIBE, userId });
export const unsubscribeAC = (userId) => ({ type: UNSUBSCRIBE, userId });
export const setUsersAC = (users) => ({ type: SET_USERS, users });

export default usersReducer;
