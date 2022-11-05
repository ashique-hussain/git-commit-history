import { useEffect, useState } from "react";
import CommitCard from "./views/CommitCard";

const CommitHistory = () => {
  const [commit, setCommit] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.github.com/repos/ashique-hussain/git-commit-history/commits`
    )
      .then((res: { [key: string]: any }) => {
        setCommit(res.data);
      })
      .catch((error) => {});
  }, []);

  return (
    <div>
      {JSON.stringify(commit)}
      <CommitCard />
    </div>
  );
};

export default CommitHistory;
