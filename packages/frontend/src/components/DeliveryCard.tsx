import { DeliveryInfo } from '@/types';

interface DeliveryCardProps {
  deliveryInfo: DeliveryInfo;
  image?: string | undefined;
}

const DeliveryCard = ({ deliveryInfo, image }: DeliveryCardProps) => {
  if (!deliveryInfo) {
    return null;
  }
  return (
    <div className="relative">
      {deliveryInfo.freeGift && (
        <div className="text-[13px] absolute -bottom-2 right-1/2 md:-top-2 md:right-10 transform translate-x-1/2 -rotate-6 md:rotate-12 bg-katkinPink font-bold py-1 px-4 max-h-fit text-katkinDarkPink">
          FREE GIFT
        </div>
      )}
      <div className="bg-white shadow-md rounded-lg overflow-hidden  flex-col md:flex-row flex border border-lightGrey md:max-h-fit md:max-w-[752px] py-10 md:py-0">
        {image && (
          <img
            src={image}
            alt="Random cat"
            width={340}
            height={224}
            className="md:min-w-[340px] md:min-h-[224px] object-cover rounded-full md:rounded-lg w-14 h-14 -top-8 right-1/2 md:static absolute transform translate-x-1/2 md:translate-x-0"
          />
        )}
        <div className="md:px-6 md:text-left flex flex-col justify-center px-4 text-center">
          <h1 className="text-primary mb-4 text-base font-bold">
            {deliveryInfo.title}
          </h1>
          <p className="text-secondary mb-4 text-xs font-thin">
            {deliveryInfo.message}
          </p>
          <p className="text-secondary font-bold mb-4 text-[13px]">
            Total price: £{deliveryInfo.totalPrice.toFixed(2)}
          </p>
          <div className="flex flex-row w-full gap-4 text-base">
            <button className="bg-primary hover:bg-green-600 w-full px-4 py-2 text-xs font-bold text-white transition-colors duration-300 rounded">
              SEE DETAILS
            </button>
            <button className="border-primary text-primary hover:bg-green-200 w-full px-4 py-2 text-xs font-bold transition-colors duration-300 border rounded">
              EDIT DELIVERY
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryCard;
