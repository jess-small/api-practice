/**
 * Fetches delivery information for a user from the backend
 * @param userId - User ID
 * @returns {Promise<DeliveryInfo | undefined>} - Delivery information
 * @throws {Error}
 * @throws {string}
 */

import { DeliveryInfo } from '@/types';

async function fetchDeliveryInformation(
  userId: string,
): Promise<DeliveryInfo | undefined> {
  try {
    const response = await fetch(
      `http://localhost:3001/comms/your-next-delivery/${userId}`,
    );
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const deliveryInfo = await response.json();
    return deliveryInfo;
  } catch (error) {
    if (error instanceof Error) {
      error = error.message;
    } else {
      error = String(error);
    }
  }
}

export { fetchDeliveryInformation };
