export default function Page() {
  return (
    <div className="container mx-auto space-y-12 px-4 py-8">
      <RadioGroupExample />
      <PasswordValidationExample />
    </div>
  );
}

function RadioGroupExample() {
  const options = [
    { id: "option1", label: "Your wife" },
    { id: "option2", label: "Your children" },
    { id: "option3", label: "Cursor IDE" },
  ];

  return (
    <fieldset className="mx-auto max-w-md space-y-2 rounded-lg border border-gray-200 bg-white px-6 pt-2 pb-4 dark:border-gray-700 dark:bg-gray-800">
      <legend className="text-lg font-semibold text-gray-900 dark:text-gray-100">
        Who do you love more?
      </legend>
      {options.map((option) => (
        <div key={option.id} className="flex items-center gap-3">
          <input type="radio" id={option.id} name="example" className="peer" />
          <label
            htmlFor={option.id}
            className="text-gray-700 peer-checked:font-bold peer-checked:text-black dark:text-gray-300 dark:peer-checked:text-white"
          >
            {option.label}
          </label>
        </div>
      ))}
    </fieldset>
  );
}

function PasswordValidationExample() {
  return (
    <div className="mx-auto max-w-md">
      <input
        type="password"
        placeholder="Enter password (min 8 characters)"
        required
        minLength={8}
        className="peer w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 placeholder-gray-500 valid:border-green-500 valid:ring-green-500 invalid:border-red-500 invalid:ring-red-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 dark:placeholder-gray-400 dark:focus:border-blue-400 dark:focus:ring-blue-400"
      />
      <p className="mt-1 text-sm text-red-500 peer-valid:hidden peer-invalid:block dark:text-red-400">
        Password must be at least 8 characters long
      </p>
      <p className="mt-1 text-sm text-green-500 peer-valid:block peer-invalid:hidden dark:text-green-400">
        Password strength is good
      </p>
    </div>
  );
}
