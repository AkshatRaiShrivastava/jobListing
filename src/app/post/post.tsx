import { Button } from "@/components/ui/button";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { log } from "console";
import { SetStateAction, useState } from "react";
import { useForm } from "react-hook-form";

export default function Post() {
  // const [inputValue, setInputValue] = useState("");

  const [formData, setFormData] = useState({
    profile: "",
    desc: "",
    exp: "",
    techs: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value, // Dynamically update the field based on the input's name
    }));
  };

  // const handleSubmit = async (e: { preventDefault: () => void }) => {
  //   e.preventDefault();

  //   // Convert techs string into an array
  //   const payload = {
  //     ...formData,
  //     techs: formData.techs.split(",").map((tech) => tech.trim()),
  //   };

  //   try {
  //     const response = await axios.post("http://localhost:8080/post", payload, {
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     });
  //     console.log("Response Data:", response.data);
  //     alert("Data submitted successfully!");
  //   } catch (error) {
  //     console.error("Error posting data:", error);
  //     alert("Failed to submit data.");
  //   }
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Convert techs string into an array
    const payload = {
      ...formData,
      techs: formData.techs.split(",").map((tech) => tech.trim()),
    };

    try {
      const response = await axios.post(`http://localhost:8080/post`, payload, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log("Response Data:", response.data);
      alert("Data submitted successfully!");
    } catch (error) {
      console.error("Error posting data:", error);
      alert("Failed to submit data.");
    }
  };
  return (
    <main className="items-center flex flex-col w-3/4 mt-20">
      <form onSubmit={handleSubmit} className="w-2/3 items-center">
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            value={formData.profile}
            onChange={handleChange}
            name="profile"
            id="floating_email"
            className="block py-2.5 px-0 w-full text-sm text-neutral-300 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="floating_email"
            className="peer-focus:font-medium absolute text-sm text-neutral-100 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-neutral-500 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Job Profile
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            value={formData.desc}
            onChange={handleChange}
            name="desc"
            id="floating_password"
            className="block py-2.5 px-0 w-full text-sm text-neutral-300 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="floating_password"
            className="peer-focus:font-medium absolute text-sm text-neutral-100 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-neutral-500 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Description
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="number"
            value={formData.exp}
            onChange={handleChange}
            name="exp"
            id="floating_repeat_password"
            className="block py-2.5 px-0 w-full text-sm text-neutral-300 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="floating_repeat_password"
            className="peer-focus:font-medium absolute text-sm text-neutral-100 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-neutral-500 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Experience in years
          </label>
        </div>

        <div className="relative flex flex-row justify-between items-center gap-2 z-0  mb-5 group">
          <div className="flex-[7]">
            <input
              type="text"
              name="techs"
              id="floating_repeat_password"
              className="block py-2.5 px-0 w-full text-sm text-neutral-300 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=""
              // value={inputValue}
              value={formData.techs}
              onChange={handleChange}
              required
            />
            <label
              htmlFor="floating_repeat_password"
              className="peer-focus:font-medium absolute text-sm text-neutral-100 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-neutral-500 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Technologies required (separate skills by comma)
            </label>
          </div>
          {/* <Button  className="flex-[1]">Add skills</Button> */}
        </div>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </main>
  );
}
