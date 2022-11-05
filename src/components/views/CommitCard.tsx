import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

interface IProps {
  commit: { [key: string]: any };
}

const CommitCard = (props: IProps) => {
  const {
    author: { name, date },
    message,
    url,
  } = props.commit;
  const dateTime = new Date(date);
  const commitDateTime = dateTime.toLocaleString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
    timeZoneName: "short",
  });
  return (
    <Card elevation={2} sx={{ my: 1.5 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {message}
        </Typography>
        <Typography variant="body2" sx={{ pt: 0.5 }}>
          {commitDateTime} by {name}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CommitCard;
