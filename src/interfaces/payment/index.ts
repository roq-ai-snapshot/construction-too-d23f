import { UserInterface } from 'interfaces/user';
import { RentalInterface } from 'interfaces/rental';
import { GetQueryInterface } from 'interfaces';

export interface PaymentInterface {
  id?: string;
  user_id: string;
  rental_id: string;
  amount: number;
  payment_method: string;
  status: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  rental?: RentalInterface;
  _count?: {};
}

export interface PaymentGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  rental_id?: string;
  payment_method?: string;
  status?: string;
}
