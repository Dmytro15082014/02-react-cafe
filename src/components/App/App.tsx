import { useState } from "react";
import css from "./App.module.css";
import type { Votes, VoteType } from "../../types/votes";
import CafeInfo from "../CafeInfo/CafeInfo";
import VoteOptions from "../VoteOptions/VoteOptions";
import Notification from "../Notification/Notification";
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

  const total = Object.values(votes).reduce((i, vote) => i + vote, 0);
  const positive = total ? Math.round((votes.good / total) * 100) : 0;
  return (
    <div className={css.app}>
      <CafeInfo />
      <VoteOptions
        onVote={handleVote}
        onReset={resetVotes}
        canReset={showReset}
      />
      {total > 0 ? (
        <VoteStats votes={votes} totalVotes={total} positiveRate={positive} />
      ) : (
        <Notification />
      )}
    </div>
  );
}
