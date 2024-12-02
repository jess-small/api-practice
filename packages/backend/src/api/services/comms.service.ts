import {
  Injectable,
  NotFoundException,
  InternalServerErrorException,
} from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';
import { Cat, Customer } from 'src/types';

@Injectable()
export class CommsService {
  private readonly dataFilePath = path.join(__dirname, '../../../data.json');

  async getNextDelivery(userId: string) {
    try {
      const data = await this.readDataFile();
      const user = data.find((user) => user.id === userId);

      if (!user) {
        throw new NotFoundException(`User with ID ${userId} not found`);
      }

      // Filter active cats and extract their names
      const activeCats = user.cats.filter((cat) => cat.subscriptionActive);
      if (activeCats.length === 0) {
        throw new Error(`No active cats found for user with ID ${userId}`);
      }

      const catNames = activeCats.map((cat) => cat.name);
      const formattedCatNames = this.formatCatNames(catNames);

      // Calculate the total price and determine if the user is eligible for a free gift
      const totalPrice = this.calculateTotalPrice(user.cats);
      const freeGift = totalPrice > 120;

      return {
        title: `Your next delivery for ${formattedCatNames}`,
        message: `Hey ${user.firstName}! In two days' time, we'll be charging you for your next order for ${formattedCatNames}'s fresh food.`,
        totalPrice,
        freeGift,
      };
    } catch (error) {
      console.error('Error fetching next delivery details:', error);
      throw new InternalServerErrorException(
        'Failed to retrieve user data for next delivery',
        error instanceof Error ? error.stack : undefined,
      );
    }
  }

  private readDataFile(): Promise<Customer[]> {
    return new Promise((resolve, reject) => {
      fs.readFile(this.dataFilePath, 'utf8', (err, data) => {
        if (err) {
          return reject(
            new InternalServerErrorException('Failed to read data file'),
          );
        }
        try {
          resolve(JSON.parse(data));
        } catch (parseError) {
          reject(new InternalServerErrorException('Failed to parse data file'));
        }
      });
    });
  }

  private formatCatNames(catNames: string[]): string {
    if (catNames.length === 1) {
      return catNames[0];
    }
    const lastCatName = catNames.pop();
    return `${catNames.join(', ')} and ${lastCatName}`;
  }

  private calculateTotalPrice(cats: Cat[]): number {
    const pouchPrices = {
      A: 55.5,
      B: 59.5,
      C: 62.75,
      D: 66.0,
      E: 69.0,
      F: 71.25,
    };
    return cats.reduce((total, cat: Cat) => {
      if (cat.subscriptionActive) {
        return (
          total + (pouchPrices[cat.pouchSize as keyof typeof pouchPrices] || 0)
        );
      }
      return total;
    }, 0);
  }
}
