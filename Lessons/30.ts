type Form = {
  age: {
    value: number;
    validator: (val: number) => boolean;
  };
  name: {
    value: string;
    validator: (val: string) => boolean;
  };
};

const form: Form = {
  age: {
    value: 41,
    validator: (value) => value < 40,
  },
  name: {
    value: 'John',
    validator: (value) => value.length > 0,
  },
};