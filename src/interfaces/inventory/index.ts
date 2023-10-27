import { ProductInterface } from 'interfaces/product';
import { BusinessInterface } from 'interfaces/business';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface InventoryInterface {
  id?: string;
  product_id: string;
  quantity: number;
  last_updated: any;
  business_id: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;

  product?: ProductInterface;
  business?: BusinessInterface;
  user?: UserInterface;
  _count?: {};
}

export interface InventoryGetQueryInterface extends GetQueryInterface {
  id?: string;
  product_id?: string;
  business_id?: string;
  user_id?: string;
}
