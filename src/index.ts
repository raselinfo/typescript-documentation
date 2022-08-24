type Employee = {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
};

const newEmployee: Employee = {
  id: 50,
  name: "Rasel",
  retire: (date) => date,
};
