export const listUser = [
  {
    id: "1",
    name: "Nguyễn lê Đình Tiên",
    age: 26,
  },
  { id: "2", name: "Nguyễn Đình Hải", age: 57 },
  { id: "3", name: "Lê Thị Cúc", age: 56 },
  { id: "4", name: "Nguyễn Thị Hồng Vân", age: 31 },
];

export const listUser2 = [
  {
    id: "452332",
    name: "Nguyễn lê Đình Tiên",
    age: 26,
  },
  { id: "543543", name: "Nguyễn Đình Hải", age: 57 },
  { id: "5464", name: "Lê Thị Cúc", age: 56 },
  { id: "45654", name: "Nguyễn Thị Hồng Vân", age: 31 },
];

export const getApiUser = () => {
  return new Promise<any>((resolve) => {
    setTimeout(() => {
      resolve(listUser);
    }, 2000);
  });
};
