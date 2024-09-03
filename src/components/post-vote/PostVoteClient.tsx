"use client";

import { useCustomToasts } from "@/hooks/use-custom-toasts";
import { VoteType } from "@prisma/client";
import { FC, useEffect, useState } from "react";
import { usePrevious } from "@mantine/hooks";
import { Button } from "../ui/Button";
import { ArrowBigDown, ArrowBigUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { useMutation } from "@tanstack/react-query";
import { PostVoteRequest } from "@/lib/validators/vote";
import axios from "axios";

interface PostVoteClientProps {
  postId: string;
  initialVoteAmt: number;
  initialVote?: VoteType | null;
}

const PostVoteClient: FC<PostVoteClientProps> = ({
  postId,
  initialVoteAmt,
  initialVote,
}) => {
  const { loginToast } = useCustomToasts();
  const [votesAmt, setVoteAmt] = useState<number>(initialVoteAmt);
  const [currentVote, setCurrentVote] = useState(initialVote);
  const preVote = usePrevious(currentVote);

  useEffect(() => {
    setCurrentVote(initialVote);
  }, [initialVote]);

  const { mutate: vote } = useMutation({
    mutationFn: async (voteType: VoteType) => {
      const payload: PostVoteRequest = {
        postId,
        voteType,
      };
      await axios.patch("/api/subreddit/post/vote", payload);
    },
  });

  return (
    <div className="flex sm:flex-col gap-4 sm:gap-0 pr-6 sm-w-20 pb-4 sm:pb-0">
      <Button
        onClick={() => vote("UP")}
        size="sm"
        variant="ghost"
        aria-label="upvote"
      >
        <ArrowBigUp
          className={cn("h-5 w-5 text-zinc-700", {
            "text-emerald-500 fill-emerald-500": currentVote === "UP",
          })}
        ></ArrowBigUp>
      </Button>
      <p className="text-center py-2 font-medium text-sm text-zinc-900">
        {votesAmt}
      </p>
      <Button
        onClick={() => vote("DOWN")}
        size="sm"
        variant="ghost"
        aria-label="downvote"
      >
        <ArrowBigDown
          className={cn("h-5 w-5 text-zinc-700", {
            "text-red-500 fill-emerald-500": currentVote === "DOWN",
          })}
        ></ArrowBigDown>
      </Button>
    </div>
  );
};

export default PostVoteClient;
