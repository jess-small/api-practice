import DeliveryCard from '../../../components/DeliveryCard';
import { fetchDeliveryInformation } from '../../../../utils/queries';

interface WelcomePageProps {
  params: {
    userId: string;
  };
}

export default async function WelcomePage({ params }: WelcomePageProps) {
  //Have to await params else causes an error in the console
  const param = await params;
  const { userId } = param;

  let catImageUrl = '';

  const deliveryInfo = await fetchDeliveryInformation(userId);

  //Fetch random cat image
  try {
    const catResponse = await fetch(
      'https://api.thecatapi.com/v1/images/search',
    );
    if (!catResponse.ok) {
      throw new Error('Failed to fetch cat image');
    }
    const catData = await catResponse.json();
    catImageUrl = catData[0].url;
  } catch (err) {
    if (err instanceof Error) {
      err = err.message;
    } else {
      err = String(err);
    }
  }

  if (!deliveryInfo) {
    return <div>No delivery information found.</div>;
  }

  return (
    <div className="container flex items-center justify-center min-h-screen px-4 py-8 mx-auto">
      <DeliveryCard deliveryInfo={deliveryInfo} image={catImageUrl} />
    </div>
  );
}
