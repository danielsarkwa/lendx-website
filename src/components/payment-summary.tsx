import calculateMonthlyPayment from '@/util/calculate-monthly-payment';

export default function PaymentSummary({ amount }: { amount: number }) {
  const monthlyPayment = calculateMonthlyPayment(amount);

  return (
    <div>
      {/* header */}
      <div>
        <h2>Payment Summary</h2>
        <p>Review your payment details before submitting.</p>
      </div>

      {/* summary details */}
      <div>
        {/* lhs */}
        <div>
          <div>
            <p>Interest rate</p>
            <p>5%</p>
          </div>
          <div>
            <p>Payback period</p>
            <p>12 months</p>
          </div>
        </div>

        <div className='border-b border-dashed border-[#ECE9E9] [border-dash-array:6_6] min-h-[134px] w-[1px]'></div>

        {/* rhs */}
        <div>
          <div>
            <p>Monthly re-payment</p>
            <p>€{monthlyPayment}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
