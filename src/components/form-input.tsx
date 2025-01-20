type FormInputProps = {
  onChange: (data: string) => void;
};

const FormInput = ({ onChange }: FormInputProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    onChange(e.target.value);
  };

  return (
    <>
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        required
        onChange={handleChange}
        name="name"
        placeholder="Search for pokemon"
        className="w-full rounded-md border border-gray-200 py-[9px] indent-3 outline-2 placeholder:text-gray-300"
      />
    </>
  );
};

export default FormInput;
