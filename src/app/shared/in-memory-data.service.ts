/**
 * Created by lizarusi on 29.06.17.
 */
import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const products = [
      { title: 'RCA RLDED3258A 32" 720p, 60Hz- HD LED TV',
        brand: 'amazon',
        discount: 45,
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/61zK-YuzOVL._SL1232_.jpg',
        price: 23000,
        oldPrice: 45000,
        condition: 'New'
      },
      { title: 'RCA RLDED3258A 32" 360p, 60Hz- HD LED TV',
        brand: 'ebay',
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/81Z882NR-ZL._SL1500_.jpg',
        price: 23000,
        discount: 45,
        condition: 'Refurbished',
        freeShipping: true,
      },
      { title: 'RCA RLD3258A 32" 360p, 60Hz- HD LED TV',
        brand: 'ebay',
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/61Yeir0uhIL._SL1322_.jpg',
        price: 23000,
        condition: 'New',
        freeShipping: true,
      },
      { title: 'RCA RLDED3258A 32" 360p, 60Hz- HD LED TV',
        brand: 'amazon',
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/61hROP0M9YL._SL1200_.jpg',
        price: 23000,
        condition: 'New',
        freeShipping: true,
      },
      { title: 'RCA RLDED3260Hz- HD LED TV',
        brand: 'amazon',
        discount: 45,
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/61zK-YuzOVL._SL1232_.jpg',
        price: 23000,
        oldPrice: 45000,
        condition: 'New'
      }
    ];
    return {products};
  }
}
