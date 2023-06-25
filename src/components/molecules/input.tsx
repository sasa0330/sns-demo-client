/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import Input from "../atoms/input";
type Props = {
  label: string;
  type: string;
  nameProp: string;
  id: string;
  placeholder: string;
};
export default function FormInput(props: Props) {
  const { label, type, nameProp, id, placeholder } = props;
  return (
    <div className="isolate">
      <label
        htmlFor={id}
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {label}
      </label>
      <div className="relative mt-2 rounded-md shadow-sm">
        <Input
          type={type}
          nameProp={nameProp}
          id={id}
          placeholder={placeholder}
        ></Input>
      </div>
    </div>
  );
}
