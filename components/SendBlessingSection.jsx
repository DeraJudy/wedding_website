"use client"
import { Heart, Gift, Building, Coffee } from 'lucide-react';

const SendBlessingSection = () => {
  return (
    <section id="gift" className="py-24 bg-linear-to-b from-white to-[#F3F7F2]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <Gift className="h-12 w-12 text-[gold] mx-auto mb-6" />
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-700 mb-6">
            Gift Registry
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto font-modern">
            Your presence is our greatest gift! But if you'd like to bless our new journey, here's how you can.
          </p>
        </div>

        {/* Bank Account Details (Double) */}
        {/* Bank Account Details (Double) */}
        <div
          className="grid md:grid-cols-2 gap-6 mb-10 animate-fade-in"
          style={{ animationDelay: '0.2s' }}
        >

          {/* Bride's Account */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-elegant p-8">
            <h4 className="font-elegant text-lg font-semibold text-gray-700 mb-4">
              Bride’s Account
            </h4>

            <div className="space-y-4">
              <div className="bg-[#9CAF88] rounded-xl p-5">
                <p className="font-modern text-sm text-gray-500 mb-1">
                  Account Name
                </p>
                <p className="font-semibold text-white text-lg">
                  Chidera Judith Ulu
                </p>
              </div>

              <div className="flex justify-between items-center bg-secondary/50 rounded-xl p-4">
                <div>
                  <p className="font-modern text-sm text-gray-500 mb-1">
                    Bank
                  </p>
                  <p className="font-semibold text-gray-700">
                    Opay
                  </p>
                </div>

                <div className="text-right">
                  <p className="font-modern text-sm text-gray-500 mb-1">
                    Account Number
                  </p>
                  <p className="font-semibold text-[gold] text-lg">
                    8105521646
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Groom's Account */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-elegant p-8">
            <h4 className="font-elegant text-lg font-semibold text-gray-700 mb-4">
              Groom’s Account
            </h4>

            <div className="space-y-4">
              <div className="bg-[#9CAF88] rounded-xl p-5">
                <p className="font-modern text-sm text-gray-500 mb-1">
                  Account Name
                </p>
                <p className="font-semibold text-white text-lg">
                  Chigoziem Andrew Iheanacho
                </p>
              </div>

              <div className="flex justify-between items-center bg-secondary/50 rounded-xl p-4">
                <div>
                  <p className="font-modern text-sm text-gray-500 mb-1">
                    Bank
                  </p>
                  <p className="font-semibold text-gray-700">
                   Opay
                  </p>
                </div>

                <div className="text-right">
                  <p className="font-modern text-sm text-gray-500 mb-1">
                    Account Number
                  </p>
                  <p className="font-semibold text-[gold] text-lg">
                    8067593064
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>


       {/* Wedding Gift (Paystack) */}
<div
  className="animate-fade-in bg-white rounded-3xl border border-gray-200 shadow-soft hover:shadow-lg transition-all"
  style={{ animationDelay: '0.4s' }}
>
  <div className="p-8 text-center">
    {/* Icon */}
    <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[gold]/15">
      <Heart className="h-7 w-7 text-[gold]" fill="currentColor" />
    </div>

    {/* Title */}
    <h4 className="font-elegant text-2xl font-semibold text-black mb-2">
      Send a Wedding Gift
    </h4>

    {/* Description */}
    <p className="text-gray-600 font-modern mb-6 max-w-xs mx-auto">
      If you’d like to bless us as we begin this beautiful journey together,
      we would be truly grateful.
    </p>

    {/* Button */}
    <button
      onClick={() =>
        // window.open('https://paystack.shop/pay/gs883ek7jy', '_blank')
         window.open('https://paystack.shop/pay/wnqzq-7y-u', '_blank')
      }
      className="inline-flex items-center gap-2 rounded-full bg-[gold] px-8 py-3 text-gray-800 font-medium transition hover:bg-[gold]/90 hover:scale-[1.02]"
    >
      <Heart className="h-5 w-5" fill="currentColor" />
      Send a Gift
    </button>

    {/* Subtext */}
    <p className="mt-4 text-xs text-gray-500">
      Secure payment • Local & international cards accepted
    </p>
  </div>
</div>


      </div>
    </section>
  );
};

export default SendBlessingSection;
