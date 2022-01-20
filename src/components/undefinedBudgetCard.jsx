import React from "react";
import ButgetCard from "./butgetCard.jsx";
import { useBudgets, UNCATEGORIZE_BUDGET_ID } from "../contexts/BudgetsContext.jsx";
function UndefinedBudgetCard(props) {
  const { getBudgetExpenses } = useBudgets();
  console.log(UNCATEGORIZE_BUDGET_ID);
  const amount = getBudgetExpenses(UNCATEGORIZE_BUDGET_ID).reduce(
    (acc, budget) => acc + budget.amount,
    0
  );
  console.log(amount, "im here");
  return <ButgetCard name={UNCATEGORIZE_BUDGET_ID} amount={amount} gray {...props} />;
}
export default UndefinedBudgetCard;
