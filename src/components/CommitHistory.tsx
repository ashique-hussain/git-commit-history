import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import CommitCard from "./views/CommitCard";

const CommitHistory = () => {
  const [commit, setCommit] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.github.com/repos/ashique-hussain/git-commit-history/commits`
    )
      .then(async (response: any) => {
        const commitHistory = await response.json();
        setCommit(commitHistory);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Container>
      <Typography component="h2" variant="h4">
        Commit History
      </Typography>
      {commit.map(({ commit, sha }) => (
        <CommitCard key={sha} commit={commit} />
      ))}
    </Container>
  );
};

export default CommitHistory;
