"use client";

import { useCustomToasts } from "@/hooks/use-custom-toasts";
import { VoteType } from "@prisma/client";
import { FC, useState } from "react";
import { usePrevious } from "@mantine/hooks";

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

  return <></>;
};

export default PostVoteClient;
