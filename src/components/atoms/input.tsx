type Props = {
  type: string;
  nameProp: string;
  id: string;
  placeholder: string;
};

export default function Input(props: Props) {
  const { type, nameProp, id, placeholder } = props;
  return (
    <input
      type={type}
      name={nameProp}
      id={id}
      className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      placeholder={placeholder}
    />
  );
}
