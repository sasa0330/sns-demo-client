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
export default function Example() {
  return (
    <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div>
        <label
          htmlFor="price"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Email
        </label>
        <div className="relative mt-2 rounded-md shadow-sm">
          <input
            type="text"
            name="price"
            id="price"
            className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="login@example.com"
          />
        </div>
      </div>
    </div>
  );
}
