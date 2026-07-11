import React from "react";
import { useForm } from "react-hook-form";

const Form = () => {
  let {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  //   console.log(data);

  return (
    <div className="bg-black p-4 flex flex-col gap-2 ">
      <h1 className="text-center font-semibold">Create User</h1>
      <form className="flex flex-col w-90 gap-3">
        <input
          {...register()}
          className="p-2 border border-white rounded"
          type="name"
          placeholder="Name"
        />
        <input
          className="p-2 border border-white rounded"
          type="email"
          placeholder="Email"
        />
        <input
          className="p-2 border border-white rounded"
          type="number"
          placeholder="Mobile"
        />
        <input
          className="p-2 border border-white rounded"
          type="url"
          placeholder="Image URL"
        />
        <button className="bg-sky-700 p-2 rounded cursor-pointer">
          Add User
        </button>
      </form>
    </div>
  );
};

export default Form;
