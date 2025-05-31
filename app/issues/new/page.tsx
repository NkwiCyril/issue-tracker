"use client";

import { Box, Button, Flex, TextField } from "@radix-ui/themes";
import SimpleMDE from "react-simplemde-editor";
import axios from "axios";
import { useForm, Controller } from "react-hook-form";
import "easymde/dist/easymde.min.css";
import { useRouter } from "next/navigation";

interface IssueForm {
  title: string;
  description: string;
}

const NewIssuePage = () => {
  const { register, control, handleSubmit } = useForm<IssueForm>();
  const router = useRouter();
  return (
    <form
      className="max-w-xl p-5 space-y-3"
      onSubmit={handleSubmit(async (data) => {
        await axios.post("/api/issues", data); // Send the form data to the API endpoint
        router.push("/issues"); // Redirect to issues page after submission
      })}
    >
      <Box maxWidth="700px">
        <TextField.Root placeholder="Title" {...register("title")} />
      </Box>
      <Box maxWidth="700px">
        <Controller
          control={control}
          name="description"
          render={({ field }) => (
            <SimpleMDE placeholder="Description" {...field} />
          )}
        />
      </Box>
      <Box>
        <Button className="hover:cursor-pointer">Submit New Issue</Button>
      </Box>
    </form>
  );
};

export default NewIssuePage;
