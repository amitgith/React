import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Form = ({ setUsers, setToggle, users }) => {
  // console.log(users);

  let {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });
  //   console.log(data);
  // console.log("errors--", errors);

  const formSubmit = (data) => {
    console.log(data);
    let arr = [...users, data];
    setUsers(arr);
    localStorage.setItem("users", JSON.stringify(arr));
    reset();
    setToggle((prev) => !prev);
  };

  return (
    <div className="bg-black p-4 flex flex-col gap-2 ">
      <h1 className="text-center font-semibold">Create User</h1>
      <form
        onSubmit={handleSubmit(formSubmit)}
        className="flex flex-col w-90 gap-3"
      >
        <input
          {...register("name", {
            required: "Name is required",
            pattern: {
              value: /^\S+$/,
              message: "Blank spaces not allowed",
            },
          })}
          className="p-2 border border-white rounded"
          type="name"
          placeholder="Name"
        />
        {errors.name && <p className="text-red-700">{errors.name.message}</p>}

        <input
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "Enter valid email",
            },
          })}
          className="p-2 border border-white rounded"
          type="email"
          placeholder="Email"
        />
        {errors.email && <p className="text-red-700">{errors.email.message}</p>}
        <input
          {...register("mobile", {
            required: "Mobile is required",
            minLength: {
              value: 10,
              message: "Minimum 10 digit required",
            },
            maxLength: {
              value: 10,
              message: "Maxmium 10 digit required",
            },
          })}
          className="p-2 border border-white rounded"
          type="number"
          placeholder="Mobile"
        />
        {errors.mobile && (
          <p className="text-red-700">{errors.mobile.message}</p>
        )}
        <input
          {...register("image", { required: "Image is required" })}
          className="p-2 border border-white rounded"
          type="url"
          placeholder="Image URL"
        />
        {errors.image && <p className="text-red-700">{errors.image.message}</p>}

        <button className="bg-sky-700 p-2 rounded cursor-pointer">
          Add User
        </button>
      </form>
    </div>
  );
};

export default Form;
