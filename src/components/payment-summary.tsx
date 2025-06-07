import calculateMonthlyPayment from '@/utils/calculate-monthly-payment';

export default function PaymentSummary({ amount }: { amount: number }) {
  const monthlyPayment = calculateMonthlyPayment(amount);

  return (
    <div className='bg-[#F8F7F7] rounded-[10px] py-4 px-[18px] flex flex-col gap-6'>
      {/* header */}
      <div className='flex flex-col gap-0.5'>
        <h2 className='text-xl font-semibold leading-tight'>Payment Summary</h2>
        <p className='text-base text-[#61737F] font-regular leading-tight'>
          Review your payment details before submitting.
        </p>
      </div>

      {/* summary details */}
      <div className='flex items-center justify-between gap-6'>
        {/* lhs */}
        <div className='flex-1 flex flex-col items-start gap-3.5'>
          <div className='flex flex-col gap-0.5'>
            <p className='text-sm text-[#61737F] font-regular leading-tight'>
              Interest rate
            </p>
            <p className='text-lg font-semibold text-foreground leading-tight'>
              5%
            </p>
          </div>
          <div className='flex flex-col gap-0.5'>
            <p className='text-sm text-[#61737F] font-regular leading-tight'>
              Payback period
            </p>
            <p className='text-lg font-semibold text-foreground leading-tight'>
              12 months
            </p>
          </div>
        </div>

        <div className='h-20 border-l border-dashed border-[#ECE9E9] [border-dash-array:6_6]'></div>

        {/* rhs */}
        <div className='flex-1'>
          <div>
            <p className='text-sm text-[#61737F] font-regular leading-tight'>
              Monthly re-payment
            </p>
            <p className='text-3xl lg:text-4xl font-semibold text-foreground leading-tight'>
              €{monthlyPayment}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
