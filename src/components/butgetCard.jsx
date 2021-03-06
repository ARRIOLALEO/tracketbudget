import { Card, ProgressBar, Stack, Button } from "react-bootstrap";
import { currencyFormat } from "../utils/utilis.js";
const ButgetCard = (props) => {
  const { name, amount, max, gray, modalExpense, modalDescription } = props;

  const className = [];
  if (parseInt(amount) > parseInt(max)) {
    console.log("im here");
    className.push("bg-danger", "bg-opacity-10");
  } else if (gray) {
    className.push("bg-light");
  }
  return (
    <Card className={className.join(" ")}>
      <Card.Body>
        <Card.Title className="d-flex justify-content-between align-items-baseline fw-normal mb-3">
          <div className="me-2">{name}</div>
          <div className="d-flex align-items-baseline">
            {currencyFormat.format(amount)}
            {max && <span className="text-muted fs-6 ms-1">/ {currencyFormat.format(max)}</span>}
          </div>
        </Card.Title>
        {max && (
          <ProgressBar
            className="rounded-pill"
            variant={getProgressBarVariant(amount, max)}
            min={0}
            max={max}
            now={amount}
          />
        )}
        <Stack direction="horizontal" gap="2" className="mt-4">
          <Button
            variant="outline-primary"
            className="ms-auto"
            onClick={() => {
              modalExpense();
            }}
          >
            Add Expense
          </Button>
          <Button
            variant="outline-secondary"
            onClick={() => {
              modalDescription();
            }}
          >
            View Expenses
          </Button>
        </Stack>
      </Card.Body>
    </Card>
  );
};

function getProgressBarVariant(amount, max) {
  const ratio = amount / max;
  if (ratio < 0.5) return "primary";
  if (ratio < 0.75) return "warning";
  return "danger";
}
export default ButgetCard;
