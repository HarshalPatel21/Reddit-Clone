"use client";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useState } from "react";
import axios from "axios";
import { CreateSubredditPayload } from "@/lib/validators/subreddit";

const Page = () => {
  const [input, setInput] = useState<string>("");
  const router = useRouter();

  const { mutate: createcommunity, isLoading } = useMutation({
    mutationFn: async () => {
      const payload: CreateSubredditPayload = {
        name: input,
      };
      const { data } = await axios.post("/api/subreddit", payload);
      return data as string;
    },
  });
  return (
    <div className="container flex items-centre h-full max-w-3xl mx-auto">
      <div className="relative bg-white w-full h-fit p-4 rounded-lg space y-6">
        <div className="flex-justify-between itms-center">
          <h1 className="text-x1 font-semibold">Create a community</h1>
        </div>

        <hr className="bg-zinc-500 h-px" />

        <div>
          <p className="text-lg font-medium">Name</p>
          <p className="text-xs pb-2">
            comunity name including captialization can not be changed.x
          </p>
          <div className="relative">
            <p className="absolute text-sm left-0 w-8 inset-y-0 grid place-item-centre text-zinc-400">
              r/
            </p>
          </div>
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="p1-6"
          ></Input>
        </div>
        <div className="flex justify-end gap-4">
          <Button variant="subtle" onClick={() => router.back()}>
            Cancel
          </Button>
          <Button
            isLoading={isLoading}
            disabled={input.length === 0}
            onClick={() => createcommunity()}
          >
            Create a Community
          </Button>
        </div>
      </div>
    </div>
  );
};
export default Page;
