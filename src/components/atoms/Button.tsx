type Props = {
  children: string;
};

export default function Button(props: Props) {
  const { children } = props;
  return (
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      {children}
    </button>
  );
}
