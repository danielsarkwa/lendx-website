export default function calculateMonthlyPayment(
  amount: number,
  interestRate: number = 0.05, // Default interest rate of 5%
  months: number = 12 // Default payback period of 12 months
): number {
  const totalInterest = amount * interestRate;
  const totalAmount = amount + totalInterest;
  const monthlyPayment = totalAmount / months;
  return Number(monthlyPayment.toFixed(2));
}
