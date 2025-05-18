import { useState } from "react";
import css from "./App.module.css";
import type { Votes, VoteType } from "../../types/votes";
import CafeInfo from "../CafeInfo/CafeInfo";
import VoteOptions from "../VoteOptions/VoteOptions";
import VoteStats from "../VoteStats/VoteStats";

export default function App() {
  const [votes, setVotes] = useState<Votes>({ good: 0, neutral: 0, bad: 0 });
  const [canReset, setCanReset] = useState(true);
  const handleVote = (type: VoteType) => {
    setVotes({ ...votes, [type]: votes[type] + 1 });
  };
  const resetVotes = () => {
    setVotes({ good: 0, neutral: 0, bad: 0 });
  };
  const showReset = () => setCanReset(!canReset);

  return (
    <div className={css.app}>
      <CafeInfo />
      <VoteOptions
        onVote={handleVote}
        onReset={resetVotes}
        canReset={showReset}
      />
      <VoteStats votes={votes} totalVotes={0} positiveRate={0} />
    </div>
  );
}
