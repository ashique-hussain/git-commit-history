import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

interface IProps {}

const CommitCard = (props: IProps) => {
  return (
    <Card elevation={2}>
      <CardContent>
        <Typography variant="h5" component="div">
          Commit message
        </Typography>
        <Typography variant="body2" sx={{ pt: 0.5 }}>
          July 21, 01:12PM by Ashique Ansari
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CommitCard;
